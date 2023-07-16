---
sidebar_position: 2
---

# Writing a Visual Effect

This tutorial will walk you through the process of creating a custom GLSL effect. We will be creating a custom chroma key effect that will turn a green screen into a transparent background. Etro includes a default chroma key effect, but this tutorial will show you how to create your own.

## Effect Targets

Before we get started, let's define a term that will be used throughout this tutorial: effect targets. An effect target is the movie or layer that the effect is applied to.

## Creating the Effect

The first step is to create a new class that extends `etro.effect.Shader`. This class will be responsible for creating the shader and setting up the uniforms. The class should look something like this:

```ts
import etro from 'etro'

export class ChromaKey extends etro.effect.Shader {
  color: Dynamic<etro.Color>
  threshold: Dynamic<number>

  constructor({
    color = { r: 0, g: 0, b: 0 },
    threshold = 0,
  }: {
    color?: Dynamic<etro.Color>
    threshold?: Dynamic<number>
  }) {
    this.color = color
    this.threshold = threshold
  }
}
```

The constructor takes a [dynamic](/docs/reference/dynamic-properties) number that will be used to set the threshold uniform. The `etro.effect.Shader` class takes a single argument, which is an object containing the shader source code. We will fill this in in the next step.

## Writing the Shader

The shader code is written in GLSL, which is a C-like language that is used to write shaders for WebGL. The shader code is split into two parts: the vertex shader and the fragment shader. The vertex shader is responsible for transforming the vertices of the mesh into screen space. The fragment shader is responsible for calculating the color of each pixel.

We only need to write the fragment shader. The `Shader` effect uses a default vertex shader that will render the target as a texture on a quad filling the entire screen. The fragment shader will be responsible for calculating the color of each pixel:

```glsl
precision mediump float;

uniform sampler2D u_Source;
uniform vec3 u_Color;
uniform float u_Threshold;

varying vec2 v_TextureCoord;

void main() {
  vec4 color = texture2D(u_Source, v_TextureCoord);

  float distance = length(color.rgb - u_Color.rgb);
  float alpha = smoothstep(u_Threshold, 0.0, distance);

  gl_FragColor = vec4(color.rgb, alpha);
}
```

The first line is a GLSL directive that specifies the precision of the floating point numbers. The `u_Source` uniform is a sampler that will be used to sample the target. The `u_Color` uniform is the color to remove. The `u_Threshold` uniform is the threshold to use when calculating the alpha. The `v_TextureCoord` variable is the texture coordinate of the current pixel. The `texture2D` function is used to sample the target at the current texture coordinate. The `length` function is used to calculate the distance between two colors. The `smoothstep` function is used to interpolate between two values. The `gl_FragColor` variable is the color of the current pixel.

Now that we have the shader code, we can fill in the constructor:

```ts
import etro from 'etro'

export class ChromaKey extends etro.effect.Shader {
  color: Dynamic<etro.Color>
  threshold: Dynamic<number>

  constructor({
    color = { r: 0, g: 0, b: 0 },
    threshold = 0,
  }: {
    color?: Dynamic<etro.Color>
    threshold?: Dynamic<number>
  }) {
    super({
      fragment: `
        precision mediump float;

        uniform sampler2D u_Source;
        uniform vec3 u_Color;
        uniform float u_Threshold;

        varying vec2 v_TextureCoord;

        void main() {
          vec4 color = texture2D(u_Source, v_TextureCoord);

          float distance = length(color.rgb - u_Color.rgb);
          float alpha = smoothstep(u_Threshold, 0.0, distance);

          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
      uniforms: {
        color: '3fv',
        threshold: '1f',
      },
    })

    this.color = color
    this.threshold = threshold
  }
}
```

The `Shader` class will automatically evaluate the `color` and `threshold` properties and send them to the shader as uniforms. The `color` uniform is a `vec3` and the `threshold` uniform is a `float`. The `uniforms` object is used to specify the type of each uniform. The `3fv` type is a 3-component vector of floats and the `1f` type is a single float.

## Using the Effect

Now that we have created the effect, we can use it to create a movie with a transparent background:

```ts
import etro from 'etro'
import { ChromaKey } from './ChromaKey'

const canvas = document.querySelector('canvas')!
const movie = new etro.Movie({
  canvas,
})

const video = new etro.layer.Video({
  source: 'video.mp4',
})

const chromaKey = new ChromaKey({
  color: new etro.Color(0, 1, 0),
  threshold: 0.1,
})

video.effects.push(chromaKey)

movie.layers.push(video)

window.addEventListener('click', () => {
  if (movie.playing) {
    movie.pause()
  } else {
    movie.play()
  }
})
```
