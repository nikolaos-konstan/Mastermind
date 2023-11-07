/* eslint-disable react/prop-types */
export const GameOverModal = ({ generateRandomArray }) => {
  const handleCloseModal = () => {
    generateRandomArray();
  };
  return (
    <div className="overlay">
      <dialog open>
        <h2>Game Over!</h2>
        <form method="dialog">
          <button className="start-btn" onClick={handleCloseModal}>
            Play Again
          </button>
        </form>
      </dialog>
    </div>
  );
};
