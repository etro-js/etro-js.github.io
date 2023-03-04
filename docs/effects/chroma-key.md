# ChromaKey Effect

`etro.effect.ChromaKey` reduces the alpha of pixels that are close to a specified target color.

:::tip

This effect is GPU-accelerated (see [`etro.effect.Shader`](shader)).

:::

## Usage

```ts
const effect = new etro.effect.ChromaKey({
  target: { r: 0, g: 255, b: 0 }, // default: { r: 0, g: 0, b: 0 }
  threshold: 10, // default: 0
  interpolate: true, // default: false
})
```

## Inheritance

`etro.effect.ChromaKey` inherits from [`etro.effect.Shader`](shader).

## Options

### `target`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The color to remove. Defaults to black (`{ r: 0, g: 0, b: 0 }`).

### `threshold`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

How much error to allow (ranging from 0 to 255). Defaults to 0.

### `interpolate`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

Whether to interpolate the alpha channel. Defaults to `false`, resulting in no smoothing.
