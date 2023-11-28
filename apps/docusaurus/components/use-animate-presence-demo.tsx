import { useState } from "react"

import { UserPreferencesProvider, useAnimatePresence } from "@wethegit/react-hooks"

function Toggle() {
  const [isVisible, setVisible] = useState(false)
  const { animate, render, currentDuration } = useAnimatePresence({
    isVisible,
  })

  return (
    <>
      <button onClick={() => setVisible((cur) => !cur)}>Toggle</button>

      {render && (
        <div
          style={{
            opacity: animate ? 1 : 0,
            transition: `opacity ${currentDuration}ms`,
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
