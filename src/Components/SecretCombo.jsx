/* eslint-disable react/prop-types */
export const SecretCombo = ({ hiddenCombination }) => {
  return (
    <div className="hidden-combo">
      <div className="hd-square">
        {hiddenCombination.length > 0 ? "?" : null}
      </div>
      <div className="hd-square">
        {hiddenCombination.length > 0 ? "?" : null}
      </div>
      <div className="hd-square">
        {hiddenCombination.length > 0 ? "?" : null}
      </div>
      <div className="hd-square">
        {hiddenCombination.length > 0 ? "?" : null}
      </div>
    </div>
  );
};
