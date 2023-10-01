import { BufferData } from "./BufferData";
import Buffer from "./Buffer";
import Vertex from "./Vertex";
import * as twgl from "twgl.js";

export default class StaticBuffer extends Buffer {
    buffer: BufferData | null;

    tempVertices: Vertex[] = [];
    tempIndices: number[] = [];

    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
        super(gl);

        this.buffer = null;
    }

    public override addVerticesAndIndices(vertices: Vertex[], indices: number[]): void {
        this.tempVertices.push(...vertices);
        this.tempIndices.push(...indices);
    }

    public override update(): void {
        if (!this.buffer) {
            this.buffer = new BufferData(this.gl, {
                numVertices: this.tempVertices.length,
                numIndices: this.tempIndices.length,
                type: "static",
            });

            this.buffer.addIndex(this.tempIndices);
            for (const v of this.tempVertices) this.buffer.addVertex(v);

            this.buffer.updateBufferData(this.gl);
        } else {
            if (this.tempVertices.length > this.buffer.vertexCapacity || this.tempIndices.length > this.buffer.indexCapacity) {
                for (const attrib of Object.values(this.buffer.bufferInfo.attribs!)) {
                    this.gl.deleteBuffer(attrib.buffer);
                }
                this.gl.deleteBuffer(this.buffer.bufferInfo.indices!);

                this.buffer = new BufferData(this.gl, {
                    numVertices: this.tempVertices.length,
                    numIndices: this.tempIndices.length,
                    type: "static",
                });
            } else {
                this.buffer.resetCount();
            }

            this.buffer.addIndex(this.tempIndices);
            for (const v of this.tempVertices) this.buffer.addVertex(v);

            this.buffer.updateBufferData(this.gl);
        }
        this.tempIndices = [];
        this.tempVertices = [];
    }

    public render(shaderProgramInfo: twgl.ProgramInfo): void {
        if (!this.buffer) throw new Error("Buffer not initialized! Run buffer.updateBuffer()");

        twgl.setUniforms(shaderProgramInfo, {
            modelMatrix: this.transform.getMatrix(),
        });

        twgl.setBuffersAndAttributes(this.gl, shaderProgramInfo, this.buffer.bufferInfo);
        twgl.drawBufferInfo(this.gl, this.buffer.bufferInfo, this.gl.TRIANGLES, this.buffer.currentIndices);
    }
}
