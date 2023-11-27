import { useCallback, useEffect, useState } from "react"

/**
 * React hook for matching a media query and persisting the result in localStorage
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

    setState((current) => {
      if (current === null) {
        const value = localStorage.getItem(storageKey)

        if (value === null) return mql.matches

        return JSON.parse(value)
      }

      return current
    })

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
