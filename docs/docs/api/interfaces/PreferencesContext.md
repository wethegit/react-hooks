---
id: "PreferencesContext"
title: "Interface: PreferencesContext"
sidebar_label: "PreferencesContext"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### prefersDarkColorScheme

• **prefersDarkColorScheme**: ``null`` \| `boolean`

Whether the user has either turned on "prefers dark color scheme" in their OS-level settings, or has chosen the option exposed by your site via some UI.

**`Default Value`**

```ts
false
```

#### Defined in

[contexts/user-prefs-context.tsx:10](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/contexts/user-prefs-context.tsx#L10)

___

### prefersReducedData

• **prefersReducedData**: ``null`` \| `boolean`

Whether the user has either turned on "prefers reduced data" in their OS-level settings, or has chosen the option exposed by your site via some UI.

**`Default Value`**

```ts
false
```

#### Defined in

[contexts/user-prefs-context.tsx:19](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/contexts/user-prefs-context.tsx#L19)

___

### prefersReducedMotion

• **prefersReducedMotion**: ``null`` \| `boolean`

Whether the user has either turned on "prefers reduced motion" in their OS-level settings, or has chosen the option exposed by your site via some UI.

#### Defined in

[contexts/user-prefs-context.tsx:27](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/contexts/user-prefs-context.tsx#L27)

___

### setPrefersDarkColorScheme

• **setPrefersDarkColorScheme**: (`value`: `boolean`) => `void`

#### Type declaration

▸ (`value`): `void`

Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersDarkColorScheme`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

##### Returns

`void`

#### Defined in

[contexts/user-prefs-context.tsx:14](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/contexts/user-prefs-context.tsx#L14)

___

### setPrefersReducedData

• **setPrefersReducedData**: (`value`: `boolean`) => `void`

#### Type declaration

▸ (`value`): `void`

Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersReducedData`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

##### Returns

`void`

#### Defined in

[contexts/user-prefs-context.tsx:23](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/contexts/user-prefs-context.tsx#L23)

___

### setPrefersReducedMotion

• **setPrefersReducedMotion**: (`value`: `boolean`) => `void`

#### Type declaration

▸ (`value`): `void`

Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersReducedMotion`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

##### Returns

`void`

#### Defined in

[contexts/user-prefs-context.tsx:31](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/contexts/user-prefs-context.tsx#L31)
