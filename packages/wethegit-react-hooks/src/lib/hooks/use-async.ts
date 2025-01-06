import { useCallback, useEffect, useState } from "react"

export enum Status {
  Idle = "idle",
  Pending = "pending",
  Success = "success",
  Error = "error",
}

export interface useAsyncReturn<T> {
  run: () => void
  data: T | null
  status: Status
  error: Error | null
}

/**
 * useAsync
 * @deprecated Use the new React `use` or `cache` APIs or `useDeferredValue` hook.
 * @param {Function} asyncFn - The asynchronous function to run
 * @param {Boolean} [deferred=false] - whether to save the function to a variable for later use (true) or run it instantly (false).
 * @returns {Object} Properties include a run() function which is used to subsequently call the function (if deferred); the resulting data; and the status and error states.
 *
 * @example
 * Run it instantly:
 * const { data, status, error } = useAsync(() => fetch("https://my-cool-api.com/some-endpoint"))
 * console.log(data)
 *
 * Deferred execution:
 * const { run, data, status, error } = useAsync(() => fetch("https://my-cool-api.com/some-endpoint"))
 * const handleClick = (event) => run()
 *
 */
export function useAsync<T>(
  asyncFn: () => Promise<T>,
  deferred: boolean = false
): useAsyncReturn<T> {
  const [status, setStatus] = useState(Status.Idle)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState(null)

  // Wrapping the call to the async function in a callback which manages some state
  // around the function itself. This also has the benefit of "caching" it, so the asyncFn
  // won't get redeclared on every render:
  const run = useCallback(() => {
    setStatus(Status.Pending)

    asyncFn()
      .then((res) => {
        setData(res)
        setStatus(Status.Success)
      })
      .catch((err) => {
        setError(err)
        setStatus(Status.Error)
      })
  }, [asyncFn])

  // Default is to call run() as soon as the hook is used, but you can also "defer" its
  // usage, since it's stored in the returned "run" value:
  useEffect(() => {
    if (!deferred) run()
  }, [deferred, run])

  return { run, data, status, error }
}
