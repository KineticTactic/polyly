import { Color } from "./Color";
import Vector from "./Vector";

export default class Vertex {
    pos: Vector;
    color: Color;

    constructor(pos: Vector, color: Color) {
        this.pos = pos;
        this.color = color;
    }
}
