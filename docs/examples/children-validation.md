### Example: Children Validation
```ts
  defineField({
    type: 'i18n.string',
    name: 'field2',
    title: 'Field 2',
    validation: (Rule) =>
      Rule.custom((value) => {
        return (
          value?.en !== 'fast' || {
            message: `You can't use the word 'fast' for en locale`,
            paths: [['en']],
          }
        )
      }),
  }),
```
<p align="center">
  <img width="80%" src="https://raw.githubusercontent.com/williamiommi/sanity-plugin-i18n-fields/main/docs/images/examples/children-validation.jpg" alt="Example: Children Validation" />
</p>