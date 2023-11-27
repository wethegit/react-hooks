import { useEffect } from "react"

/**
 * usePreventScroll
 * Toggles the `overflow: hidden` CSS declaration on the `<body>` DOM element.
 *
 * @param {Boolean} state - Whether to prevent scrolling on the `<body>` element.
 *
 */
export function usePreventScroll(state: boolean) {
  const cleanUpBodyStyle = () => {
    if (!window) return

    const bodyStyleAttr = document.body.getAttribute("style")

    if (bodyStyleAttr)
      document.body.setAttribute("style", bodyStyleAttr.replace("overflow: hidden;", ""))
  }

  useEffect(() => {
    if (state) document.body.style.overflow = "hidden"
    else cleanUpBodyStyle()
    return () => cleanUpBodyStyle()
  }, [state])
}
