/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
export const Trybox = ({ colours }) => {
  const [counter, setCounter] = useState(0);
  const changeColour = () => {
    if (counter === 5) {
      setCounter(0);
    } else {
      setCounter((prev) => prev + 1);
    }
  };
  return (
    <div
      className="square"
      onClick={changeColour}
      style={{
        backgroundColor: colours[counter],
      }}
    ></div>
  );
};
