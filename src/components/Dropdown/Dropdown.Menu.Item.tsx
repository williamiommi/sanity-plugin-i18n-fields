import {Box, MenuItem, Text, Tooltip, useTheme} from '@sanity/ui'
import {InternalLocale} from '../../types/Locale'
import ErrorWarningIcons from '../shared/ErrorWarningIcons'
import {EditIcon} from '@sanity/icons'
import {Dispatch, SetStateAction, useCallback} from 'react'
import IconLabel from '../shared/IconLabel'

interface DropdownMenuItemProps {
  name: string
  locale: InternalLocale
  onClick: Dispatch<SetStateAction<string>>
}

const DropdownMenuItem = ({name = 'title', locale, onClick}: DropdownMenuItemProps) => {
  const sanityTheme = useTheme()
  const onClickHandler = useCallback(() => {
    onClick(locale.code)
  }, [locale, onClick])
  return (
    <MenuItem padding={0} onClick={onClickHandler}>
      <Tooltip
        content={
          <Box padding={2}>
            <Text muted size={0}>
              {locale.title || locale.code}
            </Text>
          </Box>
        }
        fallbackPlacements={['right', 'left']}
        placement="top"
      >
        <label
          id={`${name}-${locale.code}`}
          htmlFor={`${name}.${locale.code}`}
          className="i18n--dropdown-menu-item"
          data-read-only={locale.isReadOnly}
          data-code={locale.code}
        >
          <ErrorWarningIcons locale={locale} />
          <span className="-label">
            <IconLabel label={locale.label} />
          </span>
          {locale.isChanged && (
            <EditIcon fontSize={12} color={sanityTheme.sanity.color.solid.caution.hovered.bg} />
          )}
        </label>
      </Tooltip>
    </MenuItem>
  )
}

export default DropdownMenuItem
