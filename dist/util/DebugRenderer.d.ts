import { Vector } from "./Vector";
import { Line } from "./math";
import { Camera } from "../core/Camera";
export interface DebugRendererOptions {
    /** The HTML canvas element to render to. Creates a canvas if not specified */
    canvas: HTMLCanvasElement;
    camera: Camera;
}
export declare class DebugRenderer {
    static canvas: HTMLCanvasElement;
    static ctx: CanvasRenderingContext2D;
    static camera: Camera;
    static enabled: boolean;
    static init(options: DebugRendererOptions): void;
    static clear(): void;
    static debugLine(line: Line, color?: string): void;
    static debugPoint(pos: Vector, color?: string): void;
}
