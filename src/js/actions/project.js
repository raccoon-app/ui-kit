import api from '../utils/api';

export const RESET_STATE = 'RESET_STATE';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const SET_OPEN_PAGE = 'SET_OPEN_PAGE';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const SET_ACTIVE_ARTBOARD = 'SET_ACTIVE_ARTBOARD';

const receiveInitialState = () => ({ type: RESET_STATE });

export function receiveProject(project, url) {
    return { type: RECEIVE_PROJECT, project, url };
}

export function getProject(url) {
    return dispatch => {
        dispatch(receiveInitialState());

        return api.getProject(project => {
            dispatch(receiveProject(project, url));
        }, url);
    };
}

export function setOpenPage(pageId) {
    return { type: types.SET_OPEN_PAGE, pageId };
}

export function setActiveArtboard(pageId, artboardId) {
    return { type: types.SET_ACTIVE_ARTBOARD, pageId, artboardId };
}

export function setFilter(filter = null) {
    return { type: types.CHANGE_FILTER, filter };
}
