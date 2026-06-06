---
sidebar_position: 6
---

# Serialization

Etro movies can be serialized to plain JSON and reconstructed later. This is useful for saving a project to disk or a database, sending a movie over the network, or duplicating one in memory.

## Serializing a Movie

A `Movie`, along with all of its layers and effects, implements `toJSON()`, so you can serialize an entire movie with the built-in `JSON.stringify()`:

```ts
const data = JSON.stringify(movie);
localStorage.setItem("my-project", data);
```

Calling `movie.toJSON()` directly returns the plain object that describes the movie:

```ts
const json = movie.toJSON();
// {
//   type: "movie",
//   canvas: { width: 1920, height: 1080 },
//   background: { type: "Color", r: 0, g: 0, b: 0, a: 1 },
//   repeat: false,
//   layers: [
//     {
//       type: "layer.Text",
//       x: 0,
//       y: 0,
//       width: null,
//       height: null,
//       background: null,
//       border: null,
//       opacity: 1,
//       text: "Hello World",
//       font: "10px sans-serif",
//       color: { type: "Color", r: 255, g: 0, b: 0, a: 1 },
//       textX: 0,
//       textY: 0,
//       maxWidth: null,
//       textAlign: "start",
//       textBaseline: "top",
//       textDirection: "ltr",
//       textStroke: null,
//       enabled: true,
//       startTime: 0,
//       duration: 10,
//       effects: [{ type: "effect.Brightness", enabled: true, brightness: 2 }],
//     },
//   ],
//   effects: [{ type: "effect.Grayscale", enabled: true }],
// }
```

Each layer is tagged with a `layer.<ClassName>` type and each effect with an `effect.<ClassName>` type so that they can be reconstructed later.

The output above is complete, not abbreviated. `toJSON()` writes out every public property of each layer and effect, including the ones you never set (which fall back to their defaults, such as `opacity: 1` or `textAlign: "start"`) and the `enabled` flag that every layer and effect carries. Properties whose default is `undefined` — for example an unset `sourceWidth` on an `Image` layer — are the exception: they are omitted, since JSON has no `undefined`.

## Deserializing a Movie

Use the static `etro.Movie.fromJSON()` method to rebuild a movie from its serialized form:

```ts
const data = localStorage.getItem("my-project");
const movie = etro.Movie.fromJSON(JSON.parse(data));
```

`fromJSON()` accepts the following arguments:

- `json` (required): the parsed movie object (not a JSON string).
- `canvas`: the HTML `<canvas>` element to render to. If omitted, a new canvas is created using the serialized `width` and `height`.
- `actx`: the [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) to play audio layers through. If omitted, a new one is used.

```ts
const movie = etro.Movie.fromJSON(json, document.querySelector("canvas"));
```

A full round trip looks like this:

```ts
// Save
const saved = JSON.stringify(movie);

// Load
const restored = etro.Movie.fromJSON(JSON.parse(saved), canvas);
```

## What Gets Serialized

The movie's `background` and `repeat` options, along with every layer and effect and their [dynamic properties](dynamic-properties), are serialized.

Etro's built-in value types round-trip automatically:

- `etro.Color` &rarr; `{ type: "Color", r, g, b, a }`
- `etro.Font` &rarr; `{ type: "Font", size, sizeUnit, family, ... }`
- `etro.KeyFrame` &rarr; `{ type: "KeyFrame", value, interpolationKeys }`, where each keyframe's interpolation is stored as `"linear"` or `"cosine"`.

`etro.Movie.fromJSON()` restores these for you, so there is no need to convert them by hand.

## Limitations

:::caution

Not everything can be represented as JSON. Keep the following in mind:

:::

- **Functions are not serialized.** [Dynamic properties](dynamic-properties) that are plain functions are dropped. Only constant values and keyframe animations survive a round trip.
- **Custom keyframe interpolation is not preserved.** Only the built-in `etro.linearInterp` and `etro.cosineInterp` functions are saved; other interpolation functions are lost.
- **The canvas is not fully serialized.** Only its `width` and `height` are stored, not the element or its drawing context.
- **The audio context is not serialized.** Pass an `actx` to `etro.Movie.fromJSON()` if your movie has audio layers.
- **Media layers store their source URL.** Image, video and audio layers are serialized using their `src` URL, so a revoked [object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static) will not reload.
- **Only built-in layers and effects can be restored.** `fromJSON()` strips the `layer.` or `effect.` prefix from each `type` and resolves the rest against Etro's built-in `etro.layer` and `etro.effect` namespaces. A built-in such as `layer.Text` resolves to `etro.layer.Text`, but a custom subclass serialized as, say, `layer.Sticker` has no match and throws `Unknown layer type: Sticker`. Custom layer and effect subclasses are not restored.
