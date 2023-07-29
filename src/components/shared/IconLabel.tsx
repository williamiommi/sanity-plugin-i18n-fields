import {ComponentType, ReactNode, createElement, isValidElement} from 'react'
import {isValidElementType} from 'react-is'

interface IconLabelProps {
  label: ReactNode | ComponentType
}

const IconLabel = ({label}: IconLabelProps) => {
  if (isValidElement(label) || typeof label === 'string' || typeof label === 'number') return label
  if (isValidElementType(label)) return createElement(label)
  return 'something went wrong'
}

export default IconLabel
