export function RGB(r: number, g: number, b: number) {
    return new Color(r, g, b);
}

export function RGBA(r: number, g: number, b: number, a: number = 255) {
    return new Color(r, g, b, a);
}

export class Color {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor(r: number, g: number, b: number, a: number = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    array() {
        return [this.r, this.g, this.b, this.a];
    }

    static rgbToHex(color: Color): string {
        return "#" + ((1 << 24) | (color.r << 16) | (color.g << 8) | color.b).toString(16).slice(1);
    }

    static hexToRGBA(hex: string, alpha: number = 255): Color {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        return RGBA(r, g, b, alpha);
    }
}
