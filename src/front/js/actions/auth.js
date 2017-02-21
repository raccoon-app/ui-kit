import { hashHistory } from 'react-router';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_SERVICES = Object.freeze({
    LOCAL: 'LOCAL'
});

export function login(loginService) {
    return dispatch => {
        return fetch(getServiceUrl(loginService), {})
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

function getServiceUrl(type) {
    const baseUrl = process.env.API_BASE_URL;
    switch (type) {
        case LOGIN_SERVICES.LOCAL:
            return `${baseUrl}/auth/local`;
        default:
            throw new Error('Login service is not supported');
    }
}
