import api from '../utils/api';

export const RESET_STATE = 'RESET_STATE';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

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
