import React, { createContext, useContext } from "react"

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

/**
 * Maintains a globally-available data store for the user's a11y preferences.
 *
 * This keeps track of the following properties:
 * - prefersReduceMotion
 * - prefersReducedData
 * - prefersDarkColorScheme
 *
 * For the most part, you should use the `useUserPrefs` interface
 * to work with this context (see `/hooks/use-user-prefs.js`)
 */
export function UserPreferencesProvider({ children }: { children: React.ReactNode }) {
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
