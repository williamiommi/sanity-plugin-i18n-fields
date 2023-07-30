import {ConditionalProperty, CurrentUser, SanityDocument} from 'sanity'

const validateConditionalProperty = (
  condition: ConditionalProperty,
  document: SanityDocument | undefined,
  currentUser: CurrentUser | null,
  value: {[key: string]: unknown} | undefined
): boolean => {
  if (typeof condition === 'boolean') return condition
  if (typeof condition === 'function')
    return condition({currentUser, document, value, parent: document})
  return false
}

export default validateConditionalProperty
