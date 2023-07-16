# Contrast Effect

`etro.effect.Contrast` changes the contrast of an image by multiplying the RGB channels by a constant.

:::tip

This effect is GPU-accelerated (see [`etro.effect.Shader`](shader)).

:::

## Usage

```ts
const effect = new etro.effect.Contrast({
  contrast: 2, // default: 1
})
```

## Inheritance

`etro.effect.Contrast` inherits from [`etro.effect.Shader`](shader).

## Options

### `contrast`

:::tip

This is a [Dynamic Property](/docs/reference/dynamic-properties).

:::

The contrast multiplier. Defaults to 1.
