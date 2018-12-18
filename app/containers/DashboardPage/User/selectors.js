import { createSelector, createStructuredSelector } from "reselect";

const selectUser = state => state.get('user');

const makeSelectIsUserRequestSuccess = () =>
  createSelector(selectUser, subState => subState.get('isUserRequestSuccess'));

export const makeSelectUserSortedOrder = () =>
  createSelector(selectUser, subState => subState.get('userSortedOrder'));  

export const makeSelectUserList = () =>
  createSelector(selectUser, subState => subState.get('users').toJS());

export const makeSelectUserDetails = () =>
  createSelector(selectUser, subState => subState.get('userDetails').toJS());

const makeSelectUser = () =>
  createStructuredSelector({
    isUserRequestSuccess: makeSelectIsUserRequestSuccess(),
    userList: makeSelectUserList(),
    initialValues: makeSelectUserDetails(),
    userSortedOrder: makeSelectUserSortedOrder()
  });

export default makeSelectUser;
