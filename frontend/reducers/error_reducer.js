import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const ErrorReducer = (state=[], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return [];
  }
}

export default ErrorReducer;
