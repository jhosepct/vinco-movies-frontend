import { css } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useState } from "react";

import { BsCircle, BsCircleFill } from "react-icons/bs";

const Navigation = styled.div`
  z-index: 1;
  width: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  top: 30px;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Children = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
`;

const Img = styled.img`
  opacity: 0.6;
`;

function Slides({ images, children }) {
  const [page, setPage] = useState(0);

  return (
    <>
      <Navigation>
        {images.map((image, index) => (
          <Icon key={index}>
            {index === page ? (
              <BsCircleFill onClick={() => setPage(index)} color="#cccccc" />
            ) : (
              <BsCircle onClick={() => setPage(index)} />
            )}
          </Icon>
        ))}
      </Navigation>
      <Children>{children}</Children>
      <Img src={images[page]} alt="" />
    </>
  );
}

export default Slides;
