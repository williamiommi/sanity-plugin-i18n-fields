import {ObjectDefinition, ObjectOptions} from 'sanity'
import {I18nStringOptions, I18nTextOptions} from './I18nFields'

export type I18nStringDefinition = Omit<
  ObjectDefinition,
  'type' | 'fields' | 'components' | 'options'
> & {
  type: 'i18n.string'
  options?: I18nStringOptions & Omit<ObjectOptions, 'columns'>
}

export type I18nTextDefinition = Omit<
  ObjectDefinition,
  'type' | 'fields' | 'components' | 'options'
> & {
  type: 'i18n.text'
  options?: I18nTextOptions & Omit<ObjectOptions, 'columns'>
}

// redeclares sanity module so we can add interfaces props to it
declare module 'sanity' {
  // redeclares IntrinsicDefinitions and adds a named definition to it
  // it is important that the key is the same as the type in the definition ('magically-added-type')
  export interface IntrinsicDefinitions {
    'i18n.string': I18nStringDefinition
  }
  export interface IntrinsicDefinitions {
    'i18n.text': I18nTextDefinition
  }
}
