import React from "react";

const Image = ({ selected, src, alt, handleClick }) => {
  return (
    <img
      className={selected ? "thumb selected" : "thumb"}
      src={src}
      alt={alt}
      onClick={() => handleClick(src)}
    />
  );
};

export default Image;
