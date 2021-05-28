## [Template] Utilizando Amazon Aurora com Read Replicas em Node.js

<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

*Esse repositório não contém o código finalizado e sim o template para dar início à aula.*

Muitas aplicações, quando começam a receber muitas requisições, começam a sofrer por ter no banco de dados um gargalo. A solução mais rápida geralmente é fazer o *vertical scaling*, ou seja, adicionar recursos como RAM ou CPU ao servidor. O grande problema é que essa abordagem nos limita ao tamanho da máquina e pode acabar saindo muito caro.

Nesta aula vemos como utilizar o Amazon Aurora, banco de dados relacional da AWS compatível com MySQL e PostgreSQL, porém muito mais performático na cloud. Começaremos criando um cluster com replicas de leitura e veremos como fazer uso de tais replicas para deixar a nossa aplicação muito mais resiliente.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/711732?s=460&u=6b1039f8a921c5733d92d13b2971c55157fee005&v=4" width="75px;"/>](https://github.com/askmon) |
| :-: |
|[André Spanguero Kanayama](https://github.com/askmon)|

### Requisitos

- Node.js v14 (`.nvmrc` incluso no projeto)
- Conta na AWS (utilizaremos IAM e DynamoDB)
- Postman ou similar para relizar os testes nos endpoints locais
- Um banco PostgreSQL (existe um docker-compose no projeto, para quem quiser rodar usando Docker)

### Como rodar

0. Antes de tudo, rode o comando `npm install`;
0. Caso queira rodar o banco localmente com Docker, pode-se utilizar o comando `docker-compose up` para subir o banco;
0. Renomeie o arquivo `.env.example` para `.env` e edite as variáveis para conexão com o banco;
0. Rode o comando `npm run sequelize:migrate` para gerar as tabelas;
0. Rode o comando `npm run sequelize:seed` para criar dados de exemplo nas tabelas;
0. Rode o comando `npm run dev` para rodar o projeto usando nodemon.

### Referências

- Documentação do Aurora - https://aws.amazon.com/pt/rds/aurora
