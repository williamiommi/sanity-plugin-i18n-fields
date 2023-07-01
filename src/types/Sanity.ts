import {ObjectDefinition} from 'sanity'
import {I18nStringOptions} from './I18nFields'

export type I18nStringDefinition = Omit<ObjectDefinition, 'fields'> & {
  type: 'i18n.string'
  options?: I18nStringOptions
}

// redeclares sanity module so we can add interfaces props to it
declare module 'sanity' {
  // redeclares IntrinsicDefinitions and adds a named definition to it
  // it is important that the key is the same as the type in the definition ('magically-added-type')
  export interface IntrinsicDefinitions {
    'i18n.string': I18nStringDefinition
  }
}
