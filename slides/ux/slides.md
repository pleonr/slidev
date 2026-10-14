---
src: ../cover/cover.md
theme: default
image: /side-logo.png
title: UI-UX
author: Pablo Leon Rodrigues
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
selectable: true
download: true
# duration of the presentation
#duration: 35min
export:
  format: pdf
  withClicks: false
seoMeta:
  ogTitle: Git
  ogDescription: Support material for classes WebMob, TEDSII
routerMode: hash
---

---
layout: image-right
image: /NielsenJakob.png
---

# UI-UX

Entender UX (User Experience), UI (User Interface) e Usabilidade é o primeiro passo para criar produtos digitais que não apenas funcionam, mas que as pessoas realmente gostam de usar. Embora esses termos sejam frequentemente usados como sinônimos, eles representam camadas diferentes de um mesmo processo.


> "To design an easy-to-use interface, pay attention to what users do, not what they say."
> — Jakob Nielsen

<!-- Jakob Nielsen holds a Ph.D. in human–computer interaction (HCI) from the Technical University of Denmark in Copenhagen.

From 1994 to 1998 he was a Sun Microsystems Distinguished Engineer. He was hired to make heavy-duty enterprise software easier to use, since large-scale applications had been the focus of most of his projects at the phone company and IBM. But luckily the job definition of a Distinguished Engineer is "you're supposed to be the world's leading expert in your field, so you figure out what would be most important for the company for you to work on." Therefore, Dr. Nielsen ended up spending most of his time at Sun on defining the emerging field of Web usability. He was usability lead for several design rounds of Sun's website and intranet (SunWeb), including the original SunWeb design in 1994. -->


---
layout: image
image: /uiux.png
background-size: contain
---

---
layout: two-cols
---

## UX Design: A Experiência do Usuário
O UX Design é o "sentimento" geral da interação. Ele foca na jornada do usuário desde o momento em que ele abre um aplicativo até atingir seu objetivo. O objetivo aqui é resolver problemas e garantir que a jornada seja lógica e satisfatória.

- Foco: Pesquisa, estratégia, fluxos de usuário e arquitetura da informação.

- Pergunta-chave: "Isso resolve o problema do usuário de forma eficiente?"

::right::

## UI Design: A Interface do Usuário
Se o UX é a estrutura e a lógica, o UI é a parte visual. É o que o usuário vê e toca. Um bom UI Design guia o usuário visualmente através da interface usando cores, tipografia, ícones e espaçamentos.

Foco: Estética, design visual, interatividade e guias de estilo.

Pergunta-chave: "A interface é atraente e os elementos visuais comunicam a função corretamente?"

---
layout: image
image: /heuristicas.png
background-seize: contain
---

---
layout: image-right
image: /h1.png
background-size: shrink
---

### H1 Visibilidade do Status do Sistema

O sistema deve sempre manter os usuários informados sobre o que está acontecendo, por meio de feedback apropriado dentro de um tempo razoável. Quando um usuário realiza uma ação, ele não deve ficar na dúvida se o comando foi processado ou se o site travou.

A transparência gera confiança. Sem esse feedback, o usuário pode clicar repetidamente em um botão ou abandonar a tarefa por incerteza.

- Exemplo: Uma barra de progresso ao carregar um arquivo ou o ícone de "digitando..." em aplicativos de mensagem.

---
layout: image
image: /feedback.png
background-size: contain
---

---
layout: image-right
image: /h2.png
background-size: shrink
---

### H2 Correspondência entre o Sistema e o Mundo Real

O sistema deve falar a linguagem do usuário, com palavras, frases e conceitos familiares, em vez de termos orientados ao sistema. A interface deve seguir convenções do mundo real, fazendo com que a informação apareça em uma ordem lógica e natural.

Isso reduz a carga cognitiva, pois o usuário não precisa aprender um novo vocabulário para navegar. Ícones que remetem a objetos físicos ajudam muito nessa associação imediata.

- Exemplo: O ícone de uma lixeira para excluir arquivos ou a organização de um e-commerce que simula um "carrinho de compras".

---
layout: image
image: /reconhecimento.png
background-size: contain
---

---
layout: image-right
image: /h3.png
background-size: shrink
---

### H3 Controle e Liberdade do Usuário

Usuários frequentemente escolhem funções do sistema por engano e precisam de uma "saída de emergência" claramente marcada para sair do estado indesejado sem ter que passar por um diálogo extenso.

A sensação de controle é vital para que o usuário se sinta seguro ao explorar a interface. Funções de desfazer e refazer são os pilares desta heurística, permitindo a correção rápida de erros comuns.

- Exemplo: O botão "Desfazer" (Undo) após excluir um e-mail ou a opção de cancelar um upload em curso.

---
layout: image-right
image: /h4.png
background-size: shrink
---

### H4 Consistência e Padrões

Os usuários não devem ter que se perguntar se palavras, situações ou ações diferentes significam a mesma coisa. É fundamental seguir as convenções da plataforma e manter uma identidade visual e funcional em todo o produto.

