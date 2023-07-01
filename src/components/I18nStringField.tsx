import {ObjectFieldProps} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import I18nDefaultField from './I18nDefaultField'

const I18nStringField = (props: ObjectFieldProps, config: I18nFieldsConfig) =>
  I18nDefaultField(props, config, 'string')

export default I18nStringField
