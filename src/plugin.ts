import {definePlugin} from 'sanity'
import {I18nFieldsConfig, defaultI18nFieldsConfigUI} from './types/I18nFields'

export const I18nFields = definePlugin<I18nFieldsConfig>((config: I18nFieldsConfig) => {
  const pluginConfig = {locales: config.locales, ui: {...defaultI18nFieldsConfigUI, ...config.ui}}
  // eslint-disable-next-line no-console
  console.log(pluginConfig)
  return {
    name: 'sanity-plugin-i18n-fields',
  }
})
