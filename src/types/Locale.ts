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
  isReadOnly?: boolean
  isHidden?: boolean
  readOnly?: ConditionalProperty
  hidden?: ConditionalProperty
  options?: any
}

export interface I18nStringLocale
  extends Omit<
    InternalLocale,
    'label' | 'title' | 'default' | 'hasError' | 'isReadOnly' | 'isHidden'
  > {}
