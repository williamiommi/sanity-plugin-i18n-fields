import {I18nFieldType} from '../types/I18nFields'

const getSchemaTitle = (prefix: string, type: I18nFieldType): string => {
  return `${prefix} ${type.charAt(0).toUpperCase()}${prefix.substring(1)}`
}

export default getSchemaTitle
