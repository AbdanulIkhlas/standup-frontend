import React from "react";

const SubmitButton = ({ type, customClass, children }) => {
  return (
    <button
      type={type}
      className={`${customClass} w-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#9b2f2f] shadow-lg hover:shadow-xl active:shadow-sm active:translate-y-1`}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
