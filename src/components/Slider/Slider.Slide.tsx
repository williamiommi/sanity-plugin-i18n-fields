import {FormEvent} from 'react'
import {Box, Text, Tooltip, useTheme} from '@sanity/ui'
import {ErrorOutlineIcon, WarningOutlineIcon} from '@sanity/icons'
import {InternalLocale} from '../../types/Locale'
import {I18nFieldsConfigUI} from '../../types/I18nFields'

interface SlideProps {
  name: string | undefined
  locale: InternalLocale
  index: number
  isSelected: boolean
  pluginUi: I18nFieldsConfigUI
  onClick: (e: FormEvent<HTMLLabelElement>) => void
}
const Slide = ({name, locale, index, isSelected, pluginUi, onClick}: SlideProps) => {
  const sanityTheme = useTheme()
  return (
    <Tooltip
      key={locale.code}
      content={
        <Box padding={2}>
          <Text muted size={0}>
            {`${locale.title || locale.code}${locale.isReadOnly ? ' - READONLY' : ''}`}
          </Text>
        </Box>
      }
      fallbackPlacements={['right', 'left']}
      placement="top"
      portal
    >
      <label
        id={`${name}-${locale.code}`}
        htmlFor={`${name}.${locale.code}`}
        className="keen-slider__slide i18n--slider-language-slide"
        data-ui={pluginUi?.selected}
        data-selected={isSelected}
        data-read-only={locale.isReadOnly}
        data-code={locale.code}
        data-index={index}
        onClick={onClick}
      >
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
        <div className="-label">{locale.label}</div>
      </label>
    </Tooltip>
  )
}

export default Slide
