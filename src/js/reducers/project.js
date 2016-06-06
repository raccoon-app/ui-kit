import { combineReducers } from 'redux';
import { SET_ACTIVE_ARTBOARD, SET_OPEN_PAGE, RECEIVE_PROJECT, CHANGE_FILTER } from '../constants/ActionTypes';

const initialState = {
    name: 'project name',
    folders: [],
    activePage: null,
    activeArtboard: null,
    openPage: null,
    filter: null,
};

function name(state = initialState.name, action = {}) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.project.sketchName;
        default:
            return state;
    }
}

function folders(state = initialState.folders, action = {}) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.project.pageOrder.map(function(id) {
                const item = action.project.pageData[id];

                item.name = decodeURIComponent(item.name);
                item.artboards = item.artboardId.map(function (aId) {
                    return {
                        id: action.project.artboard[aId].id,
                        src:  action.url+action.project.artboard[aId].src + '/artboard.png',
                        name: decodeURIComponent(action.project.artboard[aId].name),
                    };
                });

                return item;
            });
        default:
            return state;
    }
}

function activePage(state = initialState.activePage, action = {}) {
    switch (action.type) {
        case SET_ACTIVE_ARTBOARD:
            return action.pageId;
        default:
            return state;
    }
}

function activeArtboard(state = initialState.activeArtboard, action = {}) {
    switch (action.type) {
        case SET_ACTIVE_ARTBOARD:
            return action.artboardId;
        default:
            return state;
    }
}

function openPage(state = initialState.openPage, action = {}) {
    switch (action.type) {
        case SET_OPEN_PAGE:
            return state === action.pageId ? null : action.pageId;
        case SET_ACTIVE_ARTBOARD:
            return action.pageId;
        default:
            return state;
    }
}

function filter(state = initialState.filter, action = {}) {
    switch (action.type) {
        case CHANGE_FILTER:
            console.log(action.filter)
            return action.filter;
        default:
            return state;
    }
}


export default combineReducers({
    name,
    folders,
    activePage,
    activeArtboard,
    openPage,
    filter,
});

export function getProjectName(state) {
    return state.name;
}

export function getProjectFolders(state) {
    return state.folders;
}

export function getActivePage(state) {
    return state.activePage;
}

export function getActiveArtboard(state) {
    return state.activeArtboard;
}

export function getOpenPage(state) {
    return state.openPage;
}

export function getFilter(state) {
    return state.filter;
}
