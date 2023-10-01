import "./style.css";

import Polyly from "../src/Polyly";

console.log(Polyly);

const renderer = new Polyly.Renderer({ webglVersion: 2 });
const camera = new Polyly.Camera(renderer.getDisplaySize());

renderer.clear();

renderer.line(new Polyly.Vector(0, 0), new Polyly.Vector(100, 100), 10, new Polyly.Color(100, 0, 0, 255));
renderer.line(new Polyly.Vector(-10, 30), new Polyly.Vector(-100, 150), 10, new Polyly.Color(0, 255, 15, 255));

camera.setZoom(2);

renderer.beginPath();
renderer.vertex(new Polyly.Vector(-400, -100), new Polyly.Color(255, 25, 0, 255));
renderer.vertex(new Polyly.Vector(-200, -100), new Polyly.Color(0, 255, 0, 255));
renderer.vertex(new Polyly.Vector(-200, 100), new Polyly.Color(0, 0, 255, 255));
renderer.vertex(new Polyly.Vector(-400, 100), new Polyly.Color(255, 0, 255, 255));
renderer.fillPath();
renderer.strokePath(20, true);

renderer.beginPath();
renderer.arc(new Polyly.Vector(0, 0), 100, 0, (Math.PI * 6) / 4, new Polyly.Color(255, 0, 0, 160));
renderer.vertex(new Polyly.Vector(0, 0), new Polyly.Color(255, 0, 255, 255));
renderer.strokePath(5, true);

renderer.render(camera);
