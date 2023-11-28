# useUserPrefs

▸ **useUserPrefs**(): [`PreferencesContext`](/user-preferences-provider#preferencescontext)

Provides access to various user preferences returned by the [UserPreferencesProvider](/user-preferences-provider) context

## Usage

Passing a dynamic animation duration prop (in milliseconds) to an imaginary `<Menu>` component. The duration will change based on the state of `prefersReducedMotion`:

```jsx
import { useUserPrefs, UserPreferencesProvider } from "@wethegit/react-hooks"
import Menu from "../somewhere"

const MyComponent = () => {
  const { prefersReducedMotion } = useUserPrefs()

  return (
    <Menu animationDuration={prefersReducedMotion ? 1200 : 0} />
  )
}

const App = () => (
  <UserPreferencesProvider>
    <MyComponent />
  </UserPreferencesProvider>
)
```

Toggling various color props based on whther the user prefers "dark mode", on an imaginary `<Menu>` component:

```jsx
import { useUserPrefs, UserPreferencesProvider } from "@wethegit/react-hooks"
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

const App = () => (
  <UserPreferencesProvider>
    <MyComponent />
  </UserPreferencesProvider>
)
```