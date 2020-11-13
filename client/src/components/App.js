import React, { Fragment, useEffect } from "react";
import Routes from "./Routes";

import "./App.css";
import { store } from "../index";
import setAuthToken from "../utils/setAuthToken";
import { load_User } from "../store/actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(load_User());
  }, []);

  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}

export default App;
