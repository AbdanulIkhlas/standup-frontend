import React from "react";
import "../../../style/custom.css";

const TwinkleButton = ({ children }) => {
  return (
    <button className="twinkle-button px-10 py-4 tracking-[2px]">
      {children}
    </button>
  );
};

export default TwinkleButton;
