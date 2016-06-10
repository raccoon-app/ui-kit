import { combineReducers } from 'redux'
import { RECEIVE_PROJECT, SET_ACTIVE_ARTBOARD } from '../constants/ActionTypes'

const initialState = {
    artboards: {},
    url: null,
    activeArtboard: {
        layer: [],
    },
};

function artboards(state = initialState.artboards, action) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.project.artboard;
        default:
            return state;
    }
}

function url(state = initialState.url, action) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.url;
        default:
            return state;
    }
}

function activeArtboard(state = initialState.activeArtboard, action) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            let firstId;

            // @TODO FIXME
            for(let key in action.project.artboard) {
                firstId = action.project.artboard[key].id;
                break;
            }

            return action.project.artboard[firstId];

        default:
            return state;
    }
}

export default function artboard(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_ARTBOARD:
            return Object.assign({}, state, {
                activeArtboard: state.artboards[action.artboardId],
            });

        default:
            return {
                artboards: artboards(state.artboards, action),
                activeArtboard: activeArtboard(state.activeArtboard, action),
                url: url(state.url, action)
            };
    }
}

export function getArtboards(state) {
    return state.artboards;
}

export function getImage(state) {
    return state.url + state.activeArtboard.src + '/artboard.png';
}

export function getActiveArtboard(state) {
    return state.activeArtboard;
}

