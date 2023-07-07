/* eslint-disable react/prop-types */
import "../App.css";
export const TryLine = ({ colours }) => {
  const changeColour = () => {
    console.log("colours[0]");
  };
  return (
    <div className="try-line">
      <div className="square" onClick={changeColour}></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
    </div>
  );
};
