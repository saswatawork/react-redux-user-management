import { createSelector, createStructuredSelector } from "reselect";

const selectUser = state => state.get('user');

const makeSelectIsUserRequestSuccess = () =>
  createSelector(selectUser, subState => subState.get('isUserRequestSuccess'));

const makeSelectUserList = () =>
  createSelector(selectUser, subState => subState.get('users').toJS());

export const makeSelectUserDetails = () =>
  createSelector(selectUser, subState => subState.get('userDetails').toJS());

const makeSelectUser = () =>
  createStructuredSelector({
    isUserRequestSuccess: makeSelectIsUserRequestSuccess(),
    userList: makeSelectUserList(),
    initialValues: makeSelectUserDetails(),
  });

export default makeSelectUser;
