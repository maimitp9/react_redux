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

export default()=>(
  <Switch>
    {/*  User Routes */}
    <Route path="/" exact component={Home} />
    <Route path="/users" exact component={UsersIndex} />
    <Route path="/users/:id/profile" exact component={ShowUser} />
    <Route path="/users/:company_id/new-user" exact component={NewUserContainer} />
    <Route path="/users/:id/edit" exact component={EditUserContainer} />

    {/* Company Routes */}
    <Route path="/companies" exact component={ListCompaniesContainer} />
    <Route path="/company/new" exact component={NewCompanyContainer}/>
    <Route path="/company/:id/profile" exact component={ShowCompanyContainer} />
    <Route path="/company/:id/edit" exact component={EditCompanyContainer} />
    
    {/*  always at the end */}
    <Route component={NotFound} />
   

  </Switch>
)
