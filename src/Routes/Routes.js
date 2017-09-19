import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../containers/NotFound';
import UsersIndex from '../pages/UsersIndex';
import ShowUser from '../pages/ShowUser';
import NewUserContainer from '../containers/usersContainer/NewUserContainer';
import EditUserContainer from '../containers/usersContainer/EditUserContainer';


export default()=>(
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/users" exact component={UsersIndex} />
    <Route path="/users/:id/profile" exact component={ShowUser} />
    <Route path="/users/new-user" exact component={NewUserContainer} />
    <Route path="/users/:id/edit" exact component={EditUserContainer} />
    <Route component={NotFound} />
  </Switch>
)
