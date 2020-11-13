import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
import PrivateRoute from "../utils/PrivateRoute";
import StreamCreate from "./dashboard/streams/StreamCreate";
import StreamEdit from './dashboard/streams/StreamEdit'
import StreamDelete from "./dashboard/streams/StreamDelete";
import StreamShow from "./dashboard/streams/StreamShow";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <section className="container">
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path='/dashboard/createStream' exact component={StreamCreate} />
            <PrivateRoute path='/dashboard/editStream/:id' exact component={StreamEdit} />
            <PrivateRoute path='/dashboard/streamShow/:id' exact component={StreamShow} />
            <PrivateRoute path='/dashboard/delete/:id' exact component={StreamDelete} />
            <PrivateRoute path='/dashboard/showVideo/:id' exact component={StreamShow} />
          </section>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
