import {useMemo} from 'react'
import {FieldMember, FormNodeValidation, ObjectMember} from 'sanity'

interface useValidationInfoResponse {
  hasGlobalError: boolean
  mergedValidation: FormNodeValidation[]
}

const useValidationInfo = (
  globalValidation: FormNodeValidation[],
  members: ObjectMember[]
): useValidationInfoResponse => {
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

export default useValidationInfo
