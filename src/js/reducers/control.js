import { combineReducers } from 'redux'
import { SCALE_ARTBOARD, TAKE_ARTBOARD, DROP_ARTBOARD, DRAG_ARTBOARD} from '../constants/ActionTypes'

const initialState = {
    scale: 1,
    dragging: {
        x: 0,
        y: 0
    },
    isDragging: false
};

function isNegative(n) {
    return ((n = +n) || 1 / n) < 0;
}

let coords = {
    x: 0,
    y: 0
}

export default function control(state = initialState, action) {
    switch (action.type) {
        case SCALE_ARTBOARD:
            var e = action.event

            if (!e.shiftKey) {
                return state;
            }

            e.preventDefault();

            var ZOOM_STEP = .2;

            var $target = document.getElementsByClassName('artboard__scale')[0].getBoundingClientRect();
            var newScale = state.scale;
            var newPosition = Object.assign({}, state.dragging);

            var xDiff = (e.pageX-$target.left)*ZOOM_STEP/newScale;
            var yDiff = (e.pageY-$target.top)*ZOOM_STEP/newScale;

            if (isNegative(e.deltaX) && isNegative(e.deltaY) ) {
                newPosition.x -= xDiff;
                newPosition.y -= yDiff;
            } else {
                newPosition.x += xDiff;
                newPosition.y += yDiff;
            }

            if (isNegative(e.deltaX) && isNegative(e.deltaY) ) {
                newScale += ZOOM_STEP;
            } else {
                newScale -= ZOOM_STEP;
            }
            newScale = newScale < 2*ZOOM_STEP ? 2*ZOOM_STEP : newScale;

            return Object.assign({}, state, {
                dragging: newPosition,
                scale: newScale
            });

        case DRAG_ARTBOARD:
            action.event.preventDefault();

            var e = action.event;
            var newPosition = Object.assign({}, state.dragging);

            var xDiff = coords.x - e.pageX,
                yDiff = coords.y - e.pageY;

            coords.x = e.pageX;
            coords.y = e.pageY;

            newPosition.x -= xDiff;
            newPosition.y -= yDiff;

            return Object.assign({}, state, {
                dragging: newPosition
            });

        case TAKE_ARTBOARD:
            coords = {
                x: action.event.pageX,
                y: action.event.pageY
            }

            return Object.assign({}, state, {
                isDragging: true
            });

        case DROP_ARTBOARD:
            coords = {}

            return Object.assign({}, state, {
                isDragging: false
            });

        default:
            return state
    }
}


export function getScale(state) {
    return state.scale
}

export function getDragging(state) {
    return state.dragging
}

export function getIsDragging(state) {
    return state.isDragging
}


