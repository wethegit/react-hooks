import { useState, useRef, useEffect, useCallback } from "react"

/**
 * @typedef {Object} InViewHook
 * @prop {Function} setTargetRef - Pass this function to the `ref` prop of the DOM element you want to track visibility of.
 * @prop {Boolean} isIntersecting - Whether the target DOM element is in view, based on the provided `threshold` argument.
 * @prop {unknown} targetRef - The DOM node itself, once set by the `setTargetRef` function.
 */

/**
 * useInView
 *
 * @param {Number} threshold - A value between 0 and 1, which maps to a percentage of the DOM element's height. Once this amount of the DOM element is within the viewport, the hook will consider the element "in view". This value is directly passed to an `IntersectionObserver`
 * @param {Boolean} [once=true] - Whether to detach the observer from the DOM element after the first intersection callback is invoked
 * @param {Boolean} [setInViewIfScrolledPast=true] - Whether to consider the element already "in-view", if the top of it is already scrolled beyond the bounds of the viewport when this hook is called.
 * @returns {InViewHook}
 *
 * @example
 * const [setSectionRef, sectionInView] = useInView()
 * <section ref={setSectionRef} className={sectionInView ? "in-view" : ""}>
 *
 */
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
