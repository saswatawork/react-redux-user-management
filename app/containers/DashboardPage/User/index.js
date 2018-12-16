import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import bindActionCreators from "utils/bindActionCreators";
import Pagination from 'components/Pagination';
import Button from 'components/Button';

import submit from './submit';
import UserList from './userList';
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
      }
    } = this.props;

    return (
      <div>
        {userData.length>0 && (<UserList userData={userData}/>) || "Loading.."}
        <Pagination currentPage={currentPage} pages={pages} onClick={actions.userListRequest}/>

        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content"></div>
          </div>
          <div className="modal-dialog">
            <div className="modal-content"></div>
          </div>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true" className="">×   </span>
                  <span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
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
