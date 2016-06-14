import { combineReducers } from 'redux';
import { ZOOM_ARTBOARD, SCALE_ARTBOARD, TAKE_ARTBOARD, DROP_ARTBOARD, DRAG_ARTBOARD } from '../constants/ActionTypes';

const initialState = {
    scale: 1,
    dragging: {
        x: 0,
        y: 0,
    },
    isDragging: false,
};

// @TODO: FIXME

function isNegative(n) {
    return ((n = +n) || 1 / n) < 0;
}

let coords = {
    x: 0,
    y: 0,
};

export default function control(state = initialState, action = {}) {
    switch (action.type) {
        case ZOOM_ARTBOARD: {
            const event = action.event;
            const ZOOM_STEP = 0.1;
            let newScale = state.scale;

            event.preventDefault();

            if (!action.value) {
                newScale = 1;
            } else {
                if (action.value === 'plus') {
                    newScale += ZOOM_STEP;
                } else {
                    newScale -= ZOOM_STEP;
                }
            }

            newScale = newScale < 2 * ZOOM_STEP ? 2 * ZOOM_STEP : newScale;

            return Object.assign({}, state, {
                scale: newScale,
            });
        }

        case SCALE_ARTBOARD: {
            const event = action.event;
            const ZOOM_STEP = .2;

            if (!event.shiftKey) {
                return state;
            }

            event.preventDefault();

            const $target = document.getElementsByClassName('artboard__scale')[0].getBoundingClientRect();
            const newPosition = Object.assign({}, state.dragging);

            let newScale = state.scale;

            const xDiff = (event.pageX - $target.left) * ZOOM_STEP / newScale;
            const yDiff = (event.pageY - $target.top) * ZOOM_STEP / newScale;

            if (isNegative(event.deltaX) && isNegative(event.deltaY)) {
                newPosition.x -= xDiff;
                newPosition.y -= yDiff;
            } else {
                newPosition.x += xDiff;
                newPosition.y += yDiff;
            }

            if (isNegative(event.deltaX) && isNegative(event.deltaY)) {
                newScale += ZOOM_STEP;
            } else {
                newScale -= ZOOM_STEP;
            }

            newScale = newScale < 2 * ZOOM_STEP ? 2 * ZOOM_STEP : newScale;

            return Object.assign({}, state, {
                dragging: newPosition,
                scale: newScale,
            });
        }

        case DRAG_ARTBOARD: {
            const event = action.event;
            const xDiff = coords.x - event.pageX;
            const yDiff = coords.y - event.pageY;
            const newPosition = Object.assign({}, state.dragging);

            event.preventDefault();

            coords.x = event.pageX;
            coords.y = event.pageY;

            newPosition.x -= xDiff;
            newPosition.y -= yDiff;

            return Object.assign({}, state, {
                dragging: newPosition,
            });
        }

        case TAKE_ARTBOARD: {
            coords = {
                x: action.event.pageX,
                y: action.event.pageY,
            };

            return Object.assign({}, state, {
                isDragging: true,
            });
        }

        case DROP_ARTBOARD: {
            coords = {};

            return Object.assign({}, state, {
                isDragging: false,
            });
        }

        default: {
            return state;
        }
    }
}


export function getScale(state) {
    return state.scale;
}

export function getDragging(state) {
    return state.dragging;
}

export function getIsDragging(state) {
    return state.isDragging;
}

