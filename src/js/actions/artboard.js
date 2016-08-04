export const CLICK_ARTBOARD_LAYER = 'CLICK_ARTBOARD_LAYER';
export const ENTER_ARTBOARD_LAYER = 'ENTER_ARTBOARD_LAYER';
export const LEAVE_ARTBOARD_LAYER = 'LEAVE_ARTBOARD_LAYER';


export function clickArtboardLayer(layer) {
    return { type: CLICK_ARTBOARD_LAYER, layer };
}

export function enterArtboardLayer(layer) {
    return { type: ENTER_ARTBOARD_LAYER, layer };
}

export function leaveArtboardLayer(layer) {
    return { type: LEAVE_ARTBOARD_LAYER, layer };
}
