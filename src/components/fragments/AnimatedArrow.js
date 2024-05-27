import React, { useState, useEffect } from "react";

const AnimatedArrow = () => {
  const [isRed, setIsRed] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRed((prevIsRed) => !prevIsRed);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={
        isRed ? "./images/draw-arrow-red.png" : "./images/draw-arrow-white.png"
      }
      alt="Draw Arrow"
      className="w-[100px] h-[100px]"
    />
  );
};

export default AnimatedArrow;
