import { hashHistory } from 'react-router';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function login(url) {
    return dispatch => {
        return fetch('', {})
            .then((response) => {
                dispatch(loginSuccess(response));
                return response;
            })
            .then(() => {
                hashHistory.push('projects');
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function loginSuccess(result) {
    const userId = result.id;

    return {
        type: LOGIN_SUCCESS,
        userId,
    };
}
