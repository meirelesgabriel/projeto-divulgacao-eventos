import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login';
import NewEvent from '../pages/newEvent';
import NewUser from '../pages/newUser';
import ShowEvents from '../pages/Events';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/newUser' component={NewUser} />
        <Route path='/newEvent' component={NewEvent} />
        <Route path='/events' component={ShowEvents} />
    </Switch>
);

export default Routes;