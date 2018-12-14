/**
 *
 * Button
 *
 */

import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";

const Button = props => {
  const {
    children,
    className,
    disabled,
    onClick,
    type
  } = props;

  return (
    <button
      className={cl(
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span>
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  children: undefined,
  onClick: undefined,
  type: "button"
};

export default Button;
