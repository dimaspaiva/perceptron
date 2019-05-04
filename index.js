const Perceptron = require("./perceptron");
const Point = require("./points");

const percep = new Perceptron(3);

const points = new Array(1000).fill(0);

console.log(
  "\n--------\n Início\n--------\n\n" +
    JSON.stringify(percep) +
    "\n Regra 2X + 3 < Y\n"
);

let sum = 1;

// Gerador de números aleatórios - ok
for (let i in points) {
  points[i] = new Point();
}

// Execução do aprendizado - valor está travando, n está aprendendo
while (sum != 0) {
  sum = 0;
  for (let i in points) {
    const input = [points[i].x, points[i].y, points[i].b];
    const target = points[i].label;
    percep.train(input, points[i].label);
    sum += target - percep.guess(input);
  }
}

console.log(
  "P1: " +
    percep.weights[0] +
    ", P2: " +
    percep.weights[1] +
    ", Pb: " +
    percep.weights[2]
);
console.log(`Taxa de erro de teste ${sum / (points.length * 2)}%\n`);

console.log("Novos itens:\n");
const n = 10;

sum = 0;
for (let i = 0; i < n; i++) {
  const p = new Point();
  console.log(
    "X " +
      p.x +
      ", Y " +
      p.y +
      ", Bias " +
      p.b +
      " | Expected = " +
      p.label +
      "  Result = " +
      percep.guess([p.x, p.y, p.b])
  );
  sum += p.label - percep.guess([p.x, p.y, p.b]);
}

console.log(`Taxa de acerto ${(1 - sum / (n * 2)) * 100}%\n`);
