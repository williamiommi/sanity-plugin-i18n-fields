### Example: Global Validation
```ts
  defineField({
    type: 'i18n.string',
    name: 'field3',
    title: 'Field 3',
    validation: (Rule) => Rule.required(),
  }),
```
<p align="center">
  <img width="80%" src="https://raw.githubusercontent.com/williamiommi/sanity-plugin-i18n-fields/main/docs/images/examples/global-validation.jpg" alt="Example: Global Validation" />
</p>