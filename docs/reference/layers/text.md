# Text Layer

`etro.layer.Text` renders text.

## Usage

```js
const layer = new etro.layer.Text({
  startTime: 0,
  duration: 5,
  text: 'Hello World',
  x: 0, // default: 0
  y: 0, // default: 0
  width: 400, // default: null (full width)
  height: 400, // default: null (full height)
  opacity: 1, // default: 1
  color: etro.parseColor('black'), // default: new etro.Color(0, 0, 0, 1)
  font: '10px sans-serif', // default: '10px sans-serif'
  textX: 20, // default: 0
  textY: 20, // default: 0
  textAlign: 'left', // default: 'left'
  textBaseline: 'alphabetic', // default: 'alphabetic'
  textDirection: 'ltr', // default: 'ltr'
});
```

## Inheritance

`etro.layer.Text` inherits from [`etro.layer.Visual`](visual).

## Options

### `text` (required)

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The text to render.

### `color`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The color of the text. The default value is `new etro.Color(0, 0, 0, 1)`.

### `font`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The CSS font to use. The default value is `'10px sans-serif'`.

### `textX`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The x position to render the text at. The default value is `0`.

### `textY`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The y position to render the text at. The default value is `0`.

### `textAlign`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The alignment of the text. The default value is `'left'`.

### `textBaseline`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The baseline of the text. The default value is `'alphabetic'`.

### `textDirection`

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The direction of the text. The default value is `'ltr'`.
