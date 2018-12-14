import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";

/**
 * FormSection
 * Creates grid for a form section
 */
const FormSection = ({
  headline,
  description,
  children,
  className
}) => (
  <div className={cl("row", className)}>
    {children}
  </div>
);

FormSection.propTypes = {
  headline: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FormSection.defaultProps = {
  className: "",
  headline: ""
};

export default FormSection;
