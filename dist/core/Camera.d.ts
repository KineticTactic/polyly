import { Vector } from "../util/Vector";
import * as twgl from "twgl.js";
/**
 * The camera class
 * @category Core
 */
export declare class Camera {
    zoom: number;
    pos: Vector;
    displaySize: Vector;
    aspect: number;
    matrix: twgl.m4.Mat4;
    constructor(displaySize: Vector);
    /**
     * Translates the camera
     * @param delta The amount to translate the camera by
     */
    translate(delta: Vector): void;
    /**
     * Sets the zoom level of the camera
     * @param zoom The zoom level of the camera
     */
    setZoom(zoom: number): void;
    /**
     * Sets the display size of the camera. Must be called whenever the canvas is resized.
     * @param displaySize The display size of the camera
     */
    setDisplaySize(displaySize: Vector): void;
    private calculateAspectRatio;
    private calculateMatrix;
    /**
     * Converts a vector (position) in screen space into world space
     * @param vector
     * @returns The Vector converted to World space
     */
    screenSpaceToWorldSpace(vector: Vector): Vector;
    /**
     * Returns the camera matrix
     * @returns The camera matrix
     */
    getMatrix(): twgl.m4.Mat4;
}
