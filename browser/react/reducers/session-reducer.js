import { GET_SESSION } from '../constants';


const initialState = {
    role: null
  }


export default function(state = initialState, action){

  let newState = Object.assign({}, state);

  switch (action.type) {

    case GET_SESSION:
      newState = action.session;
      break;

    default:
      return state;
  }

  return newState;
}
