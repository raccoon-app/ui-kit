import { combineReducers } from 'redux';
import { CHANGE_VIEW_MODE, CHANGE_SIZE_DROPDOWN, CHANGE_FORMAT_DROPDOWN, TOGGLE_SETTING_PANEL,
    SET_MARKER_COLOR, SET_BACKGROUND_COLOR, CLICK_ARTBOARD_LAYER
    ,CLICK_DROPDOWN} from '../constants/ActionTypes';

const initialState = {
    markerColor: { currentColor: '#a3c644', hoverColor: '#2cc4d5' },
    backgroundColor: { backgroundColor: '#f3f3f3', radialGradient: '#b4b4b4' },
    markerColorList: [
        { currentColor: '#f45602', hoverColor: '#00b189' },
        { currentColor: '#ffd042', hoverColor: '#1d1d1d' },
        { currentColor: '#08a3e6', hoverColor: '#eee300' },
        { currentColor: '#e59936', hoverColor: '#dcdcdc' },
        { currentColor: '#a3c644', hoverColor: '#2cc4d5' },
    ],
    backgroundColorList: [
        { backgroundColor: '#e8e8e8', radialGradient: 'transparent' },
        { backgroundColor: '#b4b4b4', radialGradient: 'transparent' },
        { backgroundColor: '#5e5e5e', radialGradient: 'transparent' },
        { backgroundColor: '#b4b4b4', radialGradient: '#f3f3f3' },
        { backgroundColor: '#f3f3f3', radialGradient: '#b4b4b4' },
    ],
    viewMode: 'list',
    sizeDropdownValue: 'all',
    formatDropdownValue: 'PNG',
    settingPanelVisibility: false,
    activeDropdown: null
};


function viewMode(state = initialState.viewMode, action) {
    switch (action.type) {
        case CHANGE_VIEW_MODE:
            return action.mode;
        default:
            return state;
    }
}

function markerColor(state = initialState.markerColor, action) {
    switch (action.type) {
        case SET_MARKER_COLOR:
            return Object.assign({}, state, action.color);
        default:
            return state;
    }
}

function backgroundColor(state = initialState.backgroundColor, action) {
    switch (action.type) {
        case SET_BACKGROUND_COLOR:
            return Object.assign({}, state, action.color);
        default:
            return state;
    }
}

function markerColorList(state = initialState.markerColorList, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function backgroundColorList(state = initialState.backgroundColorList, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function sizeDropdownValue(state = initialState.sizeDropdownValue, action) {
    switch (action.type) {
        case CHANGE_SIZE_DROPDOWN:
            return action.currentValue;
        default:
            return state;
    }
}

function formatDropdownValue(state = initialState.formatDropdownValue, action) {
    switch (action.type) {
        case CHANGE_FORMAT_DROPDOWN:
            return action.currentValue;
        default:
            return state;
    }
}

function settingPanelVisibility(state = initialState.settingPanelVisibility, action) {
    switch (action.type) {
        case TOGGLE_SETTING_PANEL:
            return !state;
        default:
            return state;
    }
}

function activeDropdown(state = initialState.activeDropdown, action) {
    switch (action.type) {
        case CLICK_DROPDOWN:
            return action.dropdownName;
        case CLICK_ARTBOARD_LAYER:
            return initialState.activeDropdown;
        default:
            return state;
    }
}

export default combineReducers({
    markerColor,
    backgroundColor,
    markerColorList,
    backgroundColorList,
    viewMode,
    sizeDropdownValue,
    formatDropdownValue,
    settingPanelVisibility,
    activeDropdown
});

export function getViewMode(state) {
    return state.viewMode;
}

export function getMarkerColor(state) {
    return state.markerColor;
}

export function getBackgroundColor(state) {
    return state.backgroundColor;
}

export function getMarkerColorList(state) {
    return state.markerColorList;
}

export function getBackgroundColorList(state) {
    return state.backgroundColorList;
}

export function getSizeDropdownValue(state) {
    return state.sizeDropdownValue;
}

export function getFormatDropdownValue(state) {
    return state.formatDropdownValue;
}

export function getSettingPanelVisibilityState(state) {
    return state.settingPanelVisibility;
}

export function getActiveDropdown(state) {
    return state.activeDropdown;
}