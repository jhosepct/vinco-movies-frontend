import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { colors } from "../../assets/colors";
import { ButtonStyled } from "./styles";

function Button({ label, rightIcon, leftIcon, ...rest }) {
  return (
    <ButtonStyled {...rest}>
      {leftIcon}
      {label}
      {rightIcon}
    </ButtonStyled>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "ghost", "disabled"]),
  size: PropTypes.oneOf(["default", "small", "large"]),
  label: PropTypes.string,
  background: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  onClick: PropTypes.func,
  colorText: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  size: "default",
  label: "Button",
  background: null,
  onClick: undefined,
  colorText: colors.defaultGray,
};

export default Button;
