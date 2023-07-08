import {I18nStringLocale, Locale} from './Locale'

export interface I18nFieldsConfigUI {
  type?: 'slider' | 'dropdown'
  position?: 'top' | 'bottom'
  selected?: 'background' | 'border'
}

export interface I18nStringOptions {
  locales?: I18nStringLocale[]
  ui?: I18nFieldsConfigUI
}

export interface I18nFieldsConfig {
  locales: Locale[]
  ui?: I18nFieldsConfigUI
}

export const defaultI18nFieldsConfigUI: I18nFieldsConfigUI = {
  type: 'slider',
  position: 'top',
  selected: 'border',
}
