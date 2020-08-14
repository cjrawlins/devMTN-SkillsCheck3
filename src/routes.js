import React from 'react';
import {Switch, Route} from 'react-router-dom'

// Components
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Post from './components/Post';
import Form from './components/Form';

export default (
    <Switch>
        <Route component={Auth} exact path="/" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Post} path="/post/:postid" />
        <Route component={Form} path="/new" />
    </Switch>
);
