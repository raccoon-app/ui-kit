import React from 'react';
import { applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import thunk from 'redux-thunk';

import App from './components/Project';
import AppStore from './store';
import { getProject } from './actions';
import '../scss/main.scss';


import routes from './routes';

const store = AppStore();
//store.state.dispatch(getProject('http://design.oweather.net/'));
//store.dispatch(getProject('http://design.oweather.net/'));

render(
    <Provider store={store.state}>
        <Router history={store.history}>
            { routes() }
        </Router>
    </Provider>,
    document.getElementById('root')
);