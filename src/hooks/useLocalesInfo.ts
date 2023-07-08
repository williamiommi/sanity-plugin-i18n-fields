import {ConditionalProperty, ObjectMember, SanityDocument, useFormValue} from 'sanity'
import {I18nStringLocale, InternalLocale, Locale} from '../types/Locale'
import {Dispatch, SetStateAction, useMemo, useState} from 'react'
import useUserInfo from './useUserInfo'
import mergeLocaleConfiguration from '../lib/mergeLocaleConfiguration'
import validateLocaleRestrictions from '../lib/validateLocaleRestrictions'
import checkFieldError from '../lib/checkFieldError'

interface useLocalesInfoProps {
  locales: Locale[] // locales coming from plugin configuration
  members: ObjectMember[] // members of the i18n object
  hasGlobalError: boolean // globar error at object level
  fieldLocales: I18nStringLocale[] | undefined // specific nested field locales override
  fieldHidden: ConditionalProperty | undefined // specific nested field hidden ConditionalProperty
  fieldReadOnly: ConditionalProperty | undefined // specific nested field readOnly ConditionalProperty
  currentPath: string //the 'name/path' of the object
}

interface useLocalesInfoResponse {
  availableLocales: InternalLocale[]
  activeLocale: InternalLocale
  setActiveLocale: Dispatch<SetStateAction<InternalLocale>>
}

const useLocalesInfo = ({
  locales,
  members,
  hasGlobalError,
  fieldLocales,
  fieldHidden,
  fieldReadOnly,
  currentPath,
}: useLocalesInfoProps): useLocalesInfoResponse => {
  const document = useFormValue([]) as SanityDocument // get the current SanityDocument
  const fieldValue = useFormValue([currentPath]) as {[key: string]: unknown} // current field value (an object of locales)
  const {currentUser, userRoles} = useUserInfo() // get info about the current user

  // filter locales by configuration and sort, default first
  const availableLocales = useMemo(
    () =>
      locales
        // merge global config w/ field level config
        .map((locale) => mergeLocaleConfiguration(locale, fieldLocales, fieldHidden, fieldReadOnly))
        // validate restrictions by visibleFor, editableFor, readOnly and hidden attributes
        .map((locale) =>
          validateLocaleRestrictions(userRoles, locale, currentUser, fieldValue, document)
        )
        // remove all possible hidden locales after restrictions
        .filter((locale) => !locale.isHidden)
        // check for field errors level, if global error present no need to show specific error
        .map((locale) => {
          if (hasGlobalError) return locale
          return checkFieldError(locale, members)
        })
        // put at first position the default locale or the [0] if no default is present
        .sort((a, b) => Number(!!b.default) - Number(!!a.default)),
    [
      locales,
      fieldLocales,
      fieldHidden,
      fieldReadOnly,
      userRoles,
      currentUser,
      fieldValue,
      document,
      hasGlobalError,
      members,
    ]
  )

  const [activeLocale, setActiveLocale] = useState<InternalLocale>(availableLocales[0])

  return {availableLocales, activeLocale, setActiveLocale}
}

export default useLocalesInfo