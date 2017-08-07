// import { FEATURE_ACTION_FETCHING } from '../actions';

export default function featureReducer(
    state = {
        isFetching: false
    },
    action
) {
    switch (action.type) {
        // case FEATURE_ACTION_FETCHING:
        //     return {
        //         ...state,
        //         isFetching: true
        //     };
        default:
            return state;
    }
}
