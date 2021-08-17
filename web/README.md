# Agenda Churras 💲

O objetivo desse projeto é gerenciar os eventos de churrascos.

## 📝 Detalhes

O usuário poderá criar um novo evento com um nome, data, descrição, valor sugerido por pessoa e os participantes.

### ▶️ Operações básicas

1. Adicionar um novo churras;
2. Visualizar lista com todos os churras;
3. Visualizar detalhes do churras;
4. Editar um churras;
5. Remover um churras;
6. Adicionar um participante;
7. Remover um participante;
 
### 📱 Detalhes da tela

- A tela inicial é uma lista com cards representando cada churras, mostrando data, nome, valor arrecadado e número de participantes;
  - Um card adicional serve para adicionar um novo churras;  
- A tela de detalhes mostra um coluna com informações sobre o churras como nome, data, valor arrecadado, número de participantes;
  - Abaixo aparece uma lista de participantes, com o nome, valor que irá pagar, um botão para abrir a edição e outro para remover participante;
  - No topo da coluna aparece botões com função de voltar para tela inicial, editar churras e deletar churras;

## 🔨 Desenvolvimento

Aplicação frontend desenvolvida com o framework [ReactJS](https://pt-br.reactjs.org) com [Typescript](https://www.typescriptlang.org).

Usando também as bibliotecas 
- [React Icons](https://react-icons.github.io/react-icons/search) para uso de icones
- [Axios](https://axios-http.com) para fazer chamadas às APIs.

### 📁 Pastas

A organização da pasta "src" se deu usando um padrão de pastas que uso, onde
  - 📂 "src/components" ficam os componentes isolados utilizados na(s) página(s) da aplicação.
  - 📂 "src/pages" ficam as páginas principais da aplicação.
  - 📂 "src/styles" ficam folhas de estilização (css) padrões da aplicação como estilos e cores padrões.
  - 📂 "src/utils" ficam funções que podem ser utilizadas em mais de uma tela ou componente;
  - 📂 "src/tests" ficam funções para testar algumas outras funções da aplicação;

Cada página ou componente tem uma pasta com o seu nome, contendo 
  - 📎 um arquivo tsx, para renderização do componente;
  - 📎 um aquivo css, para estilização daquele componente.

### 🔷 Detalhes dos componentes

Componentes e página foram desenvolvidos usando o conceito de *functional components*, ou seja, os componentes renderizados são funções javascript.

## ⬇️ Instalação

Com o código clonado no computador, basta entrar na pasta web e use o seguinte comando para instalar os pacotes 👇

```
npm install
```

Após o termino da instalação, use o seguinte comando para iniciar a aplicação localmente 👇

```
npm start
```

A aplicação rodará se possível em 🌐 http://localhost:3000.

## 🚀 Aprenda mais sobre React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
