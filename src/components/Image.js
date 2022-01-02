import React from "react";

const Image = ({ src, alt, handleClick }) => {
  return (
    <img
      className="thumb"
      src={src}
      alt={alt}
      onClick={() => handleClick(src)}
    />
  );
};

export default Image;
