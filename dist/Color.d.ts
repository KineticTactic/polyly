export declare function RGB(r: number, g: number, b: number): Color;
export declare function RGBA(r: number, g: number, b: number, a?: number): Color;
export declare class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r: number, g: number, b: number, a?: number);
    array(): number[];
    static rgbToHex(color: Color): string;
    static hexToRGBA(hex: string, alpha?: number): Color;
}
