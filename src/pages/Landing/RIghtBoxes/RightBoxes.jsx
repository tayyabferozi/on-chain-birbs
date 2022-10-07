import React from "react";

import Accordion from "../../../components/Accordion/Accordion";

const RightBoxes = () => {
  return (
    <>
      <Accordion heading="MINT INFO" defaultShow>
        1999 Supply, <br /> 0.0088ETH per NFT <br /> 2 NFTs per Wallet
      </Accordion>
      <Accordion heading="ABOUT US" defaultShow>
        Collection of 1999 Exotic Birbs Living On-Chain. Inspired by Beautiful
        Wild Birds Living all around the world.
        <br />
        <br />
        Are you Ready to Change Perception of NFTs Stored on BlockChain?
      </Accordion>
      <a target="_blank" rel="noreferrer" href="https://www.google.com/">
        <Accordion heading="ETHERSCAN"></Accordion>
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.google.com/">
        <Accordion heading="TWITTER"></Accordion>
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.google.com/">
        <Accordion heading="OPENSEA"></Accordion>
      </a>
    </>
  );
};

export default RightBoxes;
