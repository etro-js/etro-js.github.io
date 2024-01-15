# Stack Effect

`etro.effect.Stack` applies multiple effects to the target.

:::caution

This effect is experimental and may be removed in the future.

:::

## Usage

```ts
const effect = new etro.effect.Stack([
    new etro.effect.Pixelate({ pixelSize: 10 }),
    new etro.effect.Channels({ factors: { r: 1, g: 0, b: 0 } }),
])
```

## Inheritance

`etro.effect.Stack` inherits from [`etro.effect.Base`](base).
