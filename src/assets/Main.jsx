/* eslint-disable react/prop-types */
import "../App.css";
import { HiddenCombo } from "./HiddenCombo";

export const Main = ({ hiddenCombination }) => {
  return (
    <div>
      <div className="grid-container-4">
        <HiddenCombo hiddenCombination={hiddenCombination} />
      </div>
    </div>
  );
};
