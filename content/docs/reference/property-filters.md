+++
title = "Property Filters"
template = "page.html"
+++

<div class="heading-text">Property Filters</div>

Property filters map the per-frame value (`etro.val` output) of a property to a
new value. They are useful for applying custom logic to the output of a key
frame set or function at a given time.

# Usage

```js
class CustomLayer extends etro.layer.Base {
  constructor(options) {
    super(options)
    this.foo = options.foo
  }
}

CustomLayer.prototype.propertyFilters = {
  // Inherit superclass's property filters
  ...etro.layer.Base.propertyFilters,
  // Define `foo` property filter
  foo: foo => Math.max(0, Math.min(foo, 1)) // clamp between 0 and 1
}
```

Now, you can evaluate the value as usual, and `val` will apply the property
filter (after evaluating the key frame or function):

```js
const layer = new CustomLayer({ startTime: 0, duration: 3, foo: 2 })
console.log(layer.foo)  // prints '2', no property filter applied
console.log(etro.val(layer, 'foo', layer.currentTime))  // prints '1', property filter applied
```
