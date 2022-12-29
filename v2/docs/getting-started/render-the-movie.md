---
sidebar_position: 5
---

# Render the Movie

In this section, you'll learn how to render your movie. You can render your movie to a `<canvas>` element or record it to a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

## Render to Canvas

To render your movie to the provided `<canvas>` element and the movie's [audio context](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext), you can use the `play()` method:

```js
movie.play().then(() => {
  console.log('Movie finished playing!');
});
```

## Record to Blob

To record your movie to a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob), you can use the `record()` method:

```js
movie.record({
  frameRate: 30,
}).then(blob => {
  console.log('Movie finished recording!');
  console.log('Blob:', blob);
});
```

## Conclusion

This concludes the tutorial. You can now create movies with Etro!
