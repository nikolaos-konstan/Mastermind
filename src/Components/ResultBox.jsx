/* eslint-disable react/prop-types */
export const ResultBox = ({ element, oranges, greens }) => {
  console.log("same position" + greens);
  console.log("different positon" + oranges);
  let resultArray = [];
  for (let i = greens; i > 0; i--) {
    resultArray.push("#00FF00");
  }
  for (let i = oranges; i > 0; i--) {
    resultArray.push("#FFA500");
  }
  for (let i = 4; i > resultArray.length; i--) {
    resultArray.push("#FF0000");
  }
  console.log(resultArray);

  return (
    <>
      <div className="square" style={{ backgroundColor: element[0] }}></div>
      <div className="square" style={{ backgroundColor: element[1] }}></div>
      <div className="square" style={{ backgroundColor: element[2] }}></div>
      <div className="square" style={{ backgroundColor: element[3] }}></div>
      <div className="grid-container-results">
        <div className="grid-item-results">{oranges}</div>
        <div className="grid-item-results">1</div>
        <div className="grid-item-results">1</div>
        <div className="grid-item-results">1</div>
      </div>
    </>
  );
};
