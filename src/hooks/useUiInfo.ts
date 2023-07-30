import {useMemo} from 'react'
import {I18nFieldsConfigUI} from '../types/I18nFields'

const useUiInfo = (ui?: I18nFieldsConfigUI, fieldUi?: I18nFieldsConfigUI): I18nFieldsConfigUI => {
  const pluginUi = useMemo(() => ({...ui, ...fieldUi}), [ui, fieldUi])
  return pluginUi
}

export default useUiInfo
