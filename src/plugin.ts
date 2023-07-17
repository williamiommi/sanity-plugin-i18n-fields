import {definePlugin} from 'sanity'
import {I18nFieldsConfig, defaultI18nFieldsConfigUI} from './types/I18nFields'
import {I18nString} from './schemas/I18nString'
import {I18nText} from './schemas/I18nText'
import {I18nNumber} from './schemas/I18nNumber'

export const I18nFields = definePlugin<I18nFieldsConfig>((config: I18nFieldsConfig) => {
  const pluginConfig = {locales: config.locales, ui: {...defaultI18nFieldsConfigUI, ...config.ui}}
  return {
    name: 'sanity-plugin-i18n-fields',
    schema: {
      types: [I18nString(pluginConfig), I18nText(pluginConfig), I18nNumber(pluginConfig)],
    },
  }
})
