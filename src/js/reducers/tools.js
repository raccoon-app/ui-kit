// @TODO not used

import { RECEIVE_PROJECT, SET_ACTIVE_ARTBOARD } from '../actions/project';
import { CLICK_ARTBOARD_LAYER, ENTER_ARTBOARD_LAYER, LEAVE_ARTBOARD_LAYER } from '../actions/artboard';

const initialState = {
    layer: {
        x: 0,
        y: 0,
    },
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