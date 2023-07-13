import {Box, Button, Text, Tooltip, useTheme} from '@sanity/ui'
import {SelectIcon} from '@sanity/icons'
import {InternalLocale} from '../../types/Locale'
import ErrorWarningIcons from '../shared/ErrorWarningIcons'
import {EditIcon} from '@sanity/icons'

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
              {activeLocale.title || activeLocale.code}
            </Text>
          </Box>
        }
        fallbackPlacements={['right', 'left']}
        placement="top"
      >
        <div className="-content">
          <ErrorWarningIcons locale={activeLocale} />
          <span className="-label">
            {activeLocale.label}
            {activeLocale.isChanged && (
              <EditIcon fontSize={12} color={sanityTheme.sanity.color.solid.caution.hovered.bg} />
            )}
          </span>
          <SelectIcon mode="ghost" className="-icon" />
        </div>
      </Tooltip>
    </Button>
  )
}

export default DropdownButton
