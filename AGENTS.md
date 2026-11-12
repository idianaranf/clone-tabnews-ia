# Contexto do projeto

## Objetivo

Este repositório implementa o [TabNews](https://tabnews.com.br) como parte do [curso.dev](https://curso.dev), com apoio de agentes de IA.

## Stack tecnológica

- Next.js 16.2.12 com App Router
- React e React DOM 19.2.8
- JavaScript com JSX
- CSS global
- npm para dependências e scripts

## Organização principal

- `app/`: rotas e layouts do App Router.
- `app/page.js`: componente da página inicial (`/`).
- `app/layout.js`: layout raiz e metadados compartilhados.
- `app/globals.css`: estilos globais.
- `package.json`: dependências e comandos do projeto.
- `package-lock.json`: versões resolvidas das dependências pelo npm.

## Comandos

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: cria a build de produção.
- `npm start`: inicia o servidor de produção após a build.
