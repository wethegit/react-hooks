import { useState, useRef, useEffect, useCallback } from "react"

const useInView = (threshold = 0.3, once = true, setInViewIfScrolledPast = true) => {
  const [isIntersecting, setIntersecting] = useState(false)
  const [targetRef, setTargetRef] = useState(null)
  const observerRef = useRef(null)
  const optionsRef = useRef(typeof threshold === "number" ? { threshold } : threshold)

  const observerCallback = useCallback(
    ([entry], observer) => {
      const isVisible =
        entry.isIntersecting ||
        (setInViewIfScrolledPast && entry.boundingClientRect.top < 0)
      setIntersecting(isVisible)
      if (once && isVisible) observer.unobserve(entry.target)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [once]
  )

  useEffect(() => {
    if (observerRef.current) return

    if (!targetRef) return

    observerRef.current = new IntersectionObserver(observerCallback, optionsRef.current)
    observerRef.current.observe(targetRef)

    return () => {
      if (observerRef.current) observerRef.current.unobserve(targetRef)
    }
  }, [observerCallback, targetRef])

  return [setTargetRef, isIntersecting, targetRef]
}

export { useInView }
