### Example: Customized prefix
```ts
  I18nFields({
    prefix: 'myAwesomePrefix',
    locales: [
      {code: 'en', label: '🇬🇧', title: 'English', default: true},
      {code: 'en_us', label: '🇺🇸🇬🇧', title: 'American English'},
      {code: 'it', label: '🇮🇹', title: 'Italian'},
      {code: 'es', label: '🇪🇸', title: 'Spanish'},
    ]
  })
```
As a result of this customization, instead of having the default types, you will have the following ones:

- `myAwesomePrefix.string`
- `myAwesomePrefix.text`
- `myAwesomePrefix.number`

You will lose TypeScript definitions since you are not using `i18n.string`, `i18n.text`, or `i18n.number` types. However, you can override them in your project by doing something like this:

```ts
//custom.types.d.ts

import {
  I18nNumberDefinition,
  I18nStringDefinition,
  I18nTextDefinition,
} from 'sanity-plugin-i18n-fields'

declare module 'sanity' {
  export interface IntrinsicDefinitions {
    'myAwesomePrefix.string': Omit<I18nStringDefinition, 'type'> & {type: 'myAwesomePrefix.string'}
  }
  export interface IntrinsicDefinitions {
    'myAwesomePrefix.text': Omit<I18nTextDefinition, 'type'> & {type: 'myAwesomePrefix.text'}
  }
  export interface IntrinsicDefinitions {
    'myAwesomePrefix.number': Omit<I18nNumberDefinition, 'type'> & {type: 'myAwesomePrefix.number'}
  }
}
```