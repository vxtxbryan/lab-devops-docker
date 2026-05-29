# 🚀 Laboratorio DevOps | Docker, Nginx, Node.js & MySQL

Laboratório prático desenvolvido com foco em estudos de infraestrutura moderna, containerização e arquitetura baseada em microsserviços utilizando Docker.

O projeto simula um ambiente real utilizado em aplicações modernas, separando cada serviço em containers independentes para garantir isolamento, organização, escalabilidade e facilidade de gerenciamento.

---

# 🎯 Objetivos do Projeto

Este laboratório foi desenvolvido com foco em aprofundar conhecimentos em:

* Docker e Containerização
* Linux
* DevOps
* Cloud Computing
* Arquitetura de Microsserviços
* Backend com Node.js
* Redes e comunicação entre containers
* Infraestrutura moderna

---

# 🏗️ Arquitetura da Aplicação

```text
Cliente/Navegador
       ↓
     Nginx
       ↓
Node.js + Express
       ↓
      MySQL
```

A arquitetura foi estruturada utilizando containers independentes para cada serviço:

| Serviço           | Função                      |
| ----------------- | --------------------------- |
| Nginx             | Servidor Web / Proxy        |
| Node.js + Express | Backend da aplicação        |
| MySQL             | Banco de Dados              |
| Docker Compose    | Orquestração dos containers |

---

# 🐳 Tecnologias Utilizadas

* Docker
* Docker Compose
* Linux
* Nginx
* Node.js
* Express
* MySQL
* Git
* VSCode

---

# 📂 Estrutura do Projeto

```text
lab-docker/
│
├── app/
│   └── index.html
│
├── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
│
├── mysql/
│
├── nginx/
│
├── docker-compose.yml
│
└── README.md
```

---

# ⚙️ Conceitos Aplicados

Durante o desenvolvimento deste laboratório, foram aplicados conceitos fundamentais utilizados em ambientes cloud e DevOps modernos:

* Containerização de aplicações
* Arquitetura baseada em microsserviços
* Redes Docker
* Comunicação entre containers
* Isolamento de serviços
* Docker Compose
* Estruturação de ambiente Linux
* Backend com Node.js
* Gerenciamento de containers
* Infraestrutura moderna

---

# 🚀 Como Executar o Projeto

## Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## Acessar a pasta do projeto

```bash
cd lab-docker
```

---

## Subir os containers

```bash
docker compose up -d --build
```

---

# 🌐 Acessos da Aplicação

## Frontend

```text
http://localhost:8080
```

---

## Backend API

```text
http://localhost:3000
```

---

# 🐳 Containers da Aplicação

| Container    | Responsabilidade |
| ------------ | ---------------- |
| nginx-server | Servidor Web     |
| node-backend | Backend/API      |
| mysql-server | Banco de Dados   |

---

# 📚 Aprendizados

Este projeto permitiu aprofundar conhecimentos práticos em:

* Docker e Docker Compose
* Linux e terminal
* Comunicação entre serviços
* Estruturação de ambientes isolados
* Backend com Node.js
* Conceitos de DevOps
* Infraestrutura baseada em containers
* Arquitetura moderna para aplicações web

---

# 👨‍💻 Autor

Victor Oliveira

🔗 LinkedIn
https://www.linkedin.com/in/victor-oliveira-275836231/

🔗 GitHub
https://github.com/vxtxbryan
