import React from "react"
import ReactDOM from "react-dom"
import {
  useAsync,
  useInView,
  useLocalStorage,
  useUserPrefs,
  UserPreferencesProvider,
} from "./lib"

const IN_VIEW_CLASSNAME = "in-view"

const FRUITS = ["Apple", "Banana", "Orange"]

function App() {
  const { data, status, error } = useAsync(() =>
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then(({ height, weight, id, name }) => ({ height, weight, id, name }))
  )
  const [setSectionRef, sectionInView] = useInView()
  const [fruit, setFruit] = useLocalStorage("fruit")
  const { prefersReducedMotion } = useUserPrefs()

  return (
    <>
      <section>
        <h2>useAsync</h2>
        <p>Status: {status}</p>
        <p>Error: {JSON.stringify(error, null, 2)}</p>
        <p>Data:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
      <section ref={setSectionRef} className={sectionInView ? IN_VIEW_CLASSNAME : ""}>
        <h2>useInView</h2>
        <p>Sit quis ut id sit anim. Enim qui est ut tempor sunt.</p>
      </section>
      <section>
        <h2>useLocalStorage</h2>
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
