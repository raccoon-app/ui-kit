import { CLICK_ARTBOARD_LAYER, ENTER_ARTBOARD_LAYER, LEAVE_ARTBOARD_LAYER, RESET_LAYER } from '../actions/artboard';
import { RESET_STATE, SET_ACTIVE_ARTBOARD } from '../actions/project';
import measurementLayers from '../utils/measurementLayers';

const initialState = {
    currentLayer: {},
    hoverLayer: {},
    spacing: [],
};

const measurement = (state = initialState, action = {}) => {
    switch (action.type) {
        case CLICK_ARTBOARD_LAYER:
            return Object.assign({}, state, {
                currentLayer: {
                    x: action.layer.x,
                    y: action.layer.y,
                    width: action.layer.width,
                    height: action.layer.height,
                },
            });

        case ENTER_ARTBOARD_LAYER:
            return Object.assign({}, state, {
                hoverLayer: {
                    x: action.layer.x,
                    y: action.layer.y,
                    width: action.layer.width,
                    height: action.layer.height,
                },
                spacing: measurementLayers(state.currentLayer, {
                    x: action.layer.x,
                    y: action.layer.y,
                    width: action.layer.width,
                    height: action.layer.height,
                }),
            });

        case LEAVE_ARTBOARD_LAYER:
            return Object.assign({}, state, {
                spacing: initialState.spacing,
            });

        case RESET_LAYER:
            return initialState;

        case SET_ACTIVE_ARTBOARD:
            return initialState;

        case RESET_STATE:
            return initialState;

        default:
            return state;
    }
};

export default measurement;