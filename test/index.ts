import "./style.css";

import * as Polyly from "../src/Polyly";

const renderer = new Polyly.Renderer({ webglVersion: 2, initTextRenderer: true });

renderer.clear();

renderer.camera.setZoom(2);

renderer.beginPath();
renderer.vertex(new Polyly.Vector(-400, -100), new Polyly.Color(255, 25, 0, 255));
renderer.vertex(new Polyly.Vector(-200, -100), new Polyly.Color(0, 255, 0, 255));
renderer.vertex(new Polyly.Vector(-200, 100), new Polyly.Color(0, 0, 255, 255));
renderer.vertex(new Polyly.Vector(-400, 100), new Polyly.Color(255, 0, 255, 255));
renderer.fill();
renderer.transform.resetTransforms();
renderer.stroke(20, { closed: true });
renderer.transform.translate(new Polyly.Vector(500, 200));
renderer.transform.scale(new Polyly.Vector(1.5, 1));
renderer.stroke(10, { closed: true, dashed: true, dashLength: 15 });
renderer.transform.resetTransforms();

const buffer = new Polyly.StaticBuffer(renderer.gl);

renderer.setBuffer(buffer);

renderer.beginPath();
renderer.arc(new Polyly.Vector(0, 0), 400, 0, (Math.PI * 6) / 4);
renderer.vertex(new Polyly.Vector(0, 0), new Polyly.Color(255, 0, 255, 255));
renderer.arc(new Polyly.Vector(200, 0), 100, 0, (Math.PI * 6) / 4);
renderer.stroke(5, { closed: true });

buffer.update();

buffer.transform.translate(new Polyly.Vector(100, 0));
buffer.transform.rotate(0.7);
buffer.transform.scale(new Polyly.Vector(0.5, 0.5));

renderer.setBuffer(0);

renderer.beginPath();
renderer.arc(new Polyly.Vector(200, -200), 200, 0, Math.PI * 2, 0.5);
renderer.stroke(5, { closed: true });

renderer.beginPath();
renderer.rect(new Polyly.Vector(0, 0), new Polyly.Vector(100, 100));
renderer.fill();

renderer.fillText("Hellooo World!", new Polyly.Vector(100, 100));
renderer.setFontFace("Arial");
renderer.setFontSize(30);
renderer.fillText("THE quick Brown Fox ", new Polyly.Vector(-100, 0));

renderer.camera.translate(new Polyly.Vector(-100, -100));
// renderer.camera.setZoom(0.2);
renderer.camera.setZoom(2);
console.log(renderer.camera);

console.log(renderer.camera.worldSpaceToScreenSpace(renderer.camera.screenSpaceToWorldSpace(new Polyly.Vector(100, 100))));

renderer.render();
