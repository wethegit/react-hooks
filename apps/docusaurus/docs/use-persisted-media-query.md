# usePersistedMediaQuery

▸ **usePersistedMediaQuery**(`storageKey`, `mediaQuery`): [`UsePersistedMediaQueryReturn`](#returns)

React hook for matching a media query and persisting the result in `localStorage``.

It returns `null` if the `window` object is not available, e.g. during SSR. Or a `boolean` if the media query matches or not.

Important to note that the hook prioritizes the **media query** over the localStorage value and will update the localStorage value when the media query changes or if on load the media query matches.

## Usage

```jsx
import { usePersistedMediaQuery } from "@wethegit/react-hooks"

function Comp() {
  const [prefersDarkMode, setDarkMode] = usePersistedMediaQuery("theme", "(prefers-color-scheme: dark)")

  if (prefersDarkMode === null) {
    // on the server, we don't know what the user prefers
    // set your default theme here
  }

  return (
    <button onClick={() => setDarkMode(!prefersDarkMode)}>Theme switcher</button>
  )
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `storageKey` | `string` |
| `mediaQuery` | `string` |

## Returns

Array containing the state and a function to update it.

[`boolean` \| ``null``, (`val`: `boolean`) => `void`]
