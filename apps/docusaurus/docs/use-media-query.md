# useMediaQuery

▸ **useMediaQuery**(`mediaQueryString`): [`useMediaQuery`](#returns)

React hook for matching a media query.

It returns `null` if the `window` object is not available, e.g. during SSR. Or a `boolean` if the media query matches or not.

## Usage

```jsx
import { useMediaQuery } from "@wethegit/react-hooks"

function Comp() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const isLarge = useMediaQuery("(min-width: 1024px)")

  return (
    <section style={{
      backgroundColor: prefersDarkMode ? "black" : "white",
      color: prefersDarkMode ? "white" : "black",
      fontSize: isLarge ? "2rem" : "1rem"
    }}>
      <p>Sit quis ut id sit anim. Enim qui est ut tempor sunt.</p>
    </section>
  )
}
```

## Parameters

| Name | Type |
| :------ | :------ |
| `mediaQueryString` | `string` |

## Returns

`boolean` \| ``null``
