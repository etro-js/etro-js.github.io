+++
title = "Vidar"
+++

# Vidar

- Composite video and audio layers
- Use built-in hardware accelerated effects
- Write your own effects in JavaScript and GLSL
- Manipulate audio with the web audio API
- Define layer and effect properties as keyframes and functions
- Export to a blob or file

# Installation

```
npm i vidar
```

# Usage

Include it with
```js
<script src="node_modules/vidar/dist/vidar-iife.js"></script>
```

Let's look at an example:
```js
var movie = new vd.Movie({ canvas: outputCanvas })
var layer = new vd.layer.Video({ startTime: 0, source: videoElement })  // the layer starts at 0s
movie.addLayer(layer)
movie.record({ frameRate: 24 })  // or just `play` if you don't need to save it
    .then(blob => ...)
```

This renders `videoElement` to a blob at 24 fps. This blob can then be
downloaded as a video file.

Effects can transform the output of a layer or movie:
```js
var layer = new vd.layer.Video({ startTime: 0, source: videoElement })
    .addEffect(new vd.effect.Brightness({ brightness: +100 }))
```

# Using in Node

To use Vidar in Node, use the [wrapper](https://github.com/clabe45/vidar-node):
```
npm i vidar-node
```

```js
var vidarNode = require('vidar-node')

vidarNode(() => {
  // You can access inputs as html elements and pass them to Vidar as usual.
  var image = document.getElementById('input1') // <img> element

  // Use vidar normally ...

  movie
    .exportRaw()
    .then(window.done)
// Tell Vidar Node what inputs to load with { id: path }
}, { input1: 'image.png' }, 'output.mp4')
```

`vidarNode()` takes an optional Puppeteer page argument, so you can run
multiple Vidar scripts on the same movie (useful for servers). See [the
docs](https://github.com/clabe45/vidar-node#documentation).

# Contributing

Thank you very much for considering contributing to this project!

We appreciate any form of contribution:
- New issues (feature requests, bug reports, questions, ideas, ...)
- Pull requests (documentation improvements, code improvements, new features, ...)
