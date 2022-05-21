const express = require('express');
const { randomUUID } = require('crypto');

const app = express();

app.use(express.json());

const port = 3030;

// cliente (requisição)
// servidor (resposta)

/* 

 CRUD 

 ! Create - POST
 + Read - GET
 ? Update - 
 * Delete - 

*/

/* Simular um banco de dados */
const produtos = [];

/* Criar um novo produto */
app.post('/produtos', (request, response) => {
  const { descricao, preco } = request.body;

  const produto = {
    id: randomUUID(),
    descricao,
    preco,
  };

  produtos.push(produto);

  return response.status(201).json(produto);
});

/* Listar todos os meus produtos */
app.get('/produtos', (request, response) => {
  return response.json(produtos);
});

// ! Dever de casa 💓 - Estudar os métodos de arrays: find, findIndex

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
