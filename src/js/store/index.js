import { createStore, combineReducers } from 'redux';
import historyImpl from './history';
import storeEnhancers from './enhancers';
import * as reducers from '../reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';


export default () => {
    const reducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

    const state = createStore(
        reducer,
        storeEnhancers);

    const history = syncHistoryWithStore(historyImpl, state);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            state.replaceReducer(nextReducer);
        });
    }

    return {
        state,
        history,
    };
}