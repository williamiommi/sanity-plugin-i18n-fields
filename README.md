# 🌍 i18n fields

An alternative way to manage localization at field level in your Sanity Studio.

<p align="center">
  <img src="images/hero.jpg" alt="I18n String Field Sample"/>
</p>

- [⚡️Features](#%EF%B8%8F-features)
- [🔌 Installation](#-installation)
- [🧑‍💻 Usage](#-usage)
- [⚙️ Plugin Configuration](#%EF%B8%8F-plugin-configuration)
- [⚙️ Single Instance Configuration](#%EF%B8%8F-single-instance-configuration)
- [🚨 Validation](#-validation)
- [🤩 Examples Examples Examples](#-examples-examples-examples)
<br />

## ⚡️ Features

- Sanity v3 plugin
- Field Level Localization for the following Sanity types: `string`, `text` and `number`
- Optional UI (slider or dropdown)
- Locale visibility by role
- Locale readonly by role
- Object Validation
- Customization available not only at plugin level but also at instance level.
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


<br /><br />

## ⚙️ Single Instance Configuration
TODO
<br /><br />

## 🚨 Validation
TODO
<br /><br />

## 🤩 Examples Examples Examples

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
