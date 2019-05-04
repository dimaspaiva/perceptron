# perceptron

Creating a perceptron with JS

## Funcionamento

O algoritmo _perceptron_ é a divisão linear de um grupo de dados, o perceptron simples representa um único neuronio realizando o processamento.
O método de aprendizado é o _feed foward_, que implica em um aprendizado unidirecional, onde o algoritmo aprende apenas com as entradas e reajustando os pesos das entradas.

## Rules

- Sum (Soma):
  E = Xn * Wn + X(n+1)*W(n+1)...

- Activation Function (Função de ativação)
  Sn = {
  n >= 0 => +1
  n < 0 => -1
  }

- Results
  Y = Classification

- Error
  e = answer - guess (resposta - hipótese)
  possible results:
  ans = ([1], [-1]) , guess = ([1], [-1])
  e = ([0], [2], [-2])

- Weights
  Wo = Wo + ΔWo
  ΔWo = e \* Xn \* lr
  e = error
  lr = learning rate
