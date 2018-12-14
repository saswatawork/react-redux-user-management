import { createSelector, createStructuredSelector } from "reselect";

const selectLogin = state => state.get('login');

const makeSelectUsername = () =>
  createSelector(selectLogin, loginState => loginState.get('username'));

const makeSelectPassword = () =>
  createSelector(selectLogin, loginState => loginState.get('password'));

const makeSelectLoginForm = () =>
  createStructuredSelector({
    username: makeSelectUsername(),
    password: makeSelectPassword()
  });

export default makeSelectLoginForm;

export { selectFindBaggageFormDomain };
