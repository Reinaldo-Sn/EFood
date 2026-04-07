# E-Food

Aplicação de e-commerce de delivery de comida, desenvolvida com React, TypeScript e Redux Toolkit.

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) — gerenciamento de estado global
- [React Router DOM](https://reactrouter.com/) — roteamento
- [Styled Components](https://styled-components.com/) — estilização

## Funcionalidades

- Listagem de restaurantes e produtos
- Carrinho de compras com gerenciamento via Redux
- Página de perfil
- Integração com API externa

## Como rodar

```bash
# Instalar dependências
npm install

# Iniciar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Estrutura do projeto

```
src/
├── assets/         # Imagens e arquivos estáticos
├── components/     # Componentes reutilizáveis (Cart, Modal, Loader, etc.)
├── pages/          # Páginas da aplicação (Home, Perfil)
├── services/       # Chamadas à API
├── store/          # Configuração do Redux (store e slices)
├── utils/          # Funções utilitárias
├── routes.tsx      # Definição de rotas
└── App.tsx         # Componente raiz
```
