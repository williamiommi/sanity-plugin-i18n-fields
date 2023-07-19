# 🌍 i18n fields

An alternative way to manage localization at field level in your Sanity Studio.

- [⚡️Features](#features)
- [🔌 Installation](#installation)
- [🧑‍💻 Usage](#usage)
- [⚙️ Plugin Configuration](#plugin-configuration)
- [⚙️ Single Instance Configuration](#single-instance-configuration)
- [🚨 Validation](#single-instance-configuration)
- [🤩 Examples Examples Examples](#examples-examples-examples)

## ⚡️ Features

- Sanity v3 plugin
- Field Level Localization for the following Sanity types: `string`, `text` and `number`
- Optional UI (slider or dropdown)
- Locale visibility by role
- Locale readonly by role
- Object Validation
- Customization available not only at plugin level but also at instance level.

## 🔌 Installation

```sh
npm install sanity-plugin-i18n-fields
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {myPlugin} from 'sanity-plugin-i18n-fields'

export default defineConfig({
  //...
  plugins: [myPlugin({})],
})
```

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
