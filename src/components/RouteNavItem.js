import React from "react";
import { Route } from "react-router-dom";
export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <Link
        onClick={e => history.push(e.currentTarget.getAttribute("href"))}
        {...props}
        active={match ? true : false}
      >
        {props.children}
      </Link>}
  />;
