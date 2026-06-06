---
sidebar_position: 3
---

# Add Layers

## What is a Layer?

A layer is a piece of visual and/or audio source content. Layers can be concatenated and composited onto the movie. Etro comes with a few built-in layers, but you can also create your own.

## Add a Layer

Use `etro.layer.Visual` to add a solid color layer to your movie:

```js
const layer = new etro.layer.Visual({
  startTime: 0,
  duration: 5,
  background: etro.parseColor("blue"),
});
```

Then, add the layer to the movie to include it in the final output:

```js
movie.layers.push(layer);
```
