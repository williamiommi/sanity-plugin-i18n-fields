import {useTheme} from '@sanity/ui'
import {ErrorOutlineIcon, WarningOutlineIcon} from '@sanity/icons'
import {InternalLocale} from '../../types/Locale'

interface ErrorWarningIconsProps {
  locale: InternalLocale
}
const ErrorWarningIcons = ({locale}: ErrorWarningIconsProps) => {
  const sanityTheme = useTheme()
  return (
    <>
      {locale.hasError && (
        <ErrorOutlineIcon
          color={sanityTheme.sanity.color.solid.critical.enabled.bg}
          fontSize={12}
        />
      )}
      {locale.hasWarning && (
        <WarningOutlineIcon
          color={sanityTheme.sanity.color.solid.caution.enabled.bg}
          fontSize={12}
        />
      )}
    </>
  )
}

export default ErrorWarningIcons
