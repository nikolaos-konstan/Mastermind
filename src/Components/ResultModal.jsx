/* eslint-disable react/prop-types */
export const ResultModal = ({ generateRandomArray }) => {
  const handleCloseModal = () => {
    generateRandomArray();
  };
  return (
    <dialog open>
      <h2>You Won!</h2>
      <form method="dialog">
        <button onClick={handleCloseModal}>Close</button>
      </form>
    </dialog>
  );
};
