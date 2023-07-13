import {Box, Text, Tooltip, useTheme} from '@sanity/ui'
import {InternalLocale} from '../../types/Locale'
import {I18nFieldsConfigUI} from '../../types/I18nFields'
import ErrorWarningIcons from '../shared/ErrorWarningIcons'
import {EditIcon} from '@sanity/icons'

interface SlideProps {
  name: string | undefined
  locale: InternalLocale
  index: number
  isSelected: boolean
  pluginUi: I18nFieldsConfigUI
}
const Slide = ({name, locale, index, isSelected, pluginUi}: SlideProps) => {
  const sanityTheme = useTheme()
  return (
    <Tooltip
      key={locale.code}
      content={
        <Box padding={2}>
          <Text muted size={0}>
            {locale.title || locale.code}
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
        data-changed={locale.isChanged}
        data-read-only={locale.isReadOnly}
        data-code={locale.code}
        data-index={index}
      >
        <ErrorWarningIcons locale={locale} />
        <span className="-label">{locale.label}</span>
        {locale.isChanged && (
          <EditIcon fontSize={12} color={sanityTheme.sanity.color.solid.caution.hovered.bg} />
        )}
      </label>
    </Tooltip>
  )
}

export default Slide
