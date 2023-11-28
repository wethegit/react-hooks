import { useState } from "react"

import { UserPreferencesProvider, useAnimatePresence } from "@wethegit/react-hooks"

function Toggle() {
  const [isVisible, setVisible] = useState(false)
  const { reveal, shouldRender, runningDuration } = useAnimatePresence({
    isVisible,
  })

  return (
    <>
      <button onClick={() => setVisible((cur) => !cur)}>Toggle</button>

      {shouldRender && (
        <div
          style={{
            opacity: reveal ? 1 : 0,
            transition: `opacity ${runningDuration}ms`,
          }}
        >
          ✨ Hello world ✨
        </div>
      )}
    </>
  )
}

export function AnimatePresenceDemo() {
  return (
    <UserPreferencesProvider>
      <Toggle />
    </UserPreferencesProvider>
  )
}
