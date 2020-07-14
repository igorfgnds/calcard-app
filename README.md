# 💳 CALCARD: Technical Evaluation

Projeto desenvolvido para avaliação técnica referente a vaga de Desenvolvedor Front-end na CALCARD.

## Tecnologias

- Angular 10.0.2
- Bootstrap 4.5.0
- JSON Server (REST API)
- Docker

## Layout
Foi utilizado o Figma na criação do layout e o protótipo da aplicação.

https://www.figma.com/file/RMXXkdHcgVPYcCi3vpyjEG/Calcard-Technical-Evaluation-UI?node-id=0%3A1


## Instruções

Clonar este repositório:
```sh 
git clone https://github.com/igorfgnds/calcard-app.git
```

Instalar as dependências do projeto:
```sh 
npm install
```

Executar API com JSON Server para simular o back-end:
```sh 
npm run api
```
Documentação disponível em: http://localhost:3000

Executar aplicação em modo de desenvolvimento:
```sh 
ng serve
```
Acesse a aplicação em: http://localhost:4200/

### Build

Executar o build da aplicação:
```sh 
ng build --prod
```

### Docker

Executar projeto com Docker:
```sh 
docker-compose -f docker-compose.yml up -d --force-recreate --build
```
Acesse a aplicação em: http://localhost:4200/

## Observações

- Conforme solicitado, o teste foi focado no front-end da aplicação, comprovando o conhecimento na utilização do Angular, Bootstrap, qualidade da interface, utilização do Sass/Scss, consumo da API através dos services, entre outros.

- A estrutura de pastas do projeto foi criada pensando na escalabilidade e componentização do mesmo.

- Para poder simular o back-end da aplicação, foi utilizado o JSON Server para fazer o mocking dos dados. Os mesmos podem ser encontrados no arquivo `db.json`, na raíz do projeto.

- A tela de login foi implementada apenas para valorizar o teste e criar um fluxo de telas. Não é necessário uso de crendênciais para acessar, basta clicar em "Entrar".

- O filtro por nome dos clientes cadastrados foi implementado de forma simples, utilizando um pipe, no entanto é de conhecimento que o mesmo precisa levar em consideração tabelas de dados maiores, com paginação e consultas dinâmicas no banco de dados para evitar uma sobrecarga, entre outros problemas que podem ocorrer nesse tipo de implementação.

- A listagem de clientes está consumindo a API gerada através do JSON Server. Em ambiente de desenvolvimento é necessário utilizar o script para execução da API, já quando é feito o build, a URL base da API, através das environments variables, muda para a versão online (https://my-json-server.typicode.com/igorfgnds/calcard-app).

- O cadastro de clientes também utiliza a API do JSON Server e os dados são salvos no arquivo que simula a base de dados.

- A análise de crédito para novos clientes cadastrados está fixada no model como "Aprovado" e com limite "entre 1500 - 2000", isso para apenas simular os dados.