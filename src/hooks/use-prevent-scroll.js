import { useEffect } from "react"

const usePreventScroll = (state) => {
  const cleanUpBodyStyle = () => {
    if (!window) return
    const bodyStyleAttr = document.body.getAttribute("style")
    if (bodyStyleAttr)
      document.body.style = bodyStyleAttr.replace("overflow: hidden;", "")
  }

  useEffect(() => {
    if (state) document.body.style.overflow = "hidden"
    else cleanUpBodyStyle()
    return () => cleanUpBodyStyle()
  }, [state])
}

export { usePreventScroll }
