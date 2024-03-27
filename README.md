# Sistema de Petshop

Este projeto é um sistema simples para encontrar o melhor petshop com base na data e na quantidade de cães pequenos e grandes.

## Instruções para executar o sistema

Para executar o sistema, siga as seguintes etapas:

0. Usar esse sistema apenas se tiver acesso a internet.
1. Baixe o código fonte do repositório e selecione a pasta raiz, caso não queira em cada terminal digite antes `cd TestePratico-DTI-main`.
2. Navegue até a pasta do back-end pelo terminal: `cd codigo/back-end` pelo terminal.
3. Instale as dependências necessárias com `npm install` pelo terminal.
4. Inicie o servidor com `node servidor.js` pelo terminal.
5. Em outro terminal navegue até a pasta do front-end: `cd codigo/front-end` pelo terminal.
6. Instale as dependências necessárias com `npm install` pelo terminal.
7. Inicie o aplicativo com `npm start` pelo terminal.
8. O aplicativo estará disponível em http://localhost:3000.
9. Dentro do sistema coloque o zoom do navegador o menor possivel para poder visualizar tudo.

Videos

Video usando a partir do github desktop - 
Video usando a partir do repositório baixado - 

## Lista de premissas assumidas

- O usuário pode fornecer uma data no formato dd/mm/aaaa.
- O usuário pode fornecer a quantidade de cães pequenos e grandes a serem banhados.
- O servidor e o aplicativo React serão executados na mesma máquina, portanto, eles podem se comunicar através de localhost.

## Decisões de projeto

- Foi usada a biblioteca Express do Node.JS no back-end para criar um servidor HTTP.
- Foi usada a biblioteca cors pois o dominio da aplicação é diferente do dominio do servidor.
- Foi usado o getday para selecionar se o dia é final de semana ou não.
- Foi usado o framework Create React App no front-end do projeto.
- Foi usada a biblioteca Axios do react no front-end para fazer solicitações HTTP.
- Foi usado o HTML e o CSS para o layout do sistema.
- O sistema foi divido seguinte o processo de modularidade.

## O que mais é importante compartilhar sobre o projeto

Este projeto é uma implementação simples e não possui recursos como autenticação de usuário, persistência de dados ou manipulação de erros robusta. Ele serve como um ponto de partida podendo mostrar os conhecimentos nos frameworks Node.JS, Reacts e o uso da estrutura basica de criação de uma pagina web. Além de tudo pode ser expandido para incluir outros recursos assim melhorando o sistema.
