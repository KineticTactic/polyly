import * as twgl from "twgl.js";
import Shader from "./shaders/Shader";
import Camera from "./Camera";
import Vertex from "./Vertex";
import Buffer from "./Buffer";
import { DynamicBuffer } from "./DynamicBuffer";
import Vector from "./Vector";
import { Color } from "./Color";
import { calculateSidewaysVertices, calculateVertexPoints } from "./math";
import { Transform } from "./Transform";

export interface RendererOptions {
    canvas?: HTMLCanvasElement;
    webglVersion?: number;
}

export class Renderer {
    public canvas: HTMLCanvasElement;
    public gl: WebGLRenderingContext | WebGL2RenderingContext;
    public transform: Transform;

    private shaderProgramInfo: twgl.ProgramInfo;
    private buffers: Buffer[] = [];
    private currentBufferIndex: number = 0;
    // private defaultBuffer: DynamicBuffer;
    private currentPath: Vertex[] = [];

    public constructor(options: RendererOptions) {
        if (options.canvas) {
            this.canvas = options.canvas;
        } else {
            this.canvas = document.createElement("canvas");
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            document.body.appendChild(this.canvas);
        }

        let gl: WebGLRenderingContext | WebGL2RenderingContext | null = null;
        if (options.webglVersion === 2 || !options.webglVersion) {
            gl = this.canvas.getContext("webgl2");
            if (!gl) console.warn("WebGL 2 not supported, falling back to WebGL 1");
        }
        if (!gl || options.webglVersion === 1) gl = this.canvas.getContext("webgl");
        if (!gl) throw new Error("WebGL not supported");

        this.gl = gl;

        // Create shader program
        this.shaderProgramInfo = twgl.createProgramInfo(this.gl, [Shader.vertexShader, Shader.fragmentShader]);

        /// TODO: Add options for changing blend function
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE); // Additive Blending
        twgl.resizeCanvasToDisplaySize(this.gl.canvas as HTMLCanvasElement);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

        // this.defaultBuffer = new DynamicBuffer(this.gl, { bufferSize: 100 });
        this.setBuffer(new DynamicBuffer(this.gl, { bufferSize: 1000 }));

        this.transform = new Transform();
    }

    public setBuffer(buffer: Buffer | 0) {
        if (buffer === 0) {
            this.currentBufferIndex = 0;
            return;
        }

        if (buffer.id === -1) {
            buffer.id = this.buffers.length;
            this.buffers.push(buffer);
        }
        this.currentBufferIndex = buffer.id;
    }

    public clear(color: Color = new Color(0, 0, 0, 255)) {
        this.gl.clearColor(color.r / 255, color.g / 255, color.b / 255, color.a / 255);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }

    public line(startPos: Vector, endPos: Vector, width: number, color: Color): void {
        const vertex1 = new Vertex(startPos, color);
        const vertex2 = new Vertex(endPos, color);
        this.buffers[this.currentBufferIndex].addVerticesAndIndices(
            this.transform.transformVertices([...calculateSidewaysVertices(vertex1, vertex2, width), ...calculateSidewaysVertices(vertex2, vertex1, width)]),
            [0, 1, 2, 0, 2, 3]
        );
    }

    path(vertices: Vertex[], width: number, closed = false) {
        const outputVertices: Vertex[] = [];
        const indexData = [];
        const v1 = vertices[0];
        const v2 = vertices[1];
        if (!closed) {
            outputVertices.push(...calculateSidewaysVertices(v1, v2, width));
        } else {
            outputVertices.push(...calculateVertexPoints(vertices[vertices.length - 1], v1, v2, width));
        }

        for (let i = 0; i < vertices.length - (closed ? 1 : 2); i++) {
            indexData.push(0 + i * 2, 1 + i * 2, 2 + i * 2, 1 + i * 2, 2 + i * 2, 3 + i * 2);
            outputVertices.push(...calculateVertexPoints(vertices[i], vertices[i + 1], vertices[(i + 2) % vertices.length], width));
        }

        if (!closed) {
            const i = outputVertices.length - 2;
            indexData.push(i + 0, i + 1, i + 2, i + 0, i + 2, i + 3);
            outputVertices.push(...calculateSidewaysVertices(vertices[vertices.length - 1], vertices[vertices.length - 2], width));
        } else {
            const i = outputVertices.length - 2;
            indexData.push(i, i + 1, 0, i + 1, 0, 1);
        }

        this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(outputVertices), indexData);
    }

    public beginPath() {
        this.currentPath = [];
    }

    public vertex(pos: Vector, color: Color): void;
    public vertex(vertex: Vertex): void;

    public vertex(v: Vector | Vertex, color?: Color) {
        if (v instanceof Vertex) {
            this.currentPath.push(v);
        } else if (color) {
            this.currentPath.push(new Vertex(v, color));
        }
    }

    public arc(pos: Vector, radius: number, startAngle: number, endAngle: number, color: Color) {
        const numSegments = 40;
        const angleStep = (endAngle - startAngle) / numSegments;
        const vertices = [];
        for (let i = 0; i <= numSegments; i++) {
            const angle = startAngle + angleStep * i;
            vertices.push(new Vertex(new Vector(pos.x + radius * Math.cos(angle), pos.y + radius * Math.sin(angle)), color));
        }
        this.currentPath.push(...vertices);
    }

    public rect(pos: Vector, size: Vector, color: Color) {
        const positions = [pos, new Vector(pos.x + size.x, pos.y), new Vector(pos.x + size.y, pos.y + size.y), new Vector(pos.x, pos.y + size.y)];
        this.currentPath.push(...positions.map((p) => new Vertex(p, color)));
    }

    public strokePath(width: number, closed: boolean = false) {
        ///TODO: REneame to build path or something
        this.path(this.currentPath, width, closed);
    }

    public fillPath() {
        const indicesList = [];
        for (let i = 1; i < this.currentPath.length - 1; i++) {
            indicesList.push(0, i, i + 1);
        }
        this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(this.currentPath), indicesList);
    }

    public render(camera: Camera): void {
        this.buffers[0].update();

        // Update uniforms
        const uniforms = {
            resolution: [this.gl.canvas.width, this.gl.canvas.height],
            viewProjectionMatrix: camera ? camera.getMatrix() : twgl.m4.identity(),
        };

        this.gl.useProgram(this.shaderProgramInfo.program);
        twgl.setUniforms(this.shaderProgramInfo, uniforms);

        // Render buffers
        for (const buffer of this.buffers) {
            // this.defaultBuffer.render(this.shaderProgramInfo);
            console.log(buffer);

            buffer.render(this.shaderProgramInfo);
        }

        // Reset
        this.buffers[0].reset();
    }

    public getDisplaySize() {
        return new Vector(this.canvas.width, this.canvas.height);
    }
}
