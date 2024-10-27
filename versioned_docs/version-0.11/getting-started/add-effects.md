---
sidebar_position: 4
---

# Add Effects

## What is an Effect?

An effect is a filter that you can add to a layer or movie to modify the visual output. Currently, only visual effects are supported, but audio effects will be added in the future.

Etro comes with a few built-in effects, but you can also create your own.

## Add an Effect

Let's add a blur effect to the movie:

```js
movie.effects.push(
  new etro.effect.GaussianBlur({
    radius: 10,
  })
);
```
