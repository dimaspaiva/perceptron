class Perceptron {
  /*/ Construtor, inicializa nosso objeto/*/
  constructor(data) {
    this.weights = new Array(data.length).fill(0);

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
}

module.exports = Perceptron;
