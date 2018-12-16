import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";
import { fieldPropTypesInput, fieldPropTypesMeta } from "redux-form/immutable";

const Input = ({
  id,
  input,
  label,
  placeholder,
  type,
  optional,
  className,
  meta: { touched, error }
}) => (
  <div className={cn("form-group", className)}>
    {label && <label htmlFor={label}>{label}</label>}
    <input
      required={!optional}
      placeholder={placeholder || label}
      type={type || "text"}
      className={cn("form-control")}
      {...input}
    />
    {touched &&
        ((error && <span className="text-danger">{error}</span>))
      }
  </div>
)

Input.types = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.shape(fieldPropTypesInput).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.shape(fieldPropTypesMeta),
  optional: PropTypes.bool,
  type: PropTypes.string,
};

Input.propTypes = Input.types;

Input.defaultProps = {
  className: "",
  disabled: false,
  label: undefined,
  label: undefined,
  optional: null,
  type: undefined,
  meta: {
    form: "",
    active: false,
    error: null,
    touched: false
  }
};

export default Input;
