# react-hooks

A collection of helpers for use in React projects.  

Jump to a section:
- [useAsync](#useAsync)
- [useInView](#useInView)
- [useLocalStorage](#useLocalStorage)
- [usePreventScroll](#usePreventScroll)
- [useUserPrefs](#useUserPrefs)

## Installation
Install from the NPM registry using your package manager of choice.
```bash
npm install @wethegit/react-hooks
```

## Hooks

### `useAsync`

Manages the calling of an asynchronous JavaScript function, while providing the return data and the state of the function call.  
`useAsync(asyncFn, [deferred])`

#### Arguments

| Arguments   | Type     | Description |
| ----------- | -------- | ----------- |
| asyncFn     | Function | A JavaScript function which returns a Promise. |
| deferred    | Boolean  | Optional. Whether to defer the execution of `asyncFn`. Default: `false`. |

#### Return value

`useAsync` returns an Object containing the following properties:

| Property | Type     | Description |
| -------- | -------- | ----------- |
| data     | -        | The data returned from the resolved Promise, as a result of calling `asyncFn`. |
| status   | String   | One of: `"idle"`, `"pending"`, `"success"`, or `"error"`. |
| error    | String   | The error, if applicable, as thrown by `asyncFn`. |
| run      | Function | The function to invoke at a later time, which calls `asyncFn`. This will be null if the `deferred` argument was passed as `false`. |

#### Usage

Instant invocation of the provided async function:

```jsx
import { useAsync } from "@wethegit/react-hooks"

const MyComponent = () => {
  const { data, status, error } = useAsync(() =>
    fetch("https://my-cool-api.com/some-endpoint")
  );

  console.log(data, status, error)
}
```

Deferred invocation of the provided async function:

```jsx
import { useAsync } from "@wethegit/react-hooks"

const MyComponent = () => {
  const { run, data, status, error } = useAsync(() =>
    fetch("https://my-cool-api.com/some-endpoint"),
    true
  )

  const getMyData = () => {
    if (data) return
    run()
  }

  console.log(data, status, error)

  return (
    <button onClick={getMyData}>Get data</button>
  )
}
```

### `useInView`

Detects whether a DOM element is in the viewport, using the `IntersectionObserver` API.  
`useInView([threshold], [once], [setInViewIfScrolledPast])`

#### Arguments

| Arguments                | Type        | Description |
| ------------------------ | ----------- | ----------- |
| threshold                | Float       | Default: `0.3`. A value between 0 and 1, which maps to a percentage of the DOM element's height. Once this amount of the DOM element is within the viewport, the hook will consider the element "in view". This value is directly passed to an `IntersectionObserver`, so for more details on what this argument means, check out the [IntersectionObserver docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) on MDN. |
| once                     | Boolean     | Default: `true`. Whether to detach the observer from the DOM element after the first intersection callback is invoked. |
| setInViewIfScrolledPast  | Boolean     | Default: `true`. Whether to consider the element already "in-view", if the top of it is already scrolled beyond the bounds of the viewport when this hook is called. |

#### Return value

`useInView` returns an Array containing the following values:

| Return value             | Type        | Description |
| ------------------------ | ----------- | ----------- |
| setTargetRef             | Function    | Pass this function to the `ref` prop of the DOM element you want to track visibility of. |
| isIntersecting           | Boolean     | Whether the target DOM element is in view, based on the provided `threshold` argument. |
| targetRef                | React Ref   | The DOM node itself, once set by the `setTargetRef` function. |

#### Usage

Toggling a className on and off, based on whether a `<section>` is in view:

```jsx
import { useInView } from "@wethegit/react-hooks"

const IN_VIEW_CLASSNAME = "in-view"

const MyComponent = () => {
  const [setSectionRef, sectionInView, section] = useInView()

  return (
    <>
      <section ref={setSectionRef} className={sectionInView ? "in-view" : ""}>
        <p>Sit quis ut id sit anim. Enim qui est ut tempor sunt.</p>
      </section>
    </>
  )
}
```


### `useLocalStorage`

Reads and writes a piece of state to the browser's local storage.  
`useLocalStorage(key, [defaultValue])`

#### Arguments

| Arguments      | Type        | Description |
| -------------- | ----------- | ----------- |
| key            | String      | The name of the property you wish to save to `localStorage`. |
| defaultValue   | String      | Default: `""`. The default / initial value to set to the `localStorage` key. |

#### Return Value

`useLocalStorage` returns an Array containing the following values:

| Arguments      | Type        | Description |
| -------------- | ----------- | ----------- |
| state          | String      | The current value of the `localStorage` key in the browser. |
| setState       | Function    | State setter function, used to update the `localStorage` value in the browser. |

#### Usage

Setting a `localStorage` value for a user's favorite fruit, based on their selection:

```jsx
import { useLocalStorage } from "@wethegit/react-hooks"

const FRUITS = ["Apple", "Banana", "Orange"]

const FruitSelector = () => {
  const [fruit, setFruit] = useLocalStorage("fruit")

  return (
    <>
      <form>
        <fieldset>
          <legend>Select your favorite fruit</legend>
          <ul>
            {FRUITS.map((fruit) => (
              <li key={fruit}>
                <input
                  type="radio" name="fruit" id={fruit} value={fruit}
                  onChange={() => setFruit(fruit)}
                />
                <label for={fruit}>{fruit}</label>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>

      {fruit && <p>Your favorite fruit is {fruit}</p>}
    </>
  )
}
```

### `usePreventScroll`

Toggles the `overflow: hidden` CSS declaration on the `<body>` DOM element.  
`usePreventScroll(state)`

#### Arguments

| Arguments   | Type      | Description |
| ----------- | --------- | ----------- |
| state       | Boolean   | Whether to prevent scrolling on the `<body>` element. |

#### Usage

Toggling scrollability of the `<body>` element, based on whether a modal window is displayed:

```jsx
import { usePreventScroll } from "@wethegit/react-hooks"
import { useState } from "react"

const MyComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  usePreventScroll(modalIsOpen)

  return (
    <>
      <button onClick={() => setModalIsOpen(state => !state)}

      {modalIsOpen && (
        <div>How about this amazing modal window, eh?</div>
      )}
    </>
  )
}
```

### `useUserPrefs`

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