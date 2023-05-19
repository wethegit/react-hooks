import { createContext, useEffect, useRef } from "react"
import { useLocalStorage } from "../hooks/use-local-storage"
import { castToBool } from "../utils/cast-to-bool"

/**
 * @typedef {Object} PreferencesContext
 * @prop {Boolean} [prefersDarkColorScheme=false] - Whether the user has either turned on "prefers dark color scheme" in their OS-level settings, or has chosen the option exposed by your site via some UI.
 * @prop {Function} togglePrefersDarkColorScheme - Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersDarkColorScheme`.
 * @prop {Boolean} [prefersReducedData=false] - Whether the user has either turned on "prefers reduced data" in their OS-level settings, or has chosen the option exposed by your site via some UI.
 * @prop {Function} togglePrefersReducedData - Accepts a single argument (Boolean) which toggles the `localStorage` state of `prefersReducedData`.
 * @prop {Boolean} [prefersReducedMotion=false] - Whether the user has either turned on "prefers reduced motion" in their OS-level settings, or has chosen the option exposed by your site via some UI.
 * @prop {Function} togglePrefersReducedMotion - Accepts a single property (Boolean) which toggles the `localStorage` state of `prefersReducedMotion`.
 */

/** @type {PreferencesContext} */
const UserPreferencesContext = createContext({})

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
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {React.Context<PreferencesContext>.Provider}
 */
const UserPreferencesProvider = ({ children }) => {
  // Create our state for all values we want to store client-side:
  const [prefersReducedMotion, setPrefersReducedMotion] = useLocalStorage(
    "prefersReducedMotion",
    false
  )
  const [prefersReducedData, setPrefersReducedData] = useLocalStorage(
    "prefersReducedData",
    false
  )
  const [prefersDarkColorScheme, setPrefersDarkColorScheme] = useLocalStorage(
    "prefersDarkColorScheme",
    false
  )

  // Bind references to the user's operating-system-level settings
  // for reduced motion, reduced data, and prefers dark mode:
  const reducedMotionMediaQuery = useRef(null)
  const reducedDataMediaQuery = useRef(null)
  const colorSchemeMediaQuery = useRef(null)

  useEffect(() => {
    reducedMotionMediaQuery.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    reducedDataMediaQuery.current = window.matchMedia(
      "(prefers-reduced-data: reduce)"
    ).matches
    colorSchemeMediaQuery.current = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    // Update our settings if there are any operating-system-level settings on the user's end:

    if (reducedMotionMediaQuery.current) setPrefersReducedMotion(true)
    if (reducedDataMediaQuery.current) setPrefersReducedData(true)
    if (colorSchemeMediaQuery.current) setPrefersDarkColorScheme(true)
  }, [setPrefersDarkColorScheme, setPrefersReducedData, setPrefersReducedMotion])

  // Anytime a localStorage value changes — including on initial render — update it:
  useEffect(() => {
    document.body.classList[castToBool(prefersReducedMotion) ? "add" : "remove"](
      "is-reduced-motion"
    )
  }, [prefersReducedMotion])

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

export { UserPreferencesProvider, UserPreferencesContext }
