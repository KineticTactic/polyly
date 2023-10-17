import { Color } from "../util/Color";
import { Vector } from "../util/Vector";

/**
 * The vertex class
 * @category Core
 */
export class Vertex {
    pos: Vector;
    color: Color;

    constructor(pos: Vector, color: Color) {
        this.pos = pos;
        this.color = color;
    }
}
