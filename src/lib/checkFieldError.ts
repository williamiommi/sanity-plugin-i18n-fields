import {FieldMember, ObjectMember} from 'sanity'
import {InternalLocale} from '../types/Locale'

const checkFieldError = (locale: InternalLocale, members: ObjectMember[]): InternalLocale => {
  const currentMember = (members as FieldMember[]).find((member) => member.name === locale.code)
  if (!currentMember) return locale
  const hasError = !!currentMember.field.validation.find((val) => val.level === 'error')
  const hasWarning = !!currentMember.field.validation.find((val) => val.level === 'warning')
  return {...locale, hasError, hasWarning}
}

export default checkFieldError
