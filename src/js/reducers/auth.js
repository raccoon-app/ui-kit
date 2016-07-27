import { combineReducers } from 'redux';
import { SET_ACTIVE_ARTBOARD, SET_OPEN_PAGE, RECEIVE_PROJECT, CHANGE_FILTER } from '../constants/ActionTypes';

const initialState = {
    isLoggedIn: false,
    token: {},
};

function isLoggedIn(state = initialState.isLoggedIn, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}

function token(state = initialState.token, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    isLoggedIn,
    token,
});

export function getIsLoggedIn(state) {
    return state.isLoggedIn;
}

export function getToken(state) {
    return state.token;
}
