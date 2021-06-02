+++
title = "Roadmap"
template = "page.html"
weight = 1
+++

<div class="heading-text">Roadmap</div>

Vidar has several epics planned for the next phase of development. These will
most likely continue for multiple minor releases. If any of them interest you,
feel free to [contribute]!

# Better Node Support

We are currently working on a vidar-node rewrite with a focus on usability. Our
goal is to make the API virtually identical to vidar's API. More details coming
soon!

# Audio System

A [new audio system], with more audio layers and the introduction of audio
effects is on its way! This will be a built-in way to manipulate audio.

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
class Effect extends vd.effect.Audio {
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

# Layer Inheritance

A new [group layer] will be introduced. A group layer will have both audio and
visual support, along with multiple children. Then, you will be able to apply an
effect to a group of layers.

[group layer]: https://github.com/clabe45/vidar/issues/65

# Transitions

A [transition system] is also on its way! You will be able to attach any
built-in or custom transition to two layers. The transition will then
interpolate the audio and/or visual output of both layers. It will look
something like this:

```js
transition.addTo(layer1, layer2)
```

# 3D System

Although still in early planning, we could use three.js to add a 3D mode to
movies, where every visual and audio layer has a 3D position. Alternatively, we
could get rid of the concept of a "3D movie" and allow both 2D and 3D layers to
be added to any movie. Feel free to post on the [GitHub
discussion](https://github.com/clabe45/vidar/discussions/78) if you have any
ideas!

# Other

Other planned changes:

- [Creating sources directly from path / url](https://github.com/clabe45/vidar/issues/61)
- [Layer duplication](https://github.com/clabe45/vidar/issues/60)
- [Improved gaussian blur](https://github.com/clabe45/vidar/issues/44)
- [More visual effects](https://github.com/clabe45/vidar/issues/10) (exposure, glow, random noise and more)

[contribute]: https://github.com/clabe45/vidar/blob/master/CONTRIBUTING.md
[new audio system]: https://github.com/clabe45/vidar/projects/1
[transition system]: https://github.com/clabe45/vidar/projects/3
