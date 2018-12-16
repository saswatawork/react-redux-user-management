/*
 * DashboardPage
 *
 */

import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from 'components/Header';
import User from './User';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <User />
      </div>
    );
  }
}
