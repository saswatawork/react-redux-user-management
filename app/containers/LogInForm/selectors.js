import { createSelector, createStructuredSelector } from "reselect";

const selectLogin = state => state.get('login');
const selectRouter = state => state.getIn(['router','location']);

const makeSelectisLoggedIn = () =>
  createSelector(selectLogin, loginState => loginState.get('isLoggedIn'));

const makeSelectcurrentLocation = () =>
  createSelector(selectRouter, location => location.get('pathname'));

const makeSelectLoginForm = () =>
  createStructuredSelector({
    isLoggedIn: makeSelectisLoggedIn(),
    currentLocation: makeSelectcurrentLocation(),
  });

export default makeSelectLoginForm;
