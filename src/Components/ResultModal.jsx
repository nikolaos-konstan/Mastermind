/* eslint-disable react/prop-types */
export const ResultModal = ({ generateRandomArray }) => {
  const handleCloseModal = () => {
    generateRandomArray();
  };
  return (
    <div className="overlay">
      <dialog open>
        <h2>You Won!</h2>
        <form method="dialog">
          <button className="start-btn" onClick={handleCloseModal}>
            Play Again
          </button>
        </form>
      </dialog>
    </div>
  );
};
