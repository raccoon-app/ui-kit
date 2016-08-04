export const CLICK_ARTBOARD_LAYER = 'CLICK_ARTBOARD_LAYER';
export const ENTER_ARTBOARD_LAYER = 'ENTER_ARTBOARD_LAYER';
export const LEAVE_ARTBOARD_LAYER = 'LEAVE_ARTBOARD_LAYER';


export function clickArtboardLayer(layer) {
    return { type: types.CLICK_ARTBOARD_LAYER, layer };
}

export function enterArtboardLayer(layer) {
    return { type: types.ENTER_ARTBOARD_LAYER, layer };
}

export function leaveArtboardLayer(layer) {
    return { type: types.LEAVE_ARTBOARD_LAYER, layer };
}
