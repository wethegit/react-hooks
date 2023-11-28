# usePersistedState

▸ **usePersistedState**\<`T`\>(`key`: `string`, `defaultValue`: `T`): [`UsePersistedStateReturn`](#returns)

Manage state which also gets saved to the browser's localStorage.
Returns `null` if the `window` object is not available, e.g. during SSR.
`defaultValue` should not be `null` or `undefined` as it will be used to determine the type of the state.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` |

## Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue` | `T` |

### Returns

An array containing the state and a function to update it.

[`T` \| ``null``, (`v`: `T` \| ``null``) => `void`]

## Usage

Setting a `localStorage` value for a user's favorite fruit, based on their selection:

```jsx
import { usePersistedState } from "@wethegit/react-hooks"

const FRUITS = ["Apple", "Banana", "Orange"]

const FruitSelector = () => {
  const [fruit, setFruit] = usePersistedState("fruit")

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