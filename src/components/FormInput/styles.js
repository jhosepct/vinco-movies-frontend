import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import { typography } from "../../assets/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  & label {
    text-transform: uppercase;
    color: ${colors.darkGray};
    ${typography.regular.xSmall}
  }
`;
export const Message = styled.p`
  color: ${colors.lightGray};
  text-align: start;
  ${typography.caption}
`;
