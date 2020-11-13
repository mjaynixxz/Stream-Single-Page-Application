import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import StreamList from "./streams/StreamList";
import { Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";

const Dashboard = ({ user }) => {

  

  return (


    <Fragment>
      {user === null ? (
        "Loading"
      ) : (
          <div>
            <h1>{`Welcome, ${user?.name}`}</h1>
          </div>
        )}


        
      <Link style={{ position: 'absolute', right: '5%', top: '50px' }} to='/dashboard/createStream' className="btn btn-primary my-1">Create Stream</Link>
        
      <StreamList />
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
