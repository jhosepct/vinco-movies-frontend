import { InputContainer, StyledInput } from "./styles";

import PropTypes from "prop-types";
import { colors } from "../../assets/colors";

export const Input = ({ leftIcon, rightIcon, ...props }) => {
  return (
    <InputContainer {...props}>
      {leftIcon}
      <StyledInput placeholder="placeholder" {...props} autoComplete="off" />
      {rightIcon}
    </InputContainer>
  );
};

Input.proTypes = {
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  background: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Placeholder",
  background: "transparent",
  color: colors.defaultPink,
  colorHover: colors.darkPink,
  colorText: colors.white,
};
