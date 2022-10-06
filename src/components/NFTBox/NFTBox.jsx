import React from "react";

const NFTBox = ({ src, alt }) => {
  return (
    <div className="nft-box">
      <img src={src} alt={alt} />
    </div>
  );
};

export default NFTBox;
