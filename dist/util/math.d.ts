import { Vertex } from "../core/Vertex";
export declare function interpolate(x: number, x1: number, x2: number, y1: number, y2: number): number;
export declare function clamp(x: number, min: number, max: number): number;
export declare function calculateSidewaysVertices(v1: Vertex, v2: Vertex, w: number): Vertex[];
export declare function calculateVertexPoints(v1: Vertex, v2: Vertex, v3: Vertex, w: number): Vertex[];
