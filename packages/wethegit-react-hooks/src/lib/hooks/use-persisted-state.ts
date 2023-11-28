import { useEffect, useMemo, useState } from "react"

/**
 * Manage state which also gets saved to the browser's localStorage
 * Returns null if the `window` object is not available, e.g. during SSR.
 * `defaultValue` should not be `null` or `undefined` as it will be used to determine the type of the state.
 */
export function usePersistedState<T = string>(
  key: string,
  defaultValue: T
): [T | null, (v: T | null) => void] {
  const prefixedKey = useMemo(() => {
    return `use-local-storage:${key}`
  }, [key])

  // read key from local storage if not found use default value
  const [state, setState] = useState<T | null>(null)

  // update local storage when value changes
  useEffect(() => {
    if (state === null) {
      const storedValue = window.localStorage.getItem(prefixedKey)

      if (storedValue === null) {
        setState(defaultValue)
        return
      }

      setState(JSON.parse(storedValue))
    }

    window.localStorage.setItem(prefixedKey, JSON.stringify(state))
  }, [defaultValue, prefixedKey, state])

  return [state, setState]
}
