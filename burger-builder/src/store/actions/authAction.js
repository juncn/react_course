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

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
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
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authFail(error.response.data.error));
      });
  };
};
