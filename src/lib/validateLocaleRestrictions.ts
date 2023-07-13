import {CurrentUser, FieldMember, ObjectMember, SanityDocument} from 'sanity'
import userCan from './userCan'
import validateConditionalProperty from './validateConditionalProperty'
import {InternalLocale} from '../types/Locale'

interface validateLocaleRestrictionsProps {
  userRoles: string[]
  locale: InternalLocale
  currentUser: CurrentUser | null
  fieldValue: {[key: string]: unknown}
  document: SanityDocument | undefined
  members: ObjectMember[]
}

const validateLocaleRestrictions = ({
  locale,
  userRoles,
  document,
  currentUser,
  fieldValue,
  members,
}: validateLocaleRestrictionsProps): InternalLocale => {
  const currentMember = (members as FieldMember[]).find((member) => member.name === locale.code)
  return {
    ...locale,
    isHidden:
      !userCan(userRoles, locale.visibleFor) ||
      validateConditionalProperty(locale.hidden, document, currentUser, fieldValue),
    isReadOnly:
      currentMember?.field.readOnly ||
      !userCan(userRoles, locale.editableFor) ||
      validateConditionalProperty(locale.readOnly, document, currentUser, fieldValue),
  }
}

export default validateLocaleRestrictions
