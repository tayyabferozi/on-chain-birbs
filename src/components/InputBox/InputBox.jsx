import React, { useState } from "react";

const InputBox = ({ heading, btnText, subText, time }) => {
  const [inputState, setInputState] = useState(1);

  const decrement = () => {
    setInputState((prevState) => (prevState !== 1 ? --prevState : prevState));
  };

  const increment = () => {
    setInputState((prevState) => ++prevState);
  };

  return (
    <div className="input-box">
      <div>
        <h2>{heading}</h2>

        <div className="chooser">
          <button className="btn dec" onClick={decrement}>
            -
          </button>

          <div className="input-wrap">
            <div className="input-main">
              <input
                type="number"
                value={inputState}
                onChange={(e) => setInputState(e.target.value)}
              />
            </div>
          </div>
          <button className="btn inc" onClick={increment}>
            +
          </button>
        </div>

        {time?.isRunning ? (
          <div className="timer">
            <div>{time.minutes} : </div>
            <div> {time.seconds}</div>
          </div>
        ) : (
          <div className="btn-primary-wrap">
            <button className="btn-primary">{btnText}</button>
          </div>
        )}

        <div className="sub-text">{subText}</div>
      </div>
    </div>
  );
};

export default InputBox;
