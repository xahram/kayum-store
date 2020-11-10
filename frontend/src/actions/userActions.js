import Axios from 'axios';
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

// update the user
const update = (updateUser) => async (dispatch, getState) => {
  //  get the user info
  const {
    userSignin: { userInfo },
  } = getState();
  //  request update the user
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: updateUser,
  });
  try {
    // send the put request to server
    const { data } = await Axios.put('/api/v1/auth/updatedetails', updateUser, {
      // set authentication header
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    // send data user reducer from frontend
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    // cookies of user
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    // error if any
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

// Log in the user
const signin = (email, password) => async (dispatch) => {
  // request for login
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    // send the post request to server
    const { data } = await Axios.post('/api/v1/auth/login', {
      email,
      password,
    });
    // send data user reducer from frontend
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    // set cookies
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    // error if any
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// register the user
const register = (newUser) => async (dispatch) => {
  // request for register the user
  dispatch({ type: USER_REGISTER_REQUEST, payload: newUser });
  try {
    // send the post request to server for register the user
    const { data } = await Axios.post('/api/v1/auth/register', newUser);
    // send the  data user reducer from frontend
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    // set the user info
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    // error if any
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data.error });
  }
};

// logout the user
const logout = () => (dispatch) => {
  // delete the user and remove cookies
  Cookie.remove('userInfo');
  dispatch({ type: USER_LOGOUT });
};
export { signin, register, logout, update };
