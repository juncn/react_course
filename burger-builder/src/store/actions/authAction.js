import actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: authData
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBKst8Sjb_AHbcpzwWDpASmgPuKGTY2t9A';
    if (!isSignup) {
      url =
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBKst8Sjb_AHbcpzwWDpASmgPuKGTY2t9A';
    }
    axios
      .post(url, authData)
      .then(response => {
        console.log(response);
        const data = {
          idToken: response.data.idToken,
          userId: response.data.localId
        };
        dispatch(authSuccess(data));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authFail(error.response.data.error));
      });
  };
};
