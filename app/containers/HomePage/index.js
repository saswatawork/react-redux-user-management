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
import LoginForm from './../LoginForm';
import RegistrationForm from './../RegistrationForm';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
          <div>
            <a class="navbar-brand" href="#">FE Code Challange</a>
          </div>
          <LoginForm />
        </nav>
        <RegistrationForm />
      </div>
    );
  }
}
