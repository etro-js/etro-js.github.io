+++
title = "Migrating to the Eighth Update"
template = "page.html"
+++

<div class="heading-text">Migrating to the Eighth Update</div>

The Eighth Update is here! With it, come some breaking changes that aim to make
the API more comprehensive and consistent. This guide will show how to update
your project to reflect these changes.

# Options

Constructors and methods with a lot of optional arguments used to take an object
`options` that contained these arguments. Now, all constructors, along with
`Movie#record`, accept *all* arguments through an `options` argument. The idea
behind this decision was to avoid having to remember the order of all the
arguments, and to create a more streamline JavaScript API.

**Before**:
```js
new Movie(canvas, { repeat: true })
```

**After**:
```js
new Movie({ canvas: canvas, repeat: true })
```

# `audioContext` &rarr; `actx`

The `audioContext` option for `Movie` was renamed to `actx`, to match
`Movie#actx`.

# Keyframes

Keyframes now take the form

```js
new etro.KeyFrame([time1, val1, interpolation], [time2, val2])
```

The interpolation function receives three arguments, `startValue`, `endValue`
and `t` (the percent progress between the start and end values). It returns the
interpolated value (with `startValue` if `t` is 0 and `endValue` if `t` is 1).

*See also: [Dynamic Properties](../../docs/dynamic-properties)*

# Image Layers

- `image` was renamed to `source`.
- `clipX` &rarr; `sourceX`
- `clipY` &rarr; `sourceY`
- `clipWidth` &rarr; `sourceWidth`
- `clipHeight` &rarr; `sourceHeight`

# Audio and Video Layers

- `source` was renamed to `audioNode`.
- `media` &rarr; `source`.
- `mediaStartTime` &rarr; `sourceStartTime`.

# Dimension Fallback Behavior

For image and video layers, `width` now defaults to `destWidth`, which defaults
to `sourceWidth`, which defaults to the width of the image or video (and the
same for `height`).

# Events

The `movie.audiodestinationupdate` event is now published on the movie instead
of each layer.
