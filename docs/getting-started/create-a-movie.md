---
sidebar_position: 2
---

# Create a Movie

In this tutorial, you'll learn how to create a movie with Etro.

## What is a Movie?

The movie is the main object that you'll use to compose and render your video. It uses a list of layers and a list of effects to render the video to a `<canvas>` element and an [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext). You can also record the movie to a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

## Import Etro

To get started, you'll need to import Etro into your project. You can do this by importing the `etro` module:

```js
import etro from 'etro';
```

## Create a Canvas

Next, you'll need to create a canvas element to render your movie to. You can do this by creating a new `HTMLCanvasElement`:

```js
const canvas = document.createElement('canvas');
```

Then, you can add the canvas to the DOM:

```js
document.body.appendChild(canvas);
```

## Create the Movie

Now, you can create a new `etro.Movie` instance:

```js
const movie = new etro.Movie({
  canvas,
})
```

## Next

Now that you have a movie, you can [add layers](/docs/getting-started/add-layers).
