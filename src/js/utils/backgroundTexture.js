/**
 * Created by Viktoriia_Goncharuk on 7/14/2016.
 */

export function getDottedTexture(backgroundColor, radialGradient, gradientSize = '20%', backgroundSize = '5px 5px') {
    return {
        backgroundColor,
        backgroundImage: `radial-gradient(${radialGradient} ${gradientSize}, transparent 0%)`,
        backgroundSize,
    };
}

