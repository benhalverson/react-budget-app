import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <p>This is a demo app using firebase and google to login.</p>
    <p>Once signed in you can add edit and remove expenses.</p>
    <p>
      The datepicker is the AirBnB datepicker that is slightly modified to allow
      for selecting dates in the past.
    </p>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
