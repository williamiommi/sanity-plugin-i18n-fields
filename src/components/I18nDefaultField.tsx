import {MemberField, ObjectFieldProps} from 'sanity'
import {I18nFieldsConfig} from '../types/I18nFields'
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
  const {availableLocales, activeLocale} = useLocalesInfo({
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
  const parsedMembers = useMembersInfo({members, availableLocales, hasGlobalError, fieldType})

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
          />
        )}
      </div>
      {pluginUI?.type === 'slider' && (
        <SliderWrapper
          name={currentPath}
          pluginUi={pluginUI}
          locales={availableLocales}
          activeLocale={activeLocale}
        />
      )}
      <div>
        {parsedMembers.map((member) => {
          return (
            <div key={member.name}>
              <MemberField
                member={{
                  ...member,
                  field: {...member.field, schemaType: {...member.field.schemaType, title: ''}},
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
