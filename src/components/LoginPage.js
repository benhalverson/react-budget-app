import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const styling = {
    textAlign: 'center',
    width: '40%',
    margin: 'auto'
}

const styleButton= {
  marginBottom: '5%',
  width: '20%',
  backgroundColor: '#71DDFF'
}

export const LoginPage = ({ startLogin }) => (
  <div style={styling}><h1 class="mdc-typography--headline1">Budget Application</h1>
  <div class="mdc-card mdc-elevation--z16" >
  <div class="mdc-card__primary-action">
    <div class="mdc-typography mdc-typography--headline6"><p>This is a demo app using firebase and google to login.</p>
    <p>Once signed in you can add edit and remove expenses.</p>
    <p>
      The datepicker is the AirBnB datepicker that is slightly modified to allow
      for selecting dates in the past.
    </p></div>
  </div>
  <div>
  <button class="mdc-button mdc-button--raised" style={styleButton} onClick={startLogin}>Login</button>
  </div>
</div>
</div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
