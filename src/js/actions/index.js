import api from '../utils/api';
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

export function zoomArtboard(event, value) {
    return { type: types.ZOOM_ARTBOARD, event, value };
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

export function setSwitcherColor(type, color) {
    return { type: `SET_${type}`, color };
}

export function changeDropdownValue(name, currentValue) {
    switch (name) {
        case 'size':
            return { type: types.CHANGE_SIZE_DROPDOWN, currentValue };
        default:
            return { type: types.CHANGE_FORMAT_DROPDOWN, currentValue };

    }
}

export function toggleDropdown(e, name, value) {

    const dropdown = e.refs.dropdown;
    const options = dropdown.refs.options;

    let toolsBody = document.getElementsByClassName('tools__body')[0];
    let toolsBodyHeight = toolsBody.getBoundingClientRect().height;
    let toolsBodyScrollTop = toolsBody.scrollTop;
    let optionsBottomOffset = options.getBoundingClientRect().bottom
        - dropdown.refs.dropdownContainer.getBoundingClientRect().height;

    let sizeTopPosition = false;
    let formatTopPosition = false;


    const newValue = !value;

    //if dropdown is open check if there is enough space for it
    if (newValue != false) {
        console.log(toolsBodyScrollTop + toolsBodyHeight);
        console.log(optionsBottomOffset);
            if (toolsBodyScrollTop + toolsBodyHeight < optionsBottomOffset) {
                if(name == 'size') {
                    sizeTopPosition = true;
                }
                else {
                    formatTopPosition = true;
                }
            }
    }

    switch (name) {
        case 'size':
            return { type: types.TOGGLE_SIZE_DROPDOWN, newValue,  sizeTopPosition };
        default:
            return { type: types.TOGGLE_FORMAT_DROPDOWN, newValue, formatTopPosition };

    }
}

export function toggleSettingPanel() {
    return { type: types.TOGGLE_SETTING_PANEL };
}
