import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './app/reducers';

import { ThemeProvider } from 'styled-components';
import { Theme } from './styled_components/src';

import { renderRoutes } from './app/routes/RenderRoutes';
import { routes } from './app/routes/routes';

const basename = process.env.NODE_ENV === 'production'
  ? '/app/'
  : '/';
const history = createHistory({
  basename
});

const historyMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger();

const middleware = { historyMiddleware, loggerMiddleware };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware, thunk))
);

// Required by Axios
require('es6-promise').polyfill();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename={basename}>
      <ThemeProvider theme={Theme}>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);