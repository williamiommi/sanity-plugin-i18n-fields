import {I18nNumberLocale, I18nStringLocale, I18nTextLocale, Locale} from './Locale'

export type I18nFieldType = 'string' | 'text' | 'number'

export interface I18nFieldsConfigUI {
  type?: 'slider' | 'dropdown'
  position?: 'top' | 'bottom'
  selected?: 'background' | 'border'
}

export interface I18nStringOptions {
  locales?: I18nStringLocale[]
  ui?: I18nFieldsConfigUI
}

export interface I18nNumberOptions {
  locales?: I18nNumberLocale[]
  ui?: I18nFieldsConfigUI
}

export interface I18nTextOptions {
  rows?: number
  locales?: I18nTextLocale[]
  ui?: I18nFieldsConfigUI
}

export interface I18nFieldsConfig {
  locales: Locale[]
  ui?: I18nFieldsConfigUI
}

export const defaultI18nFieldsConfigUI: I18nFieldsConfigUI = {
  type: 'slider',
  position: 'bottom',
  selected: 'border',
}
