import {ComponentType, ReactNode} from 'react'
import {ConditionalProperty, NumberOptions, StringOptions} from 'sanity'

export interface Locale {
  code: string
  label: ReactNode | ComponentType
  title: string
  default?: boolean
  visibleFor?: string[]
  editableFor?: string[]
}

export interface InternalLocale extends Locale {
  hasError?: boolean
  hasWarning?: boolean
  isChanged?: boolean
  isReadOnly?: boolean
  isHidden?: boolean
  readOnly?: ConditionalProperty
  hidden?: ConditionalProperty
  options?: any
}

interface FilteredInternalLocale
  extends Omit<
    InternalLocale,
    | 'label'
    | 'title'
    | 'default'
    | 'hasError'
    | 'hasWarning'
    | 'isReadOnly'
    | 'isHidden'
    | 'isChanged'
  > {}

export interface I18nStringLocale extends FilteredInternalLocale {
  options?: StringOptions
}

export interface I18nNumberLocale extends FilteredInternalLocale {
  options?: NumberOptions
}
export interface I18nTextLocale extends FilteredInternalLocale {
  options?: {rows?: number}
}
