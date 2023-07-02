import {Box, Button, Text, Tooltip, useTheme} from '@sanity/ui'
import {ErrorOutlineIcon} from '@sanity/icons'
import {SelectIcon} from '@sanity/icons'
import {InternalLocale} from '../../types/Locale'

interface DropdownButtonProps {
  activeLocale: InternalLocale
}

const DropdownButton = ({activeLocale}: DropdownButtonProps) => {
  const sanityTheme = useTheme()
  return (
    <Button className="i18n--dropdown-button" data-read-only={activeLocale.isReadOnly} mode="ghost">
      <Tooltip
        content={
          <Box padding={2}>
            <Text muted size={0}>
              {`${activeLocale.title || activeLocale.code}${
                activeLocale.isReadOnly ? ' - READONLY' : ''
              }`}
            </Text>
          </Box>
        }
        fallbackPlacements={['right', 'left']}
        placement="top"
      >
        <div className="-content">
          {activeLocale.hasError && (
            <ErrorOutlineIcon
              color={sanityTheme.sanity.color.solid.critical.enabled.bg}
              fontSize="1rem"
            />
          )}
          <span className="-label">{activeLocale.label}</span>
          <SelectIcon mode="ghost" className="-icon" />
        </div>
      </Tooltip>
    </Button>
  )
}

export default DropdownButton
