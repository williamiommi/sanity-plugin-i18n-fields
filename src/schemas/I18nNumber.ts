import {defineField, defineType} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import I18nStringField from '../components/I18nStringField'

export const I18nNumber = (pluginConfig: I18nFieldsConfig): any =>
  defineType({
    name: 'i18n.number',
    type: 'object',
    title: 'I18n Number',
    fields: [
      ...pluginConfig.locales.map((locale) => defineField({type: 'number', name: locale.code})),
    ],
    components: {
      field: (props) => I18nStringField(props, pluginConfig),
    },
  })
