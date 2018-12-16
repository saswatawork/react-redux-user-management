import { createSelector, createStructuredSelector } from "reselect";

const selectUser = state => state.get('user');

const makeSelectIsUserRequestSuccess = () =>
  createSelector(selectUser, subState => subState.get('isUserRequestSuccess'));

const makeSelectUserList = () =>
  createSelector(selectUser, subState => subState.get('users').toJS());

const makeSelectUser = () =>
  createStructuredSelector({
    isUserRequestSuccess: makeSelectIsUserRequestSuccess(),
    userList: makeSelectUserList(),
  });

export default makeSelectUser;
