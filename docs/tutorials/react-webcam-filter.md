# Webcam Filter in React

In this guide, we'll create a simple webcam filter using React and Etro.

## Setting up the React app

First, we'll set up a new React app using
[create-react-app](https://create-react-app.dev):

```bash
npx create-react-app webcam-filter
cd webcam-filter
```

## Installing Etro

Now, we'll install Etro:

```bash
npm install etro
```

## Creating the movie

Now, we'll create a new [movie](../reference/movie), add a [video layer](../reference/layers/video) to it, and play it.

Create a new file `src/Movie.js`:

```js
import React, { useEffect, useRef } from "react";
import etro from "etro";

export default function Movie() {
  const canvasRef = useRef();
  const movieRef = useRef();

  useEffect(() => {
    // Use the canvas ref to get the canvas element
    const canvas = canvasRef.current;

    // Create a new movie instance
    const movie = new etro.Movie({ canvas });

    // Get the user's webcam stream
    navigator.mediaDevices
      .getUserMedia({ video: true })

      // Create a video element from the stream
      .then((stream) => {
        const video = document.createElement("video");
        video.srcObject = stream;
        return new Promise((resolve) => {
          video.onloadedmetadata = () => {
            resolve(video);
          };
        });
      })

      // Add a video layer to the movie and play it
      .then((video) => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const layer = new etro.layer.Video({
          startTime: 0,
          source: video,
        });
        movie.addLayer(layer);
        movie.play();
        movieRef.current = movie;
      });
  }, []);

  return <canvas ref={canvasRef} />;
}
```

Use the `Movie` component in `src/App.js`:

```js
import React from 'react'
import Movie from './Movie'

function App() {
  return (
    <div className="App">
      <Movie />
    </div>
  )
}
```

## Adding an effect

Now, we'll [write our own effect](../reference/effects/custom).

Create a new file `src/effect.js`:

```js
import etro from "etro";

export default class SaturationEffect extends etro.effect.Shader {
  constructor(options = {}) {
    super({
      fragmentSource: `
        precision highp float;

        uniform sampler2D u_Source;
        uniform float u_Saturation;

        varying vec2 v_TextureCoord;

        void main() {
          vec4 color = texture2D(u_Source, v_TextureCoord);
          float luminance = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
          gl_FragColor = vec4(mix(vec3(luminance), color.rgb, u_Saturation), color.a);
        }
      `,
      uniforms: {
        saturation: "1f",
      },
    });

    this.saturation = options.saturation || 1;
  }
}
```

Next we need to add the effect to the layer. We'll do this in `src/Movie.js`.

Import the effect:

```diff
 import React, { useEffect, useRef } from "react";
 import etro from "etro";
+import SaturationEffect from "./effect";
```

Add a `saturation` property to the `Movie` component:

```diff
-export default function Movie() {
+export default function Movie({ saturation = 1 }) {
```

Create a ref to store the effect instance:

```diff
 export default function Movie() {
   const canvasRef = useRef();
   const movieRef = useRef();
+  const effectRef = useRef();
```

Add the effect to the layer:

```diff
         const layer = new etro.layer.Video({
           startTime: 0,
           source: video,
         });
+        const effect = new SaturationEffect();
+        layer.addEffect(effect);
+
         movie.addLayer(layer);
         movie.play();
         movieRef.current = movie;
+        effectRef.current = effect;
       });
```

Now, update the effect when the `saturation` prop changes:

```diff
         movie.play();

         effectRef.current = effect;
         movieRef.current = movie;
       });
   }, []);
+
+  useEffect(() => {
+    if (effectRef.current) {
+      effectRef.current.saturation = saturation;
+    }
+  }, [saturation]);
```

Finally, we can pass a temporary `saturation` value to the `Movie` component in
`src/App.js`:

```diff
 import React from 'react'
 import Movie from './Movie'

 function App() {
    return (
       <div className="App">
-         <Movie />
+         <Movie saturation={0.5} />
     </div>
   )
 }
```

## Changing the saturation

Now, we'll add a slider to change the saturation.

Create a new file `src/Slider.js`:

```js
import React from "react";

export default function Slider({ value, onChange }) {
  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
```

Now, import the slider in `src/App.js`:

```diff
 import React from 'react'
 import Movie from './Movie'
+import Slider from './Slider'

 function App() {
    return (
       <div className="App">
          <Movie />
+         <Slider />
     </div>
   )
 }
```

Next, we'll add a state variable to the app to store the saturation value. This
value will be modified by the slider and passed to the effect:

```diff
 import React from 'react'
 import Movie from './Movie'
 import Slider from './Slider'

 function App() {
+   const [saturation, setSaturation] = React.useState(1)
+
    return (
      <div className="App">
-         <Movie saturation={0.5} />
-      <Slider />
+         <Movie saturation={saturation} />
+       <Slider value={saturation} onChange={setSaturation} />
      </div>
    )
 }
```

## Conclusion

That's it! You've created a webcam app with a saturation effect. If you have
any questions, feel free to ask them in the [etro Discord
server](https://discord.gg/myrBsQ8Cht).
