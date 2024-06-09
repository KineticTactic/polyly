import { Color } from "../util/Color";
import { Vector } from "../util/Vector";
import { Renderer } from "./Renderer";
/**
 * Options for passing to the Canvas Text renderer constructor
 * @category Core
 */
export interface CanvasTextRendererOptions {
    /** The HTML canvas element to render to. Creates a canvas if not specified */
    canvas: HTMLCanvasElement;
}
export declare enum TextMode {
    Fill = 0,
    Stroke = 1
}
/**
 * A class for rendering text to a canvas
 * You're supposed to use this class through the renderer
 * @category Core
 */
export declare class CanvasTextRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    renderer: Renderer;
    constructor(renderer: Renderer, options: CanvasTextRendererOptions);
    clear(): void;
    setFont(font: string): void;
    setLineWidth(width: number): void;
    setTextAlign(align: CanvasTextAlign): void;
    setLetterSpacing(spacing: string): void;
    setWordSpacing(spacing: string): void;
    renderText(text: string, pos: Vector, color: Color, mode?: TextMode): void;
}
