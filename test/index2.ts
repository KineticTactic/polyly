import "./style.css";

import * as Polyly from "../dist/Polyly";

const renderer = new Polyly.Renderer({ webglVersion: 2 });

function draw() {
    requestAnimationFrame(draw);

    renderer.clear();

    console.time();
    for (let y = 0; y < 10000; y += 1) {
        renderer.line(new Polyly.Vector(0, y), new Polyly.Vector(window.innerWidth, y), 1, new Polyly.Color(255, 255, 255, 255));
    }
    console.timeEnd();

    renderer.render();
}

draw();
