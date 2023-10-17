import { Transform } from "../core/Transform";
import { Vertex } from "../core/Vertex";
import * as twgl from "twgl.js";
/**
 * The buffer class
 * @abstract
 * @category Buffers
 */
export declare class Buffer {
    gl: WebGL2RenderingContext | WebGLRenderingContext;
    id: number;
    transform: Transform;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    addVerticesAndIndices(_vertices: Vertex[], _indices: number[]): void;
    update(): void;
    render(_shaderProgramInfo: twgl.ProgramInfo): void;
    reset(): void;
}
