import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import featureReducer from './featureReducer';

const rootReducer = combineReducers({
  featureReducer,
  router: routerReducer
});

export default rootReducer;