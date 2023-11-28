# useInView

▸ **useInView**(`threshold?`, `once?`, `setInViewIfScrolledPast?`): [`InViewReturn`](#return)

Detects whether a DOM element is in the viewport, using the `IntersectionObserver` API.
`useInView([threshold], [once], [setInViewIfScrolledPast])`

## Parameters

| Arguments                | Type        | Description |
| ------------------------ | ----------- | ----------- |
| threshold                | Float       | Default: `0.3`. A value between 0 and 1, which maps to a percentage of the DOM element's height. Once this amount of the DOM element is within the viewport, the hook will consider the element "in view". This value is directly passed to an `IntersectionObserver`, so for more details on what this argument means, check out the [IntersectionObserver docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) on MDN. |
| once                     | Boolean     | Default: `true`. Whether to detach the observer from the DOM element after the first intersection callback is invoked. |
| setInViewIfScrolledPast  | Boolean     | Default: `true`. Whether to consider the element already "in-view", if the top of it is already scrolled beyond the bounds of the viewport when this hook is called. |

## Return

`useInView` returns an Array containing the following values:

| Return value             | Type        | Description |
| ------------------------ | ----------- | ----------- |
| setTargetRef             | Function    | Pass this function to the `ref` prop of the DOM element you want to track visibility of. |
| isIntersecting           | Boolean     | Whether the target DOM element is in view, based on the provided `threshold` argument. |
| targetRef                | React Ref   | The DOM node itself, once set by the `setTargetRef` function. |

## Usage

Toggling a className on and off, based on whether a `<section>` is in view:

```jsx
import { useInView } from "@wethegit/react-hooks"

const IN_VIEW_CLASSNAME = "in-view"

const MyComponent = () => {
  const [setSectionRef, sectionInView, section] = useInView()

  return (
    <>
      <section ref={setSectionRef} className={sectionInView ? "in-view" : ""}>
        <p>Sit quis ut id sit anim. Enim qui est ut tempor sunt.</p>
      </section>
    </>
  )
}
```