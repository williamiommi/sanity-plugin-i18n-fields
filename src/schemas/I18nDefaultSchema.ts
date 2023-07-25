import {defineField, defineType} from 'sanity'
import {I18nFieldType, I18nFieldsConfig} from '../types/I18nFields'
import I18nDefaultField from '../components/I18nDefaultField'
import getSchemaName from '../lib/getSchemaName'
import {DEFAULT_PREFIX} from '../lib/constants'
import getSchemaTitle from '../lib/getSchemaTitle'

export const I18nDefaultSchema = (pluginConfig: I18nFieldsConfig, type: I18nFieldType): any =>
  defineType({
    name: getSchemaName(pluginConfig.prefix || DEFAULT_PREFIX, type),
    type: 'object',
    title: getSchemaTitle(pluginConfig.prefix || DEFAULT_PREFIX, type),
    fields: [...pluginConfig.locales.map((locale) => defineField({type, name: locale.code}))],
    components: {
      field: (props) => I18nDefaultField(props, pluginConfig, type),
    },
  })
