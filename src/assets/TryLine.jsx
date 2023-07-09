/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
export const TryLine = ({ colours }) => {
  const [counter, setCounter] = useState(0);
  const changeColour = () => {
    if (counter === 5) {
      setCounter(0);
    } else {
      setCounter((prev) => prev + 1);
    }
  };
  return (
    <div className="try-line">
      <div
        className="square"
        onClick={changeColour}
        style={{
          backgroundColor: colours[counter],
        }}
      ></div>
      <div
        className="square"
        onClick={changeColour}
        style={{
          backgroundColor: colours[counter],
        }}
      ></div>
      <div className="square"></div>
      <div className="square"></div>
    </div>
  );
};
