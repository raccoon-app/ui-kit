import api from '../api';
import * as types from '../constants/ActionTypes';

export function receiveProject(project, url) {
    return { type: types.RECEIVE_PROJECT, project, url };
}

export function getProject(url) {
    return dispatch => {
        api.getProject(project => {
            dispatch(receiveProject(project, url));
        }, url);
    };
}

export function clickArtboardLayer(layer) {
    return { type: types.CLICK_ARTBOARD_LAYER, layer };
}

export function enterArtboardLayer(layer) {
    return { type: types.ENTER_ARTBOARD_LAYER, layer };
}

export function leaveArtboardLayer(layer) {
    return { type: types.LEAVE_ARTBOARD_LAYER, layer };
}


export function setActiveArtboard(pageId, artboardId) {
    return { type: types.SET_ACTIVE_ARTBOARD, pageId, artboardId };
}

export function setOpenPage(pageId) {
    return { type: types.SET_OPEN_PAGE, pageId };
}


export function scaleArtboard(event) {
    return { type: types.SCALE_ARTBOARD, event };
}

export function takeArtboard(event) {
    return { type: types.TAKE_ARTBOARD, event };
}

export function dropArtboard(event) {
    return { type: types.DROP_ARTBOARD, event };
}

export function dragArtboard(event) {
    return { type: types.DRAG_ARTBOARD, event };
}


export function changeViewMode(mode) {
    return { type: types.CHANGE_VIEW_MODE, mode };
}


export function setFilter(filter = null) {
    return { type: types.CHANGE_FILTER, filter };
}


export function setBackgroundColor(color) {
    return { type: types.SET_BACKGROUND_COLOR, color };
}

export function setMarkerColor(color) {
    return { type: types.SET_MARKER_COLOR, color };
}

export function changeDropdownValue(name, currentValue) {
    switch (name) {
        case 'size':
            return { type: types.CHANGE_SIZE_DROPDOWN, currentValue };
        default:
            return { type: types.CHANGE_FORMAT_DROPDOWN, currentValue };

    }
}

export function toggleDropdown(name, value) {
    const newValue = !value;
    switch (name) {
        case 'size':
            return { type: types.TOGGLE_SIZE_DROPDOWN, newValue };
        default:
            return { type: types.TOGGLE_FORMAT_DROPDOWN, newValue };

    }
}

export function toggleSettingPanel() {
    return { type: types.TOGGLE_SETTING_PANEL };
}
