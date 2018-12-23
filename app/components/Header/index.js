/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import LoginForm from 'containers/LoginForm';

/* eslint-disable react/prefer-stateless-function */
export default class Header extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="#">
            User Management
          </a>
        </div>
        <LoginForm />
      </nav>
    );
  }
}
