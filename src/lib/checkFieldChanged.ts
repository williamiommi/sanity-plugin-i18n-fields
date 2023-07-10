import {FieldMember, ObjectMember} from 'sanity'
import {InternalLocale} from '../types/Locale'

const checkFieldChanged = (locale: InternalLocale, members: ObjectMember[]): InternalLocale => {
  const currentMember = (members as FieldMember[]).find((member) => member.name === locale.code)
  if (!currentMember) return locale
  return {...locale, isChanged: currentMember.field.changed}
}

export default checkFieldChanged
