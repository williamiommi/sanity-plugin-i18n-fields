### Example: List of values
```ts
  const levelList = [
    {value: undefined, title: 'No Value'},
    {value: 1, title: 'Level 1'},
    {value: 1, title: 'Level 2'},
    {value: 3, title: 'Level 3'},
  ]

  defineField({
    type: 'i18n.number',
    name: 'field3',
    title: 'Field 3',
    options: {
      locales: [
        {
          code: 'en',
          options: {
            list: levelList,
            layout: 'radio',
          },
        },
      ],
    },
  }),
```
<p align="center">
  <img width="80%" src="https://raw.githubusercontent.com/williamiommi/sanity-plugin-i18n-fields/main/docs/images/examples/list-of-values.jpg" alt="Example: List of values" />
</p>