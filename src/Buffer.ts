import Vertex from "./Vertex";
import * as twgl from "twgl.js";

export default class Buffer {
    gl: WebGL2RenderingContext | WebGLRenderingContext;

    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
        this.gl = gl;
    }

    public addVerticesAndIndices(_vertices: Vertex[], _indices: number[]): void {}

    public updateBuffers(): void {}

    public render(_shaderProgramInfo: twgl.ProgramInfo): void {}
}
