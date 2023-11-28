import React, { useCallback, useState } from "react"
import ReactDOM from "react-dom"
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
  const [animateIn, setAnimateIn] = useState(false)
  const { shouldRender, reveal, runningDuration } = useAnimatePresence({
    isVisible: animateIn,
  })

  return (
    <>
      <section>
        <h2>useAsync</h2>
        <p>Status: {status}</p>
        <p>Error: {JSON.stringify(error, null, 2)}</p>
        <p>Data:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
      <section ref={setSectionRef} className={sectionInView ? "isInView" : ""}>
        <h2>useInView</h2>
        <p>A red border means it&apos;s in view!</p>
      </section>
      <section>
        <h2>useAnimatePresence</h2>
        <p>This will animate in and out of the dom with a transition</p>
        <button onClick={() => setAnimateIn((cur) => !cur)}>Reveal!</button>
        {shouldRender && (
          <section
            style={{
              "--transition-duration": `${runningDuration}ms`,
            }}
            className={`animatePresence ${reveal && "animatePresenceReveal"}`}
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

ReactDOM.render(
  <React.StrictMode>
    <UserPreferencesProvider>
      <App />
    </UserPreferencesProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
