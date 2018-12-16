/*
 * DashboardPage
 *
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
        <User />
      </div>
    );
  }
}
