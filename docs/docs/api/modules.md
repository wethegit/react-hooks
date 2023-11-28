---
id: "modules"
title: "@wethegit/react-hooks"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [AnimatePresenceState](enums/AnimatePresenceState.md)
- [Status](enums/Status.md)

## Interfaces

- [AnimatePresenceProps](interfaces/AnimatePresenceProps.md)
- [AnimatePresenceReturn](interfaces/AnimatePresenceReturn.md)
- [PreferencesContext](interfaces/PreferencesContext.md)
- [UserPreferencesProviderProps](interfaces/UserPreferencesProviderProps.md)
- [useAsyncReturn](interfaces/useAsyncReturn.md)

## Type Aliases

### InViewHook

Ƭ **InViewHook**: [(`node`: `HTMLElement`) => `void`, `boolean`, `HTMLElement` \| `undefined`]

#### Defined in

[hooks/use-in-view.ts:3](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/hooks/use-in-view.ts#L3)

## Functions

### UserPreferencesProvider

▸ **UserPreferencesProvider**(`«destructured»`): `Element`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`UserPreferencesProviderProps`](interfaces/UserPreferencesProviderProps.md) |

#### Returns

`Element`

#### Defined in

[contexts/user-prefs-context.tsx:62](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/contexts/user-prefs-context.tsx#L62)

___

### useAnimatePresence

▸ **useAnimatePresence**(`props`): [`AnimatePresenceReturn`](interfaces/AnimatePresenceReturn.md)

AnimatePresence is a very simple hook that helps you animate components in and out.
You are in full control of the animation and the hook only provides you with the current state and the current duration of the animation.
It also takes care of accessibility by forcing duration to `0` if the user has enabled reduced motion.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AnimatePresenceProps`](interfaces/AnimatePresenceProps.md) |

#### Returns

[`AnimatePresenceReturn`](interfaces/AnimatePresenceReturn.md)

#### Defined in

[hooks/use-animate-presence.ts:60](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/hooks/use-animate-presence.ts#L60)

___

### useAsync

▸ **useAsync**\<`T`\>(`asyncFn`, `deferred?`): [`useAsyncReturn`](interfaces/useAsyncReturn.md)\<`T`\>

useAsync

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `asyncFn` | () => `Promise`\<`T`\> | `undefined` | The asynchronous function to run |
| `deferred?` | `boolean` | `false` | whether to save the function to a variable for later use (true) or run it instantly (false). |

#### Returns

[`useAsyncReturn`](interfaces/useAsyncReturn.md)\<`T`\>

Properties include a run() function which is used to subsequently call the function (if deferred); the resulting data; and the status and error states.

**`Example`**

```ts
Run it instantly:
const { data, status, error } = useAsync(() => fetch("https://my-cool-api.com/some-endpoint"))
console.log(data)

Deferred execution:
const { run, data, status, error } = useAsync(() => fetch("https://my-cool-api.com/some-endpoint"))
const handleClick = (event) => run()
```

#### Defined in

[hooks/use-async.ts:34](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/hooks/use-async.ts#L34)

___

### useInView

▸ **useInView**(`threshold?`, `once?`, `setInViewIfScrolledPast?`): [`InViewHook`](modules.md#inviewhook)

useInView

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `threshold` | `number` | `0.3` | A value between 0 and 1, which maps to a percentage of the DOM element's height. Once this amount of the DOM element is within the viewport, the hook will consider the element "in view". This value is directly passed to an `IntersectionObserver` |
| `once?` | `boolean` | `true` | Whether to detach the observer from the DOM element after the first intersection callback is invoked |
| `setInViewIfScrolledPast?` | `boolean` | `true` | Whether to consider the element already "in-view", if the top of it is already scrolled beyond the bounds of the viewport when this hook is called. |

#### Returns

[`InViewHook`](modules.md#inviewhook)

**`Example`**

```ts
const [setSectionRef, sectionInView] = useInView()
<section ref={setSectionRef} className={sectionInView ? "in-view" : ""}>
```

#### Defined in

[hooks/use-in-view.ts:30](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/hooks/use-in-view.ts#L30)

___

### useMediaQuery

▸ **useMediaQuery**(`mediaQueryString`): `boolean` \| ``null``

React hook for matching a media query
It returns `null` if the `window` object is not available, e.g. during SSR. Or a boolean if the media query matches or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaQueryString` | `string` |

#### Returns

`boolean` \| ``null``

#### Defined in

[hooks/use-media-query.ts:7](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/hooks/use-media-query.ts#L7)

___

### usePersistedMediaQuery

▸ **usePersistedMediaQuery**(`storageKey`, `mediaQuery`): [`boolean` \| ``null``, (`val`: `boolean`) => `void`]

React hook for matching a media query and persisting the result in localStorage.
It returns `null` if the `window` object is not available, e.g. during SSR. Or a boolean if the media query matches or not.
Important to note that the hook prioritizes the media query over the localStorage value and will update the localStorage value when the media query changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageKey` | `string` |
| `mediaQuery` | `string` |

#### Returns

[`boolean` \| ``null``, (`val`: `boolean`) => `void`]

#### Defined in

[hooks/use-persisted-media-query.ts:8](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/hooks/use-persisted-media-query.ts#L8)

___

### usePersistedState

▸ **usePersistedState**\<`T`\>(`key`, `defaultValue`): [`T` \| ``null``, (`v`: `T` \| ``null``) => `void`]

Manage state which also gets saved to the browser's localStorage
Returns null if the `window` object is not available, e.g. during SSR.
`defaultValue` should not be `null` or `undefined` as it will be used to determine the type of the state.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue` | `T` |

#### Returns

[`T` \| ``null``, (`v`: `T` \| ``null``) => `void`]

#### Defined in

[hooks/use-persisted-state.ts:8](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/hooks/use-persisted-state.ts#L8)

___

### usePreventScroll

▸ **usePreventScroll**(`state`): `void`

usePreventScroll
Toggles the `overflow: hidden` CSS declaration on the `<body>` DOM element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | Whether to prevent scrolling on the `<body>` element. |

#### Returns

`void`

#### Defined in

[hooks/use-prevent-scroll.ts:10](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/hooks/use-prevent-scroll.ts#L10)

___

### useUserPrefs

▸ **useUserPrefs**(): [`PreferencesContext`](interfaces/PreferencesContext.md)

#### Returns

[`PreferencesContext`](interfaces/PreferencesContext.md)

#### Defined in

[contexts/user-prefs-context.tsx:116](https://github.com/wethegit/react-hooks/blob/7e03ba1/src/lib/contexts/user-prefs-context.tsx#L116)
