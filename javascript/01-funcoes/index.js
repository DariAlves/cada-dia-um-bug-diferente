// Funções

// 1 - Declarar função
const somarDoisValores = (valor1, valor2) => {
  return valor1 + valor2;
};

// 2 - Invocar a função e passar os argumentos de acordo com os parâmetros que são pedidos pela função
const precoCafe = 5; // valor 1
const precoPaoDeQueijo = 7; // valor 2

// 3 - Imprimir valor para testarmos
console.log(somarDoisValores(precoCafe, precoPaoDeQueijo)); // Saída: 12

// ============================================================ //

// 1 - Declarar função
const armazenarUmDadoNoArray = (dado, array) => {
  array.push(dado);

  return array;
};

// 2 - Invocar a função e passar os argumentos de acordo com os parâmetros que são pedidos pela função
const arraySeries = [];
const serie = 'Dark';

// 3 - Imprimir valor para testarmos
console.log(armazenarUmDadoNoArray(serie, arraySeries));

// ============================================================ //

// 1 - Declarar função
const armazenarUmObjetoNoArray = (objeto, array) => {
  array.push(objeto);

  return array;
};

// 2 - Invocar a função e passar os argumentos de acordo com os parâmetros que são pedidos pela função
const filmesSciFi = [];

const filme = {
  id: 1,
  titulo: 'O exterminador do futuro',
  ano: 1984,
  diretor: 'James Cameron',
};

// 3 - Imprimir valor para testarmos
console.log(armazenarUmObjetoNoArray(filme, filmesSciFi));

// ============================================================ //

// 1 - Declarar função
const criarUmObjetoDeFilme = (id, titulo, ano, diretor) => {
  const filme = {
    id,
    titulo,
    ano,
    diretor,
  };

  return filme;
};

// 2 - Invocar a função e passar os argumentos de acordo com os parâmetros que são pedidos pela função

const bladeRunner = criarUmObjetoDeFilme(
  2,
  'Blade Runner',
  1982,
  'Ridley Scott'
);

// 3 - Imprimir valor para testarmos
console.log(bladeRunner);

// 4 - Armazenar no array de filmes
armazenarUmObjetoNoArray(bladeRunner, filmesSciFi);

// ============================================================ //

const alien = criarUmObjetoDeFilme(3, 'Alien', 1979, 'Ridley Scott');

armazenarUmObjetoNoArray(alien, filmesSciFi);

console.log(filmesSciFi);

// ============================================================ //

// 1 - Declarar função
const criarObjetoEArmazenarNoArray = (id, titulo, ano, diretor, array) => {
  const filme = {
    id,
    titulo,
    ano,
    diretor,
  };

  array.push(filme);

  return array;
};

// 2 - Invocar a função e passar os argumentos de acordo com os parâmetros que são pedidos pela função

criarObjetoEArmazenarNoArray(4, 'Star Wars', 1977, 'George Lucas', filmesSciFi);

console.log(filmesSciFi);
