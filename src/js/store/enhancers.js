import { applyMiddleware, compose } from 'redux';
import history from './history';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default compose(
    applyMiddleware(thunk, routerMiddleware(history))
);
