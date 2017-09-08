import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../containers/NotFound';
import UsersIndex from '../pages/UsersIndex';
import ShowUser from '../pages/ShowUser';
import UserContainer from '../containers/usersContainer/NewUserContainer';

export default()=>(
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/users" exact component={UsersIndex} />
    <Route path="/users/show/:id" exact component={ShowUser} />
    <Route path="/users/new-user" exact component={UserContainer} />
    <Route component={NotFound} />
  </Switch>
)
