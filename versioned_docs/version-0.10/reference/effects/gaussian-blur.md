# Gaussian Blur Effect

`etro.effect.GaussianBlur` applies a Gaussian blur to the target.

:::tip

This effect is GPU-accelerated (see [`etro.effect.Shader`](shader)).

:::

:::caution

Currently, only integer values are supported for the radius. PRs welcome!

:::

## Usage

```ts
const effect = new etro.effect.GaussianBlur({
  radius: 10, // the radius of the blur
})
```

## Inheritance

`etro.effect.GaussianBlur` inherits from [`etro.effect.Stack`](stack). The stack consists of an `etro.effect.GaussianBlur.Horizontal` and an `etro.effect.GaussianBlur.Vertical` effect, both of which are [`etro.effect.Shader`](shader) effects.

## Options

### `radius` (required)

The radius of the blur in pixels.
