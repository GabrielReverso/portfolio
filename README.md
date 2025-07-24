# Gabriel Reverso Pereira - Portfólio

Este é o repositório do meu portfólio profissional, desenvolvido com Next.js e Tailwind CSS para apresentar meus projetos e experiências na área de desenvolvimento.

![Preview do Site](https://gabrielreverso.github.io/portfolio/WebsitePreview.jpg)

## 📌 Tecnologias Utilizadas

**Next.js** - Framework React para aplicações modernas e otimizadas.

**Tailwind CSS** - Estilização rápida e responsiva.

**AOS** - Animações suaves ao fazer scroll.

**TypeScript** - Para maior segurança no desenvolvimento.

## 🚀 Como Rodar o Projeto

Clone este repositório:

```ssh
git clone https://github.com/GabrielReverso/portfolio.git
cd portfolio
```

Instale as dependências:

```ssh
npm install
```

Inicie o servidor de desenvolvimento:

```ssh
npx next dev
```

Acesse http://localhost:3000 no navegador.

## 📂 Estrutura do Projeto

```
Portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   └── assets
│
├── src/
│   └── app/
│       ├── assets/
│       │
│       ├── components/
│       │
│       ├── sections/
│       │
│       ├── stores/
│       │
│       ├── utils/
│       │   ├── functions/
│       │   └── hooks/
│       │
│       ├── global.css
│       ├── layout.tsx
│       └── page.tsx
│
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🗂️ Detalhamento das Pastas

Abaixo estão descrições detalhadas das principais pastas dentro da estrutura do projeto, para facilitar a compreensão e manutenção do código:

-   **`utils/`** (`./src/app/utils/`):  
    Contém utilitários reutilizáveis da aplicação. Está dividida em:

    -   **`hooks/`** (`./src/app/utils/hooks/`):  
        Hooks personalizados utilizados para abstrair lógicas de estado ou efeitos colaterais.

    -   **`functions/`** (`./src/app/utils/functions/`):  
        Funções utilitárias reutilizáveis que auxiliam em cálculos, formatações e outras tarefas.

-   **`stores/`** (`./src/app/utils/stores/`):  
    Arquivos responsáveis pelo gerenciamento de estado global utilizando **Zustand**. Cada store centraliza dados e ações relacionadas à sua parte da aplicação.

-   **`sections/`** (`./src/app/utils/sections/`):  
    Componentes principais da página, divididos por seção (ex: Sobre, Projetos, Contato). Cada arquivo representa uma área visível do site.

-   **`components/`** (`./src/app/utils/components/`):  
    Componentes reutilizáveis menores, como botões, cards, ícones, ou elementos visuais utilizados em várias partes do layout.

## 📖 Funcionalidades

Apresentação profissional e portfólio de projetos.

Seção de contato com links para redes sociais.

Design responsivo e moderno.

Animações com AOS.

## 💡 Perguntas Frequentes

**1. Posso usar este projeto como base para meu próprio portfólio?**

Sim! Fique à vontade para clonar, modificar e personalizar como desejar, mas lembre-se de dar créditos e não utilizar as imagens do meu portfólio.

## 📬 Contato

Caso tenha alguma dúvida ou sugestão, entre em contato:

-   **Email**: [reversogabrielpereira@gmail.com](mailto:reversogabrielpereira@gmail.com)
-   **LinkedIn**: [linkedin.com/in/gabriel-reverso-pereira](https://www.linkedin.com/in/gabriel-reverso-pereira)
-   **GitHub**: [github.com/GabrielReverso](https://github.com/GabrielReverso)

---

Desenvolvido com 💙 por Gabriel Reverso Pereira
