import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // import and use other feature's reducers here
    router: routerReducer
});

export default rootReducer;
