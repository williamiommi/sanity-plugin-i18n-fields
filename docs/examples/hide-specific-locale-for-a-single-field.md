### Example: Hide specific locale for a single field
```ts
  defineField({
    type: 'i18n.string',
    name: 'field1',
    title: 'Field 1',
    options: {
      locales: [{
        code: 'it',
        hidden: true
      }]
    }
  }),
```
<p align="center">
  <img width="80%" src="https://raw.githubusercontent.com/williamiommi/sanity-plugin-i18n-fields/main/docs/images/examples/hidden-locale-field.jpg" alt="Example: Slider with background UI option" />
</p>