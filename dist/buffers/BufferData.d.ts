import * as twgl from "twgl.js";
import { Vertex } from "../core/Vertex";
/**
 * The buffer data options
 * @category Buffers
 */
export interface BufferDataOptions {
    positions?: Float32Array;
    colors?: Uint8Array;
    indices?: Uint16Array;
    numVertices?: number;
    numIndices?: number;
    type?: "static" | "dynamic";
}
/**
 * The buffer data class
 * @category Buffers
 */
export declare class BufferData {
    positions: Float32Array;
    colors: Uint8Array;
    indices: Uint16Array;
    bufferInfo: twgl.BufferInfo;
    currentVertices: number;
    currentIndices: number;
    vertexCapacity: number;
    indexCapacity: number;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext, options: BufferDataOptions);
    addVertex(vertex: Vertex): void;
    addIndex(indexArray: number[]): void;
    updateBufferData(gl: WebGL2RenderingContext | WebGLRenderingContext): void;
    fill(): void;
    resetCount(): void;
}
