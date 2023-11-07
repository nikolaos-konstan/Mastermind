/* eslint-disable react/prop-types */
export const GameOverModal = ({ generateRandomArray }) => {
  const handleCloseModal = () => {
    generateRandomArray();
  };
  return (
    <dialog open>
      <h2>Game Over!</h2>
      <form method="dialog">
        <button onClick={handleCloseModal}>Play Again</button>
      </form>
    </dialog>
  );
};
