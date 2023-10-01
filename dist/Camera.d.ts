import Vector from "./Vector";
import * as twgl from "twgl.js";
export default class Camera {
    zoom: number;
    pos: Vector;
    displaySize: Vector;
    aspect: number;
    matrix: twgl.m4.Mat4;
    constructor(displaySize: Vector);
    translate(delta: Vector): void;
    setZoom(zoom: number): void;
    setDisplaySize(displaySize: Vector): void;
    calculateAspectRatio(): void;
    calculateMatrix(): void;
    screenSpaceToWorldSpace(v: Vector): Vector;
    getMatrix(): twgl.m4.Mat4;
}
