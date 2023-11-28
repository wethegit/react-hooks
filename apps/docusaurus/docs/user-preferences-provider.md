# UserPreferencesProvider

▸ **UserPreferencesProvider**(`props`: [UserPreferencesProviderProps](#userpreferencesproviderprops)): [`PreferencesContext`](#preferencescontext)

Maintains a globally-available data store for the user's a11y preferences.

This keeps track of the following properties:
- prefersReduceMotion
- prefersReducedData
- prefersDarkColorScheme

It also toggles the following classes on the `<body>` element:
- `is-reduced-motion`
- `is-reduced-data`
- `is-dark-color-scheme`

These classes can be customized by passing in a `globalClassNames` object to the provider.

For the most part, you should use the `useUserPrefs` interface to work with this context (see `/hooks/use-user-prefs.js`)

## UserPreferencesProviderProps

### children

• **children**: `ReactNode`

### globalClassNames

• `Optional` **globalClassNames**: `Object`

| Name | Type |
| :------ | :------ |
| `prefersDarkColorScheme` | `string` |
| `prefersReducedData` | `string` |
| `prefersReducedMotion` | `string` |

## PreferencesContext

### prefersDarkColorScheme

• **prefersDarkColorScheme**: ``null`` \| `boolean`

Whether the user has either turned on "prefers dark color scheme" in their OS-level settings, or has chosen the option exposed by your site via some UI.

**`Default Value`**

```ts
false
```

### prefersReducedData

• **prefersReducedData**: ``null`` \| `boolean`

Whether the user has either turned on "prefers reduced data" in their OS-level settings, or has chosen the option exposed by your site via some UI.

**`Default Value`**

```ts
false
```

### prefersReducedMotion

• **prefersReducedMotion**: ``null`` \| `boolean`

Whether the user has either turned on "prefers reduced motion" in their OS-level settings, or has chosen the option exposed by your site via some UI.

### setPrefersDarkColorScheme

• **setPrefersDarkColorScheme**: (`value`: `boolean`) => `void`

Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersDarkColorScheme`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

### setPrefersReducedData

• **setPrefersReducedData**: (`value`: `boolean`) => `void`

Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersReducedData`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

### setPrefersReducedMotion

• **setPrefersReducedMotion**: (`value`: `boolean`) => `void`

Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersReducedMotion`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |