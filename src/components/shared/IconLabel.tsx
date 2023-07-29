import {ComponentType, ReactNode, createElement, isValidElement} from 'react'
import {isValidElementType} from 'react-is'
import {UnknownIcon} from '@sanity/icons'

interface IconLabelProps {
  label: ReactNode | ComponentType
}

const IconLabel = ({label}: IconLabelProps) => {
  if (isValidElement(label) || typeof label === 'string' || typeof label === 'number') return label
  if (isValidElementType(label)) return createElement(label)
  return <UnknownIcon fontSize={20} />
}

export default IconLabel
