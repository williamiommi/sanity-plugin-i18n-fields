### Example: Global User Roles Visibility
```ts
  I18nFields({
    locales: [
      {code: 'en', label: '🇬🇧', title: 'English', default: true},
      {code: 'en_us', label: '🇺🇸🇬🇧', title: 'American English', visibleFor: ['us_editor']}, // visible only for administrator and us_editor roles
      {code: 'it', label: '🇮🇹', title: 'Italian', editableFor: ['it_editor']}, // visible for everyone but editable only for administrator and it_editor roles.
      {code: 'es', label: '🇪🇸', title: 'Spanish', editableFor: ['!movie_editor']}, // visible and editable for everyone. It will be readonly for movie_editor role.
    ]
  })
```