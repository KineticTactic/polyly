import { Vector } from "./Vector";
import { Line } from "./math";
import { Camera } from "../core/Camera";

export interface DebugRendererOptions {
    /** The HTML canvas element to render to. Creates a canvas if not specified */
    canvas: HTMLCanvasElement;
    camera: Camera;
}

export class DebugRenderer {
    static canvas: HTMLCanvasElement;
    static ctx: CanvasRenderingContext2D;
    static camera: Camera;

    static init(options: DebugRendererOptions) {
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d")!;
        this.camera = options.camera;
    }

    public static clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    public static debugLine(line: Line, color: string = "red") {
        // Line has {a, b, c} coefficients
        // ax + by + c = 0
        // y = (-c - ax) / b
        const x1 = 0;
        const y1 = (-line.c - line.a * x1) / line.b;
        const x2 = this.ctx.canvas.width;
        const y2 = (-line.c - line.a * x2) / line.b;

        const screenSpaceP1 = this.camera.worldSpaceToScreenSpace(new Vector(x1, y1));
        const screenSpaceP2 = this.camera.worldSpaceToScreenSpace(new Vector(x2, y2));

        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(screenSpaceP1.x, screenSpaceP1.y);
        this.ctx.lineTo(screenSpaceP2.x, screenSpaceP2.y);
        this.ctx.stroke();
    }

    public static debugPoint(pos: Vector, color: string = "red") {
        this.ctx.fillStyle = color;
        const screenPos = this.camera.worldSpaceToScreenSpace(pos);
        this.ctx.beginPath();
        this.ctx.arc(screenPos.x, screenPos.y, 5, 0, Math.PI * 2);
        this.ctx.fill();
    }
}
