import {ReactElement} from 'react'

interface IconLabelProps {
  Label: string | (() => ReactElement)
}

const IconLabel = ({Label}: IconLabelProps) => {
  if (typeof Label === 'string') return Label
  return <Label />
}

export default IconLabel
