# Channels Effect

`etro.effect.Channels` multiplies each channel by individual factors.

:::tip

This effect is GPU-accelerated (see [`etro.effect.Shader`](shader)).

:::

:::caution

This effect does not support modifying the alpha channel yet.

:::

## Usage

```ts
const effect = new etro.effect.Channels({
  factors: {
    r: 1, // default: 1
    g: 1, // default: 1
    b: 0.5, // default: 1
  },
})
```

## Inheritance

`etro.effect.Channels` inherits from [`etro.effect.Shader`](shader).

## Options

### `factors`

Object containing the factors for each channel. The default value is `{ r: 1, g: 1, b: 1 }`.

### `factors.r`

The factor for the red channel. The default value is `1`.

### `factors.g`

The factor for the green channel. The default value is `1`.

### `factors.b`

The factor for the blue channel. The default value is `1`.
