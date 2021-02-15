/* 
╔═╦═╗
╠═╬═╣ 
║ ║ ║
╚═╩═╝

check sequence
-right-down-left-top

*/

const isEmpty = (string) => string === " ";
const pathIndex = (row, col, length) => length * row + col;
const isVisited = (pathIndex, visitedList) => visitedList.includes(pathIndex);
const unique = (list) =>
  list.reduce((prev, cur) => {
    if (prev.includes(cur)) return prev;
    return [...prev, cur];
  }, []);
const pathLocation = (pathIndex, length) => {
  const col = pathIndex % length;
  const row = (pathIndex - (pathIndex % length)) / length;
  return { row, col };
};

/**
 *  # Maze Printer
 *  @param {Object} Maze - 2D Array
 *  @param {number} Row - Initial row the print will start
 *  @param {number} Col - Initial colunm the print will start
 *  @param {Object} Output - Backtrack path
 *  @param {boolean} Indexing - by default indexing is enabled
 * */
const mazePrint = ({
  maze,
  row = 0,
  col = 0,
  output = "",
  indexing = true,
}) => {
  const rowPath = (row - 1) / 2;
  const colPath = (col - 1) / 2;
  const colLength = (maze[0].length - 1) / 2;
  const currentIndex = pathIndex(rowPath, colPath, colLength);

  if (row >= maze.length) {
    return output;
  }

  if (isEmpty(maze[row][col]) && row % 2 && col % 2) {
    const index = indexing ? currentIndex.toString() : " ";
    output += index.padStart(2, " ");
  } else {
    if (col % 2) {
      output += maze[row][col].repeat(2);
    } else {
      output += maze[row][col];
    }
  }

  if (col < maze[0].length - 1) {
    return mazePrint({ maze, row, col: col + 1, output, indexing });
  }

  output += "\n";
  return mazePrint({ maze, row: row + 1, col: 0, output, indexing });
};

/**
 *  # Maze solver
 *  @param {Object} Maze - 2D Array
 *  @param {number} Row - Initial row the maze will start
 *  @param {number} Col - Initial colunm the maze will start
 *  @param {Object} Path - Backtrack path
 *  @param {object} Visited - Visited path
 * */

const mazeSolver = ({ maze, row = 0, col = 0, path = [], visited = [] }) => {
  const rowPath = row * 2 + 1;
  const colPath = col * 2 + 1;
  const colLength = (maze[0].length - 1) / 2;
  const rowLength = (maze.length - 1) / 2;

  if (
    visited.length > 1 &&
    (col >= colLength || row >= rowLength || col < 0 || row < 0)
  ) {
    return { path: unique(path), visited: unique(visited) };
  }

  const currentIndex = pathIndex(row, col, colLength);
  const topIndex = pathIndex(row - 1, col, colLength);
  const rightIndex = pathIndex(row, col + 1, colLength);
  const downIndex = pathIndex(row + 1, col, colLength);
  const leftIndex = pathIndex(row, col - 1, colLength);
  const top = maze[rowPath - 1][colPath];
  const right = maze[rowPath][colPath + 1];
  const down = maze[rowPath + 1][colPath];
  const left = maze[rowPath][colPath - 1];

  /*   console.clear();
  console.log(mazePrint({ maze }));
  console.log(currentIndex);
  console.log(path);
  console.log(visited);
  console.log(left, right, top, down); */

  if (
    isEmpty(right) &&
    !isVisited(rightIndex, visited) &&
    (col + 1 < colLength || visited.length > 2)
  ) {
    return mazeSolver({
      maze,
      row,
      col: col + 1,
      path: [...path, currentIndex],
      visited: [...visited, currentIndex],
    });
  } else if (
    isEmpty(down) &&
    !isVisited(downIndex, visited) &&
    (row + 1 < rowLength || visited.length > 2)
  ) {
    return mazeSolver({
      maze,
      row: row + 1,
      col,
      path: [...path, currentIndex],
      visited: [...visited, currentIndex],
    });
  } else if (isEmpty(left) && !isVisited(leftIndex, visited)) {
    return mazeSolver({
      maze,
      row,
      col: col - 1,
      path: [...path, currentIndex],
      visited: [...visited, currentIndex],
    });
  } else if (isEmpty(top) && !isVisited(topIndex, visited)) {
    return mazeSolver({
      maze,
      row: row - 1,
      col,
      path: [...path, currentIndex],
      visited: [...visited, currentIndex],
    });
  } else {
    const location = pathLocation(path[path.length - 1], colLength);

    if (!isVisited(currentIndex, visited)) {
      path.push(currentIndex);
      visited.push(currentIndex);
    }
    path.pop();

    return mazeSolver({
      maze,
      row: location.row,
      col: location.col,
      path,
      visited,
    });
  }
};

module.exports = { mazeSolver, mazePrint };
