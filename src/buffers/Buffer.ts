import { Transform } from "../core/Transform";
import { Vertex } from "../core/Vertex";
import * as twgl from "twgl.js";

/**
 * The buffer class
 * @abstract
 * @category Buffers
 */
export class Buffer {
    gl: WebGL2RenderingContext | WebGLRenderingContext;
    id: number = -1;
    transform: Transform;

    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
        this.gl = gl;
        this.transform = new Transform();
    }

    public addVerticesAndIndices(_vertices: Vertex[], _indices: number[]): void {}

    public update(): void {}

    public render(_shaderProgramInfo: twgl.ProgramInfo): void {}

    public reset() {}
}
