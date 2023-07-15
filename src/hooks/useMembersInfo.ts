import {FieldMember, ObjectMember, TextSchemaType} from 'sanity'
import {InternalLocale} from '../types/Locale'
import {EMPTY_FORM_NODE_VALIDATION} from '../lib/conts'

interface useMembersInfoProps {
  members: ObjectMember[]
  availableLocales: InternalLocale[]
  hasGlobalError: boolean
  fieldOptions: any
  fieldType?: 'string' | 'text'
}

const useMembersInfo = ({
  members,
  availableLocales,
  hasGlobalError,
  fieldOptions,
  fieldType = 'string',
}: useMembersInfoProps): FieldMember[] => {
  return (members as FieldMember[]).map((member) => {
    const currentLocale = availableLocales.find((locale) => locale.code === member.name)
    if (currentLocale) {
      // setting field level readOnly from configuration
      member.field.readOnly = member.field.readOnly || currentLocale.isReadOnly
      // setting field options
      member.field.schemaType.options = currentLocale.options
      // if error is global, force to have the input in error
      if (hasGlobalError) member.field.validation = [EMPTY_FORM_NODE_VALIDATION]
      if (fieldType === 'text') {
        const schemaType = member.field.schemaType as TextSchemaType
        schemaType.rows = currentLocale.options?.rows || fieldOptions?.rows
      }
    }
    return member
  })
}

export default useMembersInfo
