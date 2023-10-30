/* eslint-disable react/prop-types */
export const ResultBox = ({ element, sameColour, samePosition }) => {
  console.log("same position" + samePosition);
  console.log("different positon" + sameColour);
  let resultArray = [];
  for (let i = samePosition; i > 0; i--) {
    resultArray.push("#00FF00");
  }
  for (let i = sameColour; i > 0; i--) {
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
        <div className="grid-item-results">{sameColour}</div>
        <div className="grid-item-results">1</div>
        <div className="grid-item-results">1</div>
        <div className="grid-item-results">1</div>
      </div>
    </>
  );
};
