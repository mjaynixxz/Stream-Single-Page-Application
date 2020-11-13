import React from "react";
import { connect } from "react-redux";
import { setAlert } from "../../store/actions/alert";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts?.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { setAlert })(Alert);
