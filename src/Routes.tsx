import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./containers/SearchPage";
import EmployeeDetail from "./containers/EmployeeDetail";
import ErrorBoundary from "./ErrorBoundry";

export default function Routes() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/overview/:name" component={EmployeeDetail} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}
