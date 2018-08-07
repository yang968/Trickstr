import * as SessionUtil from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(user => dispatch(logoutCurrentUser()));
