/* eslint-disable react/prop-types */
import "../App.css";

export const HiddenCombo = ({ hiddenCombination }) => {
  console.log(hiddenCombination);
  return (
    <div className="hidden-combo">
      {hiddenCombination.map((x, index) => (
        <div className="square" key={index}>
          <h3>{x}</h3>
        </div>
      ))}
    </div>
  );
};
