## Dashgo - Ignite
Esta aplicação foi desenvolvida em um módulo do ignite. Ela teve como objetivo desenvolver aplicações utilizando o [chakra-ui](https://chakra-ui.com), uma biblioteca de componentes. Com o chakra-ui foi possível desenvolver uma aplicação com design agradável e responsivo. Apesar do HTML no JSX se tornado um pouco mais robusto por conta da estilização no próprio componente, o código fica mais claro e fácil de manutenção. Também foram utilizadas as bibliotecas do [react-hook-form](https://react-hook-form.com) e [yup](https://github.com/jquense/yup) para realizar as validações dos formulários.

Além disso, foi implementado as técnicas de data fetching e cache local na listagem de usuário com req. Dessa foma, a tabela de usuário só exibirá o carregamento (enquanto espera os dados da API) se houver uma alteração na página da tabela.

Como aplicação está utilizando apenas o front-end, foi adicionado algumas bibliotecas para simular uma API. Tais como: (i) [miragejs](https://miragejs.com) repensável pela simulação da API e (ii) [faker](https://fakerjs.dev) para geração de informações fake para teste.

### Conceitos e técnicas utilizadas

- [ReactJS](https://pt-br.reactjs.org)
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [React-icons](https://react-icons.github.io/react-icons/)
- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org)
- [Yarn](https://classic.yarnpkg.com/en/)
- [chakra-ui](https://chakra-ui.com)
- [react-hook-form](https://react-hook-form.com)
- [yup](https://github.com/)
- [axios](https://axios-http.com)
- [React Query](https://tanstack.com/query/v4/docs/overview)
- [miragejs](https://miragejs.com)
- [faker](https://fakerjs.dev)

### Páginas da aplicação:
#### Tela de login com erro
![Screenshot](/imgs/login-error.png)

#### Tela de login (efetuando login)
![Screenshot](/imgs/login.png)

#### Dashboard com gráficos
![Screenshot](/imgs/dashboard.png)

#### Listagem de usuário
![Screenshot](/imgs/user-list.png)

#### Formulário para cadastro com validação
![Screenshot](/imgs/user-form-error.png)

#### Formulário para cadastro com validação na senha
![Screenshot](/imgs/user-error-password.png)

### Rodar aplicação

### Instalação das dependências listadas no arquivo package.json

```console
$ yarn
```

#### Execução da aplicação front-end local.

Inicia um servidor local front-end no endereço [http://localhost:3000](http://localhost:3000) no browser.
```console
$ yarn dev
```

#### Build e gerar os arquivos estáticos (SSG).

Gera uma build e os arquivos estáticos que foram configurados usando o SSG.

```console
$ yarn build
```

#### Execução da aplicação a partir build gerada.

Inicia um servidor local front-end no endereço [http://localhost:3000](http://localhost:3000) no browser.
```console
$ yarn start
```
