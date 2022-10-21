import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import Image from "../../assets/images/Error-404.jpg";

import * as Styled from "./styles";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Styled.Wrapper>
      <Styled.TextError>
        <p>404</p>
        <p>Page Not Found</p>
      </Styled.TextError>
      <Button
        label="Home"
        variant="secondary"
        onClick={() => navigate("/")}
        background="#004a8c"
        colorText="white"
        c
      />
    </Styled.Wrapper>
  );
}

export default PageNotFound;
