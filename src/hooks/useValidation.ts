import {useMemo} from 'react'
import {FieldMember, FormNodeValidation, ObjectMember} from 'sanity'

interface useValidationResponse {
  hasGlobalError: boolean
  mergedValidation: FormNodeValidation[]
}

const useValidation = (
  globalValidation: FormNodeValidation[],
  members: ObjectMember[]
): useValidationResponse => {
  // get all validation erros from every single locale and create a single array of errors
  const allLocalesValidation = useMemo(() => {
    const output: FormNodeValidation[] = []
    ;(members as FieldMember[]).forEach((member) => {
      output.push(...(member.field.validation || []))
    })
    return output
  }, [members])

  return {
    hasGlobalError: globalValidation.length > 0,
    mergedValidation: [...globalValidation, ...allLocalesValidation],
  }
}

export default useValidation
