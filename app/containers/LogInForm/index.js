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
import FormSection from 'components/FormSection';

import submit from './submit';
import makeSelectLoginForm from "./selectors";
import actionCreators from "./actions";
import reducer from './reducer';
import validate from './validate';
import './style.css';
import saga from './saga';

export class LogInForm extends React.PureComponent {
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
      password,
      isLoggedIn
    } = this.props;
    console.log('this.props', this.props);

    return (
      <div>
        {isLoggedIn || localStorage.getItem('user') && <Redirect to="dashboard" />}
        <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
          <Field name="email" component={Input} placeholder="Email" className="mr-sm-2" />
          <Field name="password" type="password" component={Input} placeholder="Password" className="mr-sm-2" />
          {error && (
            <span className="text-danger">
              <strong>{error}</strong>
            </span>
          )}
          <div className="form-group">
            <Button type="submit" className="btn btn-outline-light my-2 my-sm-0" disabled={submitting || error}>
              Log In
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export const onSubmit = (values, dispatch, props) => {
  new Promise((...rest) => dispatch(actionCreators.loginRequest(values, ...rest)));
}

const mapDispatchToProps = bindActionCreators;

const mapStateToProps = makeSelectLoginForm();

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps(actionCreators)
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

const LogInFormConnect = compose(
  withReducer,
  withSaga,
  withConnect,
)(LogInForm);



export default reduxForm({
  destroyOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  form: 'login',
  validate,
  onSubmit
})(LogInFormConnect)
