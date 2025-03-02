import { writable } from 'svelte/store'
import type { AvailableHelpSections } from './Help'

export const testStore = writable(false)

export const currentHelpSectionDisplayed = writable('' as AvailableHelpSections)
export const currentHelpSectionEvent = writable({} as MouseEvent)
