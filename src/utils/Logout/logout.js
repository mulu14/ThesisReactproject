import React, { Component } from 'react';
import { userService } from './../../services/logservice';
import { Redirect } from 'react-router';

class Logout extends Component {
  componentDidMount() {
    userService.logout();
  }

  render() {
    return (
      <h1 className="loading-text">
        <Redirect to="/" />
      </h1>
    );
  }
}

export default Logout;
