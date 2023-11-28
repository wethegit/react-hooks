import { useEffect, useRef, useState } from "react"

export enum AnimatePresenceState {
  ENTERED = "entered",
  EXITED = "exited",
  EXITING = "exiting",
  ENTERING = "entering",
  MOUNTED = "mounted",
}

export interface AnimatePresenceReturn {
  /**
   * Render your component **only** if `shouldRender` is `true`.
   */
  render: boolean
  /**
   * `shouldAnimate` is an shorthand for animating the component in and out.
   */
  animate: boolean
  /**
   * Duration of the current animation. Not necessary to use, but very useful if you have different durations for enter and exit.
   * You can use this so you don't have to repeat those values in your styles.
   */
  currentDuration: number
  /**
   * Current state of the animation. Use it for full control of the animation in all states.
   */
  state: AnimatePresenceState
}

export interface AnimatePresenceProps {
  /**
   * Visibility of the component.
   */
  isVisible: boolean
  /**
   * Initial state of the animation, if `true` the component won't animate in on render.
   * @defaultValue false
   */
  initial?: boolean
  /**
   * Duration in miliseconds or object with enter and exit duration in miliseconds.
   * @defaultValue = 300
   */
  duration?:
    | number
    | {
        enter: number
        exit: number
      }
}

/**
 * Helps you animate components in and out of the DOM
 *
 * @param {AnimatePresenceProps} props
 * @example
 * ```tsx
 * import { useState } from 'react'
 * import { useAnimatePresence } from '@wethegit/react-hooks'
 *
 * function Comp() {
 *   const [isVisibile, setIsVisible] = useState();
 *   const { render, animate } = useAnimatePresence({
 *     isVisible
 *   })
 *
 *   return (
 *     <>
 *       <button onClick={() => setIsVisible(cur => !cur)}>{render && 'Hide' : 'Show'}</button>
 *       {render && (
 *         <div classNames={`component ${animate && 'component-in'}`>Animate me</div>
 *       )}
 *     </>
 *   )
 * }
 * ```
 */
export function useAnimatePresence({
  initial = false,
  duration = 300,
  isVisible = false,
}: AnimatePresenceProps): AnimatePresenceReturn {
  const skipMountAnimation = useRef<boolean>(initial)
  const [state, setState] = useState<AnimatePresenceState>(
    skipMountAnimation.current
      ? AnimatePresenceState.ENTERED
      : AnimatePresenceState.EXITED
  )
  const durationEnter = typeof duration === "number" ? duration : duration.enter

  const durationExit = typeof duration === "number" ? duration : duration.exit

  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    clearTimeout(timer.current)

    if (state === AnimatePresenceState.MOUNTED) {
      timer.current = setTimeout(() => {
        setState(AnimatePresenceState.ENTERING)
      }, 100)
    } else if (state === AnimatePresenceState.ENTERING) {
      timer.current = setTimeout(() => {
        setState(AnimatePresenceState.ENTERED)
      }, durationEnter)
    } else if (state === AnimatePresenceState.EXITING) {
      timer.current = setTimeout(() => {
        setState(AnimatePresenceState.EXITED)
      }, durationExit)
    }
  }, [durationEnter, durationExit, state])

  useEffect(() => {
    if (skipMountAnimation.current) {
      skipMountAnimation.current = false
      return
    }

    setState((current) => {
      if (isVisible) {
        if (
          current === AnimatePresenceState.EXITED ||
          current === AnimatePresenceState.EXITING
        ) {
          return AnimatePresenceState.MOUNTED
        }
      } else if (
        current !== AnimatePresenceState.EXITED &&
        current !== AnimatePresenceState.EXITING
      ) {
        return AnimatePresenceState.EXITING
      }

      return current
    })
  }, [isVisible])

  return {
    render: state !== AnimatePresenceState.EXITED,
    animate:
      state === AnimatePresenceState.ENTERING || state === AnimatePresenceState.ENTERED,
    currentDuration:
      state === AnimatePresenceState.ENTERING ? durationEnter : durationExit,
    state,
  }
}
