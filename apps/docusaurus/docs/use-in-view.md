# useInView

▸ **useInView**(`observerOptions?`, `once?`, `setInViewIfScrolledPast?`): [`InViewReturn`](#return)

Detects whether a DOM element is in the viewport, using the `IntersectionObserver` API.
`useInView([observerOptions], [once], [setInViewIfScrolledPast])`

## Usage

Toggling a className on and off, based on whether a `<section>` is in view:

```jsx
import { useInView } from "@wethegit/react-hooks"

const IN_VIEW_CLASSNAME = "in-view"

const MyComponent = () => {
  const [setSectionRef, sectionInView, sectionElement] = useInView()

  return (
    <>
      <section ref={setSectionRef} className={sectionInView ? "in-view" : ""}>
        <p>Sit quis ut id sit anim. Enim qui est ut tempor sunt.</p>
      </section>
    </>
  )
}
```

You can use a custom observerOptions "threshold" to tell the IntersectionObserver callback to fire when the element is 30% visible, in either direction:
```jsx
const [setSectionRef, sectionInView, sectionElement] = useInView(0.3)
```

You can also pass a custom `observerOptions` object. In this example, we're telling the callback to fire when the element is 50% visible ("on enter"), but also to wait until the element is scrolled out of the top of the viewport by at least 30% of the viewport's height before firing it "on exit":
```jsx
const [setSectionRef, sectionInView, sectionElement] = useInView({
  threshold: 0.5,
  rootMargin: "30% 0px 0px 0px"
})
```

## Parameters

| Arguments                | Type                                | Description |
| ------------------------ | ----------------------------------- | ----------- |
| observerOptions          | Number, IntersectionObserverInit    | Default: `0`. Number between 0 and 1, or an [IntersectionObserver options object](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer). |
| once                     | Boolean                             | Default: `false`. Whether to detach the observer from the DOM element after the first intersection callback is invoked. |
| setInViewIfScrolledPast  | Boolean                             | Default: `false`. Whether to consider the element already "in-view", if it is already scrolled beyond the bounds of the viewport when the target element is mounted. |

## Return

`useInView` returns an Array containing the following values:

| Return value             | Type        | Description |
| ------------------------ | ----------- | ----------- |
| setTargetRef             | Function    | Pass this function to the `ref` prop of the DOM element you want to track visibility of. |
| isIntersecting           | Boolean     | Whether the target DOM element is in view, based on the provided `observerOptions` argument. |
| targetRef                | React Ref   | The DOM node itself, once set by the `setTargetRef` function. |

