/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const Box = ({ colours, handleColourChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChange = () => {
    setCurrentIndex(currentIndex === colours.length - 1 ? 0 : currentIndex + 1);
  };
  let currentColour = colours[currentIndex];

  useEffect(() => {
    handleColourChange(currentColour);
  }, [currentColour, handleColourChange]);

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
