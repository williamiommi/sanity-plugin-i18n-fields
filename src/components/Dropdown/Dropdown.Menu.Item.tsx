import {Box, Text, Tooltip} from '@sanity/ui'
import {InternalLocale} from '../../types/Locale'
import ErrorWarningIcons from '../shared/ErrorWarningIcons'

interface DropdownMenuItemProps {
  name: string
  locale: InternalLocale
}

const DropdownMenuItem = ({name = 'title', locale}: DropdownMenuItemProps) => {
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
        <label
          id={`${name}-${locale.code}`}
          htmlFor={`${name}.${locale.code}`}
          className="i18n--dropdown-menu-item"
          data-read-only={locale.isReadOnly}
          data-code={locale.code}
        >
          <ErrorWarningIcons locale={locale} />
          <span className="-label">{locale.label}</span>
        </label>
      </Tooltip>
    </>
  )
}

export default DropdownMenuItem
