import {Dispatch, SetStateAction} from 'react'
import {I18nFieldsConfigUI} from '../../types/I18nFields'
import {InternalLocale} from '../../types/Locale'
import Slide from './Slider.Slide'
import useSlider from '../../hooks/useSlider'

interface SliderWrapperProps {
  name: string | undefined
  pluginUi: I18nFieldsConfigUI
  locales: InternalLocale[]
  activeLocale: InternalLocale
  onClick: Dispatch<SetStateAction<string>>
}
const SliderWrapper = ({name, pluginUi, locales, activeLocale, onClick}: SliderWrapperProps) => {
  const keenRef = useSlider()
  return (
    <div
      ref={keenRef}
      className="keen-slider i18n--slider-language"
      data-position={pluginUi?.position}
    >
      {locales.map((locale, index) => (
        <Slide
          key={locale.code}
          index={index}
          name={name}
          isSelected={activeLocale?.code === locale.code}
          locale={locale}
          pluginUi={pluginUi}
          onClick={onClick}
        />
      ))}
    </div>
  )
}

export default SliderWrapper
