import {ReactNode} from 'react'
import {ConditionalProperty} from 'sanity'

export interface Locale {
  code: string
  label: ReactNode
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
    'label' | 'title' | 'default' | 'hasError' | 'isReadOnly' | 'isHidden'
  > {}

export interface I18nStringLocale extends FilteredInternalLocale {}

export interface I18nNumberLocale extends FilteredInternalLocale {}
export interface I18nTextLocale extends FilteredInternalLocale {
  options?: {rows?: number}
}
