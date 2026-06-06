---
sidebar_position: 5
---

# Render the Movie

You can render your movie to a `<canvas>` element, stream it with WebRTC or record it to a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

## Render to Canvas

To render your movie to the provided `<canvas>` element and the movie's [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext), can use the `play()` method:

```js
movie.play().then(() => {
  console.log("Movie finished playing");
});
```

## Stream

Use `stream()` to stream your movie with WebRTC:

```ts
movie
  .stream({
    frameRate: 30,
    onStart: (stream: MediaStream) => {
      console.log(`Streaming ${stream.getTracks().length} tracks`);
    },
  })
  .then(() => {
    console.log("Stream reached the end or was interrupted");
  });
```

## Record to Blob

Use `record()` to save your movie to a [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob):

```js
movie
  .record({
    frameRate: 30,
  })
  .then((blob) => {
    console.log(`Recorded ${blob.size} bytes`);
  });
```
