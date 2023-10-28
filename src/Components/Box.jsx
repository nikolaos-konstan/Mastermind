/* eslint-disable react/prop-types */
import { useState } from "react";

export const Box = ({ colours }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChange = () => {
    setCurrentIndex(currentIndex === colours.length - 1 ? 0 : currentIndex + 1);
  };
  let currentColour = colours[currentIndex];

  return (
    <div
      className="square"
      style={{ backgroundColor: currentColour }}
      onClick={handleChange}
    >
      1
    </div>
  );
};
