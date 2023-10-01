# polyly

A WebGL based 2D primitives renderer.

### Install

```
$ npm install polyly
```

### Sample code

```js
import Polyly from "polyly";

// Create a Renderer
const renderer = new Polyly.Renderer({ webglVersion: 2 });

// Create a Camera
const camera = new Polyly.Camera(renderer.getDisplaySize());

// Clears the screen
renderer.clear();

// Draw Lines
renderer.line(new Polyly.Vector(0, 0), new Polyly.Vector(100, 100), 10, new Polyly.Color(100, 0, 0, 255));
renderer.line(new Polyly.Vector(-10, 30), new Polyly.Vector(-100, 150), 10, new Polyly.Color(0, 255, 15, 255));

// Draw Paths by adding vertices
renderer.beginPath();
renderer.vertex(new Polyly.Vector(-400, -100), new Polyly.Color(255, 25, 0, 255));
renderer.vertex(new Polyly.Vector(-200, -100), new Polyly.Color(0, 255, 0, 255));
renderer.vertex(new Polyly.Vector(-200, 100), new Polyly.Color(0, 0, 255, 255));
renderer.vertex(new Polyly.Vector(-400, 100), new Polyly.Color(255, 0, 255, 255));

// Fill or stroke the path
renderer.fillPath();
renderer.strokePath(20, true);

// Draw Circular paths with Renderer.arc()
renderer.beginPath();
renderer.arc(new Polyly.Vector(0, 0), 100, 0, (Math.PI * 6) / 4, new Polyly.Color(255, 0, 0, 160));
renderer.vertex(new Polyly.Vector(0, 0), new Polyly.Color(255, 0, 255, 255));
renderer.strokePath(5, true);

// Render
renderer.render(camera);
```
