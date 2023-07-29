import {Dispatch, SetStateAction} from 'react'
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
import {I18nFieldsConfigUI} from '../../types/I18nFields'
import {InternalLocale} from '../../types/Locale'
import Slide from './Slider.Slide'

interface SliderWrapperProps {
  name: string | undefined
  pluginUi: I18nFieldsConfigUI
  locales: InternalLocale[]
  activeLocale: InternalLocale
  onClick: Dispatch<SetStateAction<string>>
}
const SliderWrapper = ({name, pluginUi, locales, activeLocale, onClick}: SliderWrapperProps) => {
  const [keenRef] = useKeenSlider<HTMLDivElement>(
    {
      mode: 'free',
      slides: {perView: 'auto', spacing: 5},
      created(keen) {
        const {
          container,
          track: {
            details: {progress},
          },
        } = keen
        container.dataset.begin = `true`
        container.dataset.end = `${!!isNaN(progress)}`
      },
      dragged(keen) {
        const {
          container,
          track: {
            details: {progress},
          },
        } = keen
        container.dataset.begin = `${progress <= 0.05}`
        container.dataset.end = `${progress >= 0.95}`
      },
    },
    []
  )

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
