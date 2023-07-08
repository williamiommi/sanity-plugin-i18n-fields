import {CurrentUser, SanityDocument} from 'sanity'
import userCan from './userCan'
import validateConditionalProperty from './validateConditionalProperty'
import {InternalLocale} from '../types/Locale'

const validateLocaleRestrictions = (
  userRoles: string[],
  locale: InternalLocale,
  currentUser: CurrentUser | null,
  value: {[key: string]: unknown},
  document: SanityDocument | undefined
): InternalLocale => {
  return {
    ...locale,
    isHidden:
      !userCan(userRoles, locale.visibleFor) ||
      validateConditionalProperty(locale.hidden, document, currentUser, value),
    isReadOnly:
      !userCan(userRoles, locale.editableFor) ||
      validateConditionalProperty(locale.readOnly, document, currentUser, value),
  }
}

export default validateLocaleRestrictions
