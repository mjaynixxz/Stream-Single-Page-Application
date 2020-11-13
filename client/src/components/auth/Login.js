import React, { Fragment, useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../store/actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const history = useHistory();

  const [userLogin, setuserLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userLogin;

  const onChange = (e) => {
    setuserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Log In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Login into Your Account
      </p>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { login })(Login);
