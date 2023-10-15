import Vector from "./Vector";
import Vertex from "./Vertex";

export function interpolate(x: number, x1: number, x2: number, y1: number, y2: number): number {
    return y1 + (x - x1) * ((y2 - y1) / (x2 - x1));
}

export function clamp(x: number, min: number, max: number): number {
    return Math.min(Math.max(x, min), max);
}

export function calculateSidewaysVertices(v1: Vertex, v2: Vertex, w: number) {
    const p1 = v1.pos;
    const p2 = v2.pos;

    const theta = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    const x3 = p1.x - (w / 2) * sinTheta;
    const y3 = p1.y + (w / 2) * cosTheta;

    const x4 = p1.x + (w / 2) * sinTheta;
    const y4 = p1.y - (w / 2) * cosTheta;

    return [new Vertex(new Vector(x3, y3), v1.color), new Vertex(new Vector(x4, y4), v1.color)];
}

export function calculateVertexPoints(v1: Vertex, v2: Vertex, v3: Vertex, w: number) {
    let x1 = v1.pos.x;
    let y1 = v1.pos.y;
    let x2 = v2.pos.x;
    let y2 = v2.pos.y;
    let x3 = v3.pos.x;
    let y3 = v3.pos.y;
    // const angle = Math.atan2(y2 - y1, x2 - x1) - Math.atan2(y3 - y2, x3 - x2);
    // if(angle  0.5)
    const a1 = y1 - y2;
    const b1 = x1 - x2;
    const c1 = y1 * (x1 - x2) - x1 * (y1 - y2);
    const a2 = y2 - y3;
    const b2 = x2 - x3;
    const c2 = y2 * (x2 - x3) - x2 * (y2 - y3);
    /// TODO: Make this sqrt thing a variable
    const d1 = (w / 2) * Math.sqrt(a1 * a1 + b1 * b1) - c1;
    const d2 = (w / 2) * Math.sqrt(a1 * a1 + b1 * b1) + c1;
    const d3 = (w / 2) * Math.sqrt(a2 * a2 + b2 * b2) - c2;
    const d4 = (w / 2) * Math.sqrt(a2 * a2 + b2 * b2) + c2;
    // a1x + b1y + d1 = 0
    // a2x + b2y + d3 = 0
    const x4 = (b1 * d3 - b2 * d1) / (a1 * b2 - a2 * b1);
    const y4 = (a2 * d1 - a1 * d3) / (a1 * b2 - a2 * b1);
    // console.log(d1);
    // a1x + b1y + d2 = 0
    // a2x + b2y + d4 = 0
    const x5 = (b1 * d4 - b2 * d2) / (a1 * b2 - a2 * b1);
    const y5 = (a2 * d2 - a1 * d4) / (a1 * b2 - a2 * b1);

    return [new Vertex(new Vector(-x4, y4), v2.color), new Vertex(new Vector(x5, -y5), v2.color)];
}
