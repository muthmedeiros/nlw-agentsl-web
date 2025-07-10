# NLW Agents

Projeto desenvolvido durante o evento **NLW Agents** da [Rocketseat](https://rocketseat.com.br/), focado na criação de agentes inteligentes utilizando tecnologias modernas de frontend.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido
- **TailwindCSS 4** - Framework CSS utility-first
- **React Router DOM** - Roteamento para aplicações React
- **TanStack Query** - Gerenciamento de estado para requisições
- **Radix UI** - Componentes acessíveis e não estilizados
- **shadcn/ui** - Sistema de componentes baseado em Radix UI
- **Lucide React** - Biblioteca de ícones
- **Biome** - Linter e formatter

## 🏗️ Padrões de Projeto

- **Component-Based Architecture** - Arquitetura baseada em componentes reutilizáveis
- **Atomic Design** - Organização de componentes em estrutura atômica (UI components)
- **Custom Hooks** - Lógica reutilizável com React hooks
- **Path Mapping** - Imports absolutos usando alias `@/`
- **TypeScript Strict Mode** - Tipagem rigorosa para maior segurança

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   └── ui/            # Componentes base do design system
├── lib/               # Utilitários e configurações
├── pages/             # Páginas da aplicação
├── app.tsx            # Componente raiz da aplicação
└── main.tsx           # Ponto de entrada da aplicação
```

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd nlw_agents/web
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse o projeto em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente

### Configurações Importantes

- **TailwindCSS**: Configurado com Vite plugin para melhor performance
- **Path Mapping**: Configurado para usar `@/` como alias para `./src/`
- **shadcn/ui**: Configurado com tema "new-york" e ícones Lucide
- **Biome**: Configurado com preset "ultracite" e aspas simples

## 📝 Licença

Este projeto foi desenvolvido durante o evento NLW Agents da Rocketseat.
