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
export class BufferData {
    positions: Float32Array; // 8 bytes per vertex
    colors: Uint8Array; // 4 bytes per vertex
    indices: Uint16Array;
    bufferInfo: twgl.BufferInfo;
    currentVertices = 0;
    currentIndices = 0;
    vertexCapacity = 0;
    indexCapacity = 0;

    constructor(gl: WebGL2RenderingContext | WebGLRenderingContext, options: BufferDataOptions) {
        if (options.positions && options.colors && options.indices) {
            this.positions = options.positions;
            this.colors = options.colors;
            this.indices = options.indices;
        } else if (options.numVertices) {
            this.positions = new Float32Array(options.numVertices * 2);
            this.colors = new Uint8Array(options.numVertices * 4);
            this.indices = new Uint16Array(options.numIndices ? options.numIndices : options.numVertices * 3);
        } else {
            throw new Error("Invalid BufferDataOptions! Must provide positions, colors, and indices arrays, or specify numVertices");
        }

        this.vertexCapacity = this.positions.length / 2;
        this.indexCapacity = this.indices.length;

        const type = options.type ? options.type : "dynamic";
        const usage = type === "dynamic" ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;

        this.bufferInfo = twgl.createBufferInfoFromArrays(gl, {
            position: { numComponents: 2, data: this.positions, drawType: usage },
            color: { numComponents: 4, data: this.colors, drawType: usage },
            indices: { numComponents: 3, data: this.indices, drawType: usage },
        });
    }

    addVertex(vertex: Vertex) {
        this.positions[this.currentVertices * 2 + 0] = vertex.pos.x;
        this.positions[this.currentVertices * 2 + 1] = vertex.pos.y;
        ///TODO: Fix color here /255 or not
        for (let i = 0; i < 4; i++) this.colors[this.currentVertices * 4 + i] = vertex.color.array()[i];
        this.currentVertices++;
    }

    addIndex(indexArray: number[]) {
        for (let i = 0; i < indexArray.length; i++) this.indices[this.currentIndices + i] = indexArray[i] + this.currentVertices;
        this.currentIndices += indexArray.length;
    }

    updateBufferData(gl: WebGL2RenderingContext | WebGLRenderingContext) {
        twgl.setAttribInfoBufferFromArray(gl, this.bufferInfo.attribs!.position, this.positions);
        twgl.setAttribInfoBufferFromArray(gl, this.bufferInfo.attribs!.color, this.colors);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufferInfo.indices!);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.DYNAMIC_DRAW);
    }

    fill() {
        this.positions.fill(0, this.currentVertices * 2);
        this.colors.fill(0, this.currentVertices * 4);
        this.indices.fill(0, this.currentIndices);
    }

    resetCount() {
        this.currentVertices = 0;
        this.currentIndices = 0;
    }
}
