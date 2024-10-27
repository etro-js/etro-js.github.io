# Pixelate Effect

`etro.effect.Pixelate` merges pixels into larger blocks.

:::tip

This effect is GPU-accelerated (see [`etro.effect.Shader`](shader)).

:::

## Usage

```ts
const effect = new etro.effect.Pixelate({
  pixelSize: 10, // the size of a pixel in pixels
});
```

## Inheritance

`etro.effect.Pixelate` inherits from [`etro.effect.Shader`](shader).

## Options

### `pixelSize` (required)

:::tip

This is a [Dynamic Property](../dynamic-properties).

:::

The size of a block in pixels.
