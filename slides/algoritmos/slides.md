---
src: ../cover/cover.md
theme: default
image: /side-logo.png
title: Algoritmos
author: Pablo Leon Rodrigues
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
selectable: true
download: true
export:
  format: pdf
  withClicks: false
seoMeta:
  ogTitle: Algoritmos
  ogDescription: Support material for classes WebLab, DevWeb
routerMode: hash
comark: true
# duration of the presentation
#duration: 35min
---

---

# Algoritmos e programação

Podemos definir tipos de conhecimento em:

- Conhecimento declarativo
  Onde conhecimento declarativo refere-se ao conhecimento sobre fatos, conceitos e descrições.
  - 2 é um número par
  - valor de é aproximadamente 3.141592653589793…
  - Expressamos usando linguagem Natural

- Conhecimento Imperativo
  E o conhecimento imperativo refere-se ao "saber como", enquanto na computação utilizamos o conhecimento imperativo para realizar tarefas ou procedimentos, sendo relacionado a execução e prática.
  - um número é considerado par se ele for divisível por 2 e o resto da divisão for igual a zero.
  - é a razão entre a circunferência de um círculo e seu diâmetro.
  - Expressamos usando algoritmos

---
layout: two-cols
---

## Pensamento computacional

Utilizando conhecimento imperativo precisamos mudar a forma de pensar:

- Pensamento Instintivo modo rápido e intuitivo de processamento mental guiado por emoções e instintos

- Pensamento Lógico abordagem racional e sistemática que busca fundamentarse em fatos e evidências

::right::

- Pensamento Computacional forma de pensamento abstrato que se assemelha aos processos de um computador e é frequentemente utilizado para resolver problemas complexos e estratégicos

---

## Pensamento Computacional

O pensamento computacional é uma forma de resolver problemas utilizando estratégias e métodos inspirados na ciência da computação. Ele não significa apenas programar computadores, mas aprender a pensar de maneira lógica, organizada e estruturada.

Ele é utilizado diariamente em diversas situações, por exemplo:

- organizar uma rotina
- seguir uma receita
- montar um móvel
- planejar uma viagem
- resolver problemas matemáticos
- desenvolver programas e aplicativos

---
layout: image
image: /pensamento.png
backgroundSize: contain
---

---

### Pilares

- **Decomposição** Dividir um problema complexo em
partes menores e mais fáceis para se trabalhar e
encontrar uma solução

- **Reconhecimento** de padrões Permite identificar
características que sejam em comum e que se
repita no problema como um todo

- **Abstração** É um mecanismo importante no
processo de solução de problemas, o qual permite
simplificar a realidade e representar os aspectos
mais relevantes

- **Algoritmo** É uma lista de etapas que permitem
você completar uma determinada tarefa em passo
a passo para que seja fácil atingir os resultados
desejados

---
layout: image
image: /resolucao.png
backgroundSize: contain
---

---
layout: image
image: /decomposicao.png
backgroundSize: contain
---

---
layout: image
image: /reconhecimento.png
backgroundSize: contain
---

---
layout: image
image: /abstracao.png
backgroundSize: contain
---

---
layout: image
image: /algoritmo.png
backgroundSize: contain
---

---
layout: two-cols
---

## Programação
Programação é o processo de criação, desenvolvimento e implementação de algoritmos para resolver problemas computacionais por meio de uma
linguagem de programação. Esse processo envolve a escrita de instruções que um computador pode entender e executar para realizar tarefas específicas de
forma automática e eficiente.

::right::

```python{lines:true}
# Solicita os números ao usuário
num1 = float(
  input("Digite o primeiro número: ")
)
num2 = float(
  input("Digite o segundo número: ")
)
# Realiza a soma
soma = num1 + num2

# Exibe o resultado
print("A soma é: ", soma)
```

---
layout: two-cols
---

## Algoritmos

"Algoritmo é qualquer procedimento computacional
bem definido que recebe algum valor ou conjunto de
valores como entrada e produz algum valor ou
conjunto de valores como saída em um período de
tempo finito". (CORMEN et al., 2012)

Um algoritmo é uma sequência finita e ordenada de
passos ou instruções bem definidas, destinadas a
resolver um problema ou realizar uma tarefa
específica.

Um exemplo de um algoritmo é uma receita de bolo.
Como podemos fazer o computador efetuar a soma
de dois números?

::right::

```python{lines:true}
Início
inteiro num1
inteiro num2
inteiro soma
Escreva "Digite o primeiro número:"
Leia num1
Escreva "Digite o segundo número:"
Leia num2
soma ← num1 + num2
Escreva "A soma é: ", soma
Fim
```

