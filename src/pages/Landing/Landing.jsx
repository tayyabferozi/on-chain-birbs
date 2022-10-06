import React from "react";

import InputBox from "../../components/InputBox";
import NFTBox from "../../components/NFTBox/NFTBox";
import RightBoxes from "./RIghtBoxes/RightBoxes";

const Landing = () => {
  return (
    <div className="page-section py-5">
      <div className="page-container">
        <div className="container-fluid px-0">
          <div className="row g-5">
            <div className="col-xxl-9 col-lg-8">
              <h1 className="text-center text-lg-start">
                <div>ONCHAINBIRBS</div>
              </h1>

              <div className="row g-4 g-lg-5">
                <div className="col-md-6 col-lg-5 d-flex align-items-center">
                  <NFTBox src="/assets/imgs/nft-1.gif" alt="nft" />
                </div>
                <div className="col-md-6 col-lg-7">
                  <InputBox
                    heading="WHITELIST"
                    btnText="Sold Out"
                    subText="888/888 Minted"
                  />
                </div>
                <div className="col-md-6 col-lg-5 d-flex align-items-center">
                  <NFTBox src="/assets/imgs/nft-2.jpg" alt="nft" />
                </div>
                <div className="col-md-6 col-lg-7">
                  <InputBox
                    heading="PUBLIC"
                    btnText="Mint"
                    subText="32/1111 Minted"
                  />
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-lg-4">
              <RightBoxes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
