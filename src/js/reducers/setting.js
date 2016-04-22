import { combineReducers } from 'redux'
import { CHANGE_VIEW_MODE } from '../constants/ActionTypes'

const initialState = {
    markerColor: ['#A3C644','FF0000'],
    backgroundColor: '#E8E8E8',
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


export default combineReducers({
    viewMode
})

export function getViewMode(state) {
    return state.viewMode
}


//
//getMarkerColors: function() {
//    return [
//        ['#A3C644', '#FF0000'],
//        ['#FF0000', '#A3C644'],
//        ['#0000ff', '#00ff00'],
//        ['#F78F21', '#1B7E8E']
//    ]
//},
//
//getBackgroundColors: function() {
//    return [
//        '#E8E8E8',
//        '#F0F0F0',
//        '#BBBBBB',
//        '#999999',
//        '#333333'
//    ]
//},
