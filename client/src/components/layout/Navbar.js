import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../store/actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  console.log(isAuthenticated);
  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">All Streams</Link>
      </li>

      <li>
        <Link to="/profile">
          <span className="hide-sm">Profile </span>
          <i className="fas fa-user"></i>
        </Link>
      </li>

      <li>
        <Link to="/" onClick={logout}>
          <span className="hide-sm">Logout </span>
          <i className="fas fa-sign-out-alt"></i>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <Fragment>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-gamepad"></i> eHA-Game-TV
          </Link>
        </h1>
        {(!loading || loading === null) &&
        (!isAuthenticated || isAuthenticated === null)
          ? guestLinks
          : authLinks}
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { logout })(Navbar);
