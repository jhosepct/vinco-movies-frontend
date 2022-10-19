import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import { typography } from "../../assets/typography";

export const InputContainer = styled.div`
  ${typography.body2}
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${colors.defaultPink};
  border-radius: 0.5rem;
  color: ${colors.darkGray};
  &:hover {
    border: 1px solid ${colors.darkPink};
  }
  &:active {
    border: 1px solid ${colors.darkPink};
  }
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  background: ${colors.background};
  color: ${colors.white};
`;
