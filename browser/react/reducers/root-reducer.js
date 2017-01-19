import { combineReducers } from 'redux';
import courses from './course-reducer';
import categories from './categories-reducer';
import prompts from './prompt-reducer';
import replies from './reply-reducer';
import session from './session-reducer';

import { LOGOUT } from '../constants';

const combReduce = combineReducers({
  courses,
  categories,
  prompts,
  replies,
  session
});

export default function(state, action){
  if (action.type === LOGOUT){
    state = undefined;
  }
  return combReduce(state, action)
}
