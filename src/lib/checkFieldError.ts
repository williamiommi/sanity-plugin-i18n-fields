import {FieldMember, ObjectMember} from 'sanity'
import {InternalLocale} from '../types/Locale'

const checkFieldError = (locale: InternalLocale, members: ObjectMember[]): InternalLocale => {
  const currentMember = (members as FieldMember[]).find((member) => member.name === locale.code)
  if (!currentMember) return locale
  return {...locale, hasError: currentMember?.field.validation.length > 0 || false}
}

export default checkFieldError
