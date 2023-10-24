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

export class CanvasTextRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    textBuffer: { text: string; pos: Vector; color: Color; font: string }[] = [];

    constructor(options: CanvasTextRendererOptions) {
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d")!;
    }

    public clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    public setFont(font: string) {
        this.ctx.font = font;
    }

    public renderText(text: string, pos: Vector, color: Color) {
        this.textBuffer.push({ text, pos, color, font: this.ctx.font });
    }

    public render(camera: Camera) {
        for (let text of this.textBuffer) {
            this.ctx.font = text.font;
            this.ctx.fillStyle = `rgba(${text.color.r}, ${text.color.g}, ${text.color.b}, ${text.color.a})`;
            const screenPos = camera.worldSpaceToScreenSpace(text.pos);
            this.ctx.fillText(text.text, screenPos.x, screenPos.y);
        }
    }
}
