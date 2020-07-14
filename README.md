# CALCARD: Technical Evaluation

Projeto desenvolvido para avaliação técnica referente a vaga de Desenvolvedor Front-end na CALCARD.

## Tecnologias

- Angular 10.0.2
- Bootstrap 4.5.0
- JSON Server (REST API)
- Docker

## Layout
Foi utilizado o Figma na criação do layout e no protótipo da aplicação, facilitando assim o preview das features e fluxos do sistema.

https://www.figma.com/file/RMXXkdHcgVPYcCi3vpyjEG/Calcard-Technical-Evaluation-UI?node-id=0%3A1

## Dev

Clonar este repositório:
```sh 
git clone https://github.com/igorfgnds/calcard-app.git
```

Instalar as dependências do projeto:
```sh 
npm install
```

Executar API REST com JSON Server para simular o back-end:
```sh 
npm run api
```

Executar aplicação:
```sh 
ng serve
```

## Build

Executar o build da aplicação:
```sh 
ng build --prod
```

## Docker

Executar projeto com Docker:
```sh 
docker-compose -f docker-compose.yml up -d --force-recreate --build
```