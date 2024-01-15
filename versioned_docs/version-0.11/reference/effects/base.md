# Base Effect

`etro.effect.Base` is the base class for all effects. It is not meant to be used directly.

## Properties

### `enabled`

Whether the effect should be used. The default value is `true`.

## Read-only Properties

### `currentTime`

The current time of the movie in seconds, relative to the start of the layer.

### `parent`

The target of this effect, either a `Movie` or `BaseLayer` instance.

### `movie`

The target or the target's mosvie.

## Methods

### `attach(target: Movie | BaseLayer)`

Called by the target when the effect is added to its `effects` array.

### `detach()`

Called by the target when the effect is removed from its `effects` array.

### `apply(target: Movie | BaseLayer, reltime: number)`

Apply this effect to a target at the given time.

### `whenReady()`

Wait until this effect is ready to be applied.
