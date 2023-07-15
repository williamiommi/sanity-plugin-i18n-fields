import {defineField, defineType} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import I18nTextField from '../components/I18nTextField'

export const I18nText = (pluginConfig: I18nFieldsConfig): any =>
  defineType({
    name: 'i18n.text',
    type: 'object',
    title: 'I18n Text',
    fields: [
      ...pluginConfig.locales.map((locale) => defineField({type: 'text', name: locale.code})),
    ],
    components: {
      field: (props) => I18nTextField(props, pluginConfig),
    },
  })
