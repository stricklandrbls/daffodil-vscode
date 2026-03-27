export type HighlightCategory = {
  readonly bitPos: number
  readonly name: string
}

export type HighlightUpdate = { start: number; end: number, markerId: HighlightCategory }

export type HighlightPartition = {
    start: number,
    end: number,
    types: HighlightCategory[]
    bitwiseOp: (byte: number) => number
}
export type CategoryName = string

export interface Category {
  bitPosition: number
  categoryName: CategoryName
}

export interface UpdateInput {
  startOffset: number
  endOffset: number
  category: Category | CategoryName
}

interface ResolvedUpdate {
  startOffset: number
  endOffset: number
  category: Category
}

interface Partition {
  startOffset: number
  endOffset: number
}

export class BitPartitionMaskBuffer {
  public readonly bytes: Uint8Array

  private readonly categories = new Map<CategoryName, Category>()
  private readonly activeUpdates = new Map<CategoryName, ResolvedUpdate>()

  constructor(byteLengthOrBuffer: number | Uint8Array) {
    this.bytes =
      typeof byteLengthOrBuffer === 'number'
        ? new Uint8Array(byteLengthOrBuffer)
        : byteLengthOrBuffer
  }

  registerCategory(category: Category): void {
    this.assertValidCategory(category)

    const existing = this.categories.get(category.categoryName)
    if (
      existing &&
      existing.bitPosition !== category.bitPosition
    ) {
      throw new Error(
        `Category "${category.categoryName}" is already registered with bit position ${existing.bitPosition}.`
      )
    }

    this.categories.set(category.categoryName, category)
    this.recompute()
  }

  registerCategories(categories: Category[]): void {
    for (const category of categories) {
      this.registerCategory(category)
    }
  }

  upsertUpdate(input: UpdateInput): void {
    const category = this.resolveCategory(input.category)
    const normalized = this.normalizeRange(input.startOffset, input.endOffset)

    this.activeUpdates.set(category.categoryName, {
      startOffset: normalized.startOffset,
      endOffset: normalized.endOffset,
      category,
    })

    this.recompute()
  }

  removeUpdate(category: Category | CategoryName): boolean {
    const categoryName =
      typeof category === 'string' ? category : category.categoryName

    const removed = this.activeUpdates.delete(categoryName)
    if (removed) {
      this.recompute()
    }
    return removed
  }

  clearUpdates(): void {
    if (this.activeUpdates.size === 0) return
    this.activeUpdates.clear()
    this.bytes.fill(0)
  }

  getUpdate(category: Category | CategoryName): ResolvedUpdate | undefined {
    const categoryName =
      typeof category === 'string' ? category : category.categoryName

    return this.activeUpdates.get(categoryName)
  }

  private recompute(): void {
    this.bytes.fill(0)

    const updates = [...this.activeUpdates.values()]
    if (updates.length === 0) {
      return
    }

    const partitions = this.buildPartitions(updates)

    for (const partition of partitions) {
      let mask = 0

      for (const update of updates) {
        if (
          update.startOffset <= partition.startOffset &&
          update.endOffset >= partition.endOffset
        ) {
          mask |= 1 << update.category.bitPosition
        }
      }

      if (mask === 0) continue

      this.bytes.fill(
        mask,
        partition.startOffset,
        partition.endOffset + 1
      )
    }
  }

  private buildPartitions(updates: ResolvedUpdate[]): Partition[] {
    const boundaries = new Set<number>()

    for (const update of updates) {
      boundaries.add(update.startOffset)

      const exclusiveEnd = update.endOffset + 1
      if (exclusiveEnd <= this.bytes.length) {
        boundaries.add(exclusiveEnd)
      }
    }

    const sorted = [...boundaries].sort((a, b) => a - b)
    const partitions: Partition[] = []

    for (let i = 0; i < sorted.length - 1; i++) {
      const start = sorted[i]
      const next = sorted[i + 1]
      const end = next - 1

      if (start > end) continue
      if (start < 0 || end >= this.bytes.length) continue

      const covered = updates.some(
        u => u.startOffset <= start && u.endOffset >= end
      )

      if (covered) {
        partitions.push({
          startOffset: start,
          endOffset: end,
        })
      }
    }

    return partitions
  }

  private resolveCategory(category: Category | CategoryName): Category {
    if (typeof category !== 'string') {
      this.assertValidCategory(category)

      const existing = this.categories.get(category.categoryName)
      if (
        existing &&
        existing.bitPosition !== category.bitPosition
      ) {
        throw new Error(
          `Category "${category.categoryName}" is already registered with bit position ${existing.bitPosition}, not ${category.bitPosition}.`
        )
      }

      this.categories.set(category.categoryName, category)
      return category
    }

    const resolved = this.categories.get(category)
    if (!resolved) {
      throw new Error(`Unknown category "${category}".`)
    }

    return resolved
  }

  private normalizeRange(startOffset: number, endOffset: number): Partition {
    if (!Number.isInteger(startOffset) || !Number.isInteger(endOffset)) {
      throw new Error('Offsets must be integers.')
    }

    if (startOffset < 0 || endOffset < 0) {
      throw new Error('Offsets cannot be negative.')
    }

    if (startOffset > endOffset) {
      throw new Error(
        `Invalid range: startOffset ${startOffset} is greater than endOffset ${endOffset}.`
      )
    }

    if (endOffset >= this.bytes.length) {
      throw new Error(
        `Range endOffset ${endOffset} is outside buffer length ${this.bytes.length}.`
      )
    }

    return { startOffset, endOffset }
  }

  private assertValidCategory(category: Category): void {
    if (!Number.isInteger(category.bitPosition)) {
      throw new Error('Category bitPosition must be an integer.')
    }

    if (category.bitPosition < 0 || category.bitPosition > 7) {
      throw new Error(
        `Category "${category.categoryName}" has invalid bitPosition ${category.bitPosition}. Must be in [0, 7].`
      )
    }

    if (!category.categoryName) {
      throw new Error('Category categoryName must be non-empty.')
    }
  }
}
