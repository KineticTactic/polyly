import "./style.css";

import Polyly from "../src/Polyly";

const renderer = new Polyly.Renderer({ webglVersion: 2 });
const camera = new Polyly.Camera(renderer.getDisplaySize());

renderer.clear();

renderer.transform.translate(new Polyly.Vector(50, 0));
renderer.transform.rotate(0.5);
renderer.transform.scale(new Polyly.Vector(0.5, 0.5));
renderer.line(new Polyly.Vector(0, 0), new Polyly.Vector(100, 100), 10, new Polyly.Color(100, 0, 0, 255));
renderer.line(new Polyly.Vector(-10, 30), new Polyly.Vector(-100, 150), 10, new Polyly.Color(0, 255, 15, 255));

camera.setZoom(2);

renderer.beginPath();
renderer.vertex(new Polyly.Vector(-400, -100), new Polyly.Color(255, 25, 0, 255));
renderer.vertex(new Polyly.Vector(-200, -100), new Polyly.Color(0, 255, 0, 255));
renderer.vertex(new Polyly.Vector(-200, 100), new Polyly.Color(0, 0, 255, 255));
renderer.vertex(new Polyly.Vector(-400, 100), new Polyly.Color(255, 0, 255, 255));
renderer.fillPath();
renderer.transform.resetTransforms();
renderer.strokePath(20, true);

const buffer = new Polyly.StaticBuffer(renderer.gl);

renderer.setBuffer(buffer);

renderer.beginPath();
renderer.arc(new Polyly.Vector(0, 0), 100, 0, (Math.PI * 6) / 4, new Polyly.Color(255, 0, 0, 160));
renderer.vertex(new Polyly.Vector(0, 0), new Polyly.Color(255, 0, 255, 255));
renderer.arc(new Polyly.Vector(200, 0), 100, 0, (Math.PI * 6) / 4, new Polyly.Color(255, 150, 0, 160));
renderer.strokePath(5, true);

buffer.update();

buffer.transform.translate(new Polyly.Vector(100, 0));
buffer.transform.rotate(0.7);
buffer.transform.scale(new Polyly.Vector(0.5, 0.5));

renderer.setBuffer(0);

renderer.render(camera);
