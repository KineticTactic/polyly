import { Vector } from "../util/Vector";
import * as twgl from "twgl.js";
import { interpolate } from "../util/math";

/**
 * The camera class
 * @category Core
 */
export class Camera {
    zoom = 1;
    pos = new Vector(0, 0);
    displaySize = new Vector(0, 0);
    aspect = 1; // Aspect ratio
    matrix: twgl.m4.Mat4 = twgl.m4.identity();

    constructor(displaySize: Vector) {
        this.setDisplaySize(displaySize);
    }

    /**
     * Translates the camera
     * @param delta The amount to translate the camera by
     */
    public translate(delta: Vector) {
        this.pos = this.pos.add(delta);
        this.calculateMatrix();
    }

    /**
     * Sets the zoom level of the camera
     * @param zoom The zoom level of the camera
     */
    public setZoom(zoom: number) {
        this.zoom = zoom;
        this.calculateMatrix();
    }

    /**
     * Sets the display size of the camera. Must be called whenever the canvas is resized.
     * @param displaySize The display size of the camera
     */
    public setDisplaySize(displaySize: Vector) {
        this.displaySize = displaySize;
        this.calculateAspectRatio();
        this.calculateMatrix();
    }

    private calculateAspectRatio() {
        this.aspect = this.displaySize.x / this.displaySize.y;
    }

    private calculateMatrix() {
        const factor = this.displaySize.y / this.zoom / 2;
        this.matrix = twgl.m4.translate(
            twgl.m4.ortho(-this.aspect * factor, this.aspect * factor, 1 * factor, -1 * factor, -1, 1),
            twgl.v3.create(-this.pos.x, -this.pos.y)
        );
    }

    /**
     * Converts a vector (position) in screen space into world space
     * @param vector
     * @returns The Vector converted to World space
     */
    public screenSpaceToWorldSpace(vector: Vector) {
        const factor = window.innerHeight / this.zoom / 2;

        const x = interpolate(vector.x, 0, window.innerWidth, -this.aspect * factor, this.aspect * factor) + this.pos.x;
        const y = interpolate(vector.y, 0, window.innerHeight, -1 * factor, 1 * factor) + this.pos.y;
        return new Vector(x, y);
    }

    /**
     * Converts a vector (position) in world space into screen space
     * @param vector
     * @returns The Vector converted to Screen space
     */
    public worldSpaceToScreenSpace(vector: Vector) {
        const factor = window.innerHeight / this.zoom / 2;

        const x = interpolate(vector.x, -this.aspect * factor + this.pos.x, this.aspect * factor + this.pos.x, 0, window.innerWidth);
        const y = interpolate(vector.y, -1 * factor + this.pos.y, 1 * factor + this.pos.y, 0, window.innerHeight);
        return new Vector(x, y);
    }

    // /**
    //  * Converts a distance in world space into a distance in screen space (pixels)
    //  * @param distance The distance in world space
    //  * @returns The distance in screen space (pixels)
    //  */
    // public worldSpaceToScreenSpaceDistance(distance: number) {
    //     return distance * this.zoom;
    // }

    /**
     * Returns the camera matrix
     * @returns The camera matrix
     */
    public getMatrix() {
        return this.matrix;
    }
}
