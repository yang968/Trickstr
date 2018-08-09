import * as SessionUtil from '../util/session';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch => SessionUtil.postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
);

export const login = formUser => dispatch => SessionUtil.postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
);

export const logout = () => dispatch => SessionUtil.deleteSession()
  .then(user => dispatch(logoutCurrentUser()),
    error => dispatch(receiveErrors(error.responseJSON))
);