Se cada página do seu site usar um padrão de navegação diferente, o usuário ficará confuso e perderá tempo reaprendendo a interface. A consistência torna a usabilidade previsível e fluida.

- Exemplo: Botões de confirmação mantendo a mesma cor (ex: verde) em todo o software ou o menu principal sempre no mesmo local.

---
layout: image-right
image: /h5.png
background-size: shrink
---

### H5 Prevenção de Erros

Melhor do que boas mensagens de erro é um design cuidadoso que evita que o problema ocorra em primeiro lugar. Elimine condições propensas a erros ou verifique-as e apresente aos usuários uma opção de confirmação antes de comprometerem-se com a ação.

Prevenir é sempre mais barato e menos frustrante do que remediar. Validar campos de formulário em tempo real é uma excelente forma de aplicar este conceito.

- Exemplo: O Google sugerindo "Você quis dizer..." quando você digita algo errado ou um site que impede senhas muito curtas no momento do cadastro.

---
layout: image-right
image: /h6.png
background-size: shrink
---

### H6 Reconhecimento em vez de Memorização

Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O usuário não deve ter que se lembrar de informações de uma parte da interface para outra; as instruções de uso devem estar visíveis ou ser facilmente recuperáveis.

O cérebro humano é melhor em reconhecer padrões visuais do que em lembrar de comandos de texto decorados. Interfaces gráficas modernas são construídas inteiramente sobre este princípio.

- Exemplo: O histórico de "Buscas Recentes" no Instagram ou os ícones de ferramentas em um editor de fotos que mostram o nome da função ao passar o mouse.

---
layout: image-right
image: /h7.png
background-size: shrink
---

### H7 Flexibilidade e Eficiência de Uso

Atalhos — ocultos para o usuário novato — podem agilizar a interação para o usuário especialista, de modo que o sistema possa atender tanto a usuários inexperientes quanto experientes. Permita que os usuários personalizem ações frequentes.

Uma interface eficiente é aquela que não atrapalha quem está começando, mas oferece "vias expressas" para quem já domina a ferramenta. Isso aumenta drasticamente a produtividade a longo prazo.

- Exemplo: Atalhos de teclado como Ctrl+C e Ctrl+V ou a possibilidade de criar macros em softwares de edição.

---
layout: image-right
image: /h8.png
background-size: shrink
---

### H8 Estética e Design Minimalista

As interfaces não devem conter informações irrelevantes ou raramente necessárias. Cada unidade extra de informação em um diálogo compete com as unidades de informação relevantes e diminui sua visibilidade relativa.

O foco deve ser no conteúdo e na tarefa principal. Um design visualmente poluído distrai o usuário e dificulta a tomada de decisão, enquanto o minimalismo prioriza o que realmente importa.

- Exemplo: A página inicial do Google, que foca exclusivamente na barra de busca, evitando distrações desnecessárias.

---
layout: image-right
image: /h9.png
background-size: shrink
---

### H9 Ajude os Usuários a Reconhecerem, Diagnosticarem e Recuperarem-se de Erros

As mensagens de erro devem ser expressas em linguagem clara (sem códigos técnicos), indicar precisamente o problema e sugerir construtivamente uma solução.

Um erro sem explicação (como "Erro 404") deixa o usuário desamparado. Uma boa interface explica o que deu errado e aponta o caminho de volta para a segurança.

- Exemplo: Uma mensagem dizendo "Sua senha deve conter um número" em vez de apenas "Entrada inválida".

---
layout: image-right
image: /h10.png
background-size: shrink
---

### H10 Ajuda e Documentação

Embora seja melhor se o sistema puder ser usado sem documentação, pode ser necessário fornecer ajuda. Essa informação deve ser fácil de pesquisar, focada na tarefa do usuário, listar etapas concretas e não ser muito extensa.

A ajuda deve estar disponível no momento em que o usuário precisa, funcionando como um suporte para situações complexas que a interface intuitiva não conseguiu resolver sozinha.

- Exemplo: Uma seção de "Perguntas Frequentes" (FAQ) ou tutoriais interativos que guiam o usuário no primeiro acesso ao app.

---
layout: image
image: /deslizesxerros.png
background-size: contain
---

---
layout: image
image: /avaliacao.png
background-size: contain
---

---
layout: image
image: /a11y.png
background-size: contain
---

---
layout: image
image: /pour.png
background-size: contain
---

---

### Regra 60-30-10

No contexto de UX (User Experience) e UI (User Interface) a Regra 60-30-10 é uma das regras de design mais fundamentais para a criação de interfaces equilibradas.

A regra dita que uma paleta de cores deve ser dividida em três proporções distintas para criar hierarquia e contraste:

- Redução da Carga Cognitiva: Quando as cores são distribuídas com hierarquia clara, o cérebro do usuário processa a informação mais rápido. Ele entende imediatamente o que é fundo e o que é interativo.

- Acessibilidade: Ao reservar 10% para a cor de destaque, fica mais fácil garantir que esses elementos cruciais tenham o contraste necessário (seguindo as diretrizes da WCAG) em relação ao fundo.

