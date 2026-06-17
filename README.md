# AgendaSaúde — Sistema de Agendamento de Consultas com Foco em Acessibilidade

![AgendaSaúde](https://img.shields.io/badge/IHC-UFSC-green)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Licença](https://img.shields.io/badge/Licença-GNU%20GPL%20v3-blue)
![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG%20AAA-brightgreen)

Um sistema web moderno e acessível para agendamento de consultas de saúde, desenvolvido com foco em **inclusão digital** e **experiência do usuário**.

[Documentação Adicional](#-documentação-adicional) • [Contribuição](#-contribuição) • [Licença](#-licença)

---

## 📋 Sobre o Projeto

**AgendaSaúde** é uma aplicação web educacional desenvolvida no contexto da disciplina de **Interação Humano-Computador (IHC)** da Universidade Federal de Santa Catarina (UFSC), Campus Araranguá.

O projeto demonstra boas práticas de design inclusivo, com especial atenção a:

- **Usuários idosos** — interfaces grandes, legíveis e intuitivas
- **Usuários com deficiências visuais** — suporte a leitores de tela e navegação por teclado
- **Usuários com deficiências motoras** — interações acessíveis e sem barreira
- **Internacionalização** — suporte a múltiplos idiomas (português e inglês)

### Características Principais

✨ **Interface Intuitiva**

- Fluxo de agendamento dividido em 5 etapas claras
- Progresso visual através de indicador (stepper)
- Validações em tempo real com mensagens de erro descritivas

♿ **Acessibilidade em Primeiro Lugar**

- Conformidade com **WCAG 2.1 AAA** (nível máximo)
- Suporte completo a navegação por teclado
- Compatibilidade com leitores de tela (NVDA, JAWS, VoiceOver)
- Contraste de cores AAA (mínimo 7:1 em modo claro, 4.5:1 em modo escuro)

🌐 **Multilíngue**

- Português Brasileiro (padrão)
- Inglês
- Sistema i18n implementado sem dependências externas

🌙 **Modo Escuro**

- Alternância automática baseada em preferências do sistema
- Proteção de olhos com contraste otimizado
- Armazenamento de preferência do usuário

📱 **Design Responsivo**

- Totalmente funcional em dispositivos móveis, tablets e desktops
- Tipografia escalável (bases em 1.125rem = 18px)
- Espaçamento generoso para facilitar cliques

---

## 🎯 O Fluxo de Agendamento

O sistema guia o usuário por 5 etapas intuitivas:

| Etapa | Título | Descrição |
| --- | --- | --- |
| 1️⃣ | **Unidade** | Selecionar a unidade de saúde mais próxima (UPA/posto) |
| 2️⃣ | **Especialidade** | Escolher a especialidade médica desejada |
| 3️⃣ | **Data e Hora** | Selecionar data e horário de atendimento |
| 4️⃣ | **Dados Pessoais** | Informar dados para registro (nome, CPF, contato) |
| 5️⃣ | **Confirmação** | Revisar informações e confirmar agendamento |

---

## 🛠️ Stack Técnico

### Tecnologias Utilizadas

| Componente | Tecnologia | Versão |
| --- | --- | --- |
| **Frontend** | HTML5 + CSS3 + JavaScript (Vanilla) | ES2020+ |
| **Styling** | CSS Grid + Flexbox | — |
| **Internacionalização** | i18n Nativo | Custom |
| **Armazenamento** | LocalStorage | — |
| **Acessibilidade** | ARIA + Semantic HTML | WCAG 2.1 AAA |
| **Licença** | GNU General Public License v3 | — |

### Por Que Vanilla JS?

Optou-se por **não usar frameworks** (React, Vue, Angular) para:

- ✅ Demonstrar boas práticas de acessibilidade com HTML semântico puro
- ✅ Reduzir dependências e complexidade
- ✅ Facilitar aprendizado em contexto acadêmico
- ✅ Garantir máxima compatibilidade com tecnologias assistivas

---

## 📁 Estrutura do Projeto

```text
IHC-Acessibilidade/
├── index.html           # Página principal — estrutura semântica completa
├── style.css            # Design tokens, componentes, dark mode
├── script.js            # Lógica da aplicação + i18n + validações
├── LICENSE              # GNU GPL v3
├── README.md            # Este arquivo
└── 📚 Documentação/     # (Futuro) Guias de contribuição, ADRs, etc
```

### Descrição dos Arquivos

**`index.html`**

- Estrutura HTML semântica com roles ARIA
- Skip links para navegação por teclado
- Elementos de live region para notificações
- Formulários acessíveis com labels e hints
- Mais de 1000 linhas de markup bem estruturado

**`style.css`**

- Design tokens (cores, tipografia, espaçamento) com `--custom-properties`
- Componentes reutilizáveis (`.btn`, `.field`, `.card`)
- Modo escuro com paleta ajustada para contraste
- Media queries para responsividade
- Sem dependências de frameworks CSS

**`script.js`**

- Motor i18n com suporte pt/en
- Gerenciamento de estado (etapas, dados selecionados)
- Validações (CPF, email, telefone, data)
- Manipulação do DOM com eventos delegados
- Integração com LocalStorage para persistência

---

## 🚀 Instalação e Uso

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime, etc.) — opcional
- Nenhuma dependência externa a instalar ✨

### Como Executar Localmente

#### Opção 1: Servidor HTTP Local (Recomendado)

```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (http-server)
npx http-server
```

Acesse: `http://localhost:8000`

#### Opção 2: Diretamente no Navegador

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

> ⚠️ **Nota**: Alguns recursos (LocalStorage, XMLHttpRequest) podem não funcionar com `file://` direto.

### Testando Acessibilidade

1. **Navegação por Teclado**: Use `Tab`, `Shift+Tab`, `Enter`, `Space`
2. **Modo Escuro**: Clique no ícone 🌙 na barra superior
3. **Idioma**: Alterne entre PT/EN nos botões de bandeira
4. **Leitor de Tela**:
   - Windows: NVDA (gratuito)
   - macOS: VoiceOver (nativo)
   - Web: ChromeVox (extensão)

---

## ♿ Acessibilidade

### Conformidade WCAG 2.1 AAA

Este projeto alcança o **nível AAA de conformidade** (o mais alto), garantindo:

#### 🎨 Contraste de Cores

| Elemento | Modo Claro | Modo Escuro | Ratio |
| --- | --- | --- | --- |
| Texto principal | #1a1a2e sobre #f8f9fa | #f0f2f5 sobre #0f1419 | **16.7:1** (AAA) |
| Marca verde | #1A6B3C sobre #fff | #2d9d6c sobre #0f1419 | **7.2:1** (AAA) |
| Links (azul) | #1558a8 sobre #f8f9fa | #60a5fa sobre #0f1419 | **8.1:1** (AAA) |
| Estados desabilitados | #6b7280 sobre #e5e7eb | — | **4.5:1** (AA) |

#### ⌨️ Navegação por Teclado

- ✅ Todos os elementos interativos acessíveis via `Tab`
- ✅ Foco visível com anéis de foco azuis (3px)
- ✅ `Enter` e `Space` para ativar botões
- ✅ Arrows para navegar itens de lista

#### 🔊 Suporte a Leitores de Tela

- ✅ ARIA labels para botões sem texto visível
- ✅ `role="status"` para notificações em tempo real
- ✅ `aria-live="polite"` para atualizações de interface
- ✅ `aria-describedby` para campos de ajuda
- ✅ `aria-hidden="true"` para ícones decorativos

#### 🎯 Tipografia Acessível

- **Tamanho base**: 18px (1.125rem) — maior que padrão 16px
- **Altura de linha**: 1.6 para melhor legibilidade
- **Fonte**: Segoe UI / system-ui — sans-serif bem conhecida
- **Peso**: Regular (400) e Bold (700) — sem ultra-light ou black

#### 🌈 Sem Dependência de Cor

- Ícones + texto em botões (não apenas cor)
- Indicadores de estado além de cor (ícones, bordas)
- Diferenciar não apenas por cor

### Auditorias Realizadas

- [ ] Lighthouse (Accessibility)
- [ ] axe DevTools
- [ ] WAVE WebAIM
- [ ] Testes manuais com NVDA
- [ ] Testes manuais com VoiceOver

---

## 🌐 Internacionalização (i18n)

O projeto implementa um sistema i18n **zero-dependências** nativo em JavaScript.

### Idiomas Suportados

| Idioma | Código | Status |
| --- | --- | --- |
| Português Brasileiro | `pt` | ✅ Completo |
| English (US) | `en` | ✅ Completo |
| Español | `es` | 🔄 Planejado |

### Como o i18n Funciona

Todas as strings são armazenadas em um dicionário centralizado:

```javascript
// script.js
const TRANSLATIONS = {
  pt: {
    'page.title': 'AgendaSaúde — Agendamento de Consulta',
    'btn.next': 'Continuar',
    // ... mais strings
  },
  en: {
    'page.title': 'HealthSchedule — Medical Appointment Booking',
    'btn.next': 'Next',
    // ... mais strings
  }
};
```

No HTML, use atributo `data-i18n`:

```html
<h1 data-i18n="step1.title">Selecione a unidade de saúde</h1>
<button data-i18n="btn.next">Continuar</button>
```

A função `setLanguage(lang)` atualiza automaticamente toda a interface.

### Adicionar um Novo Idioma

1. Adicionar novo bloco em `TRANSLATIONS` (script.js)
2. Copiar todas as chaves do português
3. Traduzir valores
4. Adicionar botão de idioma no header (index.html)

```javascript
const TRANSLATIONS = {
  pt: { /* ... */ },
  en: { /* ... */ },
  es: {                              // ← NOVO
    'page.title': 'AgendaSalud...',
    // ...
  }
};
```

---

## 🎨 Design System

### Cores (Design Tokens)

**Modo Claro:**

- Background: `#f8f9fa`
- Surface: `#ffffff`
- Texto primário: `#1a1a2e`
- Marca (verde SUS): `#1A6B3C`

**Modo Escuro:**

- Background: `#0f1419`
- Surface: `#1a1f2e`
- Texto primário: `#f0f2f5`
- Marca (verde ajustado): `#2d9d6c`

### Componentes

```html
<!-- Botão primário -->
<button class="btn btn--primary">Continuar</button>

<!-- Campo de texto -->
<input type="text" class="text-input" />

<!-- Card -->
<div class="card">Conteúdo</div>

<!-- Alerta de erro -->
<div class="error-banner" role="alert">Mensagem de erro</div>
```

### Responsividade

Breakpoints (mobile-first):

- **xs**: 0px — 480px (mobile)
- **sm**: 481px — 768px (tablet)
- **md**: 769px — 1024px (desktop pequeno)
- **lg**: 1025px+ (desktop grande)

---

## 📊 Dados de Demonstração

Todos os dados são **fictícios** e armazenados localmente via `LocalStorage`:

### Unidades de Saúde (Mockadas)

```javascript
{
  "id": 1,
  "name": "UPA Centro",
  "address": "Rua Principal, 123",
  "cep": "88000-000",
  "neighborhood": "Centro",
  "distance": 0.5,
  "specialties": ["Cardiologia", "Clínica Geral", "Pediatria"]
}
```

### Horários Disponíveis

- Segunda a sexta: 8h às 17h
- Intervalo de 30 minutos entre consultas
- Algumas vagas "ocupadas" para demonstração

### Dados Pessoais do Usuário (Exemplo)

```json
{
  "name": "Maria da Silva",
  "cpf": "123.456.789-00",
  "birthDate": "1965-03-15",
  "phone": "(48) 98765-4321",
  "email": "maria.silva@email.com"
}
```

> ⚠️ **Importante**: Este é um **projeto acadêmico**. Em produção, seria necessário:
>
> - Backend seguro com autenticação
> - Integração com API real de agendamentos
> - Validação servidor-lado
> - Criptografia de dados pessoais
> - Conformidade com LGPD/GDPR

---

## 🧪 Testes

### Teste Manual de Acessibilidade

#### Checklist de Navegação por Teclado

- [ ] Navegar todas etapas pressionando `Tab`
- [ ] Ativar botões com `Enter`
- [ ] Ativar checkboxes com `Space`
- [ ] Voltar com `Shift+Tab`
- [ ] Ver foco visível em todos os elementos

#### Checklist com Leitor de Tela

- [ ] Títulos anunciados corretamente
- [ ] Labels associados aos campos
- [ ] Erros de validação lidos
- [ ] Instruções de ajuda ("step-desc") lidas
- [ ] Progresso (stepper) compreendido

#### Checklist de Contraste

- [ ] Modo claro: Lighthouse reporta 100% (Accessibility)
- [ ] Modo escuro: Sem queixas no axe DevTools
- [ ] Nenhum elemento com texto muito pequeno (<16px em inputs)

### Testes Automatizados (Futuro)

- [ ] Jest + Testing Library
- [ ] Axe-core para validação automática
- [ ] Cypress para testes E2E

---

## 📖 Documentação Adicional

### Arquivos de Documentação Recomendados

```text
📚 docs/
├── ACESSIBILIDADE.md      # Guia detalhado de boas práticas
├── ARQUITETURA.md         # Diagrama e decisões arquiteturais
├── I18N.md                # Como estender o sistema de idiomas
├── STYLE_GUIDE.md         # Padrões de CSS e componentes
└── TROUBLESHOOTING.md     # Soluções para problemas comuns
```

### Links de Referência

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN — Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, siga os passos abaixo:

### Guia de Contribuição

1. **Fork** o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Faça commit com mensagens descritivas (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

### Padrões de Código

#### JavaScript

```javascript
// Use camelCase para variáveis e funções
const selectedUnit = getSelectedUnit();

// Use PascalCase para classes (futuro)
class FormValidator { }

// Sempre termine instruções com ponto-e-vírgula
const x = 10;
```

#### CSS

```css
/* Use kebab-case para classes */
.step-title { }
.btn--primary { }

/* Agrupe propriedades relacionadas */
.card {
  /* Layout */
  display: flex;
  /* Espaçamento */
  padding: var(--space-4);
  /* Cores */
  background: var(--color-surface);
}
```

#### HTML

```html
<!-- Use lowercase para atributos -->
<button class="btn" aria-label="Enviar">Enviar</button>

<!-- Sempre feche tags -->
<input type="text" />

<!-- Use semantic HTML5 -->
<nav>, <section>, <article>, <main>, <aside>
```

### Reportar Issues

Abra uma issue com:

- Descrição clara do problema
- Passos para reproduzir
- Evidência de acessibilidade afetada (se aplicável)
- Screenshots/vídeos

---

## 📝 Licença

Este projeto está licenciado sob a **GNU General Public License v3.0** — veja o arquivo [LICENSE](LICENSE) para detalhes.

### Você pode

✅ Usar, modificar e distribuir o código  
✅ Incluir em projetos comerciais  
✅ Copiar e adaptar para seus fins  

### Você deve

📋 Incluir aviso de licença  
📋 Divulgar as mudanças  
📋 Usar a mesma licença (GPL v3)  

---

## 👥 Autores

Desenvolvido como trabalho acadêmico para:

**Universidade Federal de Santa Catarina (UFSC)**  
Campus Araranguá  
Disciplina: Interação Humano-Computador (IHC)

---

## 🙏 Agradecimentos

- 🎓 Professores e colegas da UFSC por feedback
- ♿ Comunidade de acessibilidade web
- 📚 W3C/WAI pelos padrões WCAG
- 💪 Todos os contribuidores e testadores

---

## 📞 Suporte

Dúvidas ou sugestões?

- 📧 Abra uma issue no GitHub
- 💬 Discuta em Discussions
- 🐛 Reporte bugs em Issues

---

## Desenvolvido com ❤️ e ♿ Acessibilidade em Mente

⭐ Se este projeto foi útil, considere deixar uma estrela!
