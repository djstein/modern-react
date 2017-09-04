import {
  STATE_ONE,
} from '../actions';

export default function featureReducer(
  state = {
    defaultValue: false
  },
  action
) {
  switch (action.type) {
    case STATE_ONE:
      return {
        ...state,
      };
    default:
      return state;
  }
}