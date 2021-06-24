import dayThreeInput, { slopes } from './input/D3Input';

const findTrees = (gridMap, right, down) => {
  let [x ,y] = [0, 0];
  let rowLength = gridMap[0].length;
  let counter = 0;

  while(y < gridMap.length-1) {
    x = (x+right) >= rowLength
      ? (x+right) - (rowLength)
      : x+right

    y += down;

    if(gridMap[y][x] === '#') counter++;
  }

  return counter;
}

const multiplyTrees = (gridMap, slopeMatrix) => {
  return slopeMatrix.reduce((total, slope) => total * findTrees(gridMap, slope[0], slope[1]), 1);
}

console.log(multiplyTrees(dayThreeInput, slopes));
