export declare function Vec(x: number, y: number): Vector;
/**
 * A vector class
 * @category Util
 */
export declare class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static zero: () => Vector;
    static up: () => Vector;
    static down: () => Vector;
    static left: () => Vector;
    static right: () => Vector;
    add(a: Vector): Vector;
    add(a: number): Vector;
    add(a: number, b: number): Vector;
    static add(a: Vector, b: Vector): Vector;
    mult(a: Vector): Vector;
    mult(a: number): Vector;
    mult(a: number, b: number): Vector;
    static mult(a: Vector, b: number): Vector;
    sub(a: Vector): Vector;
    sub(a: number): Vector;
    sub(a: number, b: number): Vector;
    static sub(a: Vector, b: Vector): Vector;
    div(a: Vector): Vector;
    div(a: number): Vector;
    div(a: number, b: number): Vector;
    static div(a: Vector, b: Vector): Vector;
    set(x: Vector): Vector;
    set(x: number, y: number): Vector;
    mag(): number;
    static mag(v: Vector): number;
    magSq(): number;
    static magSq(v: Vector): number;
    setMag(a: number): Vector;
    normalize(): Vector;
    limit(a: number): Vector;
    heading(): number;
    rotate(a: number): Vector;
    rotateAboutAxis(theta: number, axis: Vector): this;
    dot(a: Vector): number;
    static dot(a: Vector, b: Vector): number;
    cross(a: Vector): number;
    static cross(a: Vector, b: Vector): number;
    dist(a: Vector): number;
    static dist(a: Vector, b: Vector): number;
    lerp(a: Vector, amt: number): Vector;
    static angleBetween(a: Vector, b: Vector): number;
    copy(): Vector;
}
