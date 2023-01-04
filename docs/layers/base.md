# Base Layer

`etro.layer.Base` is the base class for all layers. It is not meant to be used directly.

## Options

### `startTime` (required)

The time to start the layer at in seconds.

### `duration` (required)

The duration of the layer in seconds.

### `enabled`

:::caution

This property must be set after the layer is created until it is added as an option.

:::

Whether the layer should be used. The default value is `true`.

## Read-only Properties

### `currentTime`

The current time of the movie in seconds, relative to the start of the layer.
