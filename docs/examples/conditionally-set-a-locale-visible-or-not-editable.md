### Example: Conditionally set a locale visible or not editable
```ts
  defineField({
    type: 'i18n.string',
    name: 'field1',
    title: 'Field 1',
    options: {
      locales: [
        {
          code: 'it',
          hidden: ({value}) => {
            return value?.en === 'pizza with 🍍' ? true : false
          },
        },
        {
          code: 'en',
          readOnly: ({value}) => {
            return value?.it === 'pizza' ? true : false
          },
        },
      ],
    },
  }),
```