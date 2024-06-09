# Polyly

A WebGL based fast 2D primitives renderer.

[API Documentation](https://kinetictactic.github.io/polyly/index.html) | [NPM](https://npmjs.com/package/polyly)

#### Disclaimer:

This library is in a very early state with lots of inconsistencies. You're not recommended to use it in your own projects just yet.

## Install

```
$ npm install polyly
```

## Getting Started

```js
import * as Polyly from "polyly";

const renderer = new Polyly.Renderer({ webglVersion: 2 });
const camera = new Polyly.Camera(renderer.getDisplaySize());

renderer.clear();

// Draw a line
renderer.beginPath();
renderer.line(new Polyly.Vector(0, 0), new Polyly.Vector(100, 100), 10);
renderer.stroke();
renderer.render(camera);
```

### Drawing lines

`Renderer.line(start, end, width)`

```js
renderer.line(new Polyly.Vector(-10, 30), new Polyly.Vector(-100, 150), 10);
```

### Drawing shapes

`Renderer.rect(position, size)`

```js
renderer.beginPath();
renderer.setColor(Polyly.RGB(255, 255, 0));
renderer.rect(new Polyly.Vector(0, 0), new Polyly.Vector(200, 100));
renderer.fill();
```

`Renderer.arc(position, radius, startAngle, endAngle, color)`

```js
renderer.beginPath();
renderer.setColor(Polyly.RGB(255, 255, 0));
renderer.arc(new Polyly.Vector(0, 0), 100, 0, (Math.PI * 6) / 4);
renderer.fill();
```

### Drawing paths

`Renderer.vertex(position, color)` or `Renderer.vertex(vertex)`

Adds a vertex to the current path.

```js
renderer.beginPath();
renderer.vertex(new Polyly.Vector(-400, -100), new Polyly.Color(255, 25, 0, 255));
renderer.vertex(new Polyly.Vector(-200, -100), new Polyly.Color(0, 255, 0, 255));
renderer.vertex(new Polyly.Vector(-200, 100), new Polyly.Color(0, 0, 255, 255));
renderer.strokePath(10);
renderer.fill();
```

### Fill and stroke

`Renderer.stroke(width, strokeOptions?)`

Strokes (outlines) every single path or shape added since the last `Renderer.beginPath()` call.

```js
renderer.stroke(10, { closed: true, dashed: true, dashLength: 15 });
```

`Renderer.fill()`

Fills every single path or shapes added since the last `Renderer.beginPath()` call.

```js
renderer.fill();
```

## Why another rendering library?

I had to write a basic 2D renderer for one of my other projects ([Reflecta](https://github.com/KineticTactic/Reflecta)) as HTML5 Canvas was too slow for my needs. I also wanted the API to be similar to the Canvas API for its dynamic capabilities and ease of use. So I ended up converting it into a seperate 2D rendering library.
