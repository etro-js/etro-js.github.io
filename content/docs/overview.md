+++
title = "Overview"
template = "page.html"
+++

<div class="heading-text">Vidar Overview</div>

In Vidar, the movie is a context for adding and rendering content. It holds a
list of layers and effects. A layer is a piece of video and/or audio content
with a list of effects.

# Movie

To create a movie that will render to `outputCanvas`:
```js
var movie = new vd.Movie(outputCanvas)
```

You can provide an object of options to specify the audio context that will be
used, as well as other properties. See the [`Movie`
documentation](../api/module-movie.Movie.html).

The movie can then be played or recorded. Playing renders the movie to the
canvas and audio context and can be interrupted with `pause`. Recording
renders the movie and saves the result as a video blob.
```js
movie.play()
// or
movie.record().then(blob => /*do something with blob*/)
```

# Layers

Layers are pieces of content for the movie, such as video and audio clips and
titles:
```js
// The base visual layer renders a solid rectangle filling its bounds
var layer1 = new vd.layer.Visual(startTime, htmlVideoEl)
// The video layer extends the visual layer and renders an html video element
var layer2 = new vd.layer.Video(startTime, htmlVideoEl)
movie.layers.push(layer1, layer2)  // the same as movie.addLayer
```

# Effects

Effects alter a layer or movie's output. Currently, only visual effects are
supported. Audio can be manipulated using the [web audio API].
Vidar offers a set of built-in effects:
```js
var effect = new vd.effect.Contrast(2.0)
layer.addEffect(effect)
```

You can also create your own visual effects by subclassing a base effect
class. If you want to make a hardware-acclerated effect that uses GLSL,
subclass `vd.effect.Shader`. If you want to make any other type of effect,
subclass `vd.effect.Base` directly.

Example of a custom effect:
```js
class MyEffect extends vd.effect.Base {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }
    /**
     * @param {(vd.Movie|vd.layer.Visual)} target
     */
    apply(target) {
        target.vctx.fillStyle = 'red'
        target.vctx.fillRect(0, 0, this.width, this.height)
    }
}

layer.addEffect(new MyEffect(100, 100))
```

[web audio api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
