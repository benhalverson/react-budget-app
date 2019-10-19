import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';



const styling = {
  textAlign: 'center',
  width: '40%',
  height: '100%',
  margin: 'auto',
  paddingTop: '200px'
}

const cardStyle = {
  backgroundColor: '#71DDFF',
  boxShadow: '10px 10px 5px grey',
  fontSize: 'large'
}

const font = {
  fontSize: '1.90rem',
  fontWeight: 'normal'
}

export const LoginPage = ({ startLogin }) => (
  <div style={styling}>
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title class="display-1 font-weight-bold">Budget Application</Card.Title>
        <hr></hr>
        <Card.Text class="lead font-weight-lighter" style={font}>
          <p>This is a demo app using firebase and google to login.</p>
          <p>Once signed in you can add edit and remove expenses.</p>
          <p>
            The datepicker is the AirBnB datepicker that is slightly modified to allow
            for selecting dates in the past.
          </p>
        </Card.Text>
        <Button as="input" type="button" value="Login" size="lg" onClick={startLogin}/>
      </Card.Body>
    </Card>
  </div>

);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
