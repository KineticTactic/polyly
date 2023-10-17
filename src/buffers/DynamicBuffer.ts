import { BufferData } from "./BufferData";
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
export class DynamicBuffer extends Buffer {
    private buffers: BufferData[] = [];
    private bufferSize: number;
    private currentBufferIndex: number = -1;

    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext, options: DynamicBufferOptions) {
        super(gl);
        this.bufferSize = options.bufferSize | 10000;
        this.addBuffer();
    }

    public override addVerticesAndIndices(vertices: Vertex[], indices: number[]) {
        /// TODO: CHECK IF OKAY
        if (
            this.buffers[this.currentBufferIndex].currentIndices + indices.length >= this.buffers[this.currentBufferIndex].indexCapacity ||
            this.buffers[this.currentBufferIndex].currentVertices + vertices.length >= this.buffers[this.currentBufferIndex].vertexCapacity
        ) {
            this.changeBuffer();
        }

        this.addIndices(indices);
        this.addVertices(vertices);
    }

    public override update() {
        this.buffers[this.currentBufferIndex].fill();
        this.buffers[this.currentBufferIndex].updateBufferData(this.gl);
    }

    public override render(shaderProgramInfo: twgl.ProgramInfo) {
        twgl.setUniforms(shaderProgramInfo, {
            modelMatrix: this.transform.getMatrix(),
        });

        for (let i = 0; i <= this.currentBufferIndex; i++) {
            twgl.setBuffersAndAttributes(this.gl, shaderProgramInfo, this.buffers[i].bufferInfo);
            twgl.drawBufferInfo(this.gl, this.buffers[i].bufferInfo, this.gl.TRIANGLES, this.buffers[i].currentIndices);
        }
    }

    public override reset() {
        this.currentBufferIndex = 0;
        for (const buffer of this.buffers) {
            buffer.resetCount();
        }
    }

    private addBuffer() {
        this.currentBufferIndex++;
        this.buffers.push(new BufferData(this.gl, { numVertices: this.bufferSize }));
    }

    private changeBuffer() {
        this.buffers[this.currentBufferIndex].fill();
        this.buffers[this.currentBufferIndex].updateBufferData(this.gl);
        if (this.buffers.length <= this.currentBufferIndex + 1) {
            this.addBuffer();
        } else {
            this.currentBufferIndex++;
        }
    }

    private addVertex(vertex: Vertex) {
        this.buffers[this.currentBufferIndex].addVertex(vertex);
    }

    private addIndices(indexArray: number[]) {
        this.buffers[this.currentBufferIndex].addIndex(indexArray);
    }

    private addVertices(vertices: Vertex[]) {
        for (let i = 0; i < vertices.length; i++) this.addVertex(vertices[i]);
    }
}
