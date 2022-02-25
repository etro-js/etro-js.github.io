+++
title = "Introducing the Eighth Update"
template = "page.html"
+++

<div class="heading-text">Introducing the Eighth Update</div>

*By Caleb Sacks - April 3, 2021*

The [Eighth Update] is here! In fact, this is the eighth update that has ever
been released. We'll go over the most interesting changes here, but please check
out the [changelog](../../changelog) to see the entire list!

# TypeScript Support

After version 0.7.0 was released, Etro was ported to TypeScript. This means up-to-date
type declaration files for TypeScript projects, as well as remaining
compatibility with pure JavaScript projects (plus better documentation). No
extra steps are required to use the framework in your TypeScript project.

# Support for More Browsers

Etro now uses a polyfill for the web audio API so more browsers can use it.

# Recording a Subsection

[`Movie#record`](../../docs/api/classes/movie.html#record) now accepts a `duration` option that controls how long to record
for. By setting the movie's `startTime` and then recording with a duration, you
can record a part of the movie:

```js
// Record from 5s to 8s
movie.startTime = 5
movie.record({ frameRate: 29, duration: 3 })
```

# New Keyframe Syntax

You can now set the interpolation for a specific point in a keyframe set.

**Before:**
```js
{ time1: value1, time2: value2 }
```

**After:**
```js
new etro.KeyFrame([time1, value1, interpolationBetween1And2], [time2, value2])
```

The interpolation item is optional.

*See also: [Dynamic Properties](../../docs/dynamic-properties)*

# Unsubscribing from Events

There is now a `etro.event.unsubscribe` to remove event listeners.

# Bugfixes

A bunch of bugs were fixed. See the [changelog](../../changelog).

# Breaking Changes

See [this guide for migrating](../../docs/migrating-v0-8-0).

[Eighth Update]: https://github.com/etro-js/etro/releases/tag/v0.8
