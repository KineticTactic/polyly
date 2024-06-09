import * as twgl from "twgl.js";
import Shader from "../shaders/Shader";
import { Camera } from "./Camera";
import { Vertex } from "./Vertex";
import { Buffer } from "../buffers/Buffer";
import { DynamicBuffer } from "../buffers/DynamicBuffer";
import { Vector } from "../util/Vector";
import { Color } from "../util/Color";
import { calculateSidewaysVertices, calculateVertexPoints } from "../util/math";
import { Transform } from "./Transform";
import { CanvasTextRenderer, TextMode } from "./CanvasTextRenderer";
import { DebugRenderer } from "../util/DebugRenderer";

/**
 * Options for passing to the Renderer constructor
 * @category Core
 */
export interface RendererOptions {
    /** The HTML canvas element to render to. Creates a canvas if not specified */
    canvas?: HTMLCanvasElement;
    /** The WebGL version to use. */
    webglVersion?: 1 | 2;
    /** Whether to initialize the text renderer. If you don't need to render text, you can set this to false to save some performance. */
    initTextRenderer?: boolean;
    /** The camera to render with. If not specified, the renderer will render with a default camera. */
    camera?: Camera;
    /** Enable the debug renderer */
    enableDebugRenderer?: boolean;
}

/**
 * Options for passing to the strokePath function
 * @category Core
 */
export interface StrokeOptions {
    /** Whether to close the path (join the first and last vertex) */
    closed?: boolean;
    /** Whether to render the path as a dashed line */
    dashed?: boolean;
    /** The length of each dash (only has effect if `dashed` is set to true) */
    dashLength?: number;
    /** The miter limit angle below which the line join becomes bevelled */
    miterLimit?: number;
}

/**
 * The blend modes for rendering
 * @category Core
 */
export enum BlendModes {
    Normal,
    Additive,
}

/**
 * The main Renderer class with all the rendering function
 * @category Core
 */
export class Renderer {
    /** The HTML canvas element */
    public canvas: HTMLCanvasElement;
    /** The WebGL Rendering Context */
    public gl: WebGLRenderingContext | WebGL2RenderingContext;
    /** The global transform */
    public transform: Transform;
    /** The camera to render with */
    public camera: Camera;
    /** The text renderer */
    public textRenderer: CanvasTextRenderer | null;
    /** The default vertex color */
    public vertexColor: Color = new Color(255, 255, 255, 255);

    private shaderProgramInfo: twgl.ProgramInfo;
    private buffers: Buffer[] = [];
    private currentBufferIndex: number = 0;
    private currentPath: (Vertex | null)[] = [];

    /**
     * @param options Options for the renderer
     */
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

        // Init text renderer if needed
        if (options.initTextRenderer) {
            const textCanvas = document.createElement("canvas");
            textCanvas.width = window.innerWidth;
            textCanvas.height = window.innerHeight;
            this.canvas.parentElement!.appendChild(textCanvas);
            textCanvas.style.position = "absolute";
            textCanvas.style.top = "0";
            textCanvas.style.left = "0";
            textCanvas.style.pointerEvents = "none";
            this.textRenderer = new CanvasTextRenderer(this, { canvas: textCanvas });
        } else {
            this.textRenderer = null;
        }

        // Camera
        if (options.camera) {
            this.camera = options.camera;
            this.camera.setDisplaySize(new Vector(this.canvas.width, this.canvas.height));
        } else {
            this.camera = new Camera(new Vector(this.canvas.width, this.canvas.height));
        }

        // Create shader program
        this.shaderProgramInfo = twgl.createProgramInfo(this.gl, [Shader.vertexShader, Shader.fragmentShader]);

