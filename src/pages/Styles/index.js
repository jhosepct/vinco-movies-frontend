import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import { typography } from "../../assets/typography";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  padding: 126px 100px 100px 100px !important;
  & h3 {
    ${typography.regular.headline3}
  }
  & h6 {
    ${typography.regular.headline6}
  }
  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & button {
    width: 100%;
    align-self: center;
  }
  overflow-y: scroll;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const AuthLayout = styled.div`
  display: grid;
  grid-template-rows: 64px auto;
  min-height: 100vh;
`;
export const ShowPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Poster = styled.div`
  max-width: 50%;
`;

export const Link = styled.div`
  text-align: center;
  span {
    color: ${colors.red[400]};
    cursor: pointer;
  }
  span:hover {
    color: ${colors.red[500]};
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  z-index: 1;
  padding: 0 100px;
  ${typography.headline2}
  ${typography.bold}
  span {
    color: ${colors.red[500]};
  }
  user-select: none;
`;
