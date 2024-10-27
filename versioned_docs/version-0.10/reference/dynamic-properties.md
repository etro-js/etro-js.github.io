---
sidebar_position: 5
---

# Dynamic Properties

Dynamic properties are generic values that are automatically evaluated at runtime. There are three types of dynamic properties:

- Constant values
- Keyframe animations
- Functions

## Constant Values

Constant values are the simplest type of dynamic properties. They do not change unless they are manually replaced with a new value.

```ts
const effect = new etro.effect.Channels({
  factors: {
    r: 1,
    g: 0,
    b: 0,
  },
});

// The only way to update constant values is to manually replace them
effect.factors = {
  r: 0,
  g: 1,
  b: 1,
};
```

## Keyframe Animations

Keyframe animations are a list of keyframes that are interpolated between. Each point in the keyframe has a start time and a value:

```ts
const effect = new etro.effect.Channels({
  factors: {
    r: new etro.KeyFrame([
      [0, 1],
      [1, 0],
    ]),
    g: 0,
    b: 0,
  },
});
```

The above example will animate the red channel from 1 to 0 over the course of one second.

## Functions

Functions are JavaScript functions that are called every frame to get the current value. They are useful for creating custom animations:

```ts
const effect = new etro.effect.Channels({
  factors: {
    r: (element: etro.EtroObject, time: number) => {
      return Math.random();
    },
    g: 0,
    b: 0,
  },
});
```

The above example will animate the red channel to a random value every frame.

## Custom Classes

To add a dynamic property to your custom layer or effect, use the `Dynamic` generic type. To evaluate the property on a given frame, use `etro.val()`.

```ts
class MyEffect extends etro.effect.Base {
  foo: Dynamic<number>;

  constructor(foo: Dynamic<number> = 1) {
    super();

    this.foo = foo;
  }

  apply(target: etro.Movie | etro.layer.Base, time: number) {
    super(target, time);

    const foo = etro.val(this, "foo", time);
    // Do something with the evaluated `foo`
  }
}
```
