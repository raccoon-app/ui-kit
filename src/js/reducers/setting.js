import { combineReducers } from 'redux'
import { CHANGE_VIEW_MODE, CHANGE_SIZE_DROPDOWN, CHANGE_FORMAT_DROPDOWN, TOGGLE_SIZE_DROPDOWN,
    TOGGLE_FORMAT_DROPDOWN, TOGGLE_SETTING_PANEL} from '../constants/ActionTypes'

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
    viewMode: 'list',
    sizeDropdownValue: 'all',
    formatDropdownValue: 'PNG',
    sizeDropdownVisibility: false,
    formatDropdownVisibility: false,
    settingPanelVisibility: false
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

function sizeDropdownValue(state = initialState.sizeDropdownValue, action) {
    switch (action.type) {
        case CHANGE_SIZE_DROPDOWN:
            return action.currentValue;
        default:
            return state
    }
}

function formatDropdownValue(state = initialState.formatDropdownValue, action) {
    switch (action.type) {
        case CHANGE_FORMAT_DROPDOWN:
            return action.currentValue;
        default:
            return state
    }
}

function sizeDropdownVisibility(state = initialState.sizeDropdownVisibility, action) {
    switch (action.type) {
        case TOGGLE_SIZE_DROPDOWN:
            return action.newValue;
        default:
            return state
    }
}

function formatDropdownVisibility(state = initialState.formatDropdownVisibility, action) {
    switch (action.type) {
        case TOGGLE_FORMAT_DROPDOWN:
            return action.newValue;
        default:
            return state
    }
}

function settingPanelVisibility(state = initialState.settingPanelVisibility, action) {
    switch (action.type) {
        case TOGGLE_SETTING_PANEL:
            return state = !state;
        default:
            return state
    }
}

export default combineReducers({
    markerColorList,
    backgroundColorList,
    viewMode,
    sizeDropdownValue,
    formatDropdownValue,
    sizeDropdownVisibility,
    formatDropdownVisibility,
    settingPanelVisibility
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

export function getSizeDropdownValue(state) {
    return state.sizeDropdownValue
}

export function getFormatDropdownValue(state) {
    return state.formatDropdownValue
}

export function getSizeDropdownVisibleState(state) {
    return state.sizeDropdownVisibility
}

export function getFormatDropdownVisibleState(state) {
    return state.formatDropdownVisibility
}

export function getSettingPanelVisibilityState(state) {
    return state.settingPanelVisibility
}