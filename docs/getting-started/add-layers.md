---
sidebar_position: 3
---

# Add Layers

In this section, you'll learn how to add layers to your movie.

## What is a Layer?

A layer is a visual and/or audio element that you can add to a movie. You can add multiple layers to a movie to create complex compositions.

Etro comes with a few built-in layers, but you can also create your own custom layers.

## Add a Layer

To add a solid color layer to your movie, you can use the `etro.layer.Visual` class:

```js
const layer = new etro.layer.Visual({
  startTime: 0,
  duration: 5,
  background: etro.parseColor('blue'),
});
```

Then, you can add the layer to your movie:

```js
movie.layers.push(layer);
```

## Next

Now that you have a layer, you can [add effects](/docs/getting-started/add-effects).
