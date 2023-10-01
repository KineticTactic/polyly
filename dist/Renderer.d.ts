import Camera from "./Camera";
import Vertex from "./Vertex";
import Buffer from "./Buffer";
import Vector from "./Vector";
import { Color } from "./Color";
export interface RendererOptions {
    canvas?: HTMLCanvasElement;
    webglVersion?: number;
}
export declare class Renderer {
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    private shaderProgramInfo;
    private buffers;
    private defaultBuffer;
    private currentPath;
    constructor(options: RendererOptions);
    addBuffer(buffer: Buffer): void;
    clear(color?: Color): void;
    line(startPos: Vector, endPos: Vector, width: number, color: Color): void;
    path(vertices: Vertex[], width: number, closed?: boolean): void;
    beginPath(): void;
    vertex(pos: Vector, color: Color): void;
    vertex(vertex: Vertex): void;
    arc(pos: Vector, radius: number, startAngle: number, endAngle: number, color: Color): void;
    strokePath(width: number, closed?: boolean): void;
    fillPath(): void;
    render(camera: Camera): void;
    getDisplaySize(): Vector;
}
