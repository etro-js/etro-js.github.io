+++
title = "Movies"
template = "page.html"
+++

<div class="heading-text">Movies</div>

The [`etro.Movie`](/docs/api/classes/Movie.html) class
is used to render layers and effects into a single video blob. When creating a
movie, a canvas to render to is required:

```js
var canvas = document.createElement('canvas')
var movie = new etro.Movie({ canvas )})
```

From here, you can either set the `width` and `height` on the canvas or the
movie to adjust the dimensions:

```js
movie.width = 200  // also sets the canvas's width to 200
movie.height = 200  // also sets the canvas's height to 200
```

Now we have a 200x200 movie, but there are no layers so nothing will be
rendered. In the [next section](../layers), we'll add a video clip to the
movie.