- Equilíbrio Visual: Evita o erro comum de iniciantes de usar cores fortes em excesso, o que causa fadiga ocular e faz com que o design pareça amador.
<!--
Exemplo Prático: "Modo Escuro"

    60%: Cinza quase preto (Fundo da interface).

    30%: Cinza médio ou azul escuro (Cards e barras de ferramentas).

    10%: Verde limão ou Ciano (Botão de "Enviar" ou "Comprar"). -->

---
layout: image
image: /roda.png
background-size: contain
---

---
layout: image
image: /color-wheel.jpg
background-size: contain
---

---
layout: image
image: /mapacores.png
background-size: contain
---

---
layout: image
image: /mapacores2.png
background-size: contain
---

---
layout: image
image: /603010.png
background-size: contain
---

---
layout: image
image: /6030102.png
background-size: contain
---

---
layout: image
image: /teoriadascores.png
background-size: contain
---

---
layout: image
image: /darklight.png
background-size: contain
---

---
layout: image
image: /forms.png
background-size: contain
---

---
layout: image
image: /forms2.png
background-size: contain
---

---
layout: image
image: /hierarquiaproximidade.png
background-size: contain
---

---
layout: image
image: /LeiFitts.png
background-size: contain
---

---
layout: image
image: /LeiFitts2.png
background-size: contain
---

---
layout: image
image: /LeiHick.png
background-size: contain
---

---
layout: image
image: /leis.png
background-size: contain
---

---
layout: section
---

# De UX para Design Systems

Como manter uma boa experiência quando o produto (e o time) cresce?

---

### O problema da escala

Heurísticas, leis de UX e teoria das cores funcionam muito bem em uma tela. Mas o que acontece quando o produto tem **centenas de telas**, **vários times** e **várias plataformas** (web, Android, iOS)?

<v-clicks>

- Cada designer cria "o seu" botão primário, e surgem 12 tons diferentes de azul.
- Cada dev implementa o mesmo modal de um jeito diferente.
- O usuário encontra padrões distintos em cada parte do sistema e precisa **reaprender** a interface.
- Correções de acessibilidade precisam ser feitas tela por tela.

</v-clicks>

<v-click>

> Isso é uma violação direta da **H4 Consistência e Padrões** e da **H6 Reconhecimento em vez de Memorização**.

A resposta da indústria para esse problema é o **Design System**.

</v-click>

---

### O que é um Design System?

Um **Design System** é um conjunto de padrões, componentes reutilizáveis e regras documentadas que funciona como a **fonte única da verdade** sobre como um produto deve parecer e se comportar.

Ele não é só uma "biblioteca de componentes", é um **produto que serve outros produtos**.

- **Design Tokens**: as decisões visuais básicas, cores, tipografia, espaçamentos, bordas, sombras.
- **Componentes**: botões, inputs, cards, modais… prontos no Figma **e** no código.
- **Padrões (Patterns)**: como os componentes se combinam para resolver problemas recorrentes (formulários, navegação, estados de erro).
- **Diretrizes**: tom de voz, acessibilidade, quando usar (e quando **não** usar) cada componente.
- **Documentação e Governança**: quem mantém, como propor mudanças, versionamento.


---
layout: two-cols
---

### Style Guide × Biblioteca × Design System

| | O que contém |
|---|---|
| **Style Guide** | Cores, fontes, logo, regras visuais (estático) |
| **Biblioteca de Componentes** | Peças de UI reutilizáveis (Figma ou código) |
| **Design System** | Tudo isso **+** princípios, padrões, documentação, processo e time |

<br>

O Style Guide diz **como as coisas parecem**. O Design System diz **como as coisas funcionam, por que existem e como evoluem**.

::right::

### Por que isso é UX?

- **Consistência**: o usuário aprende uma vez e reaproveita em todo o produto.
- **Acessibilidade embutida**: contraste, foco e ARIA resolvidos **uma vez** no componente.
- **Velocidade**: o time foca no problema do usuário, não em redesenhar botões.
- **Comunicação**: designers e devs falam a mesma língua ("usa o `Button` variante `secondary`").
- **Qualidade previsível**: testes de usabilidade de um componente beneficiam todas as telas.

---

### Design Tokens

Tokens são as **menores decisões de design**, nomeadas e armazenadas como dados, e por isso podem ser usadas no Figma, na web, no Android e no iOS ao mesmo tempo. Lembra da regra **60-30-10**? Ela vira tokens:

```css
:root {
  /* Tokens primitivos: o valor bruto */
  --blue-600: #1351b4;
  --gray-50:  #f8f8f8;

  /* Tokens semânticos: a intenção */
  --color-background: var(--gray-50);   /* 60% */
  --color-surface:    #ffffff;          /* 30% */
  --color-primary:    var(--blue-600);  /* 10% */

  --spacing-sm: 8px;
  --spacing-md: 16px;
  --radius-md:  8px;
  --font-body:  'Rawline', sans-serif;
}
```
---

### Design Systems no mundo real

<div class="grid grid-cols-2 gap-x-8">
<div>

