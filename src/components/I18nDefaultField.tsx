import {FieldMember, ObjectFieldProps} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import useSetupCssVars from '../hooks/useSetupCssVars'
import useValidation from '../hooks/useValidation'

const I18nDefaultField = (
  props: ObjectFieldProps,
  pluginConfig: I18nFieldsConfig,
  fieldType: 'string' | 'text'
) => {
  const {
    validation,
    inputProps: {members},
    renderDefault,
  } = props
  // setting up css variables
  useSetupCssVars()
  // get all validation errors, object errors and single field error
  const {mergedValidation} = useValidation(validation, members as FieldMember[])
  return renderDefault({...props, validation: mergedValidation})
}

export default I18nDefaultField
