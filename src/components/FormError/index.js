import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import { typography } from "../../assets/typography";

export const FormError = styled.p`
  color: ${colors.error};
  ${typography.caption};
  font-weight: 500;
`;
