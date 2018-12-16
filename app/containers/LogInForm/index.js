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

import makeSelectLoginForm from "./selectors";
import actionCreators from "./actions";
import reducer from './reducer';
import validate from './validate';
import saga from './saga';

export class LogInForm extends React.PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      loginRequest: PropTypes.func.isRequired
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
      actions,
      error,
      form,
      handleSubmit,
      pristine,
      reset,
      submitting,
      username,
      password,
      currentLocation,
      isLoggedIn
    } = this.props;

    return (
      <div>
        {(isLoggedIn) &&
          (
            <div>
              <Redirect to="dashboard"/>
              <Button type="link" className="btn btn-outline-light my-2 my-sm-0" onClick={actions.logOutUser}>
                Log Out
              </Button>
            </div>
          ) || (
          <div>
            {currentLocation!='/' && <Redirect to="/" /> }
            <form onSubmit={handleSubmit} className="row form-inline my-2 my-lg-0">
              <Field name="email" component={Input} placeholder="Email" className="col-12 col-sm-5" />
              <Field name="password" type="password" component={Input} placeholder="Password" className="col-12 col-sm-5" />
              {error && (
                <span className="text-danger">
                  <strong>{error}</strong>
                </span>
              )}
              <div className="form-group col-12 col-sm-2">
                <Button type="submit" className="btn btn-outline-light my-2 my-sm-0">
                  Log In
                </Button>
              </div>
            </form>
          </div>
        )}
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
