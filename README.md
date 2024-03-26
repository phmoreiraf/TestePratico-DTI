# Sistema de Petshop

Este projeto é um sistema simples para encontrar o melhor petshop com base na data e na quantidade de cães pequenos e grandes.

## Instruções para executar o sistema

Para executar o sistema, siga as seguintes etapas:

1. Baixe o código fonte do repositório.
2. Navegue até a pasta do back-end: `cd codigo/back-end`.
3. Instale as dependências necessárias com `npm install`.
4. Inicie o servidor com `node servidor.js`.
5. Em outro terminal navegue até a pasta do front-end: `cd codigo/front-end`.
6. Instale as dependências necessárias com `npm install`.
7. Inicie o aplicativo com `npm start`.
8. O aplicativo estará disponível em http://localhost:3000.

## Lista de premissas assumidas

- O usuário pode fornecer uma data no formato dd/mm/aaaa.
- O usuário pode fornecer a quantidade de cães pequenos e grandes a serem banhados.
- O usuário pode fornecer a localização atual (opcional).
- O servidor e o aplicativo React serão executados na mesma máquina, portanto, eles podem se comunicar através de localhost.

## Decisões de projeto

- Foi usada a biblioteca Express do node.js no back-end para criar um servidor HTTP.
- Foi usado o framework Create React App no front-end para bootstrapar o projeto.
- Foi usada a biblioteca Axios no front-end para fazer solicitações HTTP.

## O que mais é importante compartilhar sobre o projeto

Este projeto é uma implementação simplificada e não inclui recursos como autenticação de usuário, persistência de dados ou manipulação de erros robusta. Ele serve como um ponto de partida e pode ser expandido para incluir esses e outros recursos conforme necessário.
