import React, { useRef } from "react";
import $ from "jquery";

const Accordion = ({ heading, defaultShow, children }) => {
  const bodyRef = useRef(null);

  const bodyToggleHandler = () => {
    $(bodyRef.current).slideToggle();
  };

  return (
    <div className="accordion">
      <h3 className="accordion-head" onClick={bodyToggleHandler}>
        {heading}
      </h3>
      <div
        className="accordion-body"
        style={{ display: !defaultShow ? "none" : "block" }}
        ref={bodyRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
