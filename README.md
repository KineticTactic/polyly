# Polyly

A WebGL based fast 2D primitives renderer.

[API Documentation](https://kinetictactic.github.io/polyly/index.html) | [NPM](https://npmjs.com/package/polyly) 

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
renderer.line(new Polyly.Vector(0, 0), new Polyly.Vector(100, 100), 10, new Polyly.Color(100, 0, 0, 255));

renderer.render(camera);
```

### Drawing lines

`Renderer.line(start, end, width, color)`

```js
renderer.line(new Polyly.Vector(-10, 30), new Polyly.Vector(-100, 150), 10, new Polyly.Color(0, 255, 15, 255));
```

### Drawing shapes

`Renderer.rect(position, size, color)`

```js
renderer.beginPath();
renderer.rect(new Polyly.Vector(0, 0), new Polyly.Vector(200, 100), new Polyly.Color(255, 0, 0, 255));
renderer.fillPath();
```

`Renderer.arc(position, radius, startAngle, endAngle, color)`

```js
renderer.beginPath();
renderer.arc(new Polyly.Vector(0, 0), 100, 0, (Math.PI \* 6) / 4, new Polyly.Color(255, 0, 0, 160));
renderer.fillPath();
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
renderer.fillPath();
```

### Fill and stroke

`Renderer.strokePath(width, strokePathOptions?)`

Strokes (outlines) every single path or shape added since the last `Renderer.beginPath()` call.

```js
renderer.strokePath(10, { closed: true, dashed: true, dashLength: 15 });
```

`Renderer.fillPath()`

Fills every single path or shapes added since the last `Renderer.beginPath()` call.

```js
renderer.fillPath();
```

## Why another rendering library?

I had to write a basic 2D renderer for one of my other projects ([light-playground](https://github.com/KineticTactic/light-playground)) as HTML5 Canvas was too slow for my needs.  I also wanted the API to be similar to the Canvas API for its dynamic capabilities and ease of use. So I ended up converting it into a seperate 2D rendering library.
