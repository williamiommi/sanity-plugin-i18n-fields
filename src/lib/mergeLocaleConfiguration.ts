import {ConditionalProperty} from 'sanity'
import {I18nStringLocale, InternalLocale, Locale} from '../types/Locale'

const mergeLocaleConfiguration = (
  locale: Locale,
  fieldLocales: I18nStringLocale[] | undefined,
  fieldHidden: ConditionalProperty | undefined,
  fieldReadOnly: ConditionalProperty | undefined
): InternalLocale => {
  // if no extra configuration, return locale
  if (!fieldLocales && !fieldHidden && !fieldReadOnly) return locale
  let fieldLocale
  // find the fieldLocale with the same code
  if (fieldLocales) fieldLocale = fieldLocales.find((curr) => curr.code === locale.code)
  return {
    code: locale.code,
    label: locale.label,
    title: locale.title,
    default: locale.default,
    options: fieldLocale?.options,
    hidden: fieldHidden || fieldLocale?.hidden || undefined,
    readOnly: fieldReadOnly || fieldLocale?.readOnly || undefined,
    visibleFor: [...(locale.visibleFor || []), ...(fieldLocale?.visibleFor || [])],
    editableFor: [...(locale.editableFor || []), ...(fieldLocale?.editableFor || [])],
  }
}

export default mergeLocaleConfiguration
