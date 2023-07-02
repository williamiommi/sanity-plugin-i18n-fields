import {useMemo} from 'react'
import {FieldMember, FormNodeValidation} from 'sanity'

interface useValidationResponse {
  hasGlobalError: boolean
  mergedValidation: FormNodeValidation[]
}

const useValidation = (
  globalValidation: FormNodeValidation[],
  members: FieldMember[]
): useValidationResponse => {
  // get all validation erros from every single locale and create a single array of errors
  const allLocalesValidation = useMemo(() => {
    const output: FormNodeValidation[] = []
    members.forEach((member) => output.push(...(member.field.validation || [])))
    return output
  }, [members])

  return {
    hasGlobalError: globalValidation.length > 0,
    mergedValidation: [...globalValidation, ...allLocalesValidation],
  }
}

export default useValidation