        /// TODO: Add options for changing blend function
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE); // Additive Blending
        twgl.resizeCanvasToDisplaySize(this.gl.canvas as HTMLCanvasElement);

        ///TODO: FIX THIS MAKE THIS RESIZE ON RESIZE
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

        this.setBuffer(new DynamicBuffer(this.gl, { bufferSize: 1000 }));

        this.transform = new Transform();

        // Debugger
        if (options.enableDebugRenderer) {
            const debugCanvas = document.createElement("canvas");
            debugCanvas.width = window.innerWidth;
            debugCanvas.height = window.innerHeight;
            this.canvas.parentElement!.appendChild(debugCanvas);
            debugCanvas.style.position = "absolute";
            debugCanvas.style.top = "0";
            debugCanvas.style.left = "0";
            debugCanvas.style.pointerEvents = "none";
            DebugRenderer.init({ canvas: debugCanvas, camera: this.camera });
        }
    }

    /**
     * Resizes the canvas to the specified width and height
     * @param width
     * @param height
     */
    public resizeCanvas(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    }

    /**
     * Sets the current buffer to draw to
     * @param buffer The buffer to draw to
     */
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

    /**
     * Enables or disables blending
     * @param enable Whether to enable or disable blending
     */
    public enableBlending(enable: boolean) {
        if (enable) this.gl.enable(this.gl.BLEND);
        else this.gl.disable(this.gl.BLEND);
    }

    /**
     * Set Blend Mode
     * @param buffer The buffer to draw to
     */
    public setBlendMode(blendMode: BlendModes) {
        switch (blendMode) {
            case BlendModes.Normal:
                this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
                break;
            case BlendModes.Additive:
                this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
                break;
        }
    }

    /**
     * Clears the screen with the specified color
     * @param color The clear color
     */
    public clear(color: Color = new Color(0, 0, 0, 255)) {
        this.gl.clearColor(color.r / 255, color.g / 255, color.b / 255, color.a / 255);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        if (this.textRenderer) this.textRenderer.clear();

        // Clear Debug canvas
        DebugRenderer.clear();
    }

    private buildPath(vertices: Vertex[], width: number, closed = false, miterLimit: number) {
        const outputVertices: Vertex[] = [];
        const indexData = [];
        const v1 = vertices[0];
        const v2 = vertices[1];

        // If there are only two vertices, the path cannot closed
        if (vertices.length === 2) closed = false;

        let bevelledStart = false;
        let bevelledRight = false;
        // Beginning two sets of vertices
        if (!closed) {
            outputVertices.push(...calculateSidewaysVertices(v1, v2, width));
        } else {
            const vertexData = calculateVertexPoints(vertices[vertices.length - 1], v1, v2, width, miterLimit);
            outputVertices.push(...vertexData.vertices);
            if (outputVertices.length === 3) {
                indexData.push(0, 1, 2);
                bevelledStart = true;
                bevelledRight = vertexData.right as boolean;
            }
        }

        for (let i = 0; i < vertices.length - (closed ? 1 : 2); i++) {
            const vertexData = calculateVertexPoints(vertices[i], vertices[i + 1], vertices[(i + 2) % vertices.length], width, miterLimit);

            // DebugRenderer.debugPoint(outputVertices[outputVertices.length - 1].pos);
            // DebugRenderer.debugPoint(outputVertices[outputVertices.length - 2].pos, "green");

            indexData.push(...vertexData.indices.map((v) => v + outputVertices.length - 2));
            outputVertices.push(...vertexData.vertices);
        }

        // DebugRenderer.debugPoint(outputVertices[outputVertices.length - 1].pos);
        // DebugRenderer.debugPoint(outputVertices[outputVertices.length - 2].pos, "green");

        // End two sets of vertices
        if (!closed) {
            indexData.push(...[0, 1, 2, 1, 2, 3].map((v) => v + outputVertices.length - 2));
            outputVertices.push(...calculateSidewaysVertices(vertices[vertices.length - 1], vertices[vertices.length - 2], width).reverse());
        } else {
            const i = outputVertices.length - 2;
            if (bevelledStart) {
                if (!bevelledRight) indexData.push(i, i + 1, 0, i, 0, 1);
                else {
                    indexData.push(i, i + 1, 2, i, 0, 2);
                }
            } else indexData.push(i, i + 1, 1, i, 0, 1);
        }

        this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(outputVertices), indexData);
    }

    private buildDashedPath(vertices: Vertex[], width: number, closed = false, dashLength = 10, miterLimit: number) {
        let lastVertexOfLastEdge: null | Vertex = null;

        const endIndex = closed ? vertices.length + 1 : vertices.length;
        for (let i = 0; i < endIndex; i++) {
            const v1 = vertices[i % vertices.length];
            const v2 = vertices[(i + 1) % vertices.length];
            const length = v1.pos.dist(v2.pos);
            const numSegments = Math.floor(length / dashLength);
            const segmentLength = length / numSegments;

            let lastVertex = vertices[i];

            const dir = v2.pos.copy().sub(v1.pos);
            for (let j = 1; j < numSegments; j++) {
                const newVertexPos = v1.pos.copy().add(dir.copy().setMag(segmentLength * j));
                let newVertex = new Vertex(newVertexPos, Color.interpolate(v1.color, v2.color, j / numSegments));

                if (j === 1 && lastVertexOfLastEdge) {
                    this.buildPath([lastVertexOfLastEdge, v1, newVertex], width, closed, miterLimit);
                    if (i === endIndex - 1) break;
                }

                if (j % 2 === 0) this.buildPath([lastVertex, newVertex], width, closed, miterLimit);
                lastVertex = newVertex;
            }

            lastVertexOfLastEdge = lastVertex;
        }
    }

    /**
     * Sets the default vertex color
     * @param color The color to set
     */
    public setColor(color: Color) {
        this.vertexColor = color;
    }

    /**
     * Starts a new path by clearing everything in the current path. Call this before using any drawing methods.
     */
    public beginPath() {
        this.currentPath = [];
    }

    /**
     * Draws a vertex (to the current path).
     * @param pos
     * @param color
     */
    public vertex(pos: Vector): void;
    public vertex(pos: Vector, color: Color): void;
    public vertex(vertex: Vertex): void;

    public vertex(v: Vector | Vertex, color?: Color) {
        if (v instanceof Vertex) {
            this.currentPath.push(v);
        } else if (color) {
            this.currentPath.push(new Vertex(v, color));
        } else {
            this.currentPath.push(new Vertex(v, this.vertexColor));
        }
    }

    /**
     * Draws vertices (to the current path).
     * @param pos
     * @param color
     */
    public vertices(positions: Vector[], color: Color): void;
    /**
     * Draws vertices (to the current path).
     * @param vectors The list of position vectors to draw
     */
    public vertices(v: Vector[]): void;
    /**
     * Draws vertices (to the current path).
     * @param vertices The list of vertices to draw
     */
    public vertices(vertices: Vertex[]): void;

    public vertices(v: Vector[] | Vertex[], color?: Color) {
        if (v[0] instanceof Vertex) {
            this.currentPath = [...this.currentPath, ...(v as Vertex[])];
        } else if (color) {
            this.currentPath = [...this.currentPath, ...(v as Vector[]).map((pos) => new Vertex(pos, color))];
        } else {
            this.currentPath = [...this.currentPath, ...(v as Vector[]).map((pos) => new Vertex(pos, this.vertexColor))];
        }
    }

    /**
     * Splits the current path. Call this before using any drawing methods to start a new path without clearing the current one.
     */
    public splitPath() {
        this.currentPath.push(null);
    }

    /**
     * Draws a line.
     * @param startPos Starting position of the line
     * @param endPos Ending position of the line
     * @param width Width of the line
     */
    public line(startPos: Vector, endPos: Vector): void {
        const vertex1 = new Vertex(startPos, this.vertexColor);
        const vertex2 = new Vertex(endPos, this.vertexColor);
        this.currentPath.push(vertex1, vertex2, null);
    }

    /**
     * Draws an arc (to the current path). For a circle, set `startAngle` to `0` and `endAngle` to `Math.PI * 2`
     * @param pos The center of the arc
     * @param radius The radius of the arc
     * @param startAngle The starting angle of the arc
     * @param endAngle The ending angle of the arc
     * @param detail The detail of the arc. Higher values = smoother arc. Defaults to `1`
     */
    public arc(pos: Vector, radius: number, startAngle: number, endAngle: number, detail: number = 1) {
        const numSegments = 30 * detail;

        const angleStep = (endAngle - startAngle) / numSegments;
        const vertices = [];
        let angle = 0;
        for (let i = 0; i <= numSegments; i++) {
            angle = startAngle + angleStep * i;
            vertices.push(new Vertex(new Vector(pos.x + radius * Math.cos(angle), pos.y + radius * Math.sin(angle)), this.vertexColor));
        }

        // Sometimes in lower details, it doesn't reach the end angle and leaves a gap.
        if (endAngle - angle > 0.01)
            vertices.push(new Vertex(new Vector(pos.x + radius * Math.cos(endAngle), pos.y + radius * Math.sin(endAngle)), this.vertexColor));

        this.currentPath.push(...vertices);
    }

    /**
     * Draws a rectangle (to the current path).
     * Note that it does not close the path. So if you want to stroke() it, use the `closed` option in the `stroke()` method.
     * @param pos The position of the top left corner of the rectangle
     * @param size The size (width and height) of the rectangle
     */
    public rect(pos: Vector, size: Vector) {
        const positions = [pos, new Vector(pos.x + size.x, pos.y), new Vector(pos.x + size.y, pos.y + size.y), new Vector(pos.x, pos.y + size.y)];
        this.currentPath.push(...positions.map((p) => new Vertex(p, this.vertexColor)));
    }

    /**
     * Strokes (outlines) everything in the current path since the last `beginPath()` call with the specified width and options.
     * @param width The stroke width
     * @param options Options for the stroke
     */
    public stroke(width: number, { closed = false, dashed = false, dashLength = 10, miterLimit = 60 }: StrokeOptions = {}): void {
        let nullIndex = this.currentPath.findIndex((v) => v === null);

        if (nullIndex === -1) {
            // There are no breaks in the path
            if (!dashed) this.buildPath(this.currentPath as Vertex[], width, closed, miterLimit);
            else this.buildDashedPath(this.currentPath as Vertex[], width, closed, dashLength, miterLimit);
            return;
        }

        while (nullIndex !== -1) {
            if (!dashed) this.buildPath(this.currentPath.slice(0, nullIndex) as Vertex[], width, closed, miterLimit);
            else this.buildDashedPath(this.currentPath.slice(0, nullIndex) as Vertex[], width, closed, dashLength, miterLimit);

            this.currentPath = this.currentPath.slice(nullIndex + 1);

            // If the path is empty, return
            if (this.currentPath.length === 0) return;

            // Find the next break in the path
            nullIndex = this.currentPath.findIndex((v) => v === null);
            // If there are no more breaks in the path, draw the rest of the path
            nullIndex = nullIndex === -1 ? this.currentPath.length : nullIndex;
        }
    }

    /**
     * Fills everything in the current path since the last `beginPath()` call with the specified color.
     */
    public fill() {
        let nullIndex = this.currentPath.findIndex((v) => v === null);

        this.currentPath = this.currentPath.slice(nullIndex + 1);
        nullIndex = this.currentPath.findIndex((v) => v === null);

        if (nullIndex === -1) {
            this.fillPath(this.currentPath as Vertex[]);
            return;
        }

        while (nullIndex !== -1) {
            this.fillPath(this.currentPath.slice(0, nullIndex) as Vertex[]);

            this.currentPath = this.currentPath.slice(nullIndex + 1);

            // If the path is empty, return
            if (this.currentPath.length === 0) return;

            // Find the next break in the path
            nullIndex = this.currentPath.findIndex((v) => v === null);
            // If there are no more breaks in the path, draw the rest of the path
            nullIndex = nullIndex === -1 ? this.currentPath.length : nullIndex;
        }
    }

    private fillPath(vertices: Vertex[]) {
        const indicesList = [];

        for (let i = 1; i < vertices.length - 1; i++) {
            indicesList.push(0, i, i + 1);
        }
        this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(vertices), indicesList);
    }

    /**
     * Sets the font of the text renderer
     * @param font The font to set
     * @example renderer.setFont("30px Arial");
     */
    public setFont(font: string) {
        if (!this.textRenderer) throw new Error("Text renderer not initialized!");
        this.textRenderer.setFont(font);
    }

    /**
     * Sets the text align of the text renderer
     * @param align The text align to set
     * @example renderer.setTextAlign("center");
     */
    public setTextAlign(align: CanvasTextAlign) {
        if (!this.textRenderer) throw new Error("Text renderer not initialized!");
        this.textRenderer.setTextAlign(align);
    }

    /**
     * Sets the text align of the text renderer
     * @param align The text align to set
     * @example renderer.setTextAlign("center");
     */
    public setLetterSpacing(spacing: string) {
        if (!this.textRenderer) throw new Error("Text renderer not initialized!");
        this.textRenderer.setLetterSpacing(spacing);
    }

    /**
     * Sets the text align of the text renderer
     * @param align The text align to set
     * @example renderer.setTextAlign("center");
     */
    public setWordSpacing(spacing: string) {
        if (!this.textRenderer) throw new Error("Text renderer not initialized!");
        this.textRenderer.setWordSpacing(spacing);
    }

    /**
     *
     * @param text The text to render
     * @param pos The position to render the text at
     * @param maxWidth Max width of the text
     */
    public fillText(text: string, pos: Vector) {
        if (!this.textRenderer) throw new Error("Text renderer not initialized!");
        this.textRenderer.renderText(text, pos, this.vertexColor, TextMode.Fill);
    }

    /**
     *
     * @param text The text to render
     * @param pos The position to render the text at
     * @param maxWidth Max width of the text
     */
    public strokeText(text: string, pos: Vector, lineWidth: number = 1) {
        if (!this.textRenderer) throw new Error("Text renderer not initialized!");
        this.textRenderer.setLineWidth(lineWidth);
        this.textRenderer.renderText(text, pos, this.vertexColor, TextMode.Stroke);
    }

    /**
     * The main render function. Call this every frame once to render everything.
     * @param camera The camera to render with
     */
    public render(): void {
        this.buffers[0].update();

        // Update uniforms
        const uniforms = {
            resolution: [this.gl.canvas.width, this.gl.canvas.height],
            viewProjectionMatrix: this.camera.getMatrix(),
        };

        this.gl.useProgram(this.shaderProgramInfo.program);
        twgl.setUniforms(this.shaderProgramInfo, uniforms);

        // Render buffers
        for (const buffer of this.buffers) {
            // this.defaultBuffer.render(this.shaderProgramInfo);

            buffer.render(this.shaderProgramInfo);
        }

        // Reset
        this.buffers[0].reset();
    }

    /**
     * Translates the camera by the specified vector
     * @param pos The vector to translate the camera by
     */
    public translate(pos: Vector): void;
    /**
     * Translates the camera by the specified x and y values
     * @param x The x value to translate the camera by
     * @param y The y value to translate the camera by
     */
    public translate(x: number, y: number): void;
    public translate(pos: Vector | number, y: number = 0): void {
        this.transform.translate(pos instanceof Vector ? pos : new Vector(pos, y));
    }

    /**
     * Rotates the camera by the specified angle
     * @param angle The angle to rotate the camera by
     */
    public rotate(angle: number) {
        this.transform.rotate(angle);
    }

    /**
     * Scales up by the specified vector
     * @param scale The vector to scale the camera by
     */
    public scale(scale: Vector): void;
    /**
     * Scales up by the specified x and y values
     * @param x The x value to scale the camera by
     * @param y The y value to scale the camera by
     */
    public scale(x: number, y: number): void;
    /**
     * Scales uniformly by the specified value
     * @param n The value to scale the camera by
     */
    public scale(n: number): void;
    public scale(scale: Vector | number, y?: number): void {
        this.transform.scale(scale instanceof Vector ? scale : new Vector(scale, y || scale));
    }

    /**
     * Resets all transforms
     */
    public resetTransforms() {
        this.transform.resetTransforms();
    }

    /**
     * Returns the size of the canvas
     */
    public getDisplaySize() {
        return new Vector(this.canvas.width, this.canvas.height);
    }
}
