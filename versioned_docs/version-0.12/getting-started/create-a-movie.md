---
sidebar_position: 2
---

# Create a Movie

## What is a Movie?

In Etro, a movie renders one or more layers of content to a `<canvas>` element and [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) or a [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

## Import Etro

To get started, import Etro into your project:

```js
import etro from "etro";
```

## Create a Canvas

Next, create an HTML `<canvas>` element to render your movie to and display it on the page:

```js
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
```

## Create the Movie

Now, you can create a new `etro.Movie` instance:

```js
const movie = new etro.Movie({
  canvas,
});
```
