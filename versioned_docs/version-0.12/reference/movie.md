---
sidebar_position: 1
---

# Movies

In Etro, movies composite layers and apply global effects.

## Constructor

**Options:**

- `canvas`: HTML `<canvas>` element to draw to. Required.
- `actx`: Web Audio rendering context to play all audio layers through. Defaults to a new context that plays through the default output device.
- `background`: Background color to fill the canvas with before drawing the visual layers. Defaults to `#000`.
- `repeat`: If `true`, playback loops endlessly while playing or streaming (but not while recording). Defaults to `false`.

**Example:**

```ts
const movie = new etro.Movie({
  canvas: document.querySelector("canvas"),
});
```

## Rendering

There are several ways to access a movie's output.

### `play()`

Draws all the movie's visual layers to the canvas and plays all its audio layers to the audio context in real time.

**Options:**

- `duration`: How long to play for, in seconds. By default, the movie plays to the end.
- `onStart(): void`: Optional callback function that is called when the movie is fully loaded and starts playing.

**Returns:**

- `Promise<void>`: Resolves when the movie has finished playing.

**Example:**

```ts
await movie.play({
  duration: 3,
  onStart: () => {
    // Playback has started
  },
});
// Playback has stopped
```

### `stream()`

Draws the movie to the canvas, plays it through the audio context and sends the result to a new WebRTC stream.

**Options:**

- `frameRate`: Max video frames per second.
- `duration`: How long to stream for, in seconds. By default, the movie streams to the end.
- `video`: If `true`, the movie's visual layers are included in the stream. Defaults to `true`.
- `audio`: If `true`, the movie's audio layers are included in the stream. Defaults to `true`.
- `onStart(stream: MediaStream): void`: Optional callback function that is called when the movie is fully loaded and starts streaming.

**Returns:**

- `Promise<void>`: Resolves when the movie has finished streaming.

**Example:**

```ts
await movie.stream({
  frameRate: 60,
  duration: 5,
  video: true,
  audio: true,
  onStart: (stream: MediaStream) => {
    // Streaming has started
  },
});
// Streaming has stopped
```

### `record()`

Draws the movie to the canvas, plays it through the audio context and saves the result as a video or audio blob in memory.

**Options:**

- `frameRate`: Max video frames per second.
- `duration`: How long to record for, in seconds. By default, the movie records to the end.
- `type`: MIME type for the recording. Defaults to `video/webm`.
- `video`: If `true`, the movie's visual layers are included in the recording. Defaults to `true`.
- `audio`: If `true`, the movie's audio layers are included in the recording. Defaults to `true`.
- `onStart(recorder: MediaRecorder): void`: Optional callback function that is called when the movie is fully loaded and starts recording.

**Returns:**

- `Promise<Blob>`: Resolves with the recording.

**Example:**

```ts
const blob = await movie.record({
  frameRate: 30,
  duration: undefined,
  type: "video/webm;codecs=vp8",
  video: true,
  audio: true,
  onStart: (recorder: MediaRecorder) => {
    // Recording has started
  },
});
// The recording has completed
```

### `refresh()`

Draws a single frame to the canvas, without playing any audio.

**Returns:**

- `Promise<void>`: Resolves when the frame has been loaded and drawn to the canvas.

**Example:**

```ts
await movie.refresh();
// The current frame has been loaded and drawn to the canvas.
```

## Advanced playback control

### `pause()`

Stops playback.

### `stop()`

Stops playback and resets `currentTime` to the beginning of the movie.

### `seek()`

Exactly the same as setting the [`currentTime` property](#currenttime):

```ts
movie.seek(0);
```

## Properties

### `layers` (readonly, mutable)

[Layers](../category/layers) that are composited to form the movie's output.

### `effects` (readonly, mutable)

[Effects](../category/effects) that are applied globally after all the layers are composited.

### `currentTime`

Current playback position (in seconds). Setting this property seeks the movie to the new position.

### `duration` (readonly)

The movie's duration (the last end time of all its layers).

### `paused` (readonly)

True if the movie is paused or false if it is playing, streaming or recording.

### `ended` (readonly)

True if the movie played, streamed or recorded to the end without interruption.

### `ready` (readonly)

True if the movie is ready to play, that is, if enough of the resources belonging to all its layers and effects are loaded to play through.

_The movie will automatically wait until it is ready before playing, streaming, recording and refreshing, and it will temporarily pause whenever a resource becomes unavailable._

### `canvas` (readonly)

HTML `<canvas>` element to render the movie to.

### `cctx` (readonly)

Convenience getter for the canvas's 2D canvas rendering context.

### `actx` (readonly)

Web Audio rendering context used to play all audio layers.

### `width` / `height`

Dimensions of the movie.

### `background`

:::tip

This is a [Dynamic Property](dynamic-properties).

:::

Background color to fill the canvas with before drawing the visual layers.

### `repeat`

If `true`, playback loops endlessly while playing or streaming (but not while recording).
