/* eslint-disable react/prop-types */
export const SecretCombo = ({ hiddenCombination }) => {
  return (
    <div className="hidden-combo">
      <div className="square">{hiddenCombination[0]}</div>
      <div className="square">{hiddenCombination[1]}</div>
      <div className="square">{hiddenCombination[2]}</div>
      <div className="square">{hiddenCombination[3]}</div>
    </div>
  );
};
