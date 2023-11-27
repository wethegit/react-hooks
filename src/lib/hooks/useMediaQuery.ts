import { useEffect, useState } from "react"

/**
 * React hook for matching a media query
 * It returns `null` if the `window` object is not available, e.g. during SSR. Or a boolean if the media query matches or not.
 */
export function useMediaQuery(mediaQueryString: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)

    const listener = () => setMatches(!!mediaQueryList.matches)

    mediaQueryList.addEventListener("change", listener)

    // Call the listener() function immediately to set the local
    // state as soon as possible.
    listener()

    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [mediaQueryString])

  return matches
}
