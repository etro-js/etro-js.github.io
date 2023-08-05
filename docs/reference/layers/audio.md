# Audio Layer

`etro.layer.Audio` plays audio from an audio clip.

## Usage

```js
const layer = new etro.layer.Audio({
  startTime: 0,
  duration: 3,
  source: '<link to audio>',
  sourceStartTime: 0, // default: 0
  muted: false, // default: false
  volume: 1, // default: 1
  playbackRate: 1, // default: 1
});
```

## Inheritance

`etro.layer.Audio` inherits from [`etro.layer.Base`](base).

## Options

### `source` (required)

The `<audio>` element or path to play.

### `sourceStartTime`

The time to start playing the audio from. The default value is `0`.

### `muted`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

Whether the audio is muted. The default value is `false`.

### `volume`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The volume of the audio. The default value is `1`.

### `playbackRate`

The playback rate of the audio. The default value is `1`.
