---
"@wethegit/react-hooks": major
"docs": major
---
## What does this update add?
Updates the `useInView` API to support an IntersectionObserver options object.

## Breaking changes
- The default value for the `threshold` argument (renamed under the hood to `observerOptions`) was changed from `0.3` to `0`. This update was made in order to minimize opinions, and set this hook to behave as an IntersectionObserver behaves **by default**.
- The `once` argument now defaults to `false`. This update was made in order to minimize opinions, and set this hook to behave as an IntersectionObserver behaves **by default**.
