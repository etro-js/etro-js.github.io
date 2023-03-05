# Visual Layer

By default, `etro.layer.Visual` renders a solid color to the movie. All other layers with visual output inherit from this class.

## Usage

```js
const layer = new etro.layer.Visual({
  startTime: 0,
  duration: 5,
  x: 0, // default: 0
  y: 0, // default: 0
  width: 400, // default: null (full width)
  height: 400, // default: null (full height)
  background: etro.parseColor('red'), // default: null (transparent)
  border: { // default: null (no border)
    color: etro.parseColor('black'),
    thickness: 2,
  },
  opacity: 1, // default: 1
});
```

## Inheritance

`etro.layer.Visual` inherits from [etro.layer.Base](base).

## Options

### `x`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The x position of the layer. The default value is `0`.

### `y`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The y position of the layer. The default value is `0`.

### `width`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The width of the layer. The default value is `null`, which means the layer will be the full width of the movie.

### `height`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The height of the layer. The default value is `null`, which means the layer will be the full height of the movie.

### `background`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The background color of the layer. The default value is `null`, which means the layer will be transparent.

### `border`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The border of the layer. The default value is `null`, which means the layer will have no border.

### `opacity`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The alpha value of the layer. The default value is `1`, which means the layer will be fully opaque.

## Read-only Properties

### `effects`

List of [Effects](/docs/category/effects) to apply to the layer. Although this is a read-only property, you can modify the array.

## Methods

### `constructor(options)`

Create a new Visual Layer.

### `addEffect(effect)`

Add an [Effect](/docs/category/effects) to the layer.

### `beginRender()`

Prepare the layer for rendering.

### `doRender()`

Render the layer.

### `endRender()`

Clean up after rendering.
