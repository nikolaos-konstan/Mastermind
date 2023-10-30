/* eslint-disable react/prop-types */
export const ResultBox = ({ element, countSameIndex, countAll }) => {
  console.log("inside " + countSameIndex);
  console.log("inside " + countAll);
  // let resultArray = [];
  // for (let i = 0; i <= countSameIndex; i++) {
  //   resultArray.push("#00FF00");
  // }
  // for (let i = 0; i <= countAll - countSameIndex; i++) {
  //   resultArray.push("#FFA500");
  // }
  // for (let i = 0; i <= 4 - resultArray.lenght; i++) {
  //   resultArray.push("#FF0000");
  // }
  // console.log(resultArray);

  return (
    <>
      <div className="square" style={{ backgroundColor: element[0] }}></div>
      <div className="square" style={{ backgroundColor: element[1] }}></div>
      <div className="square" style={{ backgroundColor: element[2] }}></div>
      <div className="square" style={{ backgroundColor: element[3] }}></div>
      <div className="grid-container-results">
        <div className="grid-item-results">1</div>
        <div className="grid-item-results">1</div>
        <div className="grid-item-results">1</div>
        <div className="grid-item-results">1</div>
      </div>
    </>
  );
};