---
layout: two-cols
---

### Pseudocódigo
O pseudocódigo é uma forma simplificada e
estruturada de descrever algoritmos usando uma
linguagem próxima da natural, mas com elementos da
lógica de programação. Ele é utilizado para
representar a lógica de um programa de forma clara e
compreensível, sem se prender às regras rígidas de
uma linguagem de programação específica.


O objetivo do pseudocódigo é facilitar o planejamento
e entendimento da solução de um problema antes de
sua implementação em uma linguagem de
programação real.

::right::


| Categoria | Palavras-chave|
|--|--|
| Estrutura | Início, Fim|
| Entrada/Saída| Leia, Escreva|
| Controle de Fluxo |  Se, Senão, FimSe|
| Repetição | Enquanto, Para, Repita|
| Variáveis | Inteiro, Real, Caractere|
| Funções | Função, Procedimento, Retorne|

---
layout: image
image: /processamento.png
backgroundSize: contain
---

---
layout: image
image: /logicaprogramacao.png
backgroundSize: contain
---

---

<Youtube id="FN2RM-CHkuI" height="100%" width="100%"/>

---
layout: image
image: /algoritmo2.png
backgroundSize: contain
---

---
layout: image
image: /algoritmo3.png
backgroundSize: contain
---

---
layout: image
image: /algoritmo4.png
backgroundSize: contain
---

---
layout: image
image: /algoritmo5.png
backgroundSize: contain
---

---
layout: image
image: /trindadelogica.png
backgroundSize: contain
---

---
layout: two-cols
---

Faça um algoritmo que (FUAQ) Troque o pneu de um
carro.

<v-click>

```python{lines:true}
Início
desligar o carro
pegar ferramentas
pegar o estepe
posicionar o macaco
suspender o carro com o macaco
desenroscar os 4 parafusos
do pneu furado
remover pneu
colocar o estepe
enroscar os 4 parafusos
baixar o carro com o macaco
guardar ferramentas
Fim
```

</v-click>

::right::

FUAQ que receba um número e mostre o dobro desse
número

<v-click>

```python{lines:true}
Início
inteiro numero
Escreva "Digite um número:"
Leia numero
dobro = numero * 2
Escreva "O dobro de ", numero
Escreva " é " dobro
Fim
```

</v-click>

---

## Teste de Mesa

O teste de mesa (ou simulação manual) é uma técnica utilizada para validar algoritmos e programas,
analisando seu comportamento passo a passo antes da execução em um computador. O objetivo é identificar
erros lógicos e verificar se a saída gerada corresponde ao esperado.

Essa técnica é chamada de "teste de mesa" porque tradicionalmente era feita à mão, em papel ou em uma
tabela, antes da era dos computadores modernos.

---
layout: two-cols
---

Faça um algoritmo que… (FUAQ): Receba dois
números inteiros e efetue a soma dos dois, mostrando
o resultado no final.

```python{lines:true}
 Início
 inteiro num1, num2, soma
 Escreva "Digite o primeiro número:"
 Leia num1
 Escreva "Digite o segundo número:"
 Leia num2
 soma ← num1 + num2
 Escreva "A soma é: ", soma
 Fim
```

::right::

<v-click>

| Linha | num1 | num2 | soma |
|--|--|--|--|
|2||||||
|4| 5|||
|6| 5| 5||
|7| 5| 5| 10|

</v-click>

---
layout: image-right
image: grace_hopper_team.jpg
backgroundSize: contain
---

## Debugging

Debugging (ou depuração) é o processo de identificar,
analisar e corrigir erros em um código fonte para
garantir que ele funcione corretamente.

Em 1947, Grace Murray Hopper identificou o primeiro
"bug" de computador quando rastreou uma falha do
Mark I onde uma mariposa ficou presa em um fio
de relé, causando um curto-circuito… e inspirando o
termo "debugging" usado desde então para resolver
problemas com a execução de um programa de
computador.

---
layout: image-right
image: Feynman.avif
backgroundSize: contain
---

### Duck Debugging
Ao desenvolver um algoritmo complexo é normal
encontrar problemas ou ficar "preso".
[https://www.studiopieters.nl/software-rubber-duck-debugging/](https://www.studiopieters.nl/software-rubber-duck-debugging/)


Richard Phillips Feynman a foi um dos físicos mais influentes do século XX. Conhecido por sua genialidade, humor e habilidade didática, ele contribuiu profundamente para a física quântica, eletrodinâmica, computação e ensino científico.


---

<Youtube id="0GkdgN0S7o4" height="100%" width="100%"/>