import {MenuButton} from '@sanity/ui'
import DropdownButton from './Dropdown.Button'
import {MouseEvent} from 'react'
import DropdownMenu from './Dropdown.Menu'
import {InternalLocale} from '../../types/Locale'

interface DropdownWrapperProps {
  name: string
  activeLocale: InternalLocale
  locales: InternalLocale[]
  onSelectLocale: (event: MouseEvent<HTMLElement>) => void
}
const DropdownWrapper = ({name, activeLocale, locales, onSelectLocale}: DropdownWrapperProps) => {
  return (
    <MenuButton
      id={name}
      button={DropdownButton({activeLocale})}
      menu={DropdownMenu({locales, onSelectLocale})}
    />
  )
}

export default DropdownWrapper
