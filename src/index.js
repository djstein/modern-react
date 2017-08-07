import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push
} from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import LoadHome from './feature/containers/LoadHome';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger();

const middleware = { historyMiddleware, loggerMiddleware, thunkMiddleware };

const store = createStore(rootReducer, applyMiddleware(...middleware));

// Required by Axios
require('es6-promise').polyfill();

registerServiceWorker();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={LoadHome} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
