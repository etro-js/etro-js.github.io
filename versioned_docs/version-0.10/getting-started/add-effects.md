---
sidebar_position: 4
---

# Add Effects

In this section, you'll learn how to add effects to your movie.

## What is an Effect?

An effect is a filter that you can add to a layer or movie to modify the visual output. Currently, only visual effects are supported, but audio effects will be added in the future.

Etro comes with a few built-in effects, but you can also create your own custom effects.

## Add an Effect

To add a blur effect to your movie, you can use the `etro.effect.GaussianBlur` class:

```js
const effect = new etro.effect.GaussianBlur({
  radius: 10,
});
```

Then, you can add the effect to your movie before you render it:

```js
movie.effects.push(effect);
```

## Next

Now that you have an effect, you can [render the movie](render-the-movie)!
