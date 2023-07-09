import {FieldMember, TextSchemaType} from 'sanity'
import {useMemo} from 'react'
import {EMPTY_FORM_NODE_VALIDATION} from '../lib/conts'
import {InternalLocale} from '../types/Locale'

const useMemberInfo = (
  fieldType: 'string' | 'text',
  members: FieldMember[],
  hasGlobalError: boolean,
  activeLocale: InternalLocale | undefined
): FieldMember | undefined => {
  const currentMember = useMemo(() => {
    if (!activeLocale) return undefined
    const m = members.find(
      (member): member is FieldMember => member.key === `${member.kind}-${activeLocale?.code}`
    )
    if (m) {
      // hide field label
      m.field.schemaType.title = ''
      // setting field level readOnly from configuration
      m.field.readOnly = activeLocale.isReadOnly
      // setting field options
      m.field.schemaType.options = activeLocale.options

      if (fieldType === 'text' && activeLocale.options?.rows) {
        const schemaType = m.field.schemaType as TextSchemaType
        schemaType.rows = activeLocale.options.rows
      }

      // if error is global, force to have the input in error
      if (hasGlobalError) m.field.validation = [EMPTY_FORM_NODE_VALIDATION]
    }
    return m
  }, [activeLocale, members, hasGlobalError, fieldType])
  return currentMember
}

export default useMemberInfo
