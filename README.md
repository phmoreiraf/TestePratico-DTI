# Sistema de Petshop

Este projeto é um sistema simples para encontrar o melhor petshop com base na data e na quantidade de cães pequenos e grandes.

## Instruções para executar o sistema

Para executar o sistema, siga as seguintes etapas:

0. Usar esse sistema apenas se tiver acesso a internet.
1. Baixe o código fonte do repositório e selecione a pasta raiz.
2. Navegue até a pasta do back-end pelo terminal: `cd codigo/back-end`.
3. Instale as dependências necessárias com `npm install` pelo terminal.
4. Inicie o servidor com `node servidor.js` pelo terminal.
5. Em outro terminal navegue até a pasta do front-end: `cd codigo/front-end` pelo terminal.
6. Instale as dependências necessárias com `npm install` pelo terminal.
7. Inicie o aplicativo com `npm start` pelo terminal.
8. O aplicativo estará disponível em http://localhost:3000.

## Lista de premissas assumidas

- O usuário pode fornecer uma data no formato dd/mm/aaaa.
- O usuário pode fornecer a quantidade de cães pequenos e grandes a serem banhados.
- O usuário pode fornecer a localização atual (opcional).
- O servidor e o aplicativo React serão executados na mesma máquina, portanto, eles podem se comunicar através de localhost.

## Decisões de projeto

- Foi usada a biblioteca Express do node.js no back-end para criar um servidor HTTP.
- Foi usada a biblioteca cors pois o dominia da aplicação é diferente do dominio do servidor.
- Foi usada a biblioteca date-fns para filtrar se o dia selecionado é final de semana ou não.
- Foi usado o framework Create React App no front-end para bootstrapar o projeto.
- Foi usada a biblioteca Axios do react no front-end para fazer solicitações HTTP.

## O que mais é importante compartilhar sobre o projeto

Este projeto é uma implementação simplificada e não inclui recursos como autenticação de usuário, persistência de dados ou manipulação de erros robusta. Ele serve como um ponto de partida e pode ser expandido para incluir esses e outros recursos conforme necessário.
