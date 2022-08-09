import React from "react";
const ImageGallery = ({ image, mobile }) => {
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      style={mobile ? { height: "300px", margin: "10px" } : null}
    />
  );
};

export default ImageGallery;
