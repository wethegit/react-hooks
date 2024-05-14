# docs

## 1.0.0

### Major Changes

- [#17](https://github.com/wethegit/react-hooks/pull/17) [`0391dd9`](https://github.com/wethegit/react-hooks/commit/0391dd91677ce3c9d7e8237044bd583077257af8) Thanks [@andrewrubin](https://github.com/andrewrubin)! - ## What does this update add?
  Updates the `useInView` API to support an IntersectionObserver options object.

  ## Breaking changes

  - The default value for the `threshold` argument (renamed under the hood to `observerOptions`) was changed from `0.3` to `0`. This update was made in order to minimize opinions, and set this hook to behave as an IntersectionObserver behaves **by default**.
  - The `once` argument now defaults to `false`. This update was made in order to minimize opinions, and set this hook to behave as an IntersectionObserver behaves **by default**.

### Patch Changes

- Updated dependencies [[`0391dd9`](https://github.com/wethegit/react-hooks/commit/0391dd91677ce3c9d7e8237044bd583077257af8)]:
  - @wethegit/react-hooks@3.0.0
