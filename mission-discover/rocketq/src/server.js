// Importação de módulos
const express = require('express');
const route = require('./route');
const path = require('path');

// Criando e iniciando o servidor
const server = express();

// Utilização da pasta public
server.use(express.static('public'));

// Configuração da view engine EJS
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Configuração de middleware
server.use(express.urlencoded({ extended: true}));

// Utilizando o arquivo de Respostas
server.use(route);

// Configurando uma porta para o servidor
server.listen(3000, () => console.log('Servidor em execução!'));
