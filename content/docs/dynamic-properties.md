+++
title = "Dynamic Properties"
template = "page.html"
+++

<div class="heading-text">Dynamic Properties</div>

Most values in Vidar are *dynamic*, meaning they can either be constant values,
key frames or functions. These properties have the type `Dynamic<T>`, which is
defined as

```ts
T | KeyFrame<T> | ((element: VidarObject, time: number) => T)
```

which means *constant value*, *key frame set*, or *function*.

# Constant Values

Constant values are expressions that are treated literally, i.e.:

```js
movie.background = 'blue'
```

Here, the movie's background color will always be blue (that is, until it is
reassigned).

# Key Frames

Key frame sets contain different values for different times. Its syntax is:

```js
new vd.KeyFrame([time1, val1, interp1], [time2, val2, interp2], ...)
```

At `time1`, it will evaluate to `val1`, at `time2` it will `val2`, and in
between it will be interpolated by `interp1`. The interpolation functions
default to `vd.linearInterp`, but you can also define your own.

```js
layer.opacity = new vd.KeyFrame([0, 1], [3, 0])
```

The layer's opacity will start at `1` and gradually decrease until to `0` at 3
seconds.

## Interpolation

Vidar comes with a few built-in interpolation methods:
- `vd.linearInterp` - interpolates numbers (and objects containing numbers) linearly
- `vd.cosineInterp` - interpolates numbers (and objects containing numbers) on a cosine curve

Only numbers and objects are accepted by these functions. For all other types,
the first value is used and the second value is ignored.

You can also define your own interpolation functions. They must take the form:
```ts
(val1: number | object, val2: number | object, t: number, objectKeys?: string[]) => number | object
```

where `objectKeys` contains the names of the object properties to interpolate
(`undefined` means "all properties").

# Functions

You can also pass a function that returns a value per-frame. It must take the
following form:

```ts
<T>(element: VidarObject, time: number) => T
```

Example:

```js
// Make a new visual layer that lasts forever
var layer = new VisualLayer({ startTime: 0, duration: Infinity })
// Give it a new random background color each frame
layer.background = () => new vd.Color(Math.random(), Math.random(), Math.random())
```

# `val`

If you're making a custom layer or effect, you'll need to evaluate dynamic
properties to get the value for the current frame. Use `val` to do this.

```ts
function val(element: VidarObject, path: string, time: number): any
```
