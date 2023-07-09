import {FieldMember, MemberField, ObjectFieldProps} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
import useSetupCssVars from '../hooks/useSetupCssVars'
import useValidationInfo from '../hooks/useValidationInfo'
import useLocalesInfo from '../hooks/useLocalesInfo'
import useUiInfo from '../hooks/useUiInfo'
import SliderWrapper from './Slider/Slider.Wrapper'
import {FormEvent, MouseEvent, useCallback} from 'react'
import {Stack} from '@sanity/ui'
import DropdownWrapper from './Dropdown/Dropdown.Wrapper'
import useMemberInfo from '../hooks/useMemberInfo'

const I18nDefaultField = (
  props: ObjectFieldProps,
  pluginConfig: I18nFieldsConfig,
  fieldType: 'string' | 'text'
) => {
  const {
    name: currentPath,
    collapsed,
    validation,
    inputProps: {members, renderField, renderInput, renderItem, renderPreview},
    schemaType: {options: fieldOptions, hidden: fieldHidden, readOnly: fieldReadOnly},
    renderDefault,
  } = props
  // setting up css variables
  useSetupCssVars()
  // get all validation errors, object errors and single field error
  const {hasGlobalError, mergedValidation} = useValidationInfo(validation, members)
  const {availableLocales, activeLocale, setActiveLocale} = useLocalesInfo({
    locales: pluginConfig.locales,
    members,
    hasGlobalError,
    fieldLocales: fieldOptions.locales,
    fieldHidden,
    fieldReadOnly,
    currentPath,
  })
  // merge global and field ui options
  const pluginUI = useUiInfo(pluginConfig.ui, fieldOptions.ui)
  const activeMember = useMemberInfo(
    fieldType,
    members as FieldMember[],
    hasGlobalError,
    activeLocale
  )

  const onClickSlideHandler = useCallback(
    (e: FormEvent<HTMLLabelElement>) => {
      setActiveLocale(
        availableLocales.find((locale) => locale.code === e.currentTarget.dataset.code)
      )
    },
    [availableLocales, setActiveLocale]
  )

  const onSelectHandler = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setActiveLocale(
        availableLocales.find((locale) => locale.code === e.currentTarget.dataset.code)
      )
    },
    [availableLocales, setActiveLocale]
  )

  const DefaultRender = () => (
    <>{renderDefault({...props, validation: mergedValidation, children: null})}</>
  )

  if (!availableLocales || !activeLocale || !activeMember) return null

  if (collapsed) return <DefaultRender />

  return (
    <Stack className="i18n--field-wrapper">
      <div className="i18n--field-wrapper-top" data-ui={pluginUI?.type}>
        <DefaultRender />
        {pluginUI?.type === 'dropdown' && (
          <DropdownWrapper
            name={currentPath}
            locales={availableLocales}
            activeLocale={activeLocale}
            onSelectLocale={onSelectHandler}
          />
        )}
      </div>
      {pluginUI?.type === 'slider' && (
        <SliderWrapper
          name={currentPath}
          pluginUi={pluginUI}
          locales={availableLocales}
          activeLocale={activeLocale}
          onClick={onClickSlideHandler}
        />
      )}
      <MemberField
        key={activeLocale.code}
        member={activeMember}
        renderField={renderField}
        renderInput={renderInput}
        renderItem={renderItem}
        renderPreview={renderPreview}
      />
    </Stack>
  )
}

export default I18nDefaultField
