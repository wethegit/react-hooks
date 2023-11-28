# `usePersistedState`

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