# Polyly

A WebGL based 2D primitives renderer.

### Install

```
$ npm install polyly
```

### Getting Started

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

Draws a line.

```js
renderer.line(new Polyly.Vector(-10, 30), new Polyly.Vector(-100, 150), 10, new Polyly.Color(0, 255, 15, 255));
```

### Drawing shapes

`Renderer.rect(position, size, color)`

Draws a rectangle.

```js
renderer.beginPath();
renderer.rect(new Polyly.Vector(0, 0), new Polyly.Vector(200, 100), new Polyly.Color(255, 0, 0, 255));
renderer.fillPath();
```

`Renderer.arc(position, radius, startAngle, endAngle, color)`

Draws an arc or a circle.

```js
renderer.beginPath();
renderer.arc(new Polyly.Vector(0, 0), 100, 0, (Math.PI \* 6) / 4,
             new Polyly.Color(255, 0, 0, 160));
renderer.fillPath();
```

### Drawing paths

`Renderer.vertex(position, color)`

`Renderer.vertex(vertex)`

Adds a vertex to the current path.

```js
renderer.beginPath();
renderer.vertex(new Polyly.Vector(-400, -100), new Polyly.Color(255, 25, 0, 255));
renderer.vertex(new Polyly.Vector(-200, -100), new Polyly.Color(0, 255, 0, 255));
renderer.vertex(new Polyly.Vector(-200, 100), new Polyly.Color(0, 0, 255, 255));
renderer.vertex(new Polyly.Vector(-400, 100), new Polyly.Color(255, 0, 255, 255));
renderer.strokePath(10);
renderer.fillPath();
```

### Fill and stroke

`Renderer.strokePath(width, strokePathOptions?)`

Strokes (outlines) every single path or shape added since the last `Renderer.beginPath()` call.

```js
strokePathOptions: {
    closed?: boolean;       // set to true for a closed path
    dashed?: boolean;       // set to true for a dashed line
    dashLength?: number;    // length of dashes (for a dashed line)
}
```

```js
renderer.strokePath(10, { closed: true, dashed: true, dashLength: 15 });
```

`Renderer.fillPath()`

Fills every single path or shapes added since the last `Renderer.beginPath()` call.

```js
renderer.fillPath();
```

### Render

`Renderer.render(camera)`

Renders the scene. (to be called once per frame)

```js
renderer.render(camera);
```
