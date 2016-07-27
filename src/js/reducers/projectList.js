import { combineReducers } from 'redux';
import { SET_ACTIVE_ARTBOARD, SET_OPEN_PAGE, RECEIVE_PROJECT, CHANGE_FILTER } from '../constants/ActionTypes';

const initialState = {
    projectList: [],
    currentProject: null,
};

function projectList(state = initialState.projectList, action = {}) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.project.sketchName.replace(/\.[^\.]+$/, '');
        default:
            return state;
    }
}

function currentProject(state = initialState.currentProject, action = {}) {
    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.project.sketchName.replace(/\.[^\.]+$/, '');
        default:
            return state;
    }
}


export default combineReducers({
    projectList,
    currentProject,
});

export function getProjectList(state) {
    return state.projectList;
}

export function getCurrentProject(state) {
    return state.currentProject;
}