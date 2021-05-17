+++
title = "Roadmap"
template = "page.html"
weight = 1
+++

<div class="heading-text">Roadmap</div>

Vidar has several epics planned for the next phase of development. These will
most likely continue for multiple minor releases. If any of them interest you,
feel free to [contribute]!

# True Node Support

We are currently working on a vidar-node rewrite. The rewrite will use Node
implementations of browser technologies to create a seamless Node integration
without running in a headless browser.

# Audio System

A [new audio system], with more audio layers and the introduction of audio
effects is on its way!

Some of the highlights:
- Panner effect
- Equalizer effect
- Compressor effect
- Echo effect
- Reverb effect
- Pitch shift effect

# Layer Inheritance

A new [group layer] will be introduced. A group layer will have both audio and
visual support, along with multiple children.

[group layer]: https://github.com/clabe45/vidar/issues/65

# Transitions

A [transition system] is also on its way! You will be able to attach any
built-in or custom transition to two layers. The transition will then
interpolate the audio and/or visual output of both layers.

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
- [Duplicating layers](https://github.com/clabe45/vidar/issues/60)
- [Improved gaussian blur](https://github.com/clabe45/vidar/issues/44)
- [More visual effects](https://github.com/clabe45/vidar/issues/10)

[contribute]: https://github.com/clabe45/vidar/blob/master/CONTRIBUTING.md
[new audio system]: https://github.com/clabe45/vidar/projects/1
[transition system]: https://github.com/clabe45/vidar/projects/3
