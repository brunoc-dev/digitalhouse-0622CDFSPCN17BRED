/**
 * Aula 10 - Como funciona a web
 * 
 * A. Preparou o ambiente de desenvolvimento.
 *   1. Iniciar o projeto git (repositório local) (git init ou clone)
 *   2. Iniciar o projeto node (npm init -y)
 *   3. Instalamos os módulos externos de desenvimento (npm install nodemon -D)
 *   4. Instalamos os módulos externos de produção (npm install express)
 *   5. Configurar o .gitignore (ignorando node_modules do git)
 *   6. Criar o arquivo principal do projeto (app.js)!
 *   7. Configurar o script start para utilizar o nodemon.
 * 
 * B. Utilizar o Express para rodar um servidor.
 *   1. Importar o express (require('express'))
 *   2. Rodar a função express() para obter as funcionalidades do módulo express.
 *   3. Habilitar a porta 3000 para recebimento de requisições (app.listen)
 */

const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Agora está funcionando a rota "/"');
});

app.get('/outraRota', function (req, res) {
  res.send('Esta é outra rota');
});

// O listen sempre deve ficar no final do arquivo.
app.listen(3000, function () {
  console.log('Servidor rodando no endereço http://localhost:3000');
});