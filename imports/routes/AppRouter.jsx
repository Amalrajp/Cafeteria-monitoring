import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { Tracker } from 'meteor/tracker'

import Home from '../ui/pages/Home'
import Login from '../ui/pages/Login'
import Users from '../ui/pages/Users'
import Register from '../ui/pages/Register';
import Menu from '../ui/pages/Menu';
import Predict from '../ui/pages/Predict';
import Bill from '../ui/pages/Bill';

const history = createHistory();
const unAuthenticatedPages = ['/', '/login','/register','/menu']
const authenticatedPages = ['/user','/predict','/bill']


const NotFoundPage = () => (
    <div>
        Page Not Found! 404!
    </div>
)

const onEnterPublicPage = () => {
    if(Meteor.userId())
        history.replace("/user")
}

const onEnterPrivatePage = () => {
    if(!Meteor.userId())
        history.replace("/")
}

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Home} onEnter={onEnterPublicPage}></Route>
            <Route path='/login' component={Login} onEnter={onEnterPublicPage}></Route>
            <Route path='/user' component={Users} onEnter={onEnterPrivatePage}></Route>
            <Route path='/register' component={Register} onEnter={onEnterPublicPage}></Route>
            <Route path='/menu' component={Menu} onEnter={onEnterPublicPage}></Route>
            <Route path='/predict' component={Predict} onEnter={onEnterPrivatePage}></Route>
            <Route path='/bill' component={Bill} onEnter={onEnterPrivatePage}></Route>
            <Route component={NotFoundPage}></Route>
        </Switch>
    </Router>
)

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unAuthenticatedPages.includes(pathname)
    const isAuthenticatedPage = authenticatedPages.includes(pathname)

    if(isUnauthenticatedPage && isAuthenticated){
        history.replace("/user")
    }
    else if(isAuthenticatedPage && !isAuthenticated){
        history.replace("/")
    }
})

/*var spawn = require("child_process").spawn; 
var process = spawn('python',["./main.py"] );
*/
export default AppRouter