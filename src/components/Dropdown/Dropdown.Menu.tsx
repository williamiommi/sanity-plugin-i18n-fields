import {Menu} from '@sanity/ui'
import DropdownMenuItem from './Dropdown.Menu.Item'
import {InternalLocale} from '../../types/Locale'

interface DropdownMenuProps {
  locales: InternalLocale[]
  name: string
}

const DropdownMenu = ({locales, name}: DropdownMenuProps) => {
  return (
    <Menu className="i18n--dropdown-menu">
      {locales.map((locale) => (
        <DropdownMenuItem key={locale.code} locale={locale} name={name} />
      ))}
    </Menu>
  )
}

export default DropdownMenu
