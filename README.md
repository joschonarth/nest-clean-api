<h1 align="center"><img src="./test/e2e/sample-upload.png" width="30" /> Nest Clean API</h1>

<p align="center"><i>Uma <b>API RESTful</b> desenvolvida com arquitetura limpa, modular e escalável para gerenciamento de tópicos, posts e usuários em um fórum, garantindo interações ágeis e seguras entre os participantes.</i>
<!-- Uma <b>API RESTful</b> para gerenciar tópicos, posts e usuários de um fórum, permitindo a interação entre usuários de forma simples e eficiente. -->
  <br/><br/>
  <img src="https://img.shields.io/github/last-commit/joschonarth/nest-clean-api?style=for-the-badge&color=EA284C&labelColor=1C1E26" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/joschonarth/nest-clean-api?style=for-the-badge&color=EA284C&labelColor=1C1E26" alt="top-language">
  <img src="https://img.shields.io/github/languages/count/joschonarth/nest-clean-api?style=for-the-badge&color=EA284C&labelColor=1C1E26" alt="languages-count">
</p>

## 📑 Índice

- [📖 Visão Geral](#-visão-geral)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [⚙️ Funcionalidades](#️-funcionalidades)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
  - [📋 Pré-requisitos](#-pré-requisitos)
  - [🔧 Instalação](#-instalação)
  - [▶️ Execução](#️-execução)
- [📌 Tabela de Endpoints](#-tabela-de-endpoints)
<!-- - [🔗 Endpoints](#-endpoints) -->
- [🧪 Testes](#-testes)
<!-- - [🏗️🏛️ Estrutura da Aplicação]() -->
- [🤝 Contribuições](#-contribuições)
- [⭐ Apoie este Projeto](#-apoie-este-projeto)
- [📞 Contato](#-contato)

## 📖 Visão Geral

Este projeto é uma **API RESTful** robusta e altamente modular para gerenciar tópicos, posts e usuários em um fórum. Construída utilizando **NestJS** e baseada nos princípios da **Clean Architecture**, a aplicação promove uma divisão clara de responsabilidades entre suas camadas, garantindo alta coesão e baixo acoplamento.

A arquitetura foi pensada para ser **escalável, segura e extensível**, incorporando práticas de **Desenvolvimento Orientado a Testes (TDD)** e aplicando rigorosamente os princípios do **SOLID**. Além disso, a utilização de **Padrões de Projeto** estratégicos proporciona soluções elegantes para problemas recorrentes de software, elevando a qualidade, a manutenibilidade e a performance do sistema.

O projeto também integra tecnologias modernas como **Prisma ORM**, **PostgreSQL**, **Redis** e armazenamento em nuvem via **S3/R2**, proporcionando alta eficiência no gerenciamento de dados e arquivos.

## 🛠️ Tecnologias Utilizadas

- 🟢 **Node.js**: Plataforma para execução do JavaScript no servidor.
- 🔧 **NestJS**: Framework para construir aplicações Node.js eficientes e escaláveis.
- 🟦 **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- 🗄️ **Prisma**: ORM moderno e robusto para banco de dados.
- 🐳 **Docker**: Containerização da aplicação.
- 🗃️ **PostgreSQL**: Banco de dados relacional utilizado para armazenar informações.
- 🔒 **Bcrypt**: Biblioteca para hash de senhas de forma segura.
- 📅 **DayJS**: Biblioteca para manipulação de datas e horas.
- 🔴 **Redis**: Sistema de cache em memória e armazenamento de dados temporários.
- 🔐 **Passport-JWT**: Middleware de autenticação baseado em JWT.
- 🏗️ **Reflect-Metadata**: Biblioteca que adiciona suporte a metadados em TypeScript.
- ⚡ **RxJS**: Biblioteca para programação reativa com observables.
- 🧪 **Zod**: Biblioteca para validação de dados.
- ☁️ **S3 da AWS via R2 da Cloudflare**: Armazenamento de arquivos na nuvem.
- 🧩 **Faker**: Biblioteca para gerar dados falsos para testes.
- 📦 **Multer**: Middleware para upload de arquivos.
- ⚙️ **Dotenv**: Carrega variáveis de ambiente.
- 🛠️ **ESLint**: Linter para garantir a qualidade do código.
- 🧪 **Supertest**: Framework de testes para APIs HTTP.
- ⚙️ **Vitest**: Framework de testes para TypeScript e JavaScript.

## ⚙️ Funcionalidades

- 🔐 **Autenticação segura de usuários:** Registro, login e proteção de rotas privadas com tokens JWT.
- 📝 **Criação e gestão de tópicos e posts:** Usuários podem criar, editar e excluir seus próprios tópicos e posts.
- 💬 **Sistema de comentários:** Comentários podem ser adicionados tanto a tópicos quanto a respostas.
- 🏆 **Escolha da melhor resposta:** O autor de um tópico pode marcar uma resposta como a melhor solução.
- 🔍 **Busca eficiente e listagem de tópicos:** Permite consultar tópicos recentes, respostas e comentários.
- 🗑️ **Gerenciamento de conteúdo:** Permite a exclusão de posts, comentários e respostas específicas.
- ☁️ **Upload de arquivos:** Integração com serviços de armazenamento na nuvem para envio de arquivos.
- ⚡ **Cache otimizado:** Uso de Redis para acelerar a recuperação de informações e reduzir a carga no banco de dados.
- 🧪 **Testes automatizados:** Cobertura abrangente com testes de unidade e integração.
- 🛠️ **Estrutura escalável:** Facilitada por princípios de Clean Architecture e SOLID para crescimento sustentável do sistema.

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos

- 🟩 [Node.js](https://nodejs.org/en/download/)
- 📦 [pnpm](https://pnpm.io/)
- 🐳 [Docker](https://www.docker.com/)

### 🔧 Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/joschonarth/nest-clean-api.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd nest-clean-api
    ```

3. **Instale as dependências:**

    ```bash
    pnpm install
    ```

### ▶️ Execução

1. **Crie um arquivo `.env` a partir do exemplo:**

    ```bash
    cp .env.example .env
    ```

    Edite o arquivo `.env` para configurar as variáveis de ambiente necessárias.

2. Inicie os bancos de dados **PostgreSQL** e **Redis**  utilizando o **Docker**:

   ```bash
   docker-compose up -d
   ```

3. **Execute as migrações do banco de dados:**

   ```bash
   npx prisma migrate dev
   ```

4. **Inicie a API:**

   ```bash
   pnpm run start:dev
   ```

   A aplicação estará disponível em [http://localhost:3333](http://localhost:3333).

## 📌 Tabela de Endpoints

| Método | Rota                                  | Descrição                                    |
|--------|---------------------------------------|----------------------------------------------|
| POST   | `/accounts`                           | Criar uma nova conta de usuário              |
| POST   | `/sessions`                           | Autenticar usuário (login)                   |
| POST   | `/questions`                          | Criar uma nova pergunta                      |
| POST   | `/questions/:questionId/answers`      | Responder uma pergunta                       |
| POST   | `/questions/:questionId/comments`     | Comentar em uma pergunta                     |
| POST   | `/answers/:answerId/comments`         | Comentar em uma resposta                     |
| PATCH  | `/answers/:answerId/choose-as-best`   | Escolher melhor resposta para uma pergunta   |
| PUT    | `/answers/:id`                        | Editar uma resposta                          |
| PUT    | `/questions/:id`                      | Editar uma pergunta                          |
| DELETE | `/questions/:id`                      | Deletar uma pergunta                         |
| DELETE | `/questions/comments/:id`             | Deletar um comentário de pergunta            |
| DELETE | `/answers/:id`                        | Deletar uma resposta                         |
| DELETE | `/answers/comments/:id`               | Deletar um comentário de resposta            |
| GET    | `/questions`                          | Listar perguntas recentes                    |
| GET    | `/questions/:questionId/answers`      | Listar respostas de uma pergunta             |
| GET    | `/questions/:questionId/comments`     | Listar comentários de uma pergunta           |
| GET    | `/answers/:answerId/comments`         | Listar comentários de uma resposta           |
<!-- | POST | upload -->
<!-- 
## 🔗 Endpoints

### 🧑 Criar Conta de Usuário

- **Método**: `POST`
- **URL**: `/accounts`
- **Corpo da Requisição**:

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
  }
  ```

### 🔐 Autenticar Usuário (Login)

- **Método**: `POST`
- **URL**: `/sessions`
- **Corpo da Requisição**:

  ```json
  {
    "email": "john@example.com",
    "password": "123456"
  }
  ```

### ❓ Criar Nova Pergunta

- **Método**: `POST`
- **URL**: `/questions`
- **Corpo da Requisição**:

  ```json
  {
    "title": "Como funciona o NestJS?",
    "content": "Alguém pode explicar como o NestJS organiza o código?",
    "attachments": ["uuid-do-arquivo-1"]
  }
  ```

### 📝 Responder uma Pergunta

- **Método**: `POST`
- **URL**: `/questions/:questionId/answers`
- **Corpo da Requisição**:

  ```json
  {
    "content": "Aqui está a minha resposta para a pergunta.",
    "attachments": ["uuid-do-arquivo-1", "uuid-do-arquivo-2"]
  }
  ```

### 🏆 Escolher Melhor Resposta

- **Método**: `PATCH`
- **URL**: `/answers/:answerId/choose-as-best`

### 💬 Comentar em uma Resposta

- **Método**: `POST`
- **URL**: `/answers/:answerId/comments`
- **Corpo da Requisição**:

  ```json
  {
    "content": "Excelente resposta! Concordo totalmente."
  }
  ```

### 💬 Comentar em uma Pergunta

- **Método**: `POST`
- **URL**: `/questions/:questionId/comments`
- **Corpo da Requisição**:

  ```json
  {
    "content": "Poderia esclarecer melhor a pergunta?"
  }
  ```

### 🗑️ Deletar Comentário de Resposta

- **Método**: `DELETE`
- **URL**: `/answers/comments/:id`

### 🗑️ Deletar Resposta

- **Método**: `DELETE`
- **URL**: `/answers/:id`

### 🗑️ Deletar Comentário de Pergunta

- **Método**: `DELETE`
- **URL**: `/questions/comments/:id`

### 🗑️ Deletar Pergunta

- **Método**: `DELETE`
- **URL**: `/questions/:id`

### ✏️ Editar Resposta

- **Método**: `PUT`
- **URL**: `/answers/:id`
- **Corpo da Requisição**:

  ```json
  {
    "content": "Atualizei minha resposta com mais informações.",
    "attachments": ["uuid-do-arquivo-1", "uuid-do-arquivo-2"]
  }
  ```

### ✏️ Editar Pergunta

- **Método**: `PUT`
- **URL**: `/questions/:id`
- **Corpo da Requisição**:

  ```json
  {
    "title": "Atualização: Como funciona o NestJS?",
    "content": "Adicionei mais detalhes sobre os módulos.",
    "attachments": ["uuid-do-arquivo-1"]
  }
  ```

### 📄 Listar Comentários de uma Resposta

- **Método**: `GET`
- **URL**: `/answers/:answerId/comments?page=1`

### 📄 Listar Respostas de uma Pergunta

- **Método**: `GET`
- **URL**: `/questions/:questionId/answers?page=1`

### 📄 Listar Comentários de uma Pergunta

- **Método**: `GET`
- **URL**: `/questions/:questionId/comments?page=1`

### 🆕 Listar Perguntas Recentes

- **Método**: `GET`
- **URL**: `/questions?page=1` -->

## 🧪 Testes

Este projeto inclui **testes unitários** e **testes E2E** (end-to-end) para garantir a confiabilidade e o funcionamento correto dos recursos implementados. Para executar os testes, utilize os seguintes comandos:

- **Executar testes unitários:**

  ```bash
  npm run test
  ```

- **Executar testes unitários em modo de observação:**

  ```bash
  npm run test:watch
  ```

- **Preparar o ambiente do Prisma antes dos testes E2E:**

  ```bash
  npm run pretest:e2e
  ```

- **Executar testes E2E:**

  ```bash
  npm run test:e2e
  ```

- **Executar testes E2E em modo de observação:**

  ```bash
  npm run test:e2e:watch
  ```

- **Executar testes com cobertura:**

  ```bash
  npm run test:coverage
  ```

- **Executar a interface do usuário do Vitest:**

  ```bash
  npm run test:ui
  ```

## 🤝 Contribuições

Contribuições são muito bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias ou correções. 🚀

## ⭐ Apoie este Projeto

Se você gostou da aplicação, deixe uma ⭐ no repositório!

## 📞 Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joschonarth/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)
