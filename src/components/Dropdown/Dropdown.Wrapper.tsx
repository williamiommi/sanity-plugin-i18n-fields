import {MenuButton} from '@sanity/ui'
import DropdownButton from './Dropdown.Button'
import DropdownMenu from './Dropdown.Menu'
import {InternalLocale} from '../../types/Locale'

interface DropdownWrapperProps {
  name: string
  activeLocale: InternalLocale
  locales: InternalLocale[]
}
const DropdownWrapper = ({name, activeLocale, locales}: DropdownWrapperProps) => {
  return (
    <MenuButton
      id={name}
      button={DropdownButton({activeLocale})}
      menu={DropdownMenu({locales, name})}
    />
  )
}

export default DropdownWrapper
