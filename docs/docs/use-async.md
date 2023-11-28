# `useAsync`

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