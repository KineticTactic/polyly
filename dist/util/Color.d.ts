/**
 * Creates a Color object from the specified values
 * @category Util
 * @param r red value
 * @param g green value
 * @param b blue value
 * @returns A Color object with the specified values
 */
export declare function RGB(r: number, g: number, b: number): Color;
/**
 * Creates a Color object from the specified values
 * @category Util
 * @param r red value
 * @param g green value
 * @param b blue value
 * @param a alpha value
 * @returns A Color object with the specified values
 */
export declare function RGBA(r: number, g: number, b: number, a?: number): Color;
/**
 * The color class
 * @category Util
 */
export declare class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    static WHITE: Color;
    static BLACK: Color;
    static RED: Color;
    static GREEN: Color;
    static BLUE: Color;
    static YELLOW: Color;
    static MAGENTA: Color;
    static CYAN: Color;
    static TRANSPARENT: Color;
    constructor(r: number, g: number, b: number, a?: number);
    /**
     * Returns an array of the colour values [r, g, b, a]
     * @returns
     */
    array(): number[];
    /**
     * Converts the color to a hex value
     * @param color The color to convert to hex
     * @returns The hex value
     */
    static toHex(color: Color): string;
    /**
     * Creates a Color object from a hex value
     * @param hex The hex value of the colour
     * @param alpha The alpha value of the colour
     * @returns A Color Object
     */
    static fromHex(hex: string, alpha?: number): Color;
    /**
     * Interpolates between two colors
     * @param color1 the first color
     * @param color2 the second color
     * @param t amount to interpolate by (a number between 0 and 1)
     * @returns The interpolated color
     */
    static interpolate(color1: Color, color2: Color, t: number): Color;
}
