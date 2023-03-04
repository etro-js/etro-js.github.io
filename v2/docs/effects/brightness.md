# Brightness Effect

`etro.effect.Brightness` changes the brightness of the target.

:::tip

This effect is GPU-accelerated (see [`etro.effect.Shader`](shader)).

:::

## Usage

```ts
const effect = new etro.effect.Brightness({
  brightness: -128, // default: 0
})
```

## Inheritance

`etro.effect.Brightness` inherits from [`etro.effect.Shader`](shader).

## Options

### `brightness`

:::tip

This is a [Dynamic Property](/docs/dynamic-properties).

:::

The strength of the brightness effect (in the range -255 to 255). The default value is `0`.
