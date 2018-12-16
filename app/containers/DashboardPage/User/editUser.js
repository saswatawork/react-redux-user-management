import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import bindActionCreators from "utils/bindActionCreators";
import Input from 'components/Form/Input';
import Button from 'components/Button';

import submit from './submit';
import makeSelectUser from "./selectors";
import actionCreators from "./actions";
import reducer from './reducer';
import saga from './saga';

class EditUser extends React.PureComponent {
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
      onClick,
      userDetails,
      handleSubmit
    } = this.props;

    console.log('this.props', this.props)

    return (
      <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content"></div>
        </div>
        <div className="modal-dialog">
          <div className="modal-content"></div>
        </div>
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="pt-4 pl-3 pr-5" id="resistrationFrom">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">×</span>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                <Field name="first_name" component={Input} placeholder="First name" />
                <Field name="last_name" component={Input} placeholder="Last name" />
              </div>
              <div className="modal-footer">
                <Button type="button" onClick={onClick} className="btn btn-default" dataDismiss="modal">Close</Button>
                <Button type="button" className="btn btn-primary">Save changes</Button>
              </div>
            </form>
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

const EditUserConnect = compose(
  withReducer,
  withSaga,
  withConnect,
)(EditUser);

export default reduxForm({
  destroyOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  form: 'editUserForm',
  // validate,
  // onSubmit
})(EditUserConnect)
