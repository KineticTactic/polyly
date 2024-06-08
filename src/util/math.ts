import { Vector } from "./Vector";
import { Vertex } from "../core/Vertex";
// import { DebugRenderer } from "./DebugRenderer";

export function interpolate(x: number, x1: number, x2: number, y1: number, y2: number): number {
    return y1 + (x - x1) * ((y2 - y1) / (x2 - x1));
}

export function clamp(x: number, min: number, max: number): number {
    return Math.min(Math.max(x, min), max);
}

function calculateSidewaysPoints(p1: Vector, p2: Vector, w: number) {
    const p3 = Vector.sub(p2, p1)
        .normalize()
        .mult(w / 2)
        .rotate(Math.PI / 2)
        .add(p1);
    const p4 = Vector.sub(p2, p1)
        .normalize()
        .mult(w / 2)
        .rotate(-Math.PI / 2)
        .add(p1);

    return [p3, p4];
}

export function calculateSidewaysVertices(v1: Vertex, v2: Vertex, w: number) {
    return calculateSidewaysPoints(v1.pos, v2.pos, w).map((p) => new Vertex(p, v1.color));
}

export type Line = { a: number; b: number; c: number };

function getLineEquation(p1: Vector, p2: Vector): Line {
    const a = p1.y - p2.y;
    const b = p2.x - p1.x;
    const c = p1.x * p2.y - p2.x * p1.y;

    return { a, b, c };
}

function getPerpendicularLineEquation(l: Line, p: Vector) {
    const a = -l.b;
    const b = l.a;
    const c = -a * p.x - b * p.y;

    return { a, b, c };
}

function getParallelLineEquation(l: Line, w: number) {
    const a = l.a;
    const b = l.b;
    const c = l.c + w * Math.sqrt(a * a + b * b);

    return { a, b, c };
}

function solveLineEquations(l1: Line, l2: Line) {
    const x = (l1.b * l2.c - l2.b * l1.c) / (l1.a * l2.b - l2.a * l1.b);
    const y = (l2.a * l1.c - l1.a * l2.c) / (l1.a * l2.b - l2.a * l1.b);

    return new Vector(x, y);
}

export function calculateVertexPoints(v1: Vertex, v2: Vertex, v3: Vertex, w: number, miterLimitAngle: number = 60) {
    const p1 = v1.pos;
    const p2 = v2.pos;
    const p3 = v3.pos;

    // Get supplementary angle and convert to radians
    const miterLimit = (180 - miterLimitAngle) * (Math.PI / 180);
    const angle = Vector.angleBetween(Vector.sub(v2.pos, v1.pos), Vector.sub(v3.pos, v2.pos));

    // If angle between lines is 0, then the lines are parallel
    // In this case, we can just calculate the sideways points
    // as we wont get a definite solution by solving the equations.
    if (Math.abs(angle) <= 0.001) {
        const sidewaysPoints = calculateSidewaysVertices(v2, v3, w);
        return {
            vertices: sidewaysPoints,
            indices: [0, 1, 2, 1, 2, 3],
        };
    }

    // l1 and l2 are the lines formed by the vertices (center line)
    const l1 = getLineEquation(v1.pos, v2.pos);
    const l2 = getLineEquation(v2.pos, v3.pos);

    // l3, l4, l5, l6 are the lines parallel to the center line
    const l3 = getParallelLineEquation(l1, -w / 2);
    const l4 = getParallelLineEquation(l1, w / 2);
    const l5 = getParallelLineEquation(l2, -w / 2);
    const l6 = getParallelLineEquation(l2, w / 2);

    // q1 and q2 are the intersection points of the parallel lines
    let q1 = solveLineEquations(l3, l5);
    let q2 = solveLineEquations(l4, l6);

    if (angle < miterLimit && angle > -miterLimit) {
        return { vertices: [new Vertex(q1, v2.color), new Vertex(q2, v2.color)], indices: [0, 1, 2, 1, 2, 3] };
    } else if (angle <= -miterLimit) {
        let [_, r1] = calculateSidewaysPoints(p2, p1, w);
        let [r2, __] = calculateSidewaysPoints(p2, p3, w);

        const p2q2Dist = Vector.sub(p2, q2).magSq();
        const p2p1Dist = Vector.sub(p2, p1).magSq();
        const p2p3Dist = Vector.sub(p2, p3).magSq();
        if (p2q2Dist > p2p1Dist || p2q2Dist > p2p3Dist) {
            const l7 = p2p3Dist > p2p1Dist ? getPerpendicularLineEquation(l1, p1) : getPerpendicularLineEquation(l2, p3);
            const s = solveLineEquations(l7, p2p3Dist > p2p1Dist ? l6 : l4);
            q2 = s;
        }

        return {
            vertices: [new Vertex(r1, v2.color), new Vertex(r2, v2.color), new Vertex(q2, v2.color)],
            indices: [0, 1, 2, 1, 2, 4, 2, 3, 4],
            right: true,
        };
    } else {
        const [r1, _] = calculateSidewaysPoints(v2.pos, v1.pos, w);
        const [__, r2] = calculateSidewaysPoints(v2.pos, v3.pos, w);

        const p2q1Dist = Vector.sub(p2, q1).magSq();
        const p2p1Dist = Vector.sub(p2, p1).magSq();
        const p2p3Dist = Vector.sub(p2, p3).magSq();
        if (p2q1Dist > p2p1Dist || p2q1Dist > p2p3Dist) {
            const l7 = p2p3Dist > p2p1Dist ? getPerpendicularLineEquation(l1, p1) : getPerpendicularLineEquation(l2, p3);
            const s = solveLineEquations(l7, p2p3Dist > p2p1Dist ? l5 : l3);
            q1 = s;
        }

        return {
            vertices: [new Vertex(r1, v2.color), new Vertex(q1, v2.color), new Vertex(r2, v2.color)],
            indices: [0, 1, 2, 0, 2, 3, 2, 3, 4],
            right: false,
        };
    }
}
