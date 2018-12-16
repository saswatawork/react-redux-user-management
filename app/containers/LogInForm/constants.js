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

 export const LOGIN_REQUEST = 'app/LogInForm/LOGIN_REQUEST';
 export const LOGIN_REQUEST_SUCCESS = 'app/LogInForm/LOGIN_REQUEST_SUCCESS';
 export const LOGIN_REQUEST_FAIL = 'app/LogInForm/LOGIN_REQUEST_FAIL';
 export const LOGOUT_USER = 'app/LogInForm/LOGOUT_USER';
 export const LOGOUT_USER_SUCCESS = 'app/LogInForm/LOGOUT_USER_SUCCESS';
