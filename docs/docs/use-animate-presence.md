# useAnimatePresence

▸ **useAnimatePresence**(`props`: [`AnimatePresenceProps`](#animatepresenceprops)): [`AnimatePresenceReturn`](#animatepresencereturn)

AnimatePresence is a very simple hook that helps you animate components in and out.
You are in full control of the animation and the hook only provides you with the current state and the current duration of the animation.
It also takes care of accessibility by forcing duration to `0` if the user has enabled reduced motion.

## Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AnimatePresenceProps`](#animatepresenceprops) |

### AnimatePresenceProps

#### duration

• `Optional` **duration**: `number` \| \{ `enter`: `number` ; `exit`: `number`  }

Duration in miliseconds or object with enter and exit duration in miliseconds

**`Default Value`**

```ts
= 300
```

#### initial

• `Optional` **initial**: `boolean`

Initial state of the animation, if `true` the component won't animate in on render

**`Default Value`**

```ts
false
```

#### isVisible

• **isVisible**: `boolean`

Visibility of the component

## Returns

### AnimatePresenceReturn

#### reveal

• **reveal**: `boolean`

`reveal` is an shorthand for animating the component in and out

#### runningDuration

• **runningDuration**: `number`

Duration of the current animation

#### shouldRender

• **shouldRender**: `boolean`

Render your component **only** if `shouldRender` is `true`

#### state

• **state**: `AnimatePresenceState`

```ts
export enum AnimatePresenceState {
  ENTERED = "entered",
  EXITED = "exited",
  EXITING = "exiting",
  ENTERING = "entering",
  MOUNTED = "mounted",
}
```

Current state of the animation. Use it for full control of the animation in all states