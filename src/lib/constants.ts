import {FormNodeValidation} from 'sanity'

export const DEFAULT_PREFIX = 'i18n'

export const ROLE_ADMIN = 'administrator'

export const EMPTY_FORM_NODE_VALIDATION: FormNodeValidation = {
  level: 'error',
  message: ' ',
  path: [],
}
