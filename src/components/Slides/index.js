import React, { useState } from "react";

import { BsCircle, BsCircleFill } from "react-icons/bs";

import * as Stlyed from "./styles";

function Slides({ images, children }) {
  const [page, setPage] = useState(0);

  return (
    <>
      <Stlyed.Navigation>
        {images.map((image, index) => (
          <Stlyed.Icon key={index}>
            {index === page ? (
              <BsCircleFill onClick={() => setPage(index)} color="#cccccc" />
            ) : (
              <BsCircle onClick={() => setPage(index)} />
            )}
          </Stlyed.Icon>
        ))}
      </Stlyed.Navigation>
      <Stlyed.Children>{children}</Stlyed.Children>
      <Stlyed.Img src={images[page]} alt="" />
    </>
  );
}

export default Slides;
