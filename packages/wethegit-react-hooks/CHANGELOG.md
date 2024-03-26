# @wethegit/react-hooks

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
