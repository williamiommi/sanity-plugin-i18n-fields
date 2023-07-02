import {Box, MenuItem, Text, Tooltip, useTheme} from '@sanity/ui'
import {ErrorOutlineIcon} from '@sanity/icons'
import {MouseEvent} from 'react'
import {InternalLocale} from '../../types/Locale'

interface DropdownMenuItemProps {
  locale: InternalLocale
  onSelectLocale: (event: MouseEvent<HTMLElement>) => void
}

const DropdownMenuItem = ({locale, onSelectLocale}: DropdownMenuItemProps) => {
  const sanityTheme = useTheme()
  return (
    <>
      <Tooltip
        content={
          <Box padding={2}>
            <Text muted size={0}>
              {`${locale.title || locale.code}${locale.isReadOnly ? ' - READONLY' : ''}`}
            </Text>
          </Box>
        }
        fallbackPlacements={['right', 'left']}
        placement="top"
      >
        <MenuItem
          className="i18n--dropdown-menu-item"
          data-read-only={locale.isReadOnly}
          data-code={locale.code}
          onClick={onSelectLocale}
        >
          {locale.hasError && (
            <ErrorOutlineIcon
              color={sanityTheme.sanity.color.solid.critical.enabled.bg}
              fontSize="1rem"
            />
          )}
          <span className="-label">{locale.label}</span>
        </MenuItem>
      </Tooltip>
    </>
  )
}

export default DropdownMenuItem
