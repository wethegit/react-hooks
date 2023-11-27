import { useEffect, useMemo, useState } from "react"

/**
 * Manage state which also gets saved to the browser's localStorage *
 */
export function usePersistedState<T = string>(
  key: string,
  defaultValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const prefixedKey = useMemo(() => {
    return `use-local-storage:${key}`
  }, [key])

  // read key from local storage if not found use default value
  const [state, setState] = useState<T>(() => {
    const isFunction = defaultValue instanceof Function

    if (typeof window === "undefined") return isFunction ? defaultValue() : defaultValue

    const storedValue = window.localStorage.getItem(prefixedKey)

    if (storedValue === null) return isFunction ? defaultValue() : defaultValue

    return JSON.parse(storedValue) as T
  })

  // update local storage when value changes
  useEffect(() => {
    window.localStorage.setItem(prefixedKey, JSON.stringify(state))
  }, [state, prefixedKey])

  return [state, setState]
}
