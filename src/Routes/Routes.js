import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';  // home page
import NotFound from '../containers/NotFound'; // page not found
import UsersIndex from '../pages/UsersIndex'; // user index 
import ShowUser from '../pages/ShowUser'; // show user page
import NewUserContainer from '../containers/usersContainer/NewUserContainer'; // create new user
import EditUserContainer from '../containers/usersContainer/EditUserContainer'; // edit user

import ListCompaniesContainer from "../containers/companiesContainer/ListCompaniesContainer"; //list companies
import ShowCompanyContainer from "../containers/companiesContainer/ShowCompanyContainer"; //company peofile
import NewCompanyContainer from '../containers/companiesContainer/NewCompanyContainer'; // new company
import EditCompanyContainer from '../containers/companiesContainer/EditCompanyContainer'; // edit company

import loginContainer from '../containers/authContainer/loginContainer';
import PrivateRoute from '../components/auth/RequireAuth';

export default()=>(
  <Switch>
    {/*  User Routes */}
    <Route path="/" exact component={Home} />
    <PrivateRoute path="/users" exact component={UsersIndex} />
    <PrivateRoute path="/users/:id/profile" exact component={ShowUser} />
    <PrivateRoute path="/users/:company_id/new-user" exact component={NewUserContainer} />
    <PrivateRoute path="/users/:id/edit" exact component={EditUserContainer} />

    {/* Company Routes */}
    <PrivateRoute path="/companies" exact component={ListCompaniesContainer} />
    <PrivateRoute path="/company/new" exact component={NewCompanyContainer}/>
    <PrivateRoute path="/company/:id/profile" exact component={ShowCompanyContainer} />
    <PrivateRoute path="/company/:id/edit" exact component={EditCompanyContainer} />
    <Route path="/auth/login" exact component={loginContainer} />
    
    {/*  always at the end */}
    <Route component={NotFound} />
   

  </Switch>
)
