import { RECEIVE_PROJECT, SET_ACTIVE_ARTBOARD } from '../constants/ActionTypes';

const initialState = {
    artboards: {},
    url: null,
    activeArtboard: {
        layer: [],
    },
};

const getFirstArtboardId = (artboard) => {
    let firstId;

    for (const key in artboard) {
        firstId = artboard[key].id;
        break;
    }

    return firstId;
};

const artboard = (state = initialState, action = {}) => {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return Object.assign({}, state, {
                artboards: action.project.artboard,
                activeArtboard: action.project.artboard[getFirstArtboardId(action.project.artboard)],
                url: action.url,
            });

        case SET_ACTIVE_ARTBOARD:
            return Object.assign({}, state, {
                activeArtboard: state.artboards[action.artboardId],
            });

        default:
            return state;
    }
};

export default artboard;
