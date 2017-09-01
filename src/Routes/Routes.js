import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../containers/NotFound';
import UserContainer from '../containers/usersContainer/UserContainer';
import ShowUser from '../components/users/ShowUser';

export default()=>(
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/users" exact component={UserContainer} />
    <Route path="/users/show/:id" exact component={ShowUser} />
    <Route component={NotFound} />
  </Switch>
)