- [**Material Design**](https://m3.material.io/) — Google
- [**Human Interface Guidelines**](https://developer.apple.com/design/human-interface-guidelines) — Apple
- [**Fluent**](https://fluent2.microsoft.design/) — Microsoft
- [**Carbon**](https://carbondesignsystem.com/) — IBM

</div>
<div>

- [**Polaris**](https://polaris.shopify.com/) — Shopify
- [**Primer**](https://primer.style/) — GitHub
- [**Atlassian Design System**](https://atlassian.design/)
- [**Padrão Digital de Governo (gov.br)**](https://www.gov.br/ds/) — Governo Federal 🇧🇷

</div>
</div>

<br>

> Exercício rápido: abra dois serviços do gov.br diferentes. Repare como botões, cabeçalhos e formulários são iguais, isso é o Design System trabalhando.

<br>

Mas fica uma pergunta: **como organizar** centenas de componentes de forma que eles se encaixem uns nos outros?

---
layout: section
---

# Atomic Design

Uma metodologia para construir Design Systems — de baixo para cima

---

### Atomic Design

Proposto por **Brad Frost** em 2013 (e depois no livro *Atomic Design*, 2016), a metodologia se inspira na **química**: toda matéria é formada por átomos, que se combinam em moléculas, que formam organismos mais complexos.

A ideia central: **não desenhamos páginas, desenhamos sistemas de componentes**.

<div class="flex items-center justify-between gap-2 mt-10 text-center">
  <div class="flex-1 rounded-lg p-3 bg-emerald-500/20 border border-emerald-500">
    <div class="text-2xl">⚛️</div><b>Átomos</b>
  </div>
  <div class="text-2xl">→</div>
  <div class="flex-1 rounded-lg p-3 bg-sky-500/20 border border-sky-500">
    <div class="text-2xl">🧪</div><b>Moléculas</b>
  </div>
  <div class="text-2xl">→</div>
  <div class="flex-1 rounded-lg p-3 bg-violet-500/20 border border-violet-500">
    <div class="text-2xl">🦠</div><b>Organismos</b>
  </div>
  <div class="text-2xl">→</div>
  <div class="flex-1 rounded-lg p-3 bg-amber-500/20 border border-amber-500">
    <div class="text-2xl">📐</div><b>Templates</b>
  </div>
  <div class="text-2xl">→</div>
  <div class="flex-1 rounded-lg p-3 bg-rose-500/20 border border-rose-500">
    <div class="text-2xl">📄</div><b>Páginas</b>
  </div>
</div>

<div class="flex justify-between mt-3 text-xs opacity-70">
  <span>abstrato / reutilizável</span>
  <span>concreto / específico</span>
</div>

<!-- Os três primeiros níveis vêm da química; os dois últimos vêm do vocabulário de web e são onde o sistema encontra o conteúdo real. -->

---
layout: two-cols
---

### ⚛️ Átomos

Os blocos mais básicos da interface. Não podem ser divididos sem perder a função.

- Botões, inputs, labels, ícones, checkboxes
- Também os **design tokens**: cores, fontes, espaçamentos

Sozinhos raramente são úteis, mas definem a **base visual** de todo o sistema.

::right::

<div class="flex flex-col gap-5 mt-12 items-start">
  <label class="text-sm font-bold">E-mail</label>
  <input class="border border-gray-400 rounded px-3 py-2 w-60 text-black bg-white" placeholder="seu@email.com" />
  <button class="bg-blue-600 text-white rounded px-4 py-2">Buscar</button>
  <div class="flex gap-3">
    <span class="w-8 h-8 rounded bg-emerald-500"></span>
    <span class="w-8 h-8 rounded bg-blue-600"></span>
    <span class="w-8 h-8 rounded bg-gray-300"></span>
    <span class="text-xl">🔍</span>
  </div>
</div>

---
layout: two-cols
---

### 🧪 Moléculas

Grupos simples de átomos que funcionam juntos como **uma unidade**, com **uma única responsabilidade**.

- Campo de busca = label + input + botão
- Campo de formulário = label + input + mensagem de erro
- Item de menu = ícone + texto

Aqui o átomo ganha **propósito**: um input sozinho não diz nada; ao lado de um botão "Buscar", ele vira uma busca.

::right::

<div class="mt-16 flex flex-col gap-10">
  <div class="flex gap-2 items-end">
    <div class="flex flex-col gap-1">
      <label class="text-sm font-bold">Buscar no site</label>
      <input class="border border-gray-400 rounded px-3 py-2 w-56 text-black bg-white" placeholder="Digite um termo..." />
    </div>
    <button class="bg-blue-600 text-white rounded px-4 py-2">🔍</button>
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-bold">Senha</label>
    <input class="border-2 border-red-500 rounded px-3 py-2 w-56 text-black bg-white" type="password" value="123" />
    <span class="text-xs text-red-500">A senha deve ter pelo menos 8 caracteres</span>
  </div>
</div>

<!-- Repare que a molécula de senha já aplica a H9: mensagem de erro clara, junto do campo. Fazendo isso uma vez na molécula, todos os formulários herdam. -->

---
layout: two-cols
---

### 🦠 Organismos

Componentes **mais complexos**, formados por moléculas e/ou átomos, que formam uma **seção distinta** da interface.

- Cabeçalho = logo + menu de navegação + campo de busca
- Card de produto = imagem + título + preço + botão "Comprar"
- Formulário de login completo

Organismos já são reconhecíveis pelo usuário como "partes" da tela.

::right::

<div class="mt-16 border rounded-lg overflow-hidden text-sm">
  <div class="flex items-center justify-between bg-gray-800 text-white px-4 py-3">
    <b>🛒 MinhaLoja</b>
    <div class="flex gap-3 opacity-80"><span>Início</span><span>Produtos</span><span>Contato</span></div>
    <div class="flex">
      <input class="rounded-l px-2 py-1 w-24 text-black bg-white" placeholder="Buscar" />
      <button class="bg-blue-600 rounded-r px-2">🔍</button>
    </div>
  </div>
</div>

<div class="mt-6 border rounded-lg p-4 w-48 text-sm">
  <div class="h-20 bg-gray-300 rounded mb-2 flex items-center justify-center text-3xl">👟</div>
  <b>Tênis Runner</b>
  <div class="text-emerald-500 font-bold">R$ 299,90</div>
  <button class="bg-blue-600 text-white rounded px-3 py-1 mt-2 w-full">Comprar</button>
</div>

---
layout: two-cols
---

### 📐 Templates

Organismos posicionados em um **layout**. O template mostra a **estrutura do conteúdo**, não o conteúdo final.

- É o "esqueleto" da página — muito próximo de um **wireframe**.
- Usa conteúdo de exemplo (placeholders).
- Responde: *onde fica cada coisa? qual a hierarquia?*

Aqui entram as leis que já vimos: **proximidade**, **hierarquia visual**, **Lei de Fitts**.

::right::

<div class="mt-12 border-2 border-dashed border-gray-400 rounded-lg p-3 flex flex-col gap-2 text-xs text-center opacity-80">
  <div class="bg-gray-500/30 rounded py-2">Cabeçalho (organismo)</div>
  <div class="bg-gray-500/20 rounded py-6">Banner [imagem 1200×400]</div>
  <div class="grid grid-cols-3 gap-2">
    <div class="bg-gray-500/20 rounded py-8">Card de produto</div>
    <div class="bg-gray-500/20 rounded py-8">Card de produto</div>
    <div class="bg-gray-500/20 rounded py-8">Card de produto</div>
  </div>
  <div class="bg-gray-500/30 rounded py-2">Rodapé (organismo)</div>
</div>

---

### 📄 Páginas

Instâncias concretas de templates, com **conteúdo real**: textos, imagens, dados de verdade.

É no nível de página que **validamos a UX**:

- E se o nome do produto tiver 80 caracteres? E se o usuário não tiver foto de perfil?
- Como fica a tela com o carrinho vazio? E com 50 itens?
- O conteúdo real cabe no template? A hierarquia continua clara?
- É aqui que fazemos os **testes de usabilidade** — o usuário nunca vê um "átomo", ele vê a página.

> Se a página revela um problema, a correção volta para o nível certo: ajustar o **átomo** corrige **todas** as páginas que o usam.


---

### Atomic Design no código

A mesma hierarquia costuma aparecer na estrutura de pastas de projetos front-end (Vue, React, Angular):

<div class="grid grid-cols-2 gap-8">
<div>

```text
src/
└── components/
    ├── atoms/
    │   ├── BaseButton.vue
    │   ├── BaseInput.vue
    │   └── BaseLabel.vue
    ├── molecules/
    │   └── SearchField.vue
    ├── organisms/
    │   └── AppHeader.vue
    ├── templates/
    │   └── CatalogLayout.vue
    └── pages/
        └── HomePage.vue
```

</div>
<div>

```vue
<!-- molecules/SearchField.vue -->
<script setup>
import BaseLabel from '../atoms/BaseLabel.vue'
import BaseInput from '../atoms/BaseInput.vue'
import BaseButton from '../atoms/BaseButton.vue'
</script>

<template>
  <div class="search-field">
    <BaseLabel for="q">Buscar</BaseLabel>
    <BaseInput id="q" />
    <BaseButton>🔍</BaseButton>
  </div>
</template>
```

</div>
</div>

Ferramentas como o [**Storybook**](https://storybook.js.org/) documentam e testam cada nível isoladamente.

---

### Atomic Design no Figma / Penpot

As ferramentas de design já trabalham com essa lógica:

- **Componentes** (Main component): o átomo ou molécula "original".
- **Instâncias**: cópias que herdam alterações do componente principal.
- **Variantes / Propriedades**: estados de um mesmo componente (`primary`, `secondary`, `disabled`, `hover`).
- **Variables / Styles**: os design tokens (cores, tipografia, espaçamentos).
- **Bibliotecas compartilhadas**: publicam o Design System para todos os arquivos do time.

<br>

> Altere a cor do átomo **Botão** no componente principal → todos os botões de todas as telas são atualizados. É o Atomic Design aplicado na prática.

---

### Cuidados com o Atomic Design

<v-clicks>

- **Não é um processo linear**: não é preciso desenhar todos os átomos antes da primeira página. Designers alternam entre os níveis o tempo todo.
- **"Isso é molécula ou organismo?"**: o time pode perder tempo discutindo a classificação. O importante é a **combinação e a reutilização**, não o rótulo.
- **Adapte a nomenclatura**: muitos times usam outros nomes (`foundations`, `components`, `patterns`, `layouts`). Material e gov.br, por exemplo, não usam "átomos".
- **Não crie componentes cedo demais**: abstraia quando um padrão se repetir de verdade, não antes.

</v-clicks>

<v-click>

> "Atomic design is not a linear process, but rather a mental model to help us think of our user interfaces as both a cohesive whole and a collection of parts at the same time."
> — Brad Frost

</v-click>

---

### Exercício: decompondo uma interface

Escolha uma tela de um app que você usa todos os dias (Instagram, iFood, app do seu banco, Spotify…) e identifique:

1. **Átomos**: quais são as cores, fontes, ícones e botões básicos? Quantas variações de botão existem?
2. **Moléculas**: quais grupos pequenos se repetem? (ex.: avatar + nome de usuário)
3. **Organismos**: quais seções completas você reconhece? (ex.: post do feed, barra de navegação inferior)
4. **Template**: desenhe o esqueleto da tela, sem conteúdo.
5. **Página**: o que muda quando o conteúdo é real? Encontre um caso extremo (texto longo, lista vazia).

<br>

**Bônus**: monte os átomos e uma molécula como **componentes** no Figma ou Penpot.

---
layout: image
image: /figmapenpot.png
background-size: contain
---

---
layout: image
image: /ciclo.png
background-size: contain
---

---

[**Seven essential UI design principles**](https://www.figma.com/resource-library/ui-design-principles/)

[**"10 Usability Heuristics for User Interface Design"**](https://www.nngroup.com/articles/ten-usability-heuristics/)

[**Web UX: Study Guide**](https://www.nngroup.com/articles/web-ux-study-guide/)

[**The A11Y Project**](https://www.a11yproject.com/)

[**"Checklist for Moderating a Usability Test"**](https://www.nngroup.com/articles/usability-checklist/)

[**"Laws of UX"**](https://lawsofux.com/)

[**"How to write a user testing report that people will actually read - UX Collective"**](`uxdesign.cc`)

[**"Human Interface Guidelines | Apple Developer Documentation"**](https://developer.apple.com/design/human-interface-guidelines)

[**Medium UX**](https://uxdesign.cc/)

[**Atomic Design — Brad Frost (livro online)**](https://atomicdesign.bradfrost.com/)

[**Padrão Digital de Governo — Design System gov.br**](https://www.gov.br/ds/)

---

### O que vamos construir

Uma pequena vitrine de produtos, organizada com Atomic Design:

| Nível | Componente | Composição |
|---|---|---|
| **Tokens** | `index.css` | cores, raio, fonte, tema escuro |
| **Átomo** | `AppButton` | botão do shadcn + estado de carregamento |
| **Átomo** | `AppInput` | input do shadcn + ícone + estado de erro |
| **Molécula** | `SearchBar` | `AppInput` + `AppButton` |
| **Organismo** | `Header` | logo + navegação + `SearchBar` |
| **Template** | `CatalogTemplate` | cabeçalho + título + grade de conteúdo |
| **Página** | `HomePage` | template + dados reais de produtos |

<br>

**Por que shadcn/ui?** Ele não é uma biblioteca instalada como dependência: o CLI **copia o código-fonte** dos componentes para o seu projeto. O código passa a ser **seu**, e você pode adaptá-lo ao seu Design System.

---

### Passo 1 — Criar o projeto React com Vite

```bash
npm create vite@latest meu-design-system -- --template react
cd meu-design-system
npm install
```

<br>

Faça uma pequena limpeza no projeto gerado:

- Apague `src/App.css` e remova a linha `import './App.css'` do `src/App.jsx`.
- Apague todo o conteúdo de `src/index.css` (vamos reescrevê-lo no próximo passo).

---

### Passo 2 — Instalar o Tailwind CSS

O shadcn/ui usa o **Tailwind CSS** para estilizar os componentes.

```bash
npm install tailwindcss @tailwindcss/vite
```

Substitua o conteúdo de `src/index.css` por:

```css
@import "tailwindcss";
```

---

### Passo 3 — Configurar o alias `@/`

O shadcn importa os arquivos com `@/components/...`. Precisamos ensinar isso ao **editor** (VS Code) e ao **Vite**.

<div class="grid grid-cols-2 gap-6">
<div>

Crie o arquivo `jsconfig.json` na raiz do projeto

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

</div>
<div>

`vite.config.js`

```js
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

</div>
</div>

---

### Passo 4 — Iniciar o shadcn/ui

```bash
npx shadcn@latest init
```

Responda às perguntas do CLI (escolha uma cor base, por exemplo *Neutral*). Como o projeto não tem `tsconfig.json`, o shadcn detecta que é **JavaScript** e gera arquivos `.jsx` (opção `"tsx": false` no `components.json`). Ele vai:

- criar o `components.json` (configuração do shadcn);
- criar `src/lib/utils.js` com a função `cn()` (junta classes do Tailwind sem conflitos);
- reescrever o `src/index.css` com as **variáveis de tema** (nossos design tokens!).

Agora adicione os componentes base que vamos usar:

```bash
npx shadcn@latest add button input card
```

Eles são criados em `src/components/ui/`. Abra o arquivo `button.jsx` e veja que o código é seu.

---

### Passo 5 — Estrutura de pastas Atomic

```text
src/
├── components/
│   ├── ui/              ← primitivos gerados pelo shadcn (não usados direto nas telas)
│   ├── atoms/           ← AppButton, AppInput
│   ├── molecules/       ← SearchBar
│   ├── organisms/       ← Header
│   └── templates/       ← CatalogTemplate
├── pages/               ← HomePage
├── lib/utils.js
└── index.css            ← design tokens
```

<br>

> **Regra de dependência:** cada nível só importa dos níveis **abaixo** dele. Um átomo nunca importa uma molécula; uma página nunca recebe estilos "soltos", ela só monta componentes.

---

### Passo 6 — Design Tokens no `index.css`

O shadcn gerou dezenas de variáveis. Edite os **valores** para aplicar a identidade da sua marca e crie tokens novos quando precisar:

```css {*}{maxHeight:'360px'}
:root {
  --radius: 0.75rem;                       /* cantos mais arredondados */
  --background: oklch(0.98 0 0);           /* 60% — fundo */
  --card: oklch(1 0 0);                    /* 30% — superfícies */
  --primary: oklch(0.45 0.18 260);         /* 10% — azul da marca */
  --primary-foreground: oklch(0.98 0 0);
  --success: oklch(0.6 0.15 150);          /* token NOVO */
  --success-foreground: oklch(0.98 0 0);
  /* ...demais variáveis geradas pelo shadcn */
}

.dark {
  --primary: oklch(0.7 0.15 260);          /* mais claro no tema escuro */
  --success: oklch(0.7 0.15 150);
  --success-foreground: oklch(0.2 0 0);
  /* ... */
}

@theme inline {
  /* este bloco já existe: só acrescente as linhas abaixo */
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --font-sans: "Inter Variable", sans-serif;
}
```

O `@theme inline` transforma tokens em classes do Tailwind: `bg-success`, `text-success-foreground`, `font-sans`…

---

### Passo 7 — Fonte e tema escuro

Instale a fonte usada no token `--font-sans`:

```bash
npm install @fontsource-variable/inter
```

E importe no `src/main.jsx`, **antes** do `index.css`:

```js
import "@fontsource-variable/inter"
import "./index.css"
```

<br>

Para testar o **tema escuro**, adicione a classe `dark` à tag `<html>` em `index.html`:

```html
<html lang="pt-BR" class="dark">
```

Todos os componentes trocam de cor automaticamente, porque usam **tokens semânticos** (`bg-primary`) e não cores fixas (`bg-blue-600`).

> Dica: gere paletas completas em [ui.shadcn.com/themes](https://ui.shadcn.com/themes) e cole no `index.css`.

---

### Passo 8 — Aplicando estilos ao componente base

Como o código do shadcn é seu, você pode criar **variantes** do Design System direto no `src/components/ui/button.jsx`. Localize o objeto `variant` dentro de `buttonVariants` e acrescente:

```js {7}
const buttonVariants = cva("...", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "...",
      outline: "...",
      success: "bg-success text-success-foreground hover:bg-success/90",
      // ...
    },
```

<br>

Agora `<Button variant="success">` existe em todo o projeto e usa o token `--success`.

O `cva` (*class-variance-authority*) é o que organiza as variantes: cada combinação de `variant` e `size` vira um conjunto de classes.

---

### Passo 9 — ⚛️ Átomo 1: `AppButton`

`src/components/atoms/AppButton.jsx` acrescenta um estado de **carregamento** ao botão. Isso aplica a heurística **H1 (visibilidade do status do sistema)** e evita o clique duplo.

```jsx
import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

// Recebe todas as props do Button do shadcn (variant, size, onClick...)
// e acrescenta a prop `loading`
export function AppButton({ loading = false, disabled, children, ...props }) {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading && <Loader2Icon className="animate-spin" />}
      {children}
    </Button>
  )
}
```

---

### Passo 10 — ⚛️ Átomo 2: `AppInput`

`src/components/atoms/AppInput.jsx` acrescenta um **ícone** opcional e um estado de **erro** (`aria-invalid`, que o shadcn já estiliza com a cor `destructive`).

```jsx {*}{maxHeight:'380px'}
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// icon: elemento opcional exibido à esquerda | invalid: ativa o estado de erro
export function AppInput({ icon, invalid = false, className, ...props }) {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground [&_svg]:size-4">
          {icon}
        </span>
      )}
      <Input
        aria-invalid={invalid || undefined}
        className={cn(icon && "pl-9", className)}
        {...props}
      />
    </div>
  )
}
```

---

### Passo 11 — 🧪 Molécula: `SearchBar`

`src/components/molecules/SearchBar.jsx` junta os dois átomos em uma unidade com **uma única responsabilidade**: buscar.

```jsx {*}{maxHeight:'380px'}
import { useState } from "react"
import { SearchIcon } from "lucide-react"
import { AppButton } from "@/components/atoms/AppButton"
import { AppInput } from "@/components/atoms/AppInput"

// onSearch(term) é chamada quando o formulário é enviado
export function SearchBar({ onSearch, loading = false }) {
  const [term, setTerm] = useState("")

  return (
    <form
      role="search"
      className="flex w-full gap-2"
      onSubmit={(e) => {
        e.preventDefault()
        onSearch(term.trim())
      }}
    >
      <AppInput
        icon={<SearchIcon />}
        placeholder="Buscar produtos..."
        aria-label="Buscar produtos"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <AppButton type="submit" loading={loading}>Buscar</AppButton>
    </form>
  )
}
```

---

### Passo 12 — 🦠 Organismo: `Header`

`src/components/organisms/Header.jsx` é uma **seção completa** da interface: logo + navegação + a molécula de busca.

```jsx {*}{maxHeight:'380px'}
import { SearchBar } from "@/components/molecules/SearchBar"

const links = ["Início", "Produtos", "Contato"]

export function Header({ onSearch }) {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <span className="text-xl font-bold text-primary">MinhaLoja</span>

        <nav className="hidden gap-4 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-foreground">
              {link}
            </a>
          ))}
        </nav>

        <div className="ml-auto w-full max-w-sm">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </header>
  )
}
```

---

### Passo 13 — 📐 Template: `CatalogTemplate`

`src/components/templates/CatalogTemplate.jsx` define **onde** cada coisa fica, sem saber **qual** conteúdo será exibido. O conteúdo chega por `props` (`header`, `title`, `children`).

```jsx
// header: organismo de cabeçalho | title: texto do título | children: itens da grade
export function CatalogTemplate({ header, title, children }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {header}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="mb-6 text-2xl font-semibold">{title}</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
      </main>
    </div>
  )
}
```

---

### Passo 14 — 📄 Página: `HomePage`

`src/pages/HomePage.jsx` preenche o template com **dados reais** e trata os **casos extremos**, como a busca sem resultados.

```jsx {*}{maxHeight:'380px'}
import { useState } from "react"
import { AppButton } from "@/components/atoms/AppButton"
import { Header } from "@/components/organisms/Header"
import { CatalogTemplate } from "@/components/templates/CatalogTemplate"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: "Tênis Runner", price: 299.9 },
  { id: 2, name: "Mochila Urbana", price: 189.9 },
  { id: 3, name: "Garrafa Térmica", price: 79.9 },
]

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export function HomePage() {
  const [term, setTerm] = useState("")
  const visible = products.filter((p) => p.name.toLowerCase().includes(term.toLowerCase()))

  return (
    <CatalogTemplate header={<Header onSearch={setTerm} />} title="Produtos em destaque">
      {visible.length === 0 && (
        <p className="text-muted-foreground">Nenhum produto encontrado para "{term}".</p>
      )}
      {visible.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-success">
            {brl.format(product.price)}
          </CardContent>
          <CardFooter>
            <AppButton variant="success" className="w-full">Comprar</AppButton>
          </CardFooter>
        </Card>
      ))}
    </CatalogTemplate>
  )
}
```

---

### Passo 15 — Juntando tudo

`src/App.jsx`:

```jsx
import { HomePage } from "@/pages/HomePage"

export default function App() {
  return <HomePage />
}
```

```bash
npm run dev
```

<br>

**Teste o Design System:**

- Mude `--primary` no `index.css` → logo, botões e foco dos inputs mudam juntos.
- Mude `--radius` → todos os botões, inputs e cards mudam juntos.
- Ative a classe `dark` no `<html>` → a página inteira troca de tema.
- Busque por "xyz" → o caso de lista vazia aparece (validação no nível de **página**).

---

### Desafios

1. **Átomo:** crie um `AppBadge` (`npx shadcn@latest add badge`) com as variantes `novo` e `promocao`.
2. **Molécula:** crie um `FormField` = label + `AppInput` + mensagem de erro (lembre da **H9**).
3. **Organismo:** extraia o card da `HomePage` para um organismo `ProductCard`. Por que ele é um organismo e não uma molécula?
4. **Organismo:** monte um `LoginForm` usando `FormField` e `AppButton` com `loading`.
5. **Página:** crie uma `LoginPage` reaproveitando um novo template `AuthTemplate`.
6. **Bônus:** adicione um botão que alterna entre tema claro e escuro, e documente seus componentes no [Storybook](https://storybook.js.org/).

<br>

> Ao final, compare: quantas linhas de CSS você escreveu na `LoginPage`? Se a resposta for "quase nenhuma", o Design System está funcionando.
