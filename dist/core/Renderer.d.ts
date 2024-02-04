import { Camera } from "./Camera";
import { Vertex } from "./Vertex";
import { Buffer } from "../buffers/Buffer";
import { Vector } from "../util/Vector";
import { Color } from "../util/Color";
import { Transform } from "./Transform";
import { CanvasTextRenderer } from "./CanvasTextRenderer";
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
}
/**
 * The main Renderer class with all the rendering function
 * @category Core
 */
export declare class Renderer {
    /** The HTML canvas element */
    canvas: HTMLCanvasElement;
    /** The WebGL Rendering Context */
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    /** The global transform */
    transform: Transform;
    /** The camera to render with */
    camera: Camera;
    /** The text renderer */
    textRenderer: CanvasTextRenderer | null;
    /** The default vertex color */
    vertexColor: Color;
    private shaderProgramInfo;
    private buffers;
    private currentBufferIndex;
    private currentPath;
    /**
     * @param options Options for the renderer
     */
    constructor(options: RendererOptions);
    /**
     * Resizes the canvas to the specified width and height
     * @param width
     * @param height
     */
    resizeCanvas(width: number, height: number): void;
    /**
     * Sets the current buffer to draw to
     * @param buffer The buffer to draw to
     */
    setBuffer(buffer: Buffer | 0): void;
    /**
     * Clears the screen with the specified color
     * @param color The clear color
     */
    clear(color?: Color): void;
    /**
     * Draws a line. *Note:* This method does not need there to be a current active path.
     * @param startPos Starting position of the line
     * @param endPos Ending position of the line
     * @param width Width of the line
     * @param color Color of the line
     */
    line(startPos: Vector, endPos: Vector, width: number, color: Color): void;
    private buildPath;
    private buildDashedPath;
    /**
     * Sets the default vertex color
     * @param color The color to set
     */
    setVertexColor(color: Color): void;
    /**
     * Starts a new path by clearing everything in the current path. Call this before using any drawing methods.
     */
    beginPath(): void;
    /**
     * Draws a vertex (to the current path).
     * @param pos
     * @param color
     */
    vertex(pos: Vector): void;
    vertex(pos: Vector, color: Color): void;
    vertex(vertex: Vertex): void;
    /**
     * Draws vertices (to the current path).
     * @param pos
     * @param color
     */
    vertices(positions: Vector[], color: Color): void;
    vertices(v: Vector[]): void;
    vertices(vertices: Vertex[]): void;
    /**
     * Splits the current path. Call this before using any drawing methods to start a new path without clearing the current one.
     */
    splitPath(): void;
    /**
     * Draws an arc (to the current path). For a circle, set `startAngle` to `0` and `endAngle` to `Math.PI * 2`
     * @param pos The center of the arc
     * @param radius The radius of the arc
     * @param startAngle The starting angle of the arc
     * @param endAngle The ending angle of the arc
     * @param color The color of the arc
     * @param detail The detail of the arc. Higher values = smoother arc. Defaults to `1`
     */
    arc(pos: Vector, radius: number, startAngle: number, endAngle: number, color: Color, detail?: number): void;
    /**
     * Draws a rectangle (to the current path).
     * @param pos The position of the top left corner of the rectangle
     * @param size The size (width and height) of the rectangle
     * @param color The color of the rectangle
     */
    rect(pos: Vector, size: Vector, color: Color): void;
    /**
     * Strokes (outlines) everything in the current path since the last `beginPath()` call with the specified width and options.
     * @param width The stroke width
     * @param options Options for the stroke
     */
    stroke(width: number, { closed, dashed, dashLength }?: StrokeOptions): void;
    /**
     * Fills everything in the current path since the last `beginPath()` call with the specified color.
     */
    fill(): void;
    private fillPath;
    /**
     * Sets the font of the text renderer
     * @param font The font to set
     * @example renderer.setFont("30px Arial");
     */
    setFont(font: string): void;
    /**
     * Sets the text align of the text renderer
     * @param align The text align to set
     * @example renderer.setTextAlign("center");
     */
    setTextAlign(align: CanvasTextAlign): void;
    /**
     *
     * @param text The text to render
     * @param pos The position to render the text at
     * @param maxWidth Max width of the text
     */
    renderText(text: string, pos: Vector, color: Color): void;
    /**
     * The main render function. Call this every frame once to render everything.
     * @param camera The camera to render with
     */
    render(): void;
    /**
     * Returns the size of the canvas
     */
    getDisplaySize(): Vector;
}
