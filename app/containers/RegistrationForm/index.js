import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from "prop-types";

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Input from 'components/Form/Input';
import Button from 'components/Button';
import FormSection from 'components/FormSection';

import submit from './submit';
import makeSelectLoginForm from "./selectors";
import reducer from './reducer';
import validate from './validate';
// import saga from './saga';

export class RegistrationForm extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      // TODO: list all actions here
    }),
    handleSubmit: PropTypes.func
  };

  static defaultProps = {
    submitting: false,
    submitSucceeded: false,
    reset: _.noop,
    form: undefined
  };

  render() {
    const {
      error,
      form,
      handleSubmit,
      pristine,
      reset,
      submitting,
      username,
      password
    } = this.props;

    return (
      <div className="container">
        <div className="row align-items-center h-100">
          <div className="col-sm-5 mx-sm-auto mt-5 pt-5">
            <div className="card">
              <div className="card-header">
                <h4>Registration</h4>
              </div>
              <form action="" className="pt-4 pl-3 pr-5" id="loginForm">
                <Field name="firstname" component={Input} placeholder="First name" />
                <Field name="lastname" component={Input} placeholder="Last name" />
                <Field name="email" component={Input} placeholder="Email"/>
                <Field name="password" type="password" component={Input} placeholder="password"/>
                <div className="form-group">
                  <button type="button" className="btn btn-primary">Join now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

const mapStateToProps = makeSelectLoginForm();

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registration', reducer });
// const withSaga = injectSaga({ key: 'login', saga });

const RegistrationFormConnect = compose(
  withReducer,
  // withSaga,
  withConnect,
)(RegistrationForm);



export default reduxForm({
  destroyOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  form: 'registration',
  validate
})(RegistrationFormConnect)
