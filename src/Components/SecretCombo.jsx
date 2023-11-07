import { GameOverModal } from "./GameOverModal";

/* eslint-disable react/prop-types */
export const SecretCombo = ({
  hiddenCombination,
  submittedLines,
  generateRandomArray,
}) => {
  return (
    <div className="hidden-combo">
      <div className="hd-square">
        <div className="hd-content">
          {hiddenCombination.length > 0 ? "?" : null}
        </div>
      </div>
      <div className="hd-square">
        <div className="hd-content">
          {hiddenCombination.length > 0 ? "?" : null}
        </div>
      </div>
      <div className="hd-square">
        <div className="hd-content">
          {hiddenCombination.length > 0 ? "?" : null}
        </div>
      </div>
      <div className="hd-square">
        <div className="hd-content">
          {hiddenCombination.length > 0 ? "?" : null}
        </div>
      </div>

      <div className="hd-square">
        <div className="hd-content">{10 - submittedLines.length}</div>
      </div>
      {submittedLines.length === 10 && (
        <GameOverModal generateRandomArray={generateRandomArray} />
      )}
    </div>
  );
};
