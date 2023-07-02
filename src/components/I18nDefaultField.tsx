import {ObjectFieldProps} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import useSetupCssVars from '../hooks/useSetupCssVars'

const I18nDefaultField = (
  props: ObjectFieldProps,
  config: I18nFieldsConfig,
  fieldType: 'string' | 'text'
) => {
  useSetupCssVars()
  return <div>default field for {fieldType}</div>
}

export default I18nDefaultField
