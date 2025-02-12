import React, { useCallback, useState } from "react"
import { createRoot } from "react-dom/client"
import {
  useAnimatePresence,
  useAsync,
  useInView,
  useMediaQuery,
  usePersistedState,
  useUserPrefs,
  UserPreferencesProvider,
} from "./lib"

import "./styles.css"

const FRUITS = ["Apple", "Banana", "Orange"]

function App() {
  const fetchPokemon = useCallback(() => {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then(({ height, weight, id, name }) => ({ height, weight, id, name }))
  }, [])
  const { data, status, error } = useAsync(fetchPokemon)
  const [setSectionRef, sectionInView] = useInView()
  const [fruit, setFruit] = usePersistedState("fruit", "Orange")
  const { prefersReducedMotion, setPrefersReducedMotion } = useUserPrefs()
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [isVisible, setIsVisible] = useState(false)
  const { render, animate, currentDuration } = useAnimatePresence({
    isVisible,
    duration: {
      enter: 500,
      exit: 800,
    },
  })

  return (
    <>
      <span
        className={`inViewTracker ${sectionInView ? "inViewTracker--inView" : ""}`.trim()}
      >
        <code>useInView()</code> state: {sectionInView.toString()}
      </span>
      <section>
        <h2>useAsync</h2>
        <p>Status: {status}</p>
        <p>Error: {JSON.stringify(error, null, 2)}</p>
        <p>Data:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
      <section
        ref={setSectionRef}
        className={`inViewDemo ${sectionInView ? "isInView" : ""}`.trim()}
      >
        <h2>useInView</h2>
        <p>A red border means it&apos;s in view!</p>
      </section>
      <section>
        <h2>useAnimatePresence</h2>
        <p>This will animate in and out of the dom with a transition</p>
        <button onClick={() => setIsVisible((cur) => !cur)}>
          {render ? "Hide" : "Animate!"}
        </button>
        {render && (
          <section
            style={{
              "--duration": `${currentDuration}ms`,
            }}
            className={`animatePresence ${animate && "animatePresenceReveal"}`}
          >
            Heyo! 🦄
          </section>
        )}
      </section>
      <section>
        <h2>usePersistedState</h2>
        <ul>
          {FRUITS.map((f) => (
            <li key={f}>
              <input
                type="radio"
                name="fruit"
                id={f}
                value={f}
                onChange={() => setFruit(f)}
                checked={f === fruit}
              />
              <label htmlFor={f}>{f}</label>
            </li>
          ))}
        </ul>
        {fruit && <p>Your favorite fruit is {fruit}</p>}
      </section>
      <section>
        <h2>useUserPrefs</h2>
        <p>{prefersReducedMotion ? "Reduced motion is on" : "Reduced motion is off"}</p>
        <p>
          You can toggle this manually and it will persist. But the user&apos;s OS
          settings will have priority, so if they change that in their system it will
          overwrite.
        </p>
        <div className={"box"} />
        <button onClick={() => setPrefersReducedMotion(true)}>
          Turn reduce motion ON
        </button>
        <button onClick={() => setPrefersReducedMotion(false)}>
          Turn reduce motion OFF
        </button>
      </section>
      <section className={`${prefersDarkMode ? "isDarkMode" : "isLightMode"}`}>
        <h2>usePersistedMediaQuery</h2>
        <p>{prefersDarkMode ? "Dark mode is on" : "Dark mode is off"}</p>
        <p>
          Change your prefered color scheme in your OS settings or:
          <br />
          Open Developer Tools &gt;&#10; Command + Shift + P &gt; Emulate CSS
          prefers-color-scheme
        </p>
      </section>
    </>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <UserPreferencesProvider>
      <App />
    </UserPreferencesProvider>
  </React.StrictMode>
)
