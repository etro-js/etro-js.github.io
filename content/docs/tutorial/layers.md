+++
title = "Layers"
template = "page.html"
+++

<div class="heading-text">Layers</div>

# Overview

A layer (or clip) is a single piece of content with audio and/or video output.
Vidar comes with several layers builtin. You can also write your own layers
with JavaScript (see [Custom Layers](#custom-layers)).

# Audio

To use an `<audio/>` element in a movie:
```js
var audioLayer = new vd.layer.Audio({ startTime: 0, source: audioElement })
movie.addLayer(audioLayer)
```

Optional arguments:
- `sourceStartTime` - Skip some number of seconds in the beginning of `source`
- `duration` - Limit the layer's duration
- `volume` (between 0 and 1)
- `muted`
- `playbackRate` (only positive numbers allowed)

# Images

To use an `<img/>` element in a movie:
```js
var imageLayer = new vd.layer.Image({ startTime: 0, duration: 3, source: img })
movie.addLayer(imageLayer)
```

Optional arguments:
- `x`, `y`, `width`, `height` - Crop the layer
- `background` - CSS color for the background of the layer
- `border`
  - `border.color` - CSS color
  - `border.thickness`
- `opacity` - Alpha level
- `sourceX`, `sourceY`, `sourceWidth`, `sourceHeight` - Crop the source image
- `destX`, `destY`, `destWidth`, `destHeight` - Adjust the position and scale of
  the source image within the layer

# Text

To add text to a movie:
```js
var fn = () => `${Math.random()}`  // Choose a random number every frame
var textLayer = new vd.layer.Text({ startTime: 0, duration: 3, text: fn })
movie.addLayer(textLayer)
```

Optional arguments:
- `x`, `y`, `width`, `height` - Crop the layer
- `background` - Background color of the layer
- `border`
  - `border.color` - CSS color
  - `border.thickness`
- `opacity` - Alpha level
- `font` (CSS font)
- `color` - CSS color for the text
- `textX`, `textY` - Text position within layer
- `maxWidth` (in pixels)
- `textAlign` - Horizontal align ("left" || "right" || "center" || "start" || "end")
- `textBaseline` - Vertical align ("top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom")
- `textDirection`

# Videos

To add a `<video/>` element to a movie:
```js
var videoLayer = new vd.layer.Video({ startTime: 0, source: videoElement })
movie.addLayer(videoLayer)
```

Optional arguments:
- *Visual*
  - `x`, `y`, `width`, `height` - Crop the layer
  - `background` - Background color of the layer
  - `border`
    - `border.color` - CSS color
    - `border.thickness`
  - `opacity` - Alpha level
- *Audio*
  - `sourceStartTime` - Skip some number of seconds in the beginning of `source`
  - `duration` - Limit the layer's duration
  - `volume` (between 0 and 1)
  - `muted`
  - `playbackRate` (only positive numbers allowed)

# Custom Layers

You can subclass any layer to create your own:
```js
class MyLayer extends vd.layer.Visual {
  constructor(options) {
    super(options)

    this.foo = options.foo || false
  }

  // doRender is a special method for visual layers. If you're not subclassing a visual layer, rename this to `render`.
  doRender() {
    super.doRender()

    // Evaluate the foo property at the current frame (to support dynamic properties)
    if (vd.val(this, 'foo', this.currentTime)) {
      // cctx (canvas context) is the 2d rendering context for this layer
      this.cctx.fillRect(0, 0, this.width, this.height)
    }
  }
}
```
