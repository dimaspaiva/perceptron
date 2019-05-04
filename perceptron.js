class Perceptron {
  /*/ Construtor, inicializa nosso objeto/*/
  constructor(size) {
    this.weights = new Array(size).fill(0);
    this.lr = 0.1;

    /*/ Define de forma aleatória os pesos para cada entrada/*/
    for (let i in this.weights) {
      this.weights[i] = Math.round(Math.random()) ? 1 : -1;
    }
  }

  /*/ Somátoria dos valores com os pesos /*/
  /*/ Retorno da função de ativação de acordo com o sinal da soma /*/
  guess(inputs) {
    let sum = 0;
    for (let i in this.weights) {
      sum += inputs[i] * this.weights[i];
    }

    // Função de ativação
    return Math.sign(sum);
  }

  /*/ Treinamento do algoritmo /*/
  train(inputs, target) {
    const guess = this.guess(inputs);
    const error = target - guess;

    // Ajuste de todos os pesos
    for (let i in this.weights) {
      this.weights[i] += error * inputs[i] * this.lr;
    }
  }
}

module.exports = Perceptron;
