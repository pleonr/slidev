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
# enable Comark Syntax: https://comark.dev/syntax/markdown
#comark: true
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
layout: image
image: /figmapenpot.png
background-size: contain
---

---
layout: image
image: /figma1.png
background-size: contain
---

---
layout: image
image: /figma2.png
background-size: contain
---

---
layout: image
image: /figma3.png
background-size: contain
---

---
layout: image
image: /figma4.png
background-size: contain
---

---
layout: image
image: /figma5.png
background-size: contain
---

---
layout: image
image: /figma6.png
background-size: contain
---

---
layout: image
image: /figma6.png
background-size: contain
---


---
layout: image
image: /figma7.png
background-size: contain
---

---
layout: image
image: /figma8.png
background-size: contain
---


---
layout: image
image: /penpot1.png
background-size: contain
---

---
layout: image
image: /penpot2.png
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
