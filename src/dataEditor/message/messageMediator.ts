import { RequestArgs } from './messages'

export abstract class AbstractMediator<Base extends Record<string, any>> {
  /** Must be implemented by subclasses — every Base key must be handled. */
  abstract handle<K extends keyof Base>(
    ...args: RequestArgs<Base, K>
  ): Promise<void>

  /** Optional convenience entrypoint for base routes. */
  route<K extends keyof Base>(...args: RequestArgs<Base, K>): void {
    this.handle(...args)
  }
}
