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
import { Redirect } from 'react-router-dom';
import Header from 'components/Header';
import Button from 'components/Button';
import User from './User';

/* eslint-disable react/prefer-stateless-function */
export default class Dashboard extends React.PureComponent {

  handleLogOutUser() {
    localStorage.removeItem('user');
  }

  render() {
    return (
      <div>
        <Header />
        <h3>User list</h3>
        <User />
      </div>
    );
  }
}
