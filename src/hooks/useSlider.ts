import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

type useSliderResponse = (node: HTMLDivElement | null) => void

const useSlider = (): useSliderResponse => {
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
  return keenRef
}

export default useSlider
