'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect, browserHistory} from 'react-router';
import axios from 'axios';

import store from './reducers/store';
import { Provider } from 'react-redux';

import Main from './containers/main.jsx'
import Sidebar from './components/sidebar.jsx'
import Login from './containers/login-container.js'
import loginTeach from './containers/teacher-login-container.js'
import Signup from './components/signup.jsx'
import View from './containers/reply-display-container.jsx'
import promptWrite from './containers/prompt-container.jsx'
import replyWrite from './containers/reply-container.jsx'
import giveFeedback from './containers/give-container.jsx'




import { receiveCourses, loadCourses } from './reducers/courses-action';
import { receiveCategories, loadCategories } from './reducers/categories-action';
import { receivePrompts, loadPrompts } from './reducers/prompt-action';
import { loadReply, loadReplies, loadRepliesTeach } from './reducers/reply-action';
import { getSession } from './reducers/session-action';



const onPromptEnter = function (){
  store.dispatch(loadCourses());
	store.dispatch(loadCategories());
};


const onReplyEnter = function (){
	store.dispatch(loadPrompts());
};

const onViewEnter = function(){
  store.dispatch(loadReplies());
}

const onTeachReply = function(){
  store.dispatch(loadRepliesTeach())
}

const loginCheck = function (){
  store.dispatch(getSession())
}



ReactDOM.render(
	<Provider store={store}>
  	<Router history={browserHistory}>
  	<Route path="/" component={Main} onEnter={loginCheck} >
  		<Route path="/login" component={Login}/>
      <Route path="/loginteach" component={loginTeach}/>
  		<Route path="/signup" component={Signup}/>
      <Route path="/view" component={View} onEnter={onViewEnter}/>
  		<Route path="/replywrite" component={replyWrite} onEnter={onReplyEnter}/>
  		<Route path="/promptwrite" component={promptWrite} onEnter={onPromptEnter}/>
      <Route path="/feedback" component={giveFeedback} onEnter={onTeachReply}/>
  	</Route>
  	</Router>
  </Provider>, document.getElementById('app')
)
