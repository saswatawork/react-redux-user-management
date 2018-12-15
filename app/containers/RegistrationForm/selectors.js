import { createSelector, createStructuredSelector } from "reselect";

const selectLogin = state => state.get('registration');

const makeSelectFirstname = () =>
  createSelector(selectLogin, loginState => loginState.get('firstname'));

const makeSelectLastname = () =>
  createSelector(selectLogin, loginState => loginState.get('lastname'));

const makeSelectRegistrationForm = () =>
  createStructuredSelector({
    username: makeSelectFirstname(),
    password: makeSelectLastname()
  });

export default makeSelectRegistrationForm;
