import { ByteRadix } from '../components/sections/data/ViewportDisplay'

export const addressRadix = $state({})

export type UISettings = {
  addressRadix: ByteRadix
}

const UISettingStores: UISettings = {
  addressRadix: $state(16 as ByteRadix),
}

class UISettingsController {
  private static settings = $state({} as UISettings)

  private static settingStores: UISettings = {
    addressRadix: $state(16 as ByteRadix),
  }

  public static update<Key extends keyof UISettings>(
    key: Key,
    value: UISettings[Key]
  ) {
    UISettingsController.settings[key] = value
  }
}

const _UISettingsController = new UISettingsController()

function SettingsController(): UISettingsController {
  return _UISettingsController
}
