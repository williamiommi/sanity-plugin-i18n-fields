import {FormEvent, useEffect, useRef, useState} from 'react'
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
import {I18nFieldsConfigUI} from '../../types/I18nFields'
import {InternalLocale} from '../../types/Locale'
import Slide from './Slider.Slide'

interface WrapperProps {
  name: string | undefined
  pluginUi: I18nFieldsConfigUI
  locales: InternalLocale[]
  activeLocale: InternalLocale
  onClick: (e: FormEvent<HTMLLabelElement>) => void
}
const Wrapper = ({name, pluginUi, locales, activeLocale, onClick}: WrapperProps) => {
  const [ready, setReady] = useState(false)
  const sliderRef = useRef(null)
  const [keenRef] = useKeenSlider(
    {
      mode: 'free',
      slides: {perView: 'auto'},
    },
    []
  )

  useEffect(() => {
    keenRef(sliderRef.current)
    setReady(true)
  }, [keenRef])

  return (
    <div
      ref={sliderRef}
      className="keen-slider i18n--slider-language"
      data-ready={ready}
      data-position={pluginUi?.position}
    >
      {locales.map((locale, index) => (
        <Slide
          key={locale.code}
          index={index}
          name={name}
          isSelected={activeLocale.code === locale.code}
          locale={locale}
          pluginUi={pluginUi}
          onClick={onClick}
        />
      ))}
    </div>
  )
}

export default Wrapper
