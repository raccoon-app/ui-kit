import { combineReducers } from 'redux';
import { RECEIVE_PROJECT, RESET_STATE, SET_ACTIVE_ARTBOARD, SET_OPEN_PAGE, CHANGE_FILTER } from '../actions/project';
import { GET_PROJECT_LIST } from '../actions/projectSelection';

const initialState = {
    name: null,
    folders: [],
    activePage: null,
    activeArtboard: null,
    openPage: null,
    filter: null,
};

function name(state = initialState.name, action = {}) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.project.sketchName.replace(/\.[^\.]+$/, '');
        case RESET_STATE:
            return initialState.name;
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
        case RESET_STATE:
            return initialState.folders;
        case GET_PROJECT_LIST:
            return initialState.folders;
        default:
            return state;
    }
}

function activePage(state = initialState.activePage, action = {}) {
    switch (action.type) {
        case SET_ACTIVE_ARTBOARD:
            return action.pageId;
        case RESET_STATE:
            return initialState.activePage;
        default:
            return state;
    }
}

function activeArtboard(state = initialState.activeArtboard, action = {}) {
    switch (action.type) {
        case SET_ACTIVE_ARTBOARD:
            return action.artboardId;
        case RESET_STATE:
            return initialState.activeArtboard;
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
        case RESET_STATE:
            return initialState.openPage;
        default:
            return state;
    }
}

function filter(state = initialState.filter, action = {}) {
    switch (action.type) {
        case CHANGE_FILTER:
            console.log(action.filter)
            return action.filter;
        case RESET_STATE:
            return initialState.filter;
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