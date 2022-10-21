import React from "react";

function FrameYoutube({ link, autoplay }) {
  const url = autoplay
    ? `https://www.youtube.com/embed/${link}?autoplay=1`
    : `https://www.youtube.com/embed/${link}`;
  return (
    <iframe
      width="854"
      height="480"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default FrameYoutube;
