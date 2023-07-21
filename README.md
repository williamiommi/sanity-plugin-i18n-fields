# 🌍 i18n fields

An alternative way to manage localization at field level in your Sanity Studio.

<p align="center">
  <img src="images/hero.jpg" alt="I18n String Field Sample"/>
</p>

- [⚡️ Features](#%EF%B8%8F-features)
- [🔌 Installation](#-installation)
- [🧑‍💻 Usage](#-usage)
- [⚙️ Plugin Configuration](#%EF%B8%8F-plugin-configuration)
- [🔧 Single Instance Configuration](#-single-instance-configuration)
- [🚨 Validation](#-validation)
- [🤩 Examples Examples Examples](#-examples-examples-examples)
<br />

## ⚡️ Features

- Sanity v3 plugin.
- Field level localization for the following Sanity types: `string`, `text`, and `number`.
- Optional UI (slider or dropdown).
- Locale visibility by user roles.
- Locale readonly by user roles.
- Object Validation.
- Customization available not only at the plugin level but also at field level.
<br />

## 🔌 Installation

```sh
npm install sanity-plugin-i18n-fields
```
<br />

## 🧑‍💻 Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {I18nFields} from 'sanity-plugin-i18n-fields'

export default defineConfig({
  //...
  plugins: [I18nFields({
    // your configuration here
  })],
})
```
The plugin will provide 3 new types: `i18n.string`, `i18n.text` and `i18n.number`. All 3 types will be objects with a dynamic number of fields based on the localizations provided during configuration.\
<br />

## ⚙️ Plugin Configuration
This is the main configuration of the plugin. The available options are the following:
```ts
{
  // the ui option it lets you play with the UI of the plugin.
  ui?: {
    type?: 'slider' | 'dropdown' // the ui of the plugin. Default is 'slider'
    position?: 'top' | 'bottom' // the position of the 'slider', above or below the input field. Default is 'top'
    selected?: 'border' | 'background' // the ui of the selected locale when type is 'slider'. Default is 'border'
  },
  // the locales option is the core of the configuration. It lets you configure all the available locales of your project.
  locales: [
    {
      code: string // the code of the locale
      label: ReactNode // the label of the locale
      title: string // the title of the locale
      default?: boolean // the flag to identify the default locale. If true, the locale is in the first position
      visibleFor?: string[] // List of roles for which this locale is visible. Using the '!' operator, it is possible to make it not visibile
      editableFor?: string[] // List of roles for which this locale is editable. Using the '!' operator, it is possible to do the opposite
    },
    // other locales
  ]
}
```
Sample configuration:
```ts
import {defineConfig} from 'sanity'
import {I18nFields} from 'sanity-plugin-i18n-fields'

export default defineConfig({
  //...
  plugins: [I18nFields({
    ui: {
      position: 'bottom'
    },
    locales: [
      {code: 'en', label: '🇬🇧', title: 'English', default: true},
      {code: 'en_us', label: '🇺🇸🇬🇧', title: 'American English'},
      {code: 'it', label: '🇮🇹', title: 'Italian', visibleFor: ['it_editor']}, // country visible only for administrator and it_editor roles
      {code: 'es', label: '🇪🇸', title: 'Spanish'},
    ]
  })],
})
```
<br />

## 🔧 Single Instance Configuration
Other than a global configuration, you can tune your configuration at field level. For example for a specific field you can have a dropdown layout or you can hide a specific locale.
```ts
import {ConditionalProperty, NumberOptions, StringOptions} from 'sanity'

export default defineType({
  type: 'document',
  name: 'myDocument',
  title: 'My Document',
  fields: [
    defineField({
      type: 'i18n.string' | 'i18n.text' | 'i18n.number',
      // ...
      options: {
        ui?: {
          type?: 'slider' | 'dropdown'
          position?: 'top' | 'bottom'
          selected?: 'border' | 'background'
        },
        locales?: [
            {
              code: string // the code of the locale. MUST be the same of the one used in the global configuration
              readOnly?: ConditionalProperty
              hidden?: ConditionalProperty
              options?: StringOptions | { rows?:number } | NumberOptions
              visibleFor?: string[] // List of roles for which this locale is visible. Using the '!' operator, it is possible to make it not visibile
              editableFor?: string[] // List of roles for which this locale is editable. Using the '!' operator, it is possible to do the opposite
            },
            // other locales
          ]
      }
    })
  ]
})
```
<br />

## 🚨 Validation
Since the new types introduced by the plugin are objects, you can use [children validation](https://www.sanity.io/docs/validation#9e69d5db6f72) to address specific validation on a specific locale.
All error/warning messages are then collected and visible near the title of your field or in the right menu.

<p align="center">
  <img src="images/hero-validation.jpg" alt="Validation Sample"/>
</p>
<p align="center">
  <img src="images/hero-validation2.jpg" alt="Validation Sample"/>
</p>
<br />

## 🤩 Examples Examples Examples

- [String Field](#string-field)
- Text Field
- Number Field
- Slider top position
- Slider w/ background option
- Dropdown UI
- Multiple UI on different fields

### String Field
```ts
  defineField({
    type: 'i18n.string',
    name: 'title',
    title: 'Title',
    description: 'Title description',
  })
```
<p align="center">
  <img src="images/examples/string-field.jpg" alt="Example: String Field" />
</p>
<br />

### Text Field
```ts
  defineField({
    type: 'i18n.text',
    name: 'title',
    title: 'Title',
    description: 'Title description',
  })
```
<p align="center">
  <img src="images/examples/text-field.jpg" alt="Example: Text Field" />
</p>
<br />

### Number Field
```ts
  defineField({
    type: 'i18n.number',
    name: 'title',
    title: 'Title',
    description: 'Title description',
  })
```
<p align="center">
  <img src="images/examples/number-field.jpg" alt="Example: Number Field" />
</p>
<br />

## License

[MIT](LICENSE) © William Iommi

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.


### Release new version

Run ["CI & Release" workflow](https://github.com/williamiommi/sanity-plugin-i18n-fields/actions/workflows/main.yml).
Make sure to select the main branch and check "Release new version".

Semantic release will only release on configured branches, so it is safe to run release on any branch.
