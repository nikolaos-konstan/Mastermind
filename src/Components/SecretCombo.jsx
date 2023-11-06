/* eslint-disable react/prop-types */
export const SecretCombo = ({ hiddenCombination, submittedLines }) => {
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

      <div className="hd-square">Number of Tries: {submittedLines.length}</div>
    </div>
  );
};
