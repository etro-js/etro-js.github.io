---
sidebar_position: 1
---

# Movies

In Etro, movies are video-processing projects. A movie serves as a container for compositing layers, applying global effects to the result and outputting the final result.

## Constructor

The constructor requires a `<canvas>` element to draw on. You can provide the following options in addition:

```ts
const movie = new etro.Movie({
  canvas: document.querySelector("canvas"), // HTML canvas element to draw on
  actx: new AudioContext(), // Web Audio context to play through (creates a new context with default settings if omitted)
  background: etro.parseColor("#f0f"), // background color (dynamic, defaults to black)
  repeat: false, // whether to loop forever while playing and streaming (defaults to false)
});
```

## Rendering

There are several ways to access a movie's output:

- **Playing**: Draws all the movie's visual layers to the canvas and plays all its audio layers to the audio context in real time.
- **Streaming**: Draws the movie to the canvas and plays it through the audio context and provides a real time WebRTC stream.
- **Recording**: Draws the movie to the canvas and plays it through the audio context and saves the result to a video or audio blob.
- **Refreshing**: Draws a single frame to the canvas.

### `play()`

```ts
await movie.play({
  onStart: () => {
    console.log("All resources are loaded, and playback has started.");
  }, // `onStart` is optional
});
console.log("The movie is done playing");
```

### `stream()`

```ts
await movie.stream({
  frameRate: 60, // fps for the stream's video tracks
  duration: 5, // how long to stream, in seconds (by default, the movie will stream to the end)
  video: true, // whether to render visual layers (defaults to true)
  audio: true, // whether to render layers with audio (defaults to true)
  onStart: (stream: MedaiaStream) => {
    console.log("All resources are loaded, and streaming has begun.");
    // Process stream
  },
});
console.log("The movie is done streaming");
```

### `record()`

```ts
const blob = await movie.record({
  frameRate: 30, // fps for the recording's video track
  duration: undefined, // how long to record, in seconds (by default, the movie will record to the end)
  type: "video/webm;codecs=vp8", // MIME type for the recording (defaults to 'video/webm')
  video: true, // whether to render visual layers (defaults to true)
  audio: true, // whether to render layers with audio (defaults to true)
  onStart: (recorder: MediaRecorder) => {
    console.log("All resources are loaded, and recording has begun.");
  }, // `onStart` is optional
});
console.log(`Done. The recording is ${blob.size} bytes long`);
```

### `refresh()`

To draw a single frame to the canvas, run:

```ts
await movie.refresh();
console.log("The current frame has been loaded and rendered.");
```

## Advanced playback control

### `seek()`

Used to update the movie's `currentTime`:

```ts
movie.seek(0);
```

### `pause()`

Used to stop playback on demand.

### `stop()`

Used to stop playback and reset the `currentTime` to zero on demand.

## Properties

### `layers` (readonly, mutable)

Array proxy which [layers](../category/layers) can be added to, removed from and accessed:

```ts
movie.layers.push(new etro.layer.Video({ ... }));
```

### `effects` (readonly, mutable)

Array proxy for [effects](../category/effects) that are applied globally after all the layers are composited:

```ts
console.log(movie.effects);
```

### `currentTime` (readonly)

Returns the current playback position (in seconds).

### `duration` (readonly)

Returns the movie's duration (the max end time of its layers).

### `paused` (readonly)

Returns true if the movie is paused and false if it's playing, streaming or recording.

### `ended` (readonly)

Returns true if the movie played, streamed or recorded to the end.

### `ready` (readonly)

Returns true if the movie is ready to play, that is, if enough of the resources belonging to all its layers and effects are loaded to play through. The movie will automatically wait until it is ready before playing, streaming, recording and refreshing, and it will temporarily pause whenever a resource becomes unavailable.

### `canvas` (readonly)

HTML canvas element that the movie renders to.

### `cctx` (readonly)

Convenience getter for the canvas's 2D canvas rendering context.

### `actx` (readonly)

The Web Audio rendering context used to direct all audio output.

### `width` / `height`

Gets or sets the width or height of the movie's rendering canvas.

### `background`

:::tip

This is a [Dynamic Property](dynamic-properties).

:::

Background color to render over the canvas before drawing the visual layers.

### `repeat`

Whether to endlessly loop playback when playing, streaming and recording.
