/* eslint-disable react/prop-types */
import "../App.css";
import { HiddenCombo } from "./HiddenCombo";
import { TryLine } from "./TryLine";

export const Main = ({ hiddenCombination, colours }) => {
  return (
    <div>
      <div className="grid-container-4">
        <HiddenCombo hiddenCombination={hiddenCombination} colours={colours} />
        <TryLine colours={colours} />
      </div>
    </div>
  );
};
