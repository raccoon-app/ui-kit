/**
 * Created by Viktoriia_Goncharuk on 7/21/2016.
 */
// convert a hexidecimal color string to 0..255 R,G,B
// hex needs to be in format 0xXXXXXX
function hexToRGB(hex) {
    const r = hex >> 16;
    const g = hex >> 8 & 0xFF;
    const b = hex & 0xFF;

    return [r, g, b];
}

// color parametr must me in #xxxxxx format
export function isColorLight(color) {
    const [r, g, b] = hexToRGB(color.replace('#', '0x').toLowerCase());
    const perceivedBrightness = (r * 0.299) + (g * 0.587) + (b * 0.114);
    return perceivedBrightness > 125;
}
