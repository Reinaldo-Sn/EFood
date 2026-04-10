# E-Food

Aplicação de e-commerce de delivery de comida, desenvolvida com React, TypeScript e Redux Toolkit.

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) — gerenciamento de estado global
- [React Router DOM](https://reactrouter.com/) — roteamento
- [Styled Components](https://styled-components.com/) — estilização
- [Formik](https://formik.org/) — gerenciamento de formulários
- [Yup](https://github.com/jquense/yup) — validação de campos
- [react-imask](https://imask.js.org/) — máscaras de input

## Funcionalidades

- Listagem de restaurantes e cardápios
- Carrinho de compras com gerenciamento via Redux
- Fluxo de checkout completo: entrega → pagamento → confirmação
- Validação de formulários com borda vermelha em campos inválidos
- Máscaras nos campos de CEP, número do cartão, CVV, mês e ano
- Envio do pedido para API externa com exibição do ID do pedido
- Página de perfil do restaurante
- Layout responsivo para mobile e tablet

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
├── components/     # Componentes reutilizáveis
│   ├── Cart/       # Carrinho de compras
│   ├── Checkout/   # Fluxo de checkout (Delivery, Payment, Confirmation)
│   ├── Modal/      # Modal de detalhes do produto
│   ├── Loader/     # Feedback visual de ação
│   └── ...
├── pages/          # Páginas da aplicação (Home, Perfil)
├── services/       # Chamadas à API via RTK Query
├── store/          # Configuração do Redux
│   └── reducers/   # Slices (cart, checkout)
├── utils/          # Funções utilitárias (formatação de preço, cálculo de total)
├── routes.tsx      # Definição de rotas
└── App.tsx         # Componente raiz
```
