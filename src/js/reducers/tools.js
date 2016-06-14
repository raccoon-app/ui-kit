import { combineReducers } from 'redux';
import { RECEIVE_PROJECT, CLICK_ARTBOARD_LAYER, SET_ACTIVE_ARTBOARD } from '../constants/ActionTypes';

const initialState = {
    layer: {},
    url: null,
    activeArtboard: null,
    isExportEveryLayer: null,
};

function layer(state = initialState.layer, action = {}) {
    switch (action.type) {
        case CLICK_ARTBOARD_LAYER:
            return action.layer;
        case RECEIVE_PROJECT:
        case SET_ACTIVE_ARTBOARD:
            return initialState.layer;
        default:
            return state;
    }
}

function url(state = initialState.url, action = {}) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.url;
        default:
            return state;
    }
}

function activeArtboard(state = initialState.activeArtboard, action = {}) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            let firstId;

            // @TODO FIXME
            for(let key in action.project.artboard) {
                firstId = action.project.artboard[key].id;
                break;
            }

            return firstId;
        case SET_ACTIVE_ARTBOARD:
            return action.artboardId;
        default:
            return state;
    }
}

function isExportEveryLayer(state = initialState.isExportEveryLayer, action = {}) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.project.exportEveryLayer || null;
        default:
            return state;
    }
}


export default combineReducers({
    layer,
    url,
    activeArtboard,
    isExportEveryLayer,
});

export function getLayer(state) {
    return state.layer;
}

export function getUrl(state) {
    return state.url + state.activeArtboard + '/';
}

export function getExportLayer(state) {
    return state.isExportEveryLayer;
}
