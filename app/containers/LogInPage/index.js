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
      password
    } = this.props;

    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
            <div>
              <a class="navbar-brand" href="#">FE Code Challange</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="ml-auto" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0">
                <Field
                  name="username"
                  type="text"
                  component={Input}
                  placeholder="username"
                  className="mr-sm-2"
                />
                <Field
                  name="password"
                  type="password"
                  component={Input}
                  placeholder="Password"
                  className="mr-sm-2"
                />
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
          </nav>
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

const withReducer = injectReducer({ key: 'login', reducer });
// const withSaga = injectSaga({ key: 'login', saga });

const LogInFormConnect = compose(
  withReducer,
  // withSaga,
  withConnect,
)(LogInForm);



export default reduxForm({
  destroyOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  form: 'login',
  validate
})(LogInFormConnect)
