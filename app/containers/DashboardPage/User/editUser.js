import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import bindActionCreators from 'utils/bindActionCreators';
import Input from 'components/Form/Input';
import Button from 'components/Button';

import makeSelectUser from './selectors';
import actionCreators from './actions';
import reducer from './reducer';
import saga from './saga';

class EditUser extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({}),
    handleSubmit: PropTypes.func,
  };

  static defaultProps = {
    submitting: false,
    submitSucceeded: false,
    reset: _.noop,
    form: undefined,
  };

  render() {
    const { actions, onClick, handleSubmit, isEditUserModalOpen } = this.props;

    return (
      <div>
        {isEditUserModalOpen && (
          <div className="modal fade show d-block">
            <div className="modal-dialog">
              <div className="modal-content" />
            </div>
            <div className="modal-dialog">
              <div className="modal-content">
                <form
                  onSubmit={handleSubmit}
                  className="pt-4 pl-3 pr-5"
                  id="resistrationFrom"
                >
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      onClick={actions.closeEditUserModal}
                      data-dismiss="modal"
                    >
                      <span aria-hidden="true">×</span>
                      <span className="sr-only">Close</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Field
                      name="first_name"
                      component={Input}
                      placeholder="First name"
                    />
                    <Field
                      name="last_name"
                      component={Input}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      onClick={onClick}
                      className="btn btn-default"
                      dataDismiss="modal"
                    >
                      Close
                    </Button>
                    <Button type="button" className="btn btn-primary">
                      Save changes
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = bindActionCreators;

const mapStateToProps = makeSelectUser();

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps(actionCreators),
);

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withReducer,
  withSaga,
  reduxForm(
    {
      destroyOnUnmount: false,
      enableReinitialize: true,
      keepDirtyOnReinitialize: true,
      form: 'EditUser',
    },
    withConnect,
  ),
)(EditUser);
