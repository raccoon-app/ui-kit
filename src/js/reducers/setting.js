import { combineReducers } from 'redux'
import { CHANGE_VIEW_MODE } from '../constants/ActionTypes'

const initialState = {
    markerColor: ['#A3C644','FF0000'],
    backgroundColor: '#E8E8E8',
    markerColorList: [
        ['#A3C644', '#FF0000'],
        ['#FF0000', '#A3C644'],
        ['#0000ff', '#00ff00'],
        ['#F78F21', '#1B7E8E']
    ],
    backgroundColorList: [
        '#E8E8E8',
        '#F0F0F0',
        '#BBBBBB',
        '#999999',
        '#333333'
    ],
    viewMode: 'list'
};


function viewMode(state = initialState.viewMode, action) {
    switch (action.type) {
        case CHANGE_VIEW_MODE:
            return action.mode;
        default:
            return state
    }
}
function markerColorList(state = initialState.markerColorList, action) {
    switch (action.type) {
        default:
            return state
    }
}
function backgroundColorList(state = initialState.backgroundColorList, action) {
    switch (action.type) {
        default:
            return state
    }
}


export default combineReducers({
    markerColorList,
    backgroundColorList,
    viewMode
})

export function getViewMode(state) {
    return state.viewMode
}

export function getMarkerColorList(state) {
    return state.markerColorList
}

export function getBackgroundColorList(state) {
    return state.backgroundColorList
}