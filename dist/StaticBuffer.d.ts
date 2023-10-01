import { BufferData } from "./BufferData";
import Buffer from "./Buffer";
import Vertex from "./Vertex";
import * as twgl from "twgl.js";
export default class StaticBuffer extends Buffer {
    buffer: BufferData | null;
    tempVertices: Vertex[];
    tempIndices: number[];
    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext);
    addVerticesAndIndices(vertices: Vertex[], indices: number[]): void;
    update(): void;
    render(shaderProgramInfo: twgl.ProgramInfo): void;
}
