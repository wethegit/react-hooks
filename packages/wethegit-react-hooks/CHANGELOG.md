# @wethegit/react-hooks

## 3.1.0

### Minor Changes

- [#166](https://github.com/wethegit/react-hooks/pull/166) [`2ae86b7`](https://github.com/wethegit/react-hooks/commit/2ae86b70bd767459308128628484e109a8bc9085) Thanks [@marlonmarcello](https://github.com/marlonmarcello)! - Updates React version support and deprecates useAsync

## 3.0.1

### Patch Changes

- [#39](https://github.com/wethegit/react-hooks/pull/39) [`ab04588`](https://github.com/wethegit/react-hooks/commit/ab045882b9a0c2badd3c8785a3ce86094689a27e) Thanks [@andrewrubin](https://github.com/andrewrubin)! - Bumping patch version due to preexisting 3.0.0 package release.

## 3.0.0

### Major Changes

- [#17](https://github.com/wethegit/react-hooks/pull/17) [`0391dd9`](https://github.com/wethegit/react-hooks/commit/0391dd91677ce3c9d7e8237044bd583077257af8) Thanks [@andrewrubin](https://github.com/andrewrubin)! - ## What does this update add?
  Updates the `useInView` API to support an IntersectionObserver options object.

  ## Breaking changes

  - The default value for the `threshold` argument (renamed under the hood to `observerOptions`) was changed from `0.3` to `0`. This update was made in order to minimize opinions, and set this hook to behave as an IntersectionObserver behaves **by default**.
  - The `once` argument now defaults to `false`. This update was made in order to minimize opinions, and set this hook to behave as an IntersectionObserver behaves **by default**.

## 2.0.4

### Patch Changes

- [#14](https://github.com/wethegit/react-hooks/pull/14) [`ac38ad4`](https://github.com/wethegit/react-hooks/commit/ac38ad499b6de8b2a669a35c249b8ec43e1b3caa) Thanks [@marlonmarcello](https://github.com/marlonmarcello)! - fix: support commonjs

## 2.0.3

### Patch Changes

- fix: changeset

## 2.0.2

### Major Changes

- [#12](https://github.com/wethegit/react-hooks/pull/12) [`5687f5d`](https://github.com/wethegit/react-hooks/commit/5687f5d2251219c8f294ec8d7fcaa354ab65616f) Thanks [@marlonmarcello](https://github.com/marlonmarcello)! - [hooks] fix(useInView): returned element type based on generic

## 2.0.1

### Minor Changes

- [#10](https://github.com/wethegit/react-hooks/pull/10) - hotfix: types exports

## 2.0.0

### Major Changes

- [#6](https://github.com/wethegit/react-hooks/pull/6) [`806244e`](https://github.com/wethegit/react-hooks/commit/806244e6a92d9998e4693088adc27fe6aee7958b) Thanks [@marlonmarcello](https://github.com/marlonmarcello)! - New features:

  1. `typescript` and exported types
  2. `changeset` for version control
  3. documentation with `docusaurus`
  4. `useAnimatePresence`, hook for animating components in/out of DOM
  5. `useMediaQuery`, hook for matching a media query and listening to changes
  6. `usePersistedMediaQuery`, hook for matching a media query, listening to changes and persisting on `localStorage`

  Fixes:

  - Fixes #5 with new `usePersisteMediaQuery` hook

  Changes:

  - `useLocalStorage` is now `usePersistedState`
