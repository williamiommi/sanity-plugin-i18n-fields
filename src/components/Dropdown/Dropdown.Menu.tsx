import {Menu} from '@sanity/ui'
import DropdownMenuItem from './Dropdown.Menu.Item'
import {InternalLocale} from '../../types/Locale'
import {Dispatch, SetStateAction} from 'react'

interface DropdownMenuProps {
  locales: InternalLocale[]
  name: string
  onClick: Dispatch<SetStateAction<string>>
}

const DropdownMenu = ({locales, name, onClick}: DropdownMenuProps) => {
  return (
    <Menu className="i18n--dropdown-menu">
      {locales.map((locale) => (
        <DropdownMenuItem key={locale.code} locale={locale} name={name} onClick={onClick} />
      ))}
    </Menu>
  )
}

export default DropdownMenu
