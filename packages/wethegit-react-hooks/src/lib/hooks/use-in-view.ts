import { useState, useRef, useEffect, useCallback } from "react"

export type InViewHook = [
  /**
   * Pass this function to the `ref` prop of the DOM element you want to track visibility of.
   */
  (node: HTMLElement) => void,
  /**
   * Whether the target DOM element is in view, based on the provided `threshold` argument.
   */
  boolean,
  /**
   * The DOM node itself, once set by the `setTargetRef` function.
   */
  HTMLElement | undefined,
]

/**
 * useInView
 *
 * @param {Number} threshold - A value between 0 and 1, which maps to a percentage of the DOM element's height. Once this amount of the DOM element is within the viewport, the hook will consider the element "in view". This value is directly passed to an `IntersectionObserver`
 * @param {Boolean} [once=true] - Whether to detach the observer from the DOM element after the first intersection callback is invoked
 * @param {Boolean} [setInViewIfScrolledPast=false] - Whether to consider the element already "in-view", if the top of it is already scrolled beyond the bounds of the viewport when this hook is called.
 *
 * @example
 * const [setSectionRef, sectionInView] = useInView()
 * <section ref={setSectionRef} className={sectionInView ? "in-view" : ""}>
 *
 */
export function useInView(
  threshold: number = 0.3,
  once: boolean = true,
  setInViewIfScrolledPast: boolean = false
): InViewHook {
  const [isIntersecting, setIntersecting] = useState(false)
  const [targetRef, setTargetRef] = useState<HTMLElement>()
  const observerRef = useRef<IntersectionObserver>()

  const observerCallback = useCallback<IntersectionObserverCallback>(
    ([entry], observer) => {
      const isVisible =
        entry.isIntersecting ||
        (setInViewIfScrolledPast && entry.boundingClientRect.top < 0)

      setIntersecting(isVisible)

      if (once && isVisible) observer.unobserve(entry.target)
    },
    [once, setInViewIfScrolledPast]
  )

  useEffect(() => {
    if (observerRef.current) return

    if (!targetRef) return

    const optionsRef = typeof threshold === "number" ? { threshold } : threshold

    observerRef.current = new IntersectionObserver(observerCallback, optionsRef)

    observerRef.current.observe(targetRef)

    return () => {
      if (observerRef.current) observerRef.current.unobserve(targetRef)
    }
  }, [observerCallback, targetRef, threshold])

  return [setTargetRef, isIntersecting, targetRef]
}
