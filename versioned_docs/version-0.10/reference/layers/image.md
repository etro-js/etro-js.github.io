# Image Layer

`etro.layer.Image` renders an `<img>` element to the movie.

## Usage

```js
import etro from 'etro';

const layer = new etro.layer.Image({
  startTime: 0,
  duration: 5,
  source: new Image(),
  sourceX: 0, // default: 0
  sourceY: 0, // default: 0
  sourceWidth: 400, // default: null (full width)
  sourceHeight: 400, // default: null (full height)
  destX: 0, // default: 0
  destY: 0, // default: 0
  destWidth: 400, // default: null (full width)
  destHeight: 400, // default: null (full height)
  x: 0, // default: 0
  y: 0, // default: 0
  width: 400, // default: null (full width)
  height: 400, // default: null (full height)
  opacity: 1, // default: 1
});
```

## Inheritance

`etro.layer.Image` inherits from [`etro.layer.Visual`](visual).

## Options

### `source`

The `<img>` element to render.

### `sourceX`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The x position to crop the image from. The default value is `0`.

### `sourceY`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The y position to crop the image from. The default value is `0`.

### `sourceWidth`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The width to crop the image to. The default value is `null`, which means the image will be cropped to the full width of the image.

### `sourceHeight`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The height to crop the image to. The default value is `null`, which means the image will be cropped to the full height of the image.

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


