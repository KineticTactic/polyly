import { Color } from "../util/Color";
import { Vector } from "../util/Vector";
// import { Camera } from "./Camera";
import { Renderer } from "./Renderer";
// import { Transform } from "./Transform";

/**
 * Options for passing to the Canvas Text renderer constructor
 * @category Core
 */
export interface CanvasTextRendererOptions {
    /** The HTML canvas element to render to. Creates a canvas if not specified */
    canvas: HTMLCanvasElement;
}

export enum TextMode {
    Fill,
    Stroke,
}

// This is a temporary fix for the missing types in the CanvasRenderingContext2D interface
interface CanvasExtended extends CanvasRenderingContext2D {
    letterSpacing: string;
    wordSpacing: string;
}

/**
 * A class for rendering text to a canvas
 * You're supposed to use this class through the renderer
 * @category Core
 */
export class CanvasTextRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    renderer: Renderer;

    constructor(renderer: Renderer, options: CanvasTextRendererOptions) {
        this.renderer = renderer;
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d")!;
    }

    public clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    public setFont(font: string) {
        this.ctx.font = font;
    }

    public setLineWidth(width: number) {
        this.ctx.lineWidth = width;
    }

    public setTextAlign(align: CanvasTextAlign) {
        this.ctx.textAlign = align;
    }

    public setLetterSpacing(spacing: string) {
        (this.ctx as CanvasExtended).letterSpacing = spacing;
    }

    public setWordSpacing(spacing: string) {
        (this.ctx as CanvasExtended).wordSpacing = spacing;
    }

    public renderText(text: string, pos: Vector, color: Color, mode: TextMode = TextMode.Fill) {
        const screenPos = this.renderer.camera.worldSpaceToScreenSpace(pos).add(this.renderer.transform.translation);

        this.ctx.save();
        this.ctx.translate(screenPos.x, screenPos.y);
        this.ctx.rotate(this.renderer.transform.rotation);
        this.ctx.scale(this.renderer.transform.scaling.x * this.renderer.camera.zoom, this.renderer.transform.scaling.y * this.renderer.camera.zoom);

        if (mode === TextMode.Fill) {
            this.ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
            this.ctx.fillText(text, 0, 0);
        } else {
            this.ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
            this.ctx.strokeText(text, 0, 0);
        }

        this.ctx.restore();
    }
}
