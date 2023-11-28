# `useUserPrefs`

Provides access to various user preferences, the values of which are stored in the browser's `localStorage`.
`useUserPrefs()`

#### Return value

`useUserPrefs` returns an Object containing the following properties:

| Property                      | Type     | Description |
| ----------------------------- | -------- | ----------- |
| prefersDarkColorScheme        | Boolean  | Whether the user has either turned on "prefers dark color scheme" in their OS-level settings, or has chosen the option exposed by your site via some UI. |
| togglePrefersDarkColorScheme  | Function | Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersDarkColorScheme`. |
| prefersReducedData            | Boolean  | Whether the user has either turned on "prefers reduced data" in their OS-level settings, or has chosen the option exposed by your site via some UI. |
| togglePrefersReducedData      | Function | Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersReducedData`. |
| prefersReducedMotion          | Boolean  | Whether the user has either turned on "prefers reduced motion" in their OS-level settings, or has chosen the option exposed by your site via some UI. |
| togglePrefersReducedMotion    | Function | Accepts a single property (Boolean) which toggles the `localStorage` state of `prefersReducedMotion`. |

#### Usage

Passing a dynamic animation duration prop (in milliseconds) to an imaginary `<Menu>` component. The duration will change based on the state of `prefersReducedMotion`:

```jsx
import { useUserPrefs } from "@wethegit/react-hooks"
import Menu from "../somewhere"

const MyComponent = () => {
  const { prefersReducedMotion } = useUserPrefs()

  return (
    <Menu animationDuration={prefersReducedMotion ? 1200 : 0} />
  )
}
```

Toggling various color props based on whther the user prefers "dark mode", on an imaginary `<Menu>` component:

```jsx
import { useUserPrefs } from "@wethegit/react-hooks"
import Menu from "../somewhere"

const THEMES = {
  dark: {
    color: "#fff",
    background: "#000",
  },
  light: {
    color: "#000",
    background: "#fff",
  }
}

const MyComponent = () => {
  const { prefersDarkColorScheme } = useUserPrefs()

  const theme = THEMES[prefersDarkColorScheme ? "dark" : "light"]

  return (
    <Menu color={theme.color} background={theme.background} />
  )
}
```