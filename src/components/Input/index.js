import { InputContainer, StyledInput } from "./styles";

export const Input = ({ leftIcon, rightIcon, ...props }) => {
  return (
    <InputContainer>
      {leftIcon}
      <StyledInput placeholder="placeholder" {...props} autoComplete="off" />
      {rightIcon}
    </InputContainer>
  );
};
