import Vector from "./Vector";
import Vertex from "./Vertex";
import * as twgl from "twgl.js";

export class Transform {
    translation: Vector;
    rotation: number;
    scaling: Vector;
    transformed: boolean = false;

    constructor() {
        this.translation = new Vector(0, 0);
        this.rotation = 0;
        this.scaling = new Vector(1, 1);
    }

    public translate(translation: Vector) {
        this.translation = translation;
        this.transformed = true;
    }

    public rotate(rotation: number) {
        this.rotation = rotation;
        this.transformed = true;
    }

    public scale(scale: Vector) {
        this.scaling = scale;
        this.transformed = true;
    }

    public resetTransforms() {
        this.translation = new Vector(0, 0);
        this.rotation = 0;
        this.scaling = new Vector(1, 1);
        this.transformed = false;
    }

    public transformVertices(vertices: Vertex[]) {
        if (!this.transformed) return vertices;
        return vertices.map((v) => new Vertex(v.pos.copy().rotate(this.rotation).mult(this.scaling).add(this.translation), v.color));
    }

    public getMatrix() {
        return twgl.m4.translate(twgl.m4.scale(twgl.m4.rotateZ(twgl.m4.identity(), this.rotation), [this.scaling.x, this.scaling.y, 1]), [
            this.translation.x,
            this.translation.y,
            0,
        ]);
    }
}
