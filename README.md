<h1 align="center"><img src="./test/e2e/sample-upload.png" width="30" /> Nest Clean API</h1>

<p align="center"><i>Uma <b>API RESTful</b> desenvolvida com arquitetura limpa, modular e escalável para gerenciamento de tópicos, posts e usuários em um fórum, garantindo interações ágeis e seguras entre os participantes.</i>
  <br/><br/>
  <img src="https://img.shields.io/github/last-commit/joschonarth/nest-clean-api?style=for-the-badge&color=EA284C&labelColor=1C1E26" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/joschonarth/nest-clean-api?style=for-the-badge&color=EA284C&labelColor=1C1E26" alt="top-language">
  <img src="https://img.shields.io/github/languages/count/joschonarth/nest-clean-api?style=for-the-badge&color=EA284C&labelColor=1C1E26" alt="languages-count">
</p>

## 📑 Índice

- [📖 Visão Geral](#-visão-geral)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [⚙️ Funcionalidades](#️-funcionalidades)
- [📚 Conceitos Aplicados](#-conceitos-aplicados)
- [🏗️ Estrutura da Aplicação](#️-estrutura-da-aplicação)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
  - [📋 Pré-requisitos](#-pré-requisitos)
  - [🔧 Instalação](#-instalação)
  - [🌱 Configuração das Variáveis de Ambiente](#-configuração-das-variáveis-de-ambiente)
  - [🪣 Criação do Bucket na Cloudflare R2](#-criação-do-bucket-na-cloudflare-r2)
  - [▶️ Execução](#️-execução)
- [📌 Tabela de Endpoints](#-tabela-de-endpoints)
- [🔗 Endpoints](#-endpoints)
- [🧪 Testes](#-testes)
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
- 🧪 **Vitest**: Framework de testes para TypeScript e JavaScript.
- 🕷️ **Supertest**: Framework de testes para APIs HTTP.

## ⚙️ Funcionalidades

- 🔐 **Autenticação segura de usuários:** Registro, login e proteção de rotas privadas com tokens JWT.
- 📝 **Criação e gestão de tópicos e posts:** Usuários podem criar, editar e excluir seus próprios tópicos e posts.
- 💬 **Sistema de comentários:** Comentários podem ser adicionados tanto a tópicos quanto a respostas.
- 🏆 **Escolha da melhor resposta:** O autor de um tópico pode marcar uma resposta como a melhor solução.
- 🔍 **Busca eficiente e listagem de tópicos:** Permite consultar tópicos recentes, respostas e comentários.
- 🗑️ **Gerenciamento de conteúdo:** Permite a exclusão de posts, comentários e respostas específicas.
- ☁️ **Upload de arquivos:** Integração com serviços de armazenamento na nuvem para envio de arquivos.
- ⚡ **Cache otimizado:** Uso de Redis para acelerar a recuperação de informações e reduzir a carga no banco de dados.
- 🧪 **Testes automatizados:** Cobertura abrangente com testes unitários e de integração.
- 🛠️ **Estrutura escalável:** Facilitada por princípios de Clean Architecture e SOLID para crescimento sustentável do sistema.

## 📚 Conceitos Aplicados

- 🧩 **Domain-Driven Design (DDD):** Organização do código em domínios ricos com foco na modelagem do negócio.
- 🛡️ **Clean Architecture:** Separação clara de responsabilidades entre domínio, aplicação, infraestrutura e interface.
- 🧱 **Entidades e Value Objects:** Modelagem orientada ao domínio com foco na integridade dos dados.
- 📦 **Camada Core Compartilhada:** Reutilização de entidades e contratos genéricos entre domínios.
- 🧩 **Repositórios como Contratos (Interfaces):** Isolamento entre lógica de domínio e persistência.
- 🧪 **Test-Driven Development (TDD):** Estrutura de testes com repositórios in-memory e fábricas de entidades.
- 🧰 **Factory Pattern para Testes:** Criação facilitada de entidades e casos de uso em testes.
- 🔗 **Aggregate Root:** Entidades raiz que controlam a consistência dos agregados.
- 📜 **Watched List:** Rastreio de alterações em coleções internas de entidades.
- 🌐 **Domain Events:** Comunicação entre domínios desacoplada via eventos explícitos.
- 📣 **Event Subscribers:** Reações automatizadas a eventos de domínio, como envio de notificações.
- ↔️ **Either (Programação Funcional):** Encapsulamento explícito de erros e resultados esperados.
- 🧪 **Isolation in Use Cases:** Casos de uso desacoplados de infraestrutura e testáveis isoladamente.
- 💡 **Presenters:** Separação entre modelos de domínio e estruturas de resposta HTTP.
- 🔐 **Autenticação Modular:** Implementações desacopladas de criptografia e autenticação.
- 🧱 **Pipes Customizados (NestJS):** Validação e transformação de dados com lógica própria.
- 🧠 **Mapper Pattern (Prisma):** Conversão entre modelos ORM e entidades de domínio.

## 🏗️ Estrutura da Aplicação

A arquitetura do projeto segue os princípios da **Clean Architecture**, com separação clara de responsabilidades entre camadas de domínio, infraestrutura e aplicação. Abaixo está a descrição das principais pastas e seus propósitos:

```plaintext
nest-clean-api/
├── src/
│   ├── core/                          # Camada genérica e reutilizável entre os domínios
│   │   ├── entities/                  # Entidades base como AggregateRoot e WatchedList
│   │   ├── errors/                    # Exceções e erros comuns de domínio
│   │   ├── events/                    # Eventos genéricos utilizados em múltiplos contextos
│   │   ├── repositories/              # Interfaces genéricas de repositórios
│   │   ├── types/                     # Tipos e utilitários auxiliares
│   ├── domain/                        # Camadas específicas por contexto de domínio
│   │   ├── forum/                     # Domínio do fórum (posts, tópicos, comentários)
│   │   │   ├── application/           # Casos de uso, contratos e interfaces
│   │   │   │   ├── cryptography/      # Interfaces de criptografia (ex: encrypter, hasher)
│   │   │   │   ├── repositories/      # Contratos de repositórios do domínio fórum
│   │   │   │   ├── storage/           # Interfaces para armazenamento de arquivos
│   │   │   │   └── use-cases/         # Regras de aplicação e orquestração de lógica
│   │   │   │       └── errors/        # Erros específicos dos casos de uso
│   │   │   ├── enterprise/            # Regras de negócio e entidades do domínio fórum
│   │   │   │   ├── entities/          # Entidades como Topic, Post, Comment, etc.
│   │   │   │   │   └── value-objects/ # Objetos de valor (ex: Slug, UniqueEntityID)
│   │   │   │   └── events/            # Eventos de domínio (ex: OnNewAnswerCreated)
│   │   ├── notification/              # Domínio responsável por notificações
│   │   │   ├── application/           # Casos de uso e contratos da camada de aplicação
│   │   │   │   ├── repositories/      # Interfaces para persistência das notificações
│   │   │   │   ├── subscribers/       # Escutadores de eventos e reações do domínio
│   │   │   │   └── use-cases/         # Lógicas de envio e recebimento de notificações
│   │   │   └── enterprise/            # Entidades e regras do domínio de notificações
│   │   │       └── entities/
│   ├── infra/                         # Camada de infraestrutura e implementação
│   │   ├── auth/                      # Implementações relacionadas à autenticação
│   │   ├── cache/
│   │   │   └── redis/                 # Gerenciamento de cache com Redis
│   │   ├── cryptography/              # Implementações concretas de criptografia (ex: bcrypt)
│   │   ├── database/
│   │   │   └── prisma/                # Integração com Prisma ORM
│   │   │       ├── mappers/           # Conversão entre entidades de domínio e ORM
│   │   │       └── repositories/      # Implementações reais dos repositórios
│   │   ├── env/                       # Variáveis e helpers de ambiente
│   │   ├── events/                    # Infraestrutura para publicar e escutar eventos
│   │   ├── http/                      # Interface HTTP da aplicação
│   │   │   ├── controllers/           # Controllers para exposição de endpoints
│   │   │   ├── pipes/                 # Pipes personalizados para validação e transformação
│   │   │   ├── presenters/            # Apresentadores (DTOs de resposta)
│   │   ├── storage/                   # Implementações de armazenamento em nuvem/local
│   │   ├── app.module.ts              # Módulo raiz da aplicação NestJS
│   │   └── main.ts                    # Ponto de entrada da aplicação
├── test/                              # Testes automatizados
│   ├── factories/                     # Fábricas para geração de objetos de teste
│   ├── repositories/                  # Implementações em memória dos repositórios
│   └── utils/                         # Funções auxiliares para os testes
```

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos

- 🟩 [Node.js](https://nodejs.org/en/download/)
- 📦 [pnpm](https://pnpm.io/)
- 🐳 [Docker](https://www.docker.com/)
- ☁️ Conta na [Cloudflare](https://www.cloudflare.com/developer-platform/products/r2/) (utilizada para o serviço de storage via R2)

---

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

---

### 🌱 Configuração das Variáveis de Ambiente

#### 🌐 Ambiente de Desenvolvimento

1. **Crie um arquivo `.env` a partir do exemplo:**

    ```bash
    cp .env.example .env
    ```

2. **Preencha as variáveis do `.env` conforme necessário:**

   - `DATABASE_URL`: URL de conexão com o PostgreSQL.
   - `CLOUDFLARE_ACCOUNT_ID`: Disponível no dashboard da Cloudflare (seção R2).
   - `AWS_BUCKET_NAME`: Nome do bucket R2 (ex: `nest-clean-api`).
   - `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`: Gere em R2 > Access Keys.
   - `JWT_PRIVATE_KEY` / `JWT_PUBLIC_KEY`: Gere com os comandos abaixo.

#### 🔐 Gerando JWT_PRIVATE_KEY e JWT_PUBLIC_KEY

As chaves são utilizadas para assinatura e verificação de tokens JWT com algoritmo RS256. Os valores devem ser codificados em **base64** antes de serem adicionados ao `.env`.

##### 💻 Linux / macOS

```bash
# Gerar a chave privada (2048 bits)
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048

# Gerar a chave pública
openssl rsa -pubout -in private_key.pem -out public_key.pem

# Codificar em base64 e exportar para o .env
echo "JWT_PRIVATE_KEY=\"$(base64 -w 0 private_key.pem)\"" >> .env
echo "JWT_PUBLIC_KEY=\"$(base64 -w 0 public_key.pem)\"" >> .env

# Limpeza (opcional)
rm private_key.pem public_key.pem
```

##### 🪟 Windows (Git Bash)

```bash
# Gerar as chaves
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in private_key.pem -out public_key.pem

# Codificar as chaves
base64 -w 0 private_key.pem > private_key.txt
base64 -w 0 public_key.pem > public_key.txt

# Copie o conteúdo dos arquivos para as variáveis no .env:
# JWT_PRIVATE_KEY="conteúdo de private_key.txt"
# JWT_PUBLIC_KEY="conteúdo de public_key.txt"

# Limpeza (opcional)
rm private_key.pem public_key.pem
```

> 💡 **Nota:** Use `-w 0` no `base64` para evitar quebras de linha. Se estiver no macOS e não tiver `-w`, use `base64 -i`.

#### 🧪 Ambiente de Testes

1. **Crie um arquivo `.env.test` a partir do exemplo:**

    ```bash
    cp .env.test.example .env.test
    ```

2. **Configure as variáveis específicas:**

   - **AWS_BUCKET_NAME:** Bucket exclusivo para testes (ex: `nest-clean-api-test`)
   - **REDIS_DB=1:** Define o banco Redis alternativo para testes, evitando conflitos com o ambiente de dev.

---

### 🪣 Criação do Bucket na Cloudflare R2

Para usar o serviço de armazenamento R2 da Cloudflare:

1. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Vá até a seção **R2** no painel lateral.
3. Clique em **“Criar bucket”**.
4. Escolha um **nome para o bucket** (ex: `nest-clean-api`).
5. Após criar, copie:
   - O nome do bucket
   - O **CLOUDFLARE_ACCOUNT_ID**
6. Acesse **Access Keys** > **Criar chave** e copie:
   - **AWS_ACCESS_KEY_ID**
   - **AWS_SECRET_ACCESS_KEY**
7. Adicione todas essas informações ao seu arquivo `.env`.

---

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

<!-- ## 📌 Tabela de Endpoints

| Método | Rota                                  | Descrição                                    |
|--------|---------------------------------------|----------------------------------------------|
| POST   | `/accounts`                           | Criar uma nova conta de usuário              |
| POST   | `/sessions`                           | Autenticar usuário (login)                   |
| POST   | `/questions`                          | Criar uma nova pergunta                      |
| PUT    | `/questions/:id`                      | Editar uma pergunta                          |
| DELETE | `/questions/:id`                      | Deletar uma pergunta                         |
| GET    | `/questions`                          | Listar perguntas recentes                    |
| GET    | `/questions/:slug`                    | Buscar Pergunta por Slug                     |
| POST   | `/questions/:questionId/comments`     | Comentar em uma pergunta                     |
| GET    | `/questions/:questionId/comments`     | Listar comentários de uma pergunta           |
| DELETE | `/questions/comments/:id`             | Deletar um comentário de pergunta            |
| POST   | `/questions/:questionId/answers`      | Responder uma pergunta                       |
| GET    | `/questions/:questionId/answers`      | Listar respostas de uma pergunta             |
| PUT    | `/answers/:id`                        | Editar uma resposta                          |
| DELETE | `/answers/:id`                        | Deletar uma resposta                         |
| PATCH  | `/answers/:answerId/choose-as-best`   | Escolher melhor resposta para uma pergunta   |
| POST   | `/answers/:answerId/comments`         | Comentar em uma resposta                     |
| GET    | `/answers/:answerId/comments`         | Listar comentários de uma resposta           |
| DELETE | `/answers/comments/:id`               | Deletar um comentário de resposta            |
| POST   | `/attachments`                        | Fazer upload de anexos                       |
| GET    | `/notifications/:notificationId/read` | Marcar Notificação como Lida                 | -->

<!-- ## 📌 Tabela de Endpoints

| Método | Rota | Descrição | Parâmetros |
|--------|------------------------|------------------------------------|----------------------------------|
| POST   | `/accounts` | Criar uma nova conta de usuário | – |
| POST   | `/sessions` | Autenticar usuário (login) | – |
| POST   | `/questions` | Criar uma nova pergunta | – |
| PUT    | `/questions/:id` | Editar uma pergunta | `:id` (ID da pergunta) |
| DELETE | `/questions/:id` | Deletar uma pergunta | `:id` (ID da pergunta) |
| GET    | `/questions` | Listar perguntas recentes | – |
| GET    | `/questions/:slug` | Buscar pergunta por slug | `:slug` (slug da pergunta) |
| POST   | `/questions/:questionId/comments` | Comentar em uma pergunta | `:questionId` (ID da pergunta) |
| GET    | `/questions/:questionId/comments` | Listar comentários de uma pergunta | `:questionId` (ID da pergunta) |
| DELETE | `/questions/comments/:id` | Deletar um comentário de pergunta | `:id` (ID do comentário) |
| POST   | `/questions/:questionId/answers` | Responder uma pergunta | `:questionId` (ID da pergunta) |
| GET    | `/questions/:questionId/answers` | Listar respostas de uma pergunta | `:questionId` (ID da pergunta) |
| PUT    | `/answers/:id` | Editar uma resposta | `:id` (ID da resposta) |
| DELETE | `/answers/:id` | Deletar uma resposta | `:id` (ID da resposta) |
| PATCH  | `/answers/:answerId/choose-as-best` | Escolher melhor resposta para uma pergunta | `:answerId` (ID da resposta) |
| POST   | `/answers/:answerId/comments` | Comentar em uma resposta | `:answerId` (ID da resposta) |
| GET    | `/answers/:answerId/comments` | Listar comentários de uma resposta | `:answerId` (ID da resposta) |
| DELETE | `/answers/comments/:id` | Deletar um comentário de resposta | `:id` (ID do comentário) |
| POST   | `/attachments` | Fazer upload de anexos | – |
| GET    | `/notifications/:notificationId/read` | Marcar notificação como lida | `:notificationId` (ID da notificação) | -->

## 📌 Tabela de Endpoints

### 🧑‍💼 Autenticação e Conta

| Método | Rota          | Descrição                        | Parâmetros                  |
|--------|---------------|----------------------------------|-----------------------------|
| POST   | `/accounts`   | Criar uma nova conta de usuário  | –                           |
| POST   | `/sessions`   | Autenticar usuário (login)       | –                           |

---

### ❓ Perguntas

| Método | Rota                       | Descrição                          | Parâmetros                       |
|--------|----------------------------|------------------------------------|----------------------------------|
| POST   | `/questions`               | Criar uma nova pergunta            | –                                |
| PUT    | `/questions/:id`           | Editar uma pergunta                | `:id` (ID da pergunta)           |
| DELETE | `/questions/:id`           | Deletar uma pergunta               | `:id` (ID da pergunta)           |
| GET    | `/questions`               | Listar perguntas recentes          | –                                |
| GET    | `/questions/:slug`         | Buscar pergunta por slug           | `:slug` (slug da pergunta)       |

---

### 💬 Comentários em Perguntas

| Método | Rota                            | Descrição                   | Parâmetros            |
|--------|---------------------------------|-----------------------------|-----------------------|
| POST   | `/questions/:questionId/comments` | Comentar em uma pergunta | `:questionId` (ID da pergunta)    |
| GET    | `/questions/:questionId/comments` | Listar comentários de uma pergunta | `:questionId` (ID da pergunta) |
| DELETE | `/questions/comments/:id`            | Deletar um comentário de pergunta  | `:id` (ID do comentário)          |

---

### 📝 Respostas

| Método | Rota                                 | Descrição                                 | Parâmetros                       |
|--------|--------------------------------------|-------------------------------------------|----------------------------------|
| POST   | `/questions/:questionId/answers`     | Responder uma pergunta                    | `:questionId` (ID da pergunta)   |
| PUT    | `/answers/:id`                       | Editar uma resposta                       | `:id` (ID da resposta)           |
| DELETE | `/answers/:id`                       | Deletar uma resposta                      | `:id` (ID da resposta)           |
| GET    | `/questions/:questionId/answers`     | Listar respostas de uma pergunta          | `:questionId` (ID da pergunta)   |
| PATCH  | `/answers/:answerId/choose-as-best`  | Escolher melhor resposta para pergunta    | `:answerId` (ID da resposta)     |

---

### 💬 Comentários em Respostas

| Método | Rota                                 | Descrição                          | Parâmetros                        |
|--------|--------------------------------------|------------------------------------|-----------------------------------|
| POST   | `/answers/:answerId/comments`        | Comentar em uma resposta           | `:answerId` (ID da resposta)      |
| GET    | `/answers/:answerId/comments`        | Listar comentários de uma resposta | `:answerId` (ID da resposta)      |
| DELETE | `/answers/comments/:id`              | Deletar um comentário de resposta  | `:id` (ID do comentário)          |

---

### 📎 Anexos e Notificações

| Método | Rota                                  | Descrição                          | Parâmetros                          |
|--------|---------------------------------------|------------------------------------|-------------------------------------|
| POST   | `/attachments`                        | Fazer upload de anexos             | –                                   |
| GET    | `/notifications/:notificationId/read` | Marcar notificação como lida       | `:notificationId` (ID da notificação) |

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

### ✏️ Editar Pergunta

- **Método**: `PUT`
- **URL**: `/questions/:id`
- **Parâmetros de Rota**:
  - `id` (string): ID da pergunta.
- **Corpo da Requisição**:

  ```json
  {
    "title": "Atualização: Como funciona o NestJS?",
    "content": "Adicionei mais detalhes sobre os módulos.",
    "attachments": ["uuid-do-arquivo-1"]
  }
  ```

### 🗑️ Deletar Pergunta

- **Método**: `DELETE`
- **URL**: `/questions/:id`
- **Parâmetros de Rota**:
  - `id` (string): ID da pergunta.

### 🆕 Listar Perguntas Recentes

- **Método**: `GET`
- **URL**: `/questions?page=1`
- **Parâmetros de Query**:
  - `page` (number): Número da página.

### 🔍 Buscar Pergunta por Slug

- **Método**: `GET`
- **URL**: `/questions/:slug`
- **Parâmetros de Rota**:
  - `slug` (string): Slug da pergunta.

### 💬 Comentar em uma Pergunta

- **Método**: `POST`
- **URL**: `/questions/:questionId/comments`
- **Parâmetros de Rota**:
  - `questionId` (string): ID da pergunta.
- **Corpo da Requisição**:

  ```json
  {
    "content": "Poderia esclarecer melhor a pergunta?"
  }
  ```

### 📄 Listar Comentários de uma Pergunta

- **Método**: `GET`
- **URL**: `/questions/:questionId/comments?page=1`
- **Parâmetros de Rota**:
  - `questionId` (string): ID da pergunta.
- **Parâmetros de Query**:
  - `page` (number): Número da página.

### 🗑️ Deletar Comentário de Pergunta

- **Método**: `DELETE`
- **URL**: `/questions/comments/:id`
- **Parâmetros de Rota**:
  - `id` (string): ID do comentário de pergunta.

### 📝 Responder uma Pergunta

- **Método**: `POST`
- **URL**: `/questions/:questionId/answers`
- **Parâmetros de Rota**:
  - `questionId` (string): ID da pergunta.
- **Corpo da Requisição**:

  ```json
  {
    "content": "Aqui está a minha resposta para a pergunta.",
    "attachments": ["uuid-do-arquivo-1", "uuid-do-arquivo-2"]
  }
  ```

### ✏️ Editar Resposta

- **Método**: `PUT`
- **URL**: `/answers/:id`
- **Parâmetros de Rota**:
  - `id` (string): ID da resposta.
- **Corpo da Requisição**:

  ```json
  {
    "content": "Atualizei minha resposta com mais informações.",
    "attachments": ["uuid-do-arquivo-1", "uuid-do-arquivo-2"]
  }
  ```

### 🗑️ Deletar Resposta

- **Método**: `DELETE`
- **URL**: `/answers/:id`
- **Parâmetros de Rota**:
  - `id` (string): ID da resposta.

### 📄 Listar Respostas de uma Pergunta

- **Método**: `GET`
- **URL**: `/questions/:questionId/answers?page=1`
- **Parâmetros de Rota**:
  - `questionId` (string): ID da pergunta.
- **Parâmetros de Query**:
  - `page` (number): Número da página.

### 🏆 Escolher Melhor Resposta

- **Método**: `PATCH`
- **URL**: `/answers/:answerId/choose-as-best`
- **Parâmetros de Rota**:
  - `answerId` (string): ID da resposta.

### 💬 Comentar em uma Resposta

- **Método**: `POST`
- **URL**: `/answers/:answerId/comments`
- **Parâmetros de Rota**:
  - `answerId` (string): ID da resposta.
- **Corpo da Requisição**:

  ```json
  {
    "content": "Excelente resposta! Concordo totalmente."
  }
  ```

### 📄 Listar Comentários de uma Resposta

- **Método**: `GET`
- **URL**: `/answers/:answerId/comments?page=1`
- **Parâmetros de Rota**:
  - `answerId` (string): ID da resposta.
- **Parâmetros de Query**:
  - `page` (number): Número da página.

### 🗑️ Deletar Comentário de Resposta

- **Método**: `DELETE`
- **URL**: `/answers/comments/:id`
- **Parâmetros de Rota**:
  - `id` (string): ID do comentário de resposta.

### 📎 Upload de Anexo

- **Método**: `POST`
- **URL**: `/attachments`

### 📬 Marcar Notificação como Lida

- **Método**: `GET`
- **URL**: `/notifications/:notificationId/read`
- **Parâmetros de Rota**:
  - `notificationId` (string): ID da notificação.

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
