import {MenuButton} from '@sanity/ui'
import DropdownButton from './Dropdown.Button'
import DropdownMenu from './Dropdown.Menu'
import {InternalLocale} from '../../types/Locale'
import {Dispatch, SetStateAction} from 'react'

interface DropdownWrapperProps {
  name: string
  activeLocale: InternalLocale
  locales: InternalLocale[]
  onClick: Dispatch<SetStateAction<string>>
}
const DropdownWrapper = ({name, activeLocale, locales, onClick}: DropdownWrapperProps) => {
  return (
    <MenuButton
      id={name}
      button={DropdownButton({activeLocale})}
      menu={DropdownMenu({locales, name, onClick})}
    />
  )
}

export default DropdownWrapper
