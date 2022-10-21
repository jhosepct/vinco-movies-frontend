import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import { typography } from "../../assets/typography";

export const WrapperDetails = styled.div`
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
`;

export const Details = styled.div`
  width: 300px;
  ${typography.subtitle3}
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Title = styled.h1`
  ${typography.headline6}
  ${typography.bold}
`;

export const OriginalTitle = styled.h2`
  color: ${colors.lightGray};
  ${typography.subtitle3}
`;

export const ExtraInfo = styled.div`
  display: flex;
  gap: 0.25rem;
  span {
    color: ${colors.red[500]};
  }
`;

export const Overview = styled.div`
  width: 300px;
  max-height: 150px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Genre = styled.p`
  display: inline-block;
`;

export const Rating = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const Genres = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  text-align: center;
  span {
    color: ${colors.red[500]};
  }
  div {
    display: flex;
    gap: 0.25rem;
  }
`;

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;
