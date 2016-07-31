import { RECEIVE_PROJECT, CLICK_ARTBOARD_LAYER, SET_ACTIVE_ARTBOARD } from '../constants/ActionTypes';

const initialState = {
    layer: {},
    url: null,
    isExportEveryLayer: null,
};

const tools = (state = initialState, action = {}) => {
    switch (action.type) {
        case CLICK_ARTBOARD_LAYER:
            return Object.assign({}, state, {
                layer: action.layer,
            });
        case RECEIVE_PROJECT:
            return Object.assign({}, state, {
                layer: initialState.layer,
                url: action.url,
                isExportEveryLayer: action.project.exportEveryLayer || null,
            });
        case SET_ACTIVE_ARTBOARD:
            return Object.assign({}, state, {
                layer: initialState.layer,
            });
        default:
            return state;
    }
};

export default tools;