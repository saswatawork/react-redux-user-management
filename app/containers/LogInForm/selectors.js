import { createSelector, createStructuredSelector } from "reselect";

const selectLogin = state => state.get('login');

const makeSelectisLoggedIn = () =>
  createSelector(selectLogin, loginState => loginState.get('isLoggedIn'));

const makeSelectLoginForm = () =>
  createStructuredSelector({
    isLoggedIn: makeSelectisLoggedIn()
  });

export default makeSelectLoginForm;
