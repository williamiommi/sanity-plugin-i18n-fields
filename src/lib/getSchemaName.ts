import {I18nFieldType} from '../types/I18nFields'

const getSchemaName = (prefix: string, type?: I18nFieldType): string => {
  const trimmedPrefix = prefix.toLowerCase().replace(/\s/g, '')
  if (!type) return trimmedPrefix
  return `${trimmedPrefix}.${type}`
}

export default getSchemaName
