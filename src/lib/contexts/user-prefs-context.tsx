import React, { createContext, useContext, useEffect } from "react"

import { usePersistedMediaQuery } from "../hooks/use-persisted-media-query"

export interface PreferencesContext {
  /**
   * Whether the user has either turned on "prefers dark color scheme" in their OS-level settings, or has chosen the option exposed by your site via some UI.
   * @defaultValue false
   */
  prefersDarkColorScheme: boolean | null
  /**
   * Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersDarkColorScheme`.
   */
  setPrefersDarkColorScheme: (value: boolean) => void
  /**
   * Whether the user has either turned on "prefers reduced data" in their OS-level settings, or has chosen the option exposed by your site via some UI.
   * @defaultValue false
   */
  prefersReducedData: boolean | null
  /**
   * Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersReducedData`.
   */
  setPrefersReducedData: (value: boolean) => void
  /**
   * Whether the user has either turned on "prefers reduced motion" in their OS-level settings, or has chosen the option exposed by your site via some UI.
   */
  prefersReducedMotion: boolean | null
  /**
   * Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersReducedMotion`.
   */
  setPrefersReducedMotion: (value: boolean) => void
}

const UserPreferencesContext = createContext<PreferencesContext>({} as PreferencesContext)

export interface UserPreferencesProviderProps {
  children: React.ReactNode
  globalClassNames?: {
    prefersDarkColorScheme: string
    prefersReducedData: string
    prefersReducedMotion: string
  }
}

/**
 * Maintains a globally-available data store for the user's a11y preferences.
 *
 * This keeps track of the following properties:
 * - prefersReduceMotion
 * - prefersReducedData
 * - prefersDarkColorScheme
 *
 * It also toggles the following classes on the `<body>` element:
 * - `is-reduced-motion`
 * - `is-reduced-data`
 * - `is-dark-color-scheme`
 *
 * These classes can be customized by passing in a `globalClassNames` object to the provider.
 *
 * For the most part, you should use the `useUserPrefs` interface to work with this context (see `/hooks/use-user-prefs.js`)
 */
export function UserPreferencesProvider({
  children,
  globalClassNames,
}: UserPreferencesProviderProps) {
  const [prefersDarkColorScheme, setPrefersDarkColorScheme] = usePersistedMediaQuery(
    "user-prefs:prefers-color-scheme",
    "(prefers-color-scheme: dark)"
  )

  const [prefersReducedData, setPrefersReducedData] = usePersistedMediaQuery(
    "user-prefs:prefers-reduced-data",
    "(prefers-reduced-data: reduce)"
  )

  const [prefersReducedMotion, setPrefersReducedMotion] = usePersistedMediaQuery(
    "user-prefs:prefers-reduced-motion",
    "(prefers-reduced-motion: reduce)"
  )

  // Anytime a localStorage value changes — including on initial render — update it:
  useEffect(() => {
    document.body.classList[prefersReducedMotion ? "add" : "remove"](
      globalClassNames?.prefersReducedMotion || "is-reduced-motion"
    )
  }, [globalClassNames?.prefersReducedMotion, prefersReducedMotion])

  useEffect(() => {
    document.body.classList[prefersReducedData ? "add" : "remove"](
      globalClassNames?.prefersReducedData || "is-reduced-data"
    )
  }, [globalClassNames?.prefersReducedData, prefersReducedData])

  useEffect(() => {
    document.body.classList[prefersDarkColorScheme ? "add" : "remove"](
      globalClassNames?.prefersDarkColorScheme || "is-dark-color-scheme"
    )
  }, [globalClassNames?.prefersDarkColorScheme, prefersDarkColorScheme])

  return (
    <UserPreferencesContext.Provider
      value={{
        prefersDarkColorScheme,
        setPrefersDarkColorScheme,
        prefersReducedData,
        setPrefersReducedData,
        prefersReducedMotion,
        setPrefersReducedMotion,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  )
}

export function useUserPrefs() {
  return useContext(UserPreferencesContext)
}
