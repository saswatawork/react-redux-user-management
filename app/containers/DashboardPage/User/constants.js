/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

 export const USER_LIST_REQUEST = 'app/User/USER_LIST_REQUEST';
 export const USER_LIST_REQUEST_SUCCESS = 'app/User/USER_LIST_REQUEST_SUCCESS';
 export const USER_LIST_REQUEST_FAIL = 'app/User/USER_LIST_REQUEST_FAIL';
 export const GET_USER_DETAILS_REQUEST = 'app/User/GET_USER_DETAILS_REQUEST';
 export const GET_USER_DETAILS_REQUEST_SUCCESS = 'app/User/GET_USER_DETAILS_REQUEST_SUCCESS';
 export const GET_USER_DETAILS_REQUEST_FAIL = 'app/User/GET_USER_DETAILS_REQUEST_FAIL';
