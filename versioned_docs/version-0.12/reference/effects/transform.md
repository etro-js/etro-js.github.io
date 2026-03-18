# Transform Effect

`etro.effect.Transform` applies a 2D transformation to the target.

## Usage

```ts
const effect = new etro.effect.Transform({
  matrix: new etro.effect.Transform.Matrix()
    .translate(100, 100)
    .rotate(Math.PI / 4)
    .scale(2, 2),
});
```

## Inheritance

`etro.effect.Transform` inherits from [`etro.effect.Base`](base).

## Options

### `matrix` (required)

The transformation matrix to apply.

## `Transform.Matrix`

A 2D transformation matrix.

### Static Properties

#### `Transform.Matrix.IDENTITY`

The identity matrix.

### Methods

#### `translate(x, y)`

Translates the matrix by the given amount in pixels.

#### `rotate(angle)`

Rotates the matrix by the given angle in radians.

#### `scale(x, y)`

Scales the matrix by the given amount.

#### `multiply(matrix)`

Multiplies the matrix by the given matrix, updating the current matrix.
