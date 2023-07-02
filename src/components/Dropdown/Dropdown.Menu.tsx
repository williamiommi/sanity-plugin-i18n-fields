import {Menu} from '@sanity/ui'
import DropdownMenuItem from './Dropdown.Menu.Item'
import {MouseEvent} from 'react'
import {InternalLocale} from '../../types/Locale'

interface DropdownMenuProps {
  locales: InternalLocale[]
  onSelectLocale: (event: MouseEvent<HTMLElement>) => void
}

const DropdownMenu = ({locales, onSelectLocale}: DropdownMenuProps) => {
  return (
    <Menu className="i18n--dropdown-menu">
      {locales.map((locale) => (
        <DropdownMenuItem key={locale.code} locale={locale} onSelectLocale={onSelectLocale} />
      ))}
    </Menu>
  )
}

export default DropdownMenu
