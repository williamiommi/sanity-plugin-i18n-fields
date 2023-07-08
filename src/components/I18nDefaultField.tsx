import {ObjectFieldProps} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import useSetupCssVars from '../hooks/useSetupCssVars'
import useValidationInfo from '../hooks/useValidationInfo'
import useLocalesInfo from '../hooks/useLocalesInfo'

const I18nDefaultField = (
  props: ObjectFieldProps,
  pluginConfig: I18nFieldsConfig,
  fieldType: 'string' | 'text'
) => {
  const {
    name: currentPath,
    validation,
    inputProps: {members},
    schemaType: {options: fieldOptions, hidden: fieldHidden, readOnly: fieldReadOnly},
    renderDefault,
  } = props
  // setting up css variables
  useSetupCssVars()
  // get all validation errors, object errors and single field error
  const {hasGlobalError, mergedValidation} = useValidationInfo(validation, members)
  useLocalesInfo({
    locales: pluginConfig.locales,
    members,
    hasGlobalError,
    fieldLocales: fieldOptions.locales,
    fieldHidden,
    fieldReadOnly,
    currentPath,
  })
  return renderDefault({...props, validation: mergedValidation})
}

export default I18nDefaultField
