import Vertex from "./Vertex";
import * as twgl from "twgl.js";
export default class Buffer {
    gl: WebGL2RenderingContext | WebGLRenderingContext;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    addVerticesAndIndices(_vertices: Vertex[], _indices: number[]): void;
    updateBuffers(): void;
    render(_shaderProgramInfo: twgl.ProgramInfo): void;
}
