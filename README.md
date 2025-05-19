## 📘 Projeto Multiplataforma unifor

Este é um projeto Full Stack composto por uma API (Node.js) e um front-end (Html+Css). O objetivo é [descreva brevemente o propósito do projeto, ex: gerenciar usuários, exibir dashboard, etc].

---

## 📁 Estrutura do Projeto

```

/projeto-fullstack
│
├── front-end/     # Aplicação React
├── back-end/      # API Node.js com Prisma
├── README.md      # Este arquivo

```

Cada pasta possui seu próprio `README.md` com instruções específicas.

## 📄 Documentação por seção

- 📦 [Documentação do Back-end](./back/README.md)
- 🖼 [Documentação do Front-end](./front/README.md)

---

## ✅ Pré-requisitos

- Node.js v18+
- npm ou yarn
- Banco de dados PostgreSQL (ou outro)
- (opcional) Docker (se usar)

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instale as dependências do back-end

```bash
cd back
npm install
```

### 3. Configure o banco e Prisma

- Crie um arquivo `.env` com sua URL do banco
- Rode:

```bash
npx prisma migrate dev --name init
npx prisma generate
npm run seed # se desejar criar dados iniciais
```

### 4. Inicie o servidor

```bash
npm run dev
```

---

### 5. Em outro terminal, vá para o front-end

```bash
cd ../front
npm install
npm run dev
```

O front será iniciado em `http://localhost:5173` (ou outro, dependendo do Vite ou Create React App).

---

## ⚙️ Scripts úteis

| Pasta | Comando        | Descrição                    |
| ----- | -------------- | ---------------------------- |
| back  | `npm run dev`  | Inicia o servidor Node       |
| back  | `npm run seed` | Cria dados iniciais no banco |
| front | `npm run dev`  | Inicia o front-end React     |

---

## 📦 Deploy

Se houver deploy (ex: Vercel + Render):

- Front-end: [https://nome-projeto.vercel.app](https://nome-projeto.vercel.app)
- Back-end: [https://api-nome-projeto.onrender.com](https://api-nome-projeto.onrender.com)

---

## 👨‍💻 Autores

-
- \[Demais integrantes e links, se for um trabalho em equipe]

---

## 📄 Licença

Este projeto está sob a licença MIT.

```

```
