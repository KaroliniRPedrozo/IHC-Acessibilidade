# AgendaSaúde — Sistema de Agendamento de Consultas com Foco em Acessibilidade

![AgendaSaúde](https://img.shields.io/badge/IHC-UFSC-green)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Licença](https://img.shields.io/badge/Licença-GNU%20GPL%20v3-blue)
![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG%20AAA-brightgreen)

Um sistema web moderno e acessível para agendamento de consultas de saúde, desenvolvido com foco em **inclusão digital** e **experiência do usuário**.

[Sobre o Projeto](#-sobre-o-projeto) • [Funcionalidades](#-funcionalidades) • [Fluxo de Agendamento](#-o-fluxo-de-agendamento) • [Stack Técnico](#️-stack-técnico) • [Instalação](#-instalação-e-uso) • [Acessibilidade](#️-acessibilidade) • [i18n](#-internacionalização-i18n) • [Licença](#-licença)

---

## 📋 Sobre o Projeto

**AgendaSaúde** é uma aplicação web educacional desenvolvida no contexto da disciplina de **Interação Humano-Computador (IHC)** da Universidade Federal de Santa Catarina (UFSC), Campus Araranguá.

O projeto demonstra boas práticas de design inclusivo, com especial atenção a:

- **Usuários idosos** — interfaces grandes, legíveis e intuitivas
- **Usuários com deficiências visuais** — suporte a leitores de tela e navegação por teclado
- **Usuários com deficiências motoras** — interações acessíveis e sem barreira
- **Internacionalização** — suporte a múltiplos idiomas (português, inglês e espanhol)

---

## ✅ Funcionalidades

### Interface

- Fluxo de agendamento dividido em 5 etapas claras com indicador de progresso (stepper)
- Validações em tempo real com mensagens de erro descritivas
- Modo escuro com alternância automática baseada em preferências do sistema
- Design responsivo funcional de 320px até 1440px

### Acessibilidade

- Conformidade com **WCAG 2.1 AAA** (nível máximo)
- Navegação completa por teclado (`Tab`, `Shift+Tab`, setas no calendário)
- Compatibilidade com leitores de tela (NVDA, JAWS, VoiceOver)
- **Leitor de voz nativo** via Web Speech API — navegação por mouse ou teclado com leitura em voz alta
- Contraste AAA em modo claro (mínimo 7:1) e modo escuro (mínimo 4.5:1)
- Skip link para pular diretamente ao conteúdo principal
- Live regions (`aria-live`) para anúncios dinâmicos

### Internacionalização

- Português Brasileiro (padrão)
- Inglês (EN)
- Espanhol (ES)
- Sistema i18n implementado sem dependências externas

---

## 🎯 O Fluxo de Agendamento

| Etapa | Título | Descrição |
| --- | --- | --- |
| 1️⃣ | **Unidade** | Selecionar a unidade de saúde mais próxima (UPA/posto) |
| 2️⃣ | **Especialidade** | Escolher a especialidade médica desejada |
| 3️⃣ | **Data e Hora** | Selecionar data e horário de atendimento via calendário interativo |
| 4️⃣ | **Dados Pessoais** | Informar nome, CPF, data de nascimento, telefone e e-mail |
| 5️⃣ | **Confirmação** | Revisar todas as informações e confirmar o agendamento |

Após a confirmação, o sistema gera um **número de protocolo único**, exibe um comprovante com próximos passos e permite impressão ou novo agendamento.

---

## 🛠️ Stack Técnico

| Componente | Tecnologia |
| --- | --- |
| **Frontend** | HTML5 semântico + CSS3 + JavaScript Vanilla (ES2020+) |
| **Layout** | CSS Grid + Flexbox |
| **Internacionalização** | Motor i18n nativo (zero dependências) |
| **Persistência** | LocalStorage |
| **Acessibilidade** | ARIA + HTML semântico + Web Speech API |
| **Licença** | GNU General Public License v3 |

### Por Que Vanilla JS?

Optou-se por **não usar frameworks** (React, Vue, Angular) para:

- Demonstrar boas práticas de acessibilidade com HTML semântico puro
- Reduzir dependências e complexidade
- Facilitar aprendizado em contexto acadêmico
- Garantir máxima compatibilidade com tecnologias assistivas

---

## 📁 Estrutura do Projeto

```text
AgendaSaúde/
├── index.html     # Estrutura semântica completa com ARIA
├── style.css      # Design tokens, componentes, dark mode, responsividade
├── script.js      # Motor i18n, fluxo SPA, validações, Web Speech API
├── LICENSE        # GNU GPL v3
└── README.md      # Este arquivo
```

### Descrição dos Arquivos

**`index.html`** — Estrutura HTML semântica com roles ARIA, skip links, live regions, formulários acessíveis com labels e hints, e suporte a leitores de tela.

**`style.css`** — Design tokens com custom properties CSS, componentes reutilizáveis (`.btn`, `.field`, `.card`), modo escuro, media queries para responsividade e respeito à preferência `prefers-reduced-motion`.

**`script.js`** — Motor i18n com suporte a pt/en/es, gerenciamento de estado das etapas, validações (CPF, e-mail, telefone, data), máscaras de entrada, integração com LocalStorage e leitor de voz via Web Speech API.

---

## 🚀 Instalação e Uso

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência externa — basta abrir o arquivo ✨

### Como Executar

#### Opção 1: Servidor HTTP Local (Recomendado)

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Acesse: `http://localhost:8000`

#### Opção 2: Direto no Navegador

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

> ⚠️ Alguns recursos (LocalStorage) podem não funcionar com `file://` direto.

### Testando Acessibilidade

- **Teclado**: `Tab` / `Shift+Tab` para navegar, `Enter` / `Space` para ativar, setas no calendário
- **Modo Escuro**: botão 🌙 no cabeçalho
- **Idioma**: botões 🇧🇷 / 🇺🇸 / 🇪🇸 no cabeçalho
- **Leitor de Voz**: botão 🔇 no cabeçalho — lê em voz alta ao navegar com mouse ou teclado
- **Leitor de Tela externo**: NVDA (Windows), VoiceOver (macOS), ChromeVox (web)

---

## ♿ Acessibilidade

### Conformidade WCAG 2.1 AAA

#### Contraste de Cores

| Elemento | Modo Claro | Modo Escuro | Ratio |
| --- | --- | --- | --- |
| Texto principal | `#1a1a2e` / `#f8f9fa` | `#f0f2f5` / `#0f1419` | **16.7:1** (AAA) |
| Marca verde | `#1A6B3C` / `#fff` | `#2d9d6c` / `#0f1419` | **7.2:1** (AAA) |
| Links (azul) | `#1558a8` / `#f8f9fa` | `#60a5fa` / `#0f1419` | **8.1:1** (AAA) |
| Estados desabilitados | `#6b7280` / `#e5e7eb` | — | **4.5:1** (AA) |

#### Navegação por Teclado

- Todos os elementos interativos acessíveis via `Tab`
- Foco visível com anéis de foco azuis (3px)
- `Enter` e `Space` para ativar botões e opções
- Setas para navegar dias no calendário

#### Leitores de Tela

- ARIA labels para botões sem texto visível
- `role="status"` para notificações em tempo real
- `aria-live="polite"` para atualizações de interface
- `aria-describedby` para campos de ajuda
- `aria-hidden="true"` para ícones decorativos
- `aria-pressed` para botões de alternância (idioma, dark mode, seleção)

#### Leitor de Voz Nativo (Web Speech API)

O sistema inclui um motor de leitura por voz próprio, ativado pelo botão 🔇/🔊 no cabeçalho:

- Lê o conteúdo ao passar o mouse ou navegar com `Tab`
- Anuncia cada letra digitada em campos de formulário (Typing Echo)
- Fala no idioma atualmente selecionado (pt-BR / en-US / es-ES)
- Remove emojis automaticamente da fala via regex Unicode

#### Tipografia

- Tamanho base: **18px** (1.125rem) — acima do padrão de 16px
- Altura de linha: **1.6** para melhor legibilidade
- Fonte: Segoe UI / system-ui sans-serif

---

## 🌐 Internacionalização (i18n)

Motor i18n zero-dependências implementado em JavaScript puro.

### Idiomas Suportados

| Idioma | Código | Status |
| --- | --- | --- |
| Português Brasileiro | `pt` | ✅ Completo |
| English (US) | `en` | ✅ Completo |
| Español | `es` | ✅ Completo |

### Como Funciona

Todas as strings ficam em um dicionário centralizado em `script.js`. No HTML, o atributo `data-i18n` referencia a chave:

```html
<h1 data-i18n="step1.title">Selecione a unidade de saúde</h1>
<button data-i18n="btn.next">Continuar</button>
```

A função `setLanguage(lang)` atualiza toda a interface, incluindo `document.lang`, `document.title`, placeholders, aria-labels e listas geradas por JavaScript.

### Adicionar um Novo Idioma

1. Adicionar novo bloco em `TRANSLATIONS` (script.js) copiando todas as chaves do `pt`
2. Traduzir os valores
3. Adicionar botão de idioma no cabeçalho (index.html)

---

## 🎨 Design System

### Design Tokens (CSS Custom Properties)

**Modo Claro:** background `#f8f9fa`, surface `#ffffff`, texto `#1a1a2e`, marca verde `#1A6B3C`

**Modo Escuro:** background `#0f1419`, surface `#1a1f2e`, texto `#f0f2f5`, marca verde `#2d9d6c`

### Responsividade (Mobile-first)

| Breakpoint | Faixa |
| --- | --- |
| Mobile | 0 – 380px |
| Tablet | 381 – 640px |
| Desktop | 641px+ |

---

## 📊 Dados de Demonstração

Todos os dados são **fictícios** e armazenados via LocalStorage. Não há backend.

Inclui: 5 unidades de saúde mockadas, 6 especialidades, grade de horários disponíveis/indisponíveis e dias sem vagas fixos para demonstração.

> ⚠️ Este é um **projeto acadêmico**. Em produção seria necessário backend com autenticação, API real de agendamentos, validação server-side, criptografia de dados pessoais e conformidade com LGPD.

---

## 🧪 Checklist de Testes

### Navegação por Teclado

- [x] Navegar todas etapas pressionando `Tab`
- [x] Ativar botões com `Enter`
- [x] Ativar checkboxes com `Space`
- [x] Voltar com `Shift+Tab`
- [x] Foco visível em todos os elementos interativos
- [x] Setas navegam os dias do calendário

### Leitor de Tela

- [x] Títulos de etapas anunciados ao avançar
- [x] Labels associados aos campos de formulário
- [x] Erros de validação lidos via `role="alert"`
- [x] Progresso do stepper compreendido
- [x] Protocolo gerado anunciado ao confirmar

### Contraste

- [x] Modo claro: razão mínima de 7:1 (AAA)
- [x] Modo escuro: razão mínima de 4.5:1 (AA/AAA)
- [x] Nenhum elemento com texto abaixo de 16px em inputs

---

## 📝 Licença

Este projeto está licenciado sob a **GNU General Public License v3.0** — veja o arquivo [LICENSE](LICENSE) para detalhes.

Você pode usar, modificar e distribuir o código, inclusive em projetos comerciais, desde que inclua o aviso de licença, divulgue as mudanças e use a mesma licença (GPL v3).

---

## 👥 Autores

Desenvolvido como trabalho acadêmico para:

**Universidade Federal de Santa Catarina (UFSC)**
Campus Araranguá — Disciplina: Interação Humano-Computador (IHC)

---

## 🙏 Agradecimentos

- Professores e colegas da UFSC pelo feedback
- Comunidade de acessibilidade web
- W3C/WAI pelos padrões WCAG
- Todos os contribuidores e testadores

---

Desenvolvido com ❤️ e ♿ Acessibilidade em Mente
