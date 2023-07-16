# EllipticalMask Effect

`etro.effect.EllipticalMask` preserves an elliptical area of the layer and clears the rest.

## Usage

```ts
const effect = new etro.effect.EllipticalMask({
  x: 100, // the x-coordinate of the center of the ellipse
  y: 100, // the y-coordinate of the center of the ellipse
  radiusX: 50, // the horizontal radius of the ellipse
  radiusY: 25, // the vertical radius of the ellipse
  rotation: 0, // rotation angle in radians (default: 0)
  startAngle: 0, // start angle in radians (default: 0)
  endAngle: 2 * Math.PI, // end angle in radians (default: 2 * Math.PI)
  anticlockwise: false, // whether the ellipse is drawn clockwise or anticlockwise (default: false)
})
```

## Inheritance

`etro.effect.EllipticalMask` inherits from [`etro.effect.Visual`](visual).

## Options

### `x` (required)

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

The x-coordinate of the center of the ellipse.

### `y` (required)

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

The y-coordinate of the center of the ellipse.

### `radiusX` (required)

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

The horizontal radius of the ellipse.

### `radiusY` (required)

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

The vertical radius of the ellipse.

### `rotation`

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

The rotation angle in radians. Defaults to `0`.

### `startAngle`

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

The start angle in radians. Defaults to `0`.

### `endAngle`

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

The end angle in radians. Defaults to `2 * Math.PI`.

### `anticlockwise`

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

Whether the ellipse is drawn clockwise or anticlockwise. Defaults to `false`.
