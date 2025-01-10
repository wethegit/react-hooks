import { useCallback, useEffect, useMemo, useState } from "react"

export type InViewHook<T extends HTMLElement> = [
  /**
   * Pass this function to the `ref` prop of the DOM element you want to track visibility of.
   */
  (node: T) => void,
  /**
   * Whether the target DOM element is in view, based on the provided options.
   */
  boolean,
  /**
   * The DOM node itself, once set by the `setTargetRef` function.
   */
  T | undefined,
]

/**
 * useInView
 *
 * @param {number|IntersectionObserverInit} [observerOptions=0] - Number between 0 and 1, or an IntersectionObserver options object.
 * @param {Boolean} [once=false] - Whether to detach the observer from the DOM element after the first intersection callback is invoked.
 * @param {Boolean} [setInViewIfScrolledPast=false] - Whether to consider the element already "in-view", if it is already scrolled beyond the bounds of the viewport when the target element is mounted.
 *
 * @example
 * const [setSectionRef, sectionInView] = useInView(0.3);
 * <section ref={setSectionRef} className={sectionInView ? "in-view" : ""}>
 *
 * @example
 * const [setSectionRef, sectionInView] = useInView({ threshold: 0.3, rootMargin: "0px 40% 0px 0px" });
 * <section ref={setSectionRef} className={sectionInView ? "in-view" : ""}>
 */
export function useInView<T extends HTMLElement>(
  observerOptions: number | IntersectionObserverInit = 0,
  once: boolean = false,
  setInViewIfScrolledPast: boolean = false
): InViewHook<T> {
  const [isIntersecting, setIntersecting] = useState(false)
  const [targetRef, setTargetRef] = useState<T>()

  // coerce the observerOptions input into what's expected by the IntersectionObserver interface:
  const settings = useMemo(
    () =>
      typeof observerOptions === "number"
        ? { threshold: observerOptions }
        : observerOptions,
    [observerOptions]
  )

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

  const observer = useMemo<IntersectionObserver | undefined>(() => {
    if (typeof IntersectionObserver !== "function") return
    return new IntersectionObserver(observerCallback, settings)
  }, [settings, observerCallback])

  useEffect(() => {
    if (!targetRef || !observer) return

    observer.observe(targetRef)

    return () => {
      if (observer) observer.unobserve(targetRef)
    }
  }, [observer, targetRef])

  return [setTargetRef, isIntersecting, targetRef]
}
