import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './Logon';
import Register from './Register';
import Profile from './Profile';
import Incident from './Incident';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incident" component={Incident} />
            </Switch>
        </BrowserRouter>
    );
}