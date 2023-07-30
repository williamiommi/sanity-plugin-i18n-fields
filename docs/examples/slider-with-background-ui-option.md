### Example: Slider with background UI option
```ts
  I18nFields({
    ui: {
      selected: 'background'
    },
    locales: [
      {code: 'en', label: '🇬🇧', title: 'English', default: true},
      {code: 'en_us', label: '🇺🇸🇬🇧', title: 'American English'},
      {code: 'it', label: '🇮🇹', title: 'Italian'},
      {code: 'es', label: '🇪🇸', title: 'Spanish'},
    ]
  })
```
<p align="center">
  <img width="80%" src="../images/examples/selected-background.jpg" alt="Example: Slider with background UI option" />
</p>