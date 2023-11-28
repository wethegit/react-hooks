import { useCallback, useEffect, useState } from "react"

/**
 * React hook for matching a media query and persisting the result in localStorage.
 * It returns `null` if the `window` object is not available, e.g. during SSR. Or a boolean if the media query matches or not.
 * Important to note that the hook prioritizes the media query over the localStorage value and will update the localStorage value when the media query changes.
 */
export function usePersistedMediaQuery(
  storageKey: string,
  mediaQuery: string
): [boolean | null, (val: boolean) => void] {
  const [state, setState] = useState<boolean | null>(null)

  const updateState = useCallback(
    (newState: boolean) => {
      window.localStorage.setItem(storageKey, JSON.stringify(newState))
      setState(newState)
    },
    [storageKey]
  )

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery)

    const matches = mql.matches

    // if the media query matches, we update the state and return the value
    // giving priority to the media query
    if (matches) {
      updateState(matches)
    } else {
      setState((current) => {
        if (current === null) {
          const value = localStorage.getItem(storageKey)

          // if there is no value in localStorage we use the media query as out default
          if (value === null) return matches

          return JSON.parse(value)
        }

        return current
      })
    }

    // we prioritize the listener over the storage value
    // and always update when that changes
    const mqlListener = (e: MediaQueryListEvent) => {
      updateState(e.matches)
    }

    mql.addEventListener("change", mqlListener)

    return () => {
      mql.removeEventListener("change", mqlListener)
    }
  }, [mediaQuery, storageKey, updateState])

  return [state, updateState]
}
