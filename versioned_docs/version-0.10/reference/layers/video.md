# Video Layer

`etro.layer.Video` renders a video clip to the movie.

## Usage

```js
const layer = new etro.layer.Video({
  startTime: 0,
  duration: 5,
  source: "<link to video>", // also accepts an `HTMLVideoElement`
  sourceX: 0, // default: 0
  sourceY: 0, // default: 0
  sourceWidth: 400, // default: null (full width)
  sourceHeight: 400, // default: null (full height)
  sourceStartTime: 0, // default: 0
  destX: 0, // default: 0
  destY: 0, // default: 0
  destWidth: 400, // default: null (full width)
  destHeight: 400, // default: null (full height)
  x: 0, // default: 0
  y: 0, // default: 0
  width: 400, // default: null (full width)
  height: 400, // default: null (full height)
  opacity: 1, // default: 1
  muted: false, // default: false
  volume: 1, // default: 1
  playbackRate: 1, // default: 1
});
```

## Inheritance

`etro.layer.Video` inherits from [`etro.layer.Visual`](visual).

## Properties

### `source`

The `<video>` element or path to render.

### `sourceX`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The x position to crop the video from. The default value is `0`.

### `sourceY`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The y position to crop the video from. The default value is `0`.

### `sourceWidth`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The width to crop the video to. The default value is `null`, which means the video will be cropped to the full width of the video.

### `sourceHeight`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The height to crop the video to. The default value is `null`, which means the video will be cropped to the full height of the video.

### `sourceStartTime`

The time to start playing the video from. The default value is `0`.

### `destX`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

Defines the x position of the rendered image within the layer’s bounding area. The default value is `0`.

### `destY`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

Defines the y position of the rendered image within the layer’s bounding area. The default value is `0`.

### `destWidth`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

Defines the width of the rendered image within the layer’s bounding area. The default value is `null`, which means the image will be rendered to the full width within the bounding area.

### `destHeight`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

Defines the height of the rendered image within the layer’s bounding area. The default value is `null`, which means the image will be rendered to the full height within the bounding area.

### `muted`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

Whether the video should be muted. The default value is `false`.

### `volume`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The volume of the video. The default value is `1`.
