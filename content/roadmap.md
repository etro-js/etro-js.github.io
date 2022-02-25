+++
title = "Roadmap"
template = "page.html"
weight = 1
+++

<div class="heading-text">Roadmap</div>

Etro has several epics planned for the next phase of development. These will
most likely continue for multiple minor releases. If any of them interest you,
feel free to [contribute]!

# Offline Rendering

[Offline recording] with [ffmpeg.js] is the focus right now. This will get rid
of frame drops in the render, and it should also improve render speed.

# Audio System

A [new audio system], with more audio layers and the introduction of audio
effects is close to being done! It will provide a built-in API to manipulate
audio.

Some of the highlights:
- User-defined audio layers (from any audio source node)
- Panner effect
  - Changes the balance of an audio layer, moving the output to the left or
    right speaker
- Equalizer effect
  - Makes certain frequencies louder than others.
- Compressor effect
- Echo effect
- Reverb effect
- Pitch shift effect
- User-defined effects

Example custom effect (API may change):
```js
class Effect extends etro.effect.Audio {
  attach (target) {
    // Create any intermediary node
    this.node = target.movie.actx.createGain()
    this.node.volume.value = 2
    // `inputNode` and `outputNode` are populated by the target (they will
    // point to audio nodes of the target, the next/previous effect or
    // movie.actx)
    this.inputNode.connect(node)
    this.node.connect(this.outputNode)
  }

  detach() {
    this.inputNode.disconnect()
    this.node.disconnect()
  }
}
```

An [issue with recording audio in our functional tests] is preventing real
progress on this. Help with investigating the problem is welcome!

# Layer Inheritance

A new [group layer] will be introduced. A group layer will have both audio and
visual support, along with multiple children. Then, you will be able to apply an
effect to a group of layers.

[group layer]: https://github.com/etro-js/etro/issues/65

# Transitions

A [transition system] is also on its way! You will be able to attach any
built-in or custom transition to two layers. The transition will then
interpolate the audio and/or visual output of both layers. It will look
something like this:

```js
transition.addTo(layer1, layer2)
```

# Better Node Support

We are currently working on a etro-node rewrite with a focus on better
usability. Our goal is to make the API virtually identical to etro's API. More
details coming soon!

# 3D System

Although still in early planning, we could use three.js to add a 3D mode to
movies, where every visual and audio layer has a 3D position. Alternatively, we
could get rid of the concept of a "3D movie" and allow both 2D and 3D layers to
be added to any movie. Feel free to post on the [GitHub
discussion](https://github.com/etro-js/etro/discussions/78) if you have any
ideas!

# Other

Other planned changes:

- [Creating sources directly from path / url](https://github.com/etro-js/etro/issues/61)
- [Integration with canvas libraries](https://github.com/etro-js/etro/issues/109) (such as fabric.js)
- [Layer duplication](https://github.com/etro-js/etro/issues/60)
- [Improved gaussian blur](https://github.com/etro-js/etro/issues/44)
- [More visual effects](https://github.com/etro-js/etro/issues/10) (exposure, glow, random noise and more)

If you would like to make a feature request, please [open an issue] on GitHub!

[contribute]: https://github.com/etro-js/etro/blob/master/CONTRIBUTING.md
[offline recording]: https://github.com/etro-js/etro/issues/115
[ffmpeg.js]: https://github.com/Kagami/ffmpeg.js
[new audio system]: https://github.com/etro-js/etro/projects/1
[issue with recording audio in our functional tests]: https://github.com/etro-js/etro/issues/100
[transition system]: https://github.com/etro-js/etro/projects/3
[open an issue]: https://github.com/etro-js/etro/issues
