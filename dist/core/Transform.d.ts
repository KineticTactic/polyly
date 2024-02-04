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
    setTranslation(translation: Vector): void;
    rotate(angle: number): void;
    setRotation(angle: number): void;
    scale(scale: Vector): void;
    setScale(scale: Vector): void;
    resetTransforms(): void;
    transformVertices(vertices: Vertex[]): Vertex[];
    getMatrix(): twgl.m4.Mat4;
}
