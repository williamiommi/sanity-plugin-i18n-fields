import {defineField, defineType} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import I18nStringField from '../components/I18nStringField'

export const I18nString = (pluginConfig: I18nFieldsConfig): any =>
  defineType({
    name: 'i18n.string',
    type: 'object',
    title: 'I18n String',
    fields: [
      ...pluginConfig.locales.map((locale) => defineField({type: 'string', name: locale.code})),
    ],
    components: {
      field: (props) => I18nStringField(props, pluginConfig),
    },
  })
