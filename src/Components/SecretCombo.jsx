export const SecretCombo = ({ hiddenCombination }) => {
  console.log(hiddenCombination);
  return (
    <div className="hidden-combo">
      <div className="square">{hiddenCombination[1]}</div>
      <div className="square">2</div>
      <div className="square">3</div>
      <div className="square">4</div>
    </div>
  );
};
