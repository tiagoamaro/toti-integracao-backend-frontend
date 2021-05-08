# Integração Backend-Frontend

Esse projeto é um exemplo de como podemos integrar o nosso código Frontend com um Backend que implementa uma API REST.
Utilizamos as seguintes tecnologias:

- O backend é um projeto NodeJS, que utiliza Express e SQlite3
- O frontend é uma página estática HTML + JS

## Iniciando o projeto

Primeiro, precisamos iniciar o servidor Backend:

### Backend

- Utilizando o terminal, navegue até a pasta `./backend` dentro desse projeto
- Instale as dependências do projeto: `npm install`
- Rode as migrações do banco de dados: `npx sequelize-cli db:migrate`
- Crie registros de exemplo no banco de dados: `npx sequelize-cli db:seed:all`
- Inicie o servidor: `npm run dev`

Agora que temos o nosso servidor backend em execução, vamos voltar ao Frontend.

### Frontend

- Abra a pasta de `./frontend` desse projeto
- Abra o arquivo `index.html` no seu navegador

Cada arquivo HTML referenciado no `index.html` realiza uma requisição HTTP a nossa API REST.