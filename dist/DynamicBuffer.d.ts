import * as twgl from "twgl.js";
import Vertex from "./Vertex";
import Buffer from "./Buffer";
export interface DynamicBufferOptions {
    bufferSize: number;
}
export declare class DynamicBuffer extends Buffer {
    private buffers;
    private bufferSize;
    private currentBufferIndex;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext, options: DynamicBufferOptions);
    addVerticesAndIndices(vertices: Vertex[], indices: number[]): void;
    updateBuffers(): void;
    render(shaderProgramInfo: twgl.ProgramInfo): void;
    reset(): void;
    private addBuffer;
    private changeBuffer;
    private addVertex;
    private addIndices;
    private addVertices;
}
