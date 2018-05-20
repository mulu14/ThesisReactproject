import {
  loginrequest,
  loginsuccess,
  loginfailure
} from './createAction/createloginaction';
import {
  signinrequest,
  signinsuccess,
  signinfailure
} from './createAction/signinaction';
import { messagesuccess, messaageerror } from './createAction/alertaction';
import { userService } from './../services/logservice';
import { saveState } from './../store/localstorage';

export function login(email, password) {
  return dispatch => {
    dispatch(loginrequest({ email }));
    userService.login(email, password).then(
      user => {
        dispatch(loginsuccess(user));
        saveState(user.token);
      },
      error => {
        dispatch(loginfailure(error));
        dispatch(messaageerror(error));
      }
    );
  };
}

export function register(user) {
  return dispatch => {
    dispatch(signinrequest(user));
    userService.register(user).then(
      user => {
        dispatch(signinsuccess());
        // history.push('/login');
        dispatch(messagesuccess('Registration successful'));
      },
      error => {
        dispatch(signinfailure(error));
        dispatch(messaageerror(error));
      }
    );
  };
}
