import {MemberField, ObjectFieldProps} from 'sanity'
import {I18nFieldType, I18nFieldsConfig} from '../types/I18nFields'
import useSetupCssVars from '../hooks/useSetupCssVars'
import useValidationInfo from '../hooks/useValidationInfo'
import useLocalesInfo from '../hooks/useLocalesInfo'
import useUiInfo from '../hooks/useUiInfo'
import SliderWrapper from './Slider/Slider.Wrapper'
import {Stack} from '@sanity/ui'
import DropdownWrapper from './Dropdown/Dropdown.Wrapper'
import useMembersInfo from '../hooks/useMembersInfo'

const I18nDefaultField = (
  props: ObjectFieldProps,
  pluginConfig: I18nFieldsConfig,
  fieldType: I18nFieldType
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
  const {availableLocales, activeLocale, setCurrentLocaleCode} = useLocalesInfo({
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
  // get object members with all necessary info
  const parsedMembers = useMembersInfo({
    members,
    availableLocales,
    hasGlobalError,
    fieldType,
    fieldOptions,
  })

  const DefaultRender = () => (
    <>{renderDefault({...props, validation: mergedValidation, children: null})}</>
  )

  if (!availableLocales || !activeLocale) return null

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
            onClick={setCurrentLocaleCode}
          />
        )}
      </div>
      {pluginUI?.type === 'slider' && (
        <SliderWrapper
          name={currentPath}
          pluginUi={pluginUI}
          locales={availableLocales}
          activeLocale={activeLocale}
          onClick={setCurrentLocaleCode}
        />
      )}
      <div className="i18n--field-member-container">
        {parsedMembers.map((member) => {
          return (
            <div
              key={member.name}
              className={`i18n--field-member ${
                activeLocale.code === member.name ? '' : '--hidden'
              }`}
            >
              <MemberField
                member={{
                  ...member,
                  field: {...member.field, schemaType: {...member.field.schemaType, title: ''}}, // here to avoid issue with the left menu for document errors
                }}
                renderField={renderField}
                renderInput={renderInput}
                renderItem={renderItem}
                renderPreview={renderPreview}
              />
            </div>
          )
        })}
      </div>
    </Stack>
  )
}

export default I18nDefaultField
