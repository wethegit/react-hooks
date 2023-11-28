# usePersistedMediaQuery

▸ **usePersistedMediaQuery**(`storageKey`, `mediaQuery`): [`UsePersistedMediaQueryReturn`](#returns)

React hook for matching a media query and persisting the result in localStorage.
It returns `null` if the `window` object is not available, e.g. during SSR. Or a boolean if the media query matches or not.
Important to note that the hook prioritizes the media query over the localStorage value and will update the localStorage value when the media query changes.

## Parameters

| Name | Type |
| :------ | :------ |
| `storageKey` | `string` |
| `mediaQuery` | `string` |

## Returns

Array containing the state and a function to update it.

[`boolean` \| ``null``, (`val`: `boolean`) => `void`]
