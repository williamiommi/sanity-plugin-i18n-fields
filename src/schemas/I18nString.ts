import {defineField, defineType} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'

export const I18nString = (config: I18nFieldsConfig): any =>
  defineType({
    name: 'i18n.string',
    type: 'object',
    title: 'I18n String',
    fields: [...config.locales.map((locale) => defineField({type: 'string', name: locale.code}))],
  })
