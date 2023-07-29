import {useTheme} from '@sanity/ui'
import {useEffect} from 'react'

// setting up css variables to use sanity/ui colors inside css style
const useSetupCssVars = (): void => {
  const sanityTheme = useTheme()
  useEffect(() => {
    document.documentElement.style.setProperty('--i18n-base-bg', sanityTheme.sanity.color.base.bg)
    document.documentElement.style.setProperty(
      '--i18n-readOnly-warning',
      sanityTheme.sanity.color.solid.caution.hovered.bg
    )
    document.documentElement.style.setProperty(
      '--i18n-bg-selected',
      sanityTheme.sanity.color.card.selected.bg
    )
    document.documentElement.style.setProperty(
      '--i18n-bg-hover',
      sanityTheme.sanity.color.card.hovered.bg
    )
  }, [])
}

export default useSetupCssVars
