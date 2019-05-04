const Perceptron = require("./perceptron");

const entradas = [-1, 0.2, 3, 4, 0.5, 2.3, 2.5, -2, -3.4];
// const entradas = [-1, 0.5];

const p = new Perceptron(entradas);
const guess = p.guess(entradas);

console.log(guess);
