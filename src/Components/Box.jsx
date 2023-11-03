/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const Box = ({
  position,
  colours,
  handleColourChange,
  hiddenCombination,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChange = () => {
    setCurrentIndex(currentIndex === colours.length - 1 ? 0 : currentIndex + 1);
  };
  let currentColour = colours[currentIndex];

  useEffect(() => {
    handleColourChange(currentColour, position); //lift the state up to TryLine
  }, [currentColour, handleColourChange, position]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [hiddenCombination]);

  return (
    <div
      className="square"
      style={{
        backgroundColor: currentColour,
      }}
      onClick={handleChange}
    >
      1
    </div>
  );
};
