import { Transform } from "./Transform";
import Vertex from "./Vertex";
import * as twgl from "twgl.js";
export default class Buffer {
    gl: WebGL2RenderingContext | WebGLRenderingContext;
    id: number;
    transform: Transform;
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    addVerticesAndIndices(_vertices: Vertex[], _indices: number[]): void;
    update(): void;
    render(_shaderProgramInfo: twgl.ProgramInfo): void;
    reset(): void;
}
