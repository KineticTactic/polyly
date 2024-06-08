import "./style.css";

import * as Polyly from "../src/Polyly";

const renderer = new Polyly.Renderer({ webglVersion: 2, initTextRenderer: true });

renderer.clear();

// renderer.transform.translate(new Polyly.Vector(50, 0));
// renderer.transform.rotate(0.5);
// renderer.transform.scale(new Polyly.Vector(0.5, 0.5));
// renderer.line(new Polyly.Vector(0, 0), new Polyly.Vector(100, 100), 10, new Polyly.Color(100, 0, 0, 255));
// renderer.line(new Polyly.Vector(-10, 30), new Polyly.Vector(-100, 150), 10, new Polyly.Color(0, 255, 15, 255));

renderer.camera.setZoom(2);

// renderer.transform.resetTransforms();
// renderer.transform.translate(new Polyly.Vector(500, 200));
// renderer.transform.scale(new Polyly.Vector(1.5, 1));
// renderer.strokePath(10, { closed: true, dashed: true, dashLength: 15 });
// renderer.transform.resetTransforms();

// const buffer = new Polyly.DynamicBuffer(renderer.gl, { bufferSize: 8 });

// renderer.setBuffer(buffer);

// renderer.beginPath();
// renderer.vertex(Polyly.Vec(-400, -100), Polyly.RGBA(255, 25, 0, 255));
// renderer.vertex(Polyly.Vec(-200, -100), Polyly.RGBA(0, 255, 0, 255));
// renderer.vertex(Polyly.Vec(-200, 100), Polyly.RGBA(0, 0, 255, 255));
// renderer.vertex(Polyly.Vec(-400, 100), Polyly.RGBA(255, 0, 255, 255));
// renderer.stroke(20, { closed: true });
// renderer.translate(-60, 0);
// renderer.scale(0.8);
// renderer.fill();

// renderer.beginPath();
// renderer.transform.translate(Polyly.Vec(200, 0));
// renderer.vertex(Polyly.Vec(-400, -100), Polyly.RGBA(255, 25, 0, 255));
// renderer.vertex(Polyly.Vec(-200, -100), Polyly.RGBA(0, 255, 0, 255));
// renderer.vertex(Polyly.Vec(-200, 100), Polyly.RGBA(0, 0, 255, 255));
// renderer.vertex(Polyly.Vec(-400, 100), Polyly.RGBA(255, 0, 255, 255));
// renderer.transform.scale(Polyly.Vec(0.8, 0.8));
// renderer.stroke(20, { closed: true });
// renderer.fill();

// buffer.update();
// console.log(buffer);

// renderer.setBuffer(0);

// ///TODO: No way to fill and stroke different colours for a given shape.
// renderer.beginPath();
// renderer.setColor(Polyly.RGBA(255, 0, 0, 255));
// renderer.arc(Polyly.Vec(0, 0), 100, 0, Math.PI * 2);
// renderer.stroke(2);

// renderer.resetTransforms();
// renderer.beginPath();
// renderer.translate(Polyly.Vec(-100, 150));
// renderer.rotate(0.5);
// renderer.setColor(Polyly.RGBA(0, 200, 255, 255));
// renderer.rect(Polyly.Vec(0, 0), Polyly.Vec(150, 150));
// // renderer.fill();
// renderer.stroke(5, { closed: true });
let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function draw() {
    renderer.clear();

    renderer.beginPath();
    renderer.resetTransforms();
    // renderer.translate(Polyly.Vec(-200, 0));
    renderer.scale(1);
    renderer.setColor(Polyly.RGBA(255, 0, 255, 150));
    renderer.vertex(Polyly.Vec(0, 0));
    renderer.vertex(Polyly.Vec(100, 100), Polyly.RGBA(0, 255, 0, 150));
    renderer.vertex(Polyly.Vec(200, 200), Polyly.RGBA(0, 0, 255, 150));
    renderer.vertex(Polyly.Vec(200, 100), Polyly.RGBA(255, 0, 0, 150));
    renderer.vertex(Polyly.Vec(250, 0), Polyly.RGBA(255, 255, 0, 150));
    renderer.vertex(Polyly.Vec(-150, -100));
    renderer.vertex(renderer.camera.screenSpaceToWorldSpace(Polyly.Vec(mouseX, mouseY)), Polyly.RGBA(255, 255, 255, 150));
    // renderer.vertex(Polyly.Vec(100, 110));
    // renderer.vertex(Polyly.Vec(150, 20));
    // renderer.splitPath();
    renderer.stroke(40, { closed: false, miterLimit: 75 });

    // renderer.beginPath();
    // renderer.arc(new Polyly.Vector(0, 0), 100, 0, (Math.PI * 6) / 4);
    // renderer.vertex(new Polyly.Vector(0, 0), new Polyly.Color(255, 0, 255, 255));
    // renderer.stroke(5, { closed: true });

    // renderer.beginPath();
    // renderer.arc(new Polyly.Vector(200, 0), 100, 0, (Math.PI * 6) / 4);
    // renderer.vertex(new Polyly.Vector(200, 0), new Polyly.Color(0, 0, 255, 255));
    // renderer.transform.rotate(Math.PI);
    // renderer.transform.translate(new Polyly.Vector(200, -20));
    // renderer.stroke(15, { closed: true });

    // renderer.beginPath();
    // renderer.transform.resetTransforms();
    // renderer.setVertexColor(new Polyly.Color(255, 0, 0, 255));
    // renderer.vertex(new Polyly.Vector(0, 0));
    // renderer.vertex(new Polyly.Vector(0, 200));
    // renderer.splitPath();
    // renderer.vertex(new Polyly.Vector(200, 200));
    // renderer.vertex(new Polyly.Vector(200, 0));
    // renderer.stroke(15, { closed: true });

    // buffer.update();

    // buffer.transform.translate(new Polyly.Vector(100, 0));
    // buffer.transform.rotate(0.7);
    // buffer.transform.scale(new Polyly.Vector(0.5, 0.5));

    // renderer.setBuffer(0);

    // renderer.beginPath();
    // renderer.arc(new Polyly.Vector(200, -200), 200, 0, Math.PI * 2, new Polyly.Color(0, 255, 255, 255), 0.5);
    // renderer.strokePath(5, { closed: true });

    // renderer.beginPath();
    // renderer.rect(new Polyly.Vector(0, 0), new Polyly.Vector(100, 100), new Polyly.Color(255, 0, 0, 255));
    // renderer.fillPath();

    // renderer.transform.resetTransforms();
    // renderer.setTextAlign("center");
    // renderer.renderText("Hellooo World!", new Polyly.Vector(100, 100), Polyly.Color.WHITE);
    // renderer.setFont("30px Arial");
    // renderer.renderText("THE quick Brown Fox ", new Polyly.Vector(-100, 0), Polyly.Color.WHITE);

    // renderer.camera.translate(new Polyly.Vector(-100, -100));
    // // renderer.camera.setZoom(0.2);
    // renderer.camera.setZoom(2);
    // console.log(renderer.camera);

    // console.log(renderer.camera.worldSpaceToScreenSpace(renderer.camera.screenSpaceToWorldSpace(new Polyly.Vector(100, 100))));

    renderer.render();
    requestAnimationFrame(draw);
}
draw();
