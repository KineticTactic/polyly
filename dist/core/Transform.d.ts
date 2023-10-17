import { Vector } from "../util/Vector";
import { Vertex } from "./Vertex";
import * as twgl from "twgl.js";
/**
 * The transform class
 * @category Core
 */
export declare class Transform {
    translation: Vector;
    rotation: number;
    scaling: Vector;
    private transformed;
    constructor();
    translate(translation: Vector): void;
    rotate(rotation: number): void;
    scale(scale: Vector): void;
    resetTransforms(): void;
    transformVertices(vertices: Vertex[]): Vertex[];
    getMatrix(): twgl.m4.Mat4;
}
