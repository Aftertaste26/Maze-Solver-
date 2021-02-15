/* 
template
╔═╦═╗
╠═╬═╣ 
║ ║ ║
╚═╩═╝
*/


const { mazeSolver, mazePrint } = require("./maze.js");

const maze = [
  ["═", "═", "═", "═", "═", "═", "╗"],
  [" ", " ", " ", " ", " ", " ", "║"],
  ["║", " ", "═", "═", "═", "═", "╣"],
  ["║", " ", " ", " ", " ", " ", "║"],
  ["║", " ", " ", " ", "═", "═", "╝"],
  ["║", " ", "║", " ", " ", " ", " "],
  ["╚", "═", "╩", "═", "═", "═", "═"],
];

const maze2 = [
  ["╔", "═", "╦", "═", "═", "═", "╗"," ", "╔", "═", "═", "═", "═", "═","═", "═", "═", "═", "╗"],
  ["║", " ", "║", " ", " ", " ", " "," ", " ", " ", " ", " ", " ", " "," ", " ", " ", " ", "║"],
  ["║", " ", "║", " ", "╔", "═", "═"," ", "║", " ", "═", "═", "═", "═","═", "═", "═", "═", "║"],
  ["║", " ", " ", " ", "║", " ", " "," ", "║", " ", " ", " ", " ", " "," ", " ", " ", " ", "║"],
  ["║", " ", "╔", "═", "╝", " ", "╔","═", "╝", "═", "═", "═", "═", "═","╗", " ", "║", " ", "║"],
  ["║", " ", "║", " ", " ", " ", "║"," ", " ", " ", " ", " ", " ", " ","║", " ", "║", " ", "║"],
  ["║", " ", "╚", "═", "╦", "═", "╝"," ", "═", "═", "═", "═", "╗", " ","╠", "═", "╝", " ", "║"],
  ["║", " ", " ", " ", "║", " ", " "," ", " ", " ", " ", " ", "║", " ","║", " ", " ", " ", "║"],
  ["╠", "═", "═", " ", "║", " ", "╔","═", "═", "═", "╗", " ", "║", " ","║", " ", "║", " ", "║"],
  ["║", " ", " ", " ", "║", " ", "║"," ", " ", " ", "║", " ", "║", " ","║", " ", "║", " ", "║"],
  ["╠", "═", "═", " ", "║", " ", "║"," ", "║", " ", "║", " ", "║", " ","║", " ", "║", " ", "║"],
  ["║", " ", " ", " ", "║", " ", " "," ", "║", " ", "║", " ", "║", " "," ", " ", "║", " ", "║"],
  ["║", " ", "═", "═", "╩", "═", "═","═", "╣", " ", "╚", "═", "╩", "═","═", "═", "╩", "═", "║"],
  ["║", " ", " ", " ", " ", " ", " "," ", "║", " ", " ", " ", " ", " "," ", " ", " ", " ", "║"],
  ["╠", "═", "═", "═", "╗", " ", "║"," ", "║", " ", " ", " ", "╔", "═","═", "═", "╗", " ", "║"],
  ["║", " ", " ", " ", "║", " ", "║"," ", "║", " ", " ", " ", "║", " "," ", " ", "║", " ", " "],
  ["║", " ", "═", "═", "╝", " ", "║"," ", "╚", "═", "═", "═", "╝", " "," ", " ", "║", " ", "║"],
  ["║", " ", " ", " ", " ", " ", "║"," ", " ", " ", " ", " ", " ", " "," ", " ", "║", " ", "║"],
  ["╚", "═", "═", "═", "═", "═", "╩","═", "═", "═", "═", "═", "═", "═","═", "═", "╩", "═", "╝"],
];

// MAZE 1
console.log(mazePrint({maze}));
console.log(mazeSolver({maze}));

// MAZE 2
console.log(mazePrint({ maze: maze2 }));
console.log(mazeSolver({maze:maze2,row:7,col:8}));

