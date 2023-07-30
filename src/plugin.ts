import {definePlugin} from 'sanity'
import {I18nFieldsConfig, defaultI18nFieldsConfigUI} from './types/I18nFields'
import {I18nDefaultSchema} from './schemas/I18nDefaultSchema'
import {DEFAULT_PREFIX} from './lib/constants'
import getSchemaName from './lib/getSchemaName'

export const I18nFields = definePlugin<I18nFieldsConfig>((config: I18nFieldsConfig) => {
  const pluginConfig = {
    prefix: config.prefix || DEFAULT_PREFIX,
    locales: config.locales,
    ui: {...defaultI18nFieldsConfigUI, ...config.ui},
  }
  return {
    name: `sanity-plugin-${getSchemaName(pluginConfig.prefix)}-fields`,
    schema: {
      types: [
        I18nDefaultSchema(pluginConfig, 'string'),
        I18nDefaultSchema(pluginConfig, 'text'),
        I18nDefaultSchema(pluginConfig, 'number'),
      ],
    },
  }
})
