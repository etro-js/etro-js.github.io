+++
title = "Etro"
+++

# Etro

- Composite video and audio layers
- Use built-in hardware accelerated effects
- Write your own effects in JavaScript and GLSL
- Manipulate audio with the web audio API
- Define layer and effect properties as keyframes and functions
- Export to a blob or file

# Installation

```
npm install etro
```

# Usage

```js
import etro from 'etro'

var movie = new etro.Movie({ canvas: outputCanvas })
var layer = new etro.layer.Video({ startTime: 0, source: videoElement })  // the layer starts at 0s
movie.addLayer(layer)
movie.record({ frameRate: 24 })  // or just `play` if you don't need to save it
    .then(blob => ...)
```

This renders `videoElement` to a blob at 24 fps. This blob can then be
downloaded as a video file.

Effects can transform the output of a layer or movie:
```js
var layer = new etro.layer.Video({ startTime: 0, source: videoElement })
    .addEffect(new etro.effect.Brightness({ brightness: +100 }))
```

# Using in Node

To use Etro in Node, use the [wrapper](https://github.com/etro-js/etro-node):
```
npm i etro-node
```

```js
var etroNode = require('etro-node')

etroNode(() => {
  // You can access inputs as html elements and pass them to Etro as usual.
  var image = document.getElementById('input1') // <img> element

  // Use etro normally ...

  movie
    .exportRaw()
    .then(window.done)
// Tell Etro Node what inputs to load with { id: path }
}, { input1: 'image.png' }, 'output.mp4')
```

`etroNode()` takes an optional Puppeteer page argument, so you can run
multiple Etro scripts on the same movie (useful for servers). See [the
docs](https://github.com/etro-js/etro-node#documentation).

# Contributing

Thank you very much for considering contributing to this project!

We appreciate any form of contribution:
- New issues (feature requests, bug reports, questions, ideas, ...)
- Pull requests (documentation improvements, code improvements, new features, ...)

Please see the [contributing guide] for more information.

[contributing guide]: https://github.com/etro-js/etro/blob/master/CONTRIBUTING.md
