import * as twgl from "twgl.js";
import { Vertex } from "../core/Vertex";
import { Buffer } from "./Buffer";
/**
 * The dynamic buffer creation options
 * @category Buffers
 */
export interface DynamicBufferOptions {
    /**
     * Maximum size of a single buffer.
     * @defaultValue 10000
     */
    bufferSize: number;
}
/**
 * The dynamic buffer class
 * @category Buffers
 */
export declare class DynamicBuffer extends Buffer {
    private buffers;
    private bufferSize;
    private currentBufferIndex;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext, options: DynamicBufferOptions);
    addVerticesAndIndices(vertices: Vertex[], indices: number[]): void;
    update(): void;
    render(shaderProgramInfo: twgl.ProgramInfo): void;
    reset(): void;
    private addBuffer;
    private changeBuffer;
    private addVertex;
    private addIndices;
    private addVertices;
}
