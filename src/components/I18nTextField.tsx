import {ObjectFieldProps} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import I18nDefaultField from './I18nDefaultField'

const I18nTextField = (props: ObjectFieldProps, pluginConfig: I18nFieldsConfig) =>
  I18nDefaultField(props, pluginConfig, 'text')

export default I18nTextField
