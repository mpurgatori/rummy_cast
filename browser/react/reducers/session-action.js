import { GET_SESSION, LOGOUT } from '../constants';
import axios from 'axios';

export function setSession(session){
  return {
    type: GET_SESSION,
    session
  };
};


export function getSession(){
  return dispatch => {
    axios.get('/api/sessions')
    .then(session => dispatch(setSession(session.data)))
  }
}


export function logOut(){
  return {
    type: LOGOUT
  };
};

export function destroySession(){
  return dispatch =>
  axios.get('/api/sessions/logout')
  .then(() => dispatch(logOut()))
}
