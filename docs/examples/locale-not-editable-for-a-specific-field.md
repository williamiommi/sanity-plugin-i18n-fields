### Example: Locale not editable for a specific field
```ts
  defineField({
    type: 'i18n.string',
    name: 'field1',
    title: 'Field 1',
    options: {
      locales: [{
        code: 'en',
        readOnly: true
      }]
    }
  }),
```
<p align="center">
  <img width="80%" src="https://raw.githubusercontent.com/williamiommi/sanity-plugin-i18n-fields/main/docs/images/examples/readonly-locale-field.jpg" alt="Example: Locale not editable for a specific field" />
</p>