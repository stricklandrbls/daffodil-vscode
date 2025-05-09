export type ByteOrderMark = 'none' | 'UTF-8' | 'UTF-16LE'

export type RadixValues = 16 | 10 | 8 | 2

export type BytesPerRow = 16 | 8 | 24

export enum EditByteModes {
  Single = 'single',
  Multiple = 'multiple',
}

export enum EditActionRestrictions {
  None,
  OverwriteOnly,
}

export type DataEditSettings_t = {
  allowedEdit: EditActionRestrictions
}
let DataEditSettings = $state<DataEditSettings_t>({
  allowedEdit: EditActionRestrictions.None,
})
export const getDataEditSettings = () => DataEditSettings
export function setDataEditSettings<K extends keyof DataEditSettings_t>(
  setting: K,
  value: DataEditSettings_t[K]
) {
  DataEditSettings[setting] = value
}

export const EditActions: { [k in EditActionRestrictions]: string } = {
  [EditActionRestrictions.None]: 'Delete, Insert, and Overwrite',
  [EditActionRestrictions.OverwriteOnly]: 'Overwrite Only',
}
