import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from "prop-types";

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import bindActionCreators from "utils/bindActionCreators";
import Pagination from 'components/Pagination';
import Button from 'components/Button';

import UserList from './userList';
import EditUser from './editUser';
import makeSelectUser from "./selectors";
import actionCreators from "./actions";
import reducer from './reducer';
import validate from './validate';
import saga from './saga';

export class User extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      userListRequest: PropTypes.func.isRequired,
    }),
    handleSubmit: PropTypes.func
  };

  static defaultProps = {
    submitting: false,
    submitSucceeded: false,
    reset: _.noop,
    form: undefined
  };

  componentDidMount() {
    this.props.actions.userListRequest();
  }

  render() {
    const {
      actions,
      userList: {
        data: userData,
        total_pages: pages,
        page: currentPage
      },
      userDetails
    } = this.props;

    return (
      <div className="p-5">
        <h4>User list</h4>
        {userData.length>0 && (<UserList getUserDetails={actions.getUserDetailsRequest} userData={userData}/>) || "Loading..."}
        <Pagination currentPage={currentPage} pages={pages} onClick={actions.userListRequest}/>
        <EditUser userDetails={userDetails}/>
      </div>
    )
  }
}

const mapDispatchToProps = bindActionCreators;

const mapStateToProps = makeSelectUser();

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps(actionCreators)
);

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

const UserConnect = compose(
  withReducer,
  withSaga,
  withConnect,
)(User);

export default UserConnect;
