import { Color } from "../util/Color";
import { Vector } from "../util/Vector";
import { Camera } from "./Camera";
/**
 * Options for passing to the Canvas Text renderer constructor
 * @category Core
 */
export interface CanvasTextRendererOptions {
    /** The HTML canvas element to render to. Creates a canvas if not specified */
    canvas: HTMLCanvasElement;
}
export declare class CanvasTextRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    textBuffer: {
        text: string;
        pos: Vector;
        color: Color;
        font: string;
    }[];
    constructor(options: CanvasTextRendererOptions);
    clear(): void;
    setFont(font: string): void;
    renderText(text: string, pos: Vector, color: Color): void;
    setTextAlign(align: CanvasTextAlign): void;
    render(camera: Camera): void;
}
