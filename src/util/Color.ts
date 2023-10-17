import { interpolate } from "./math";

/**
 * Creates a Color object from the specified values
 * @category Util
 * @param r red value
 * @param g green value
 * @param b blue value
 * @returns A Color object with the specified values
 */
export function RGB(r: number, g: number, b: number) {
    return new Color(r, g, b);
}

/**
 * Creates a Color object from the specified values
 * @category Util
 * @param r red value
 * @param g green value
 * @param b blue value
 * @param a alpha value
 * @returns A Color object with the specified values
 */
export function RGBA(r: number, g: number, b: number, a: number = 255) {
    return new Color(r, g, b, a);
}

/**
 * The color class
 * @category Util
 */
export class Color {
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    constructor(r: number, g: number, b: number, a: number = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /**
     * Returns an array of the colour values [r, g, b, a]
     * @returns
     */
    array() {
        return [this.r, this.g, this.b, this.a];
    }

    /**
     * Converts the color to a hex value
     * @param color The color to convert to hex
     * @returns The hex value
     */
    public static toHex(color: Color): string {
        return "#" + ((1 << 24) | (color.r << 16) | (color.g << 8) | color.b).toString(16).slice(1);
    }

    /**
     * Creates a Color object from a hex value
     * @param hex The hex value of the colour
     * @param alpha The alpha value of the colour
     * @returns A Color Object
     */
    public static fromHex(hex: string, alpha: number = 255): Color {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        return RGBA(r, g, b, alpha);
    }

    /**
     * Interpolates between two colors
     * @param color1 the first color
     * @param color2 the second color
     * @param t amount to interpolate by (a number between 0 and 1)
     * @returns The interpolated color
     */
    public static interpolate(color1: Color, color2: Color, t: number): Color {
        return new Color(
            interpolate(t, 0, 1, color1.r, color2.r),
            interpolate(t, 0, 1, color1.g, color2.g),
            interpolate(t, 0, 1, color1.b, color2.b),
            interpolate(t, 0, 1, color1.a, color2.a)
        );
    }
}
