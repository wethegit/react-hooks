# usePreventScroll

▸ **usePreventScroll**(`state`: `boolean`): `void`

Toggles the `overflow: hidden` CSS declaration on the `<body>` DOM element.
`usePreventScroll(state)`

## Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | Whether to prevent scrolling on the `<body>` element. |

## Usage

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