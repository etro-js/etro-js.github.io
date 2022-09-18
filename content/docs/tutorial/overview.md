+++
title = "Overview"
template = "page.html"
+++

<div class="heading-text">Etro Overview</div>

In Etro, the movie is a context for adding and rendering content. It holds a
list of layers and effects. A layer is a piece of video and/or audio content
with a list of effects.

# Movie

To create a movie that will render to the <canvas> `outputCanvas`:
```js
var movie = new etro.Movie({ canvas: outputCanvas })
```

The movie can then be played or recorded. Playing renders the movie to the
canvas and audio context, and it can be interrupted with `pause`. Recording
renders the movie and saves the result to a video blob.
```js
movie.play()
// or
movie.record({ frameRate: 30 }).then(blob => /*do something with `blob`*/)
```

See the [`Movie` documentation](../movies.md).

# Layers

Layers are pieces of content for the movie, such as video and audio clips and
titles:
```js
// The base visual layer renders a solid rectangle filling its bounds
var layer1 = new etro.layer.Visual({ startTime: 0, duration: 3 })
// The video layer extends the visual layer and renders an html video element
var layer2 = new etro.layer.Video({ startTime: 3, source: htmlVideoEl })
movie.layers.push(layer1, layer2)  // the same as calling movie.addLayer
```

There are a number of [built-in layers](/docs/api/modules/layer.html), but you
can also subclass any of them and create your own.

# Effects

Effects alter a layer or movie's output. Currently, only visual effects are
supported. Audio can be manipulated using the [web audio API] (see
[`Audio`](/docs/api/classes/layer.audio.html)). Etro offers a set of [built-in
effects](/docs/api/modules/effect.html) that can be used like this:
```js
var effect = new etro.effect.Contrast(2.0)
layer.addEffect(effect)
```

You can also create your own visual effects by subclassing a base effect class.
If you want to make a hardware-acclerated effect that uses GLSL, subclass
`etro.effect.Shader`. If you want to make any other type of visual effect,
subclass `etro.effect.Base` directly.

Example of a custom effect:
```js
class MyEffect extends etro.effect.Base {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }
    /**
     * @param {(etro.Movie|etro.layer.Visual)} target
     */
    apply(target) {
        target.vctx.fillStyle = 'red'
        target.vctx.fillRect(0, 0, this.width, this.height)
    }
}

layer.addEffect(new MyEffect(100, 100))
```

[web audio api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
