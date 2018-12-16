/*
 * HomePage
 *
 */

import React from 'react';
import LoginForm from './../LoginForm';
import Header from 'components/Header';
import RegistrationForm from './../RegistrationForm';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <RegistrationForm />
      </div>
    );
  }
}
