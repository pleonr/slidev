---
src: ../cover/cover.md
theme: default
image: /side-logo.png
title: React
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
  ogTitle: React
  ogDescription: Support material for classes
routerMode: hash
---


---


<Toc columns="2" maxDepth="3"></Toc>

---
hideInToc: true
---

Segundo a lei de [Atwood](https://blog.codinghorror.com/the-principle-of-least-power)


<img src="/atwoodslaw.jpg" class="m-auto rounded " />

<!--
Jeff Atwood - Programador, co-fundador do stack-overflow, soltou essa frase em 2007
-->

---

## PERN

O PERN stack é uma coleção de quatro tecnologias usadas para construir aplicativos web, PostgreSql, Express, React e
Nodejs.

- PostgreSQL{style="color: lightblue;"}: um sistema de gerenciamento de banco de dados relacional de objeto (ORDBMS)
de código aberto que oferece suporte a SQL para dados relacionais e JSON para dados não relacionais.
- Express.js{style="color: lightyellow;"}: uma estrutura da web JavaScript popular desenvolvida para Node.js que simplifica a construção de
aplicativos da web e APIs.
- React.js{style="color: thistle;"}: uma biblioteca JavaScript para construir interfaces de usuário dinâmicas.
- Node.js{style="color: lightgreen;"}: um ambiente de tempo de execução JavaScript que permite executar JavaScript no lado do servidor.


---
layout: image
image: /pern.jpg
backgroundSize: contain
---

---

### Prós

- JavaScript full-stack: usar JavaScript tanto para front-end quanto para back-end
pode simplificar o desenvolvimento para aqueles que já estão familiarizados com a linguagem.
- Comunidade: as grandes comunidades por trás de cada tecnologia da pilha fornecem amplos recursos de aprendizagem e
suporte.
- Escalabilidade: O stack PERN pode lidar com aplicações pequenas e grandes devido à escalabilidade inerente
de seus componentes.
- Flexibilidade: Os recursos de manipulação de dados do PostgreSQL oferecem flexibilidade no armazenamento e
gerenciamento de dados.

---

### Contras

- Complexidade: embora o uso de JavaScript em toda a pilha possa ser vantajoso, ele também pode adicionar complexidade
para desenvolvedores que não estão familiarizados com JavaScript no back-end.
- Escolha de banco de dados: o PostgreSQL pode ser um exagero para aplicativos mais simples que não exigem seus
recursos avançados.
- Considerações de segurança: como acontece com qualquer desenvolvimento web, a segurança precisa ser cuidadosamente
considerada. Porém, o mesmo pode ser dito para qualquer outro stack.

---
layout: image
image: /spa.png
backgroundSize: contain
---

---
layout: image
image: /spaapp.png
backgroundSize: contain
---


---
layout: two-cols
---

## REACT

REACT é uma biblioteca Javascript utilizada para criar interfaces de usuário. Mais utilizado para single-page apps, foi
desenvolvido pelo Facebook.

O objetivo do react é simplificar o processo de desenvolver interfaces de usuário utilizando uma abordagem baseada em
componentes.

![](/react-component.png)

JSX, uma extensão de sintaxe para JavaScript, permite aos desenvolvedores escrever componentes de UI em um formato
semelhante a XML ou HTML. Tornando o código mais legível e expressivo.

::right::


```jsx
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```

React usa um DOM virtual (Document Object Model). Em vez de atualizar todo o DOM quando os dados mudam, o React
primeiro cria uma representação virtual do DOM na memória. Em seguida, ele calcula a maneira mais eficiente de
atualizar o DOM real, reduzindo a necessidade de recarregamentos.


---

### Virtual DOM

O Virtual DOM é uma representação DOM real na memória. Quando o estado de um componente muda,
o React não manipula o DOM diretamente. O seguinte processo ocorre:

- O React cria uma cópia virtual do DOM (Virtual DOM)
- As atualizações são feitas primeiro nesse Virtual DOM
- O React então compara o Virtual DOM com a versão anterior (diffing)
- Após essa comparação, o React calcula a menor quantidade de alterações necessárias para transformar o DOM real para refletir o Virtual DOM.
- Só então o React atualiza o DOM real com essas mudanças específicas, evitando re-renderizações desnecessárias.

---

#### Renderização

O processo de renderização do React funciona principalmente em três etapas:


1. **Renderização Inicial**
Quando você carrega uma aplicação React pela primeira vez, o componente raiz (normalmente App.js) é renderizado.
O React cria o Virtual DOM com base nos componentes JSX que você definiu.
Em seguida, o React transforma esse Virtual DOM em HTML e aplica ao DOM real do navegador.
2. **Mudanças no Estado ou Props**
Cada vez que ocorre uma mudança de estado ou props em um componente:
O React cria um novo Virtual DOM refletindo o estado atualizado.
Ele compara o novo Virtual DOM com o anterior, identificando as diferenças (essa fase é chamada de diffing).
Com base nas diferenças encontradas, o React aplica somente as mudanças mínimas ao DOM real.
3. **Reconciliação**
O processo de reconciliação é o mecanismo que o React usa para decidir o que precisa ser atualizado no DOM real. Ele envolve duas etapas principais:
- Diffing: Comparação entre o antigo e o novo Virtual DOM.
- Patching: Aplicação das mudanças necessárias no DOM real.

<!--
Melhor performance: Ao minimizar a quantidade de operações diretas no DOM, o React melhora o desempenho da aplicação.
Atualizações eficientes: O processo de reconciliação permite que o React atualize apenas os elementos que realmente mudaram.
Desenvolvimento mais fácil: Como os desenvolvedores não precisam manipular o DOM diretamente, o código React tende a ser mais simples e declarativo.
-->


---
layout: image
image: /virtualdoomreact.webp
---

---
layout: image
image: /atualizacao.png
background-size: contain
---

---
layout: two-cols
---

### JSX (*jsx*)

JSX é um javascript que retorna markup(*mais ou menos*). Utilizamos `camelCase` para declarar atributos dentro do markup utilizado pelo JSX

<img class="m-auto -z-5 top-0 bottom-0 max-w-80" style="background-color: white" src="/naming-conventions.png"/>

::right::

Por exemplo:

```html
<button class="btn">

<button className="btn">
```

Dentro do markup utilizamos `{}` para renderizar data.

```js
const background = 'red'
<div style={ background } />
```

---

Para começar a falar do react vamos usar um boilerplate

```bash
npm create vite@latest meu-app
```

Durante o comando o Vite pergunta o framework (`React`) e a variante (`JavaScript`). Isso vai criar um projeto básico usando react, sem nenhuma configuração de servidor ou roteamento pré-definida.

```jsx
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

---
layout: two-cols
---

### Build e a pasta `dist`

Enquanto `npm run dev` sobe um servidor de desenvolvimento (que compila sob demanda, arquivo por arquivo, para recarregar rápido), `npm run build` gera a versão de **produção** do app.

```bash
npm run build
```
1. O Vite empacota (*bundle*) todo o código, resolvendo os `import`/`export` (ES Modules) e fazendo **tree-shaking** (remove código não usado).
2. O código é **minificado** (nomes curtos, sem espaços/comentários) para reduzir o tamanho dos arquivos. Cada arquivo gerado recebe um **hash** no nome (ex: `index-a1b2c3.js`), usado para cache se o conteúdo mudar, o nome muda, e o navegador não usa uma versão em cache desatualizada.

::right::

```bash
dist/
├── index.html
└── assets/
    ├── index-a1b2c3.js
    ├── index-d4e5f6.css
    └── react-g7h8i9.svg
```

- O resultado é **100% estático**: só HTML, JS, CSS e assets. Não existe servidor Node rodando por trás.
- Pode ser hospedado em qualquer serviço de arquivos estáticos (GitHub Pages, Netlify, Vercel, S3, um Nginx simples, etc).
- O `index.html` gerado já aponta para os arquivos com hash em `assets/`, então basta servir a pasta `dist/` inteira.
- `npm run preview` sobe um servidor local simples servindo essa pasta `dist/`, útil para conferir o build antes do deploy.

---
layout: two-cols
---

### Estrutura do projeto

```bash
meu-app/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── assets/
        └── react.svg
```

O Vite gera um projeto enxuto: não existe pasta `pages` ou rotas automáticas, apenas os arquivos necessários para renderizar uma SPA.

::right::

- `index.html`: fica na **raiz** do projeto (não dentro de `public`), é o ponto de entrada real da aplicação. Contém a `<div id="root">` e o `<script type="module" src="/src/main.jsx">` que carrega o app — o atributo `type="module"` diz ao navegador para tratar o arquivo como um **ES Module** (permite `import`/`export` nativamente).
- `src/main.jsx`: monta a árvore React na div `root` usando `createRoot`.
- `src/App.jsx`: componente raiz da aplicação.
- `vite.config.js`: configurações do Vite (plugins, aliases, porta do dev server, etc).
- `public/`: arquivos estáticos copiados sem processamento (ex: favicon, imagens).


---

No `package.json` os scripts principais são:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

- `dev`: sobe o servidor de desenvolvimento (padrão `http://localhost:5173`).
- `build`: empacota e minifica o código, gerando os arquivos estáticos de produção em `dist/`.
- `preview`: serve localmente o resultado do `build`, útil para validar antes do deploy.

Como o Vite não tem servidor Node embutido (ele apenas gera HTML/CSS/JS estáticos), o resultado do `build` pode ser hospedado em qualquer serviço de arquivos estáticos (Netlify, Vercel, GitHub Pages, S3, etc).

---
layout: two-cols
---

### Mostrando dados

O JSX permite colocar linguagem de marcação em JavaScript. As chaves `{}` permitem que você “escape” para o JavaScript para que você possa incorporar alguma variável do seu código.

```jsx
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
```

::right::

```jsx
<h1>{user.name}</h1>
<img
  className="avatar"
  src={user.imageUrl}
  alt={'Photo of ' + user.name}
  style={{
    width: user.imageSize,
    height: user.imageSize
  }}
/>
```

---

### Render condicional

No React, não há sintaxe especial para as condições de escrita. Em vez disso, você usará as mesmas técnicas que usa ao escrever código JavaScript regular. Por exemplo, você pode usar uma instrução IF para incluir condicionalmente JSX:

```jsx
let content;
let isLoggedIn = false;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

---

Se você preferir um código mais compacto, pode usar o condicional `?`. Ao contrário de um `if`, ele funciona dentro do JSX:

```jsx
<>
  {isLoggedIn ? (
    <h1>olá</h1>
  ) : (
    <h1>login</h1>
  )}
</>
```

Quando você não precisa do `else`, também pode usar uma sintaxe lógica e mais curta:

```jsx
<div>
  {isLoggedIn && <h1>olá</h1>}
</div>
```

---

### Eventos

Podemos responder a eventos declarando uma função...

```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

Observe como `onClick={handleClick}` não tem parênteses no final! Você não precisa invocar a função, você só precisa indicar ela, o React fará a chamada para a função quando o evento for acionado.

---

### Renderizando listas

Para renderizar listas podemos utilizar funcionalidades do javascript como `for` loop e a função `map` renderizar listas de componentes.

```jsx
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

---

A prop `key` avisa o React qual item da lista é qual entre renderizações, permitindo identificar itens que foram
adicionados, removidos ou reordenados sem precisar recriar o componente inteiro.

- Use um valor **estável e único** (ex: `id` vindo dos dados), nunca gerado durante o render (`Math.random()`, por exemplo).
- **Evite usar o índice do array como key** quando a lista pode ser reordenada, filtrada ou ter itens inseridos/removidos:
  o React associa o estado interno do componente à posição, o que pode misturar o estado entre itens diferentes.
- Sem `key` (ou com uma key errada), o React não sabe reaproveitar os elementos existentes e pode re-renderizar mais do
  que o necessário — ou pior, preservar estado no elemento errado.

---

### Componentes

Um componente é um bloco de código reutilizável e independente, que divide a interface do usuário em partes menores.

![](/componentes-react.png)

---

### Props no React

- **Props (propriedades)** são parâmetros passados de um componente pai para um componente filho.
- Permitem **reutilização** e **configuração** de componentes.
- São **imutáveis** dentro do componente que os recebe.

- `props` → Dados enviados ao componente (strings, numbers, objetos, funções, etc.).
- `children` → Conteúdo JSX passado entre as tags do componente.
  - Exemplo:
    ```jsx
    <Card>
      <p>Esse é o conteúdo interno (children)</p>
    </Card>
    ```

---

### Componente Button

```jsx
export function Button({ label, onClick, children }) {
  return (
    <button onClick={onClick}>
      {label} {children}
    </button>
  )
}
```

Usando o componente

```jsx
<Button label="Salvar" onClick={() => alert("Salvo!")}>
  aqui vai o children
</Button>
```

---

## Mão na massa

Três exemplos curtos para copiar no `App.jsx` do projeto Vite criado no começo da aula. Testem, alterem os valores e
vejam o resultado no navegador.

Usam só o que já vimos até aqui: JSX, props, eventos e listas, sem hooks ainda.

---
layout: two-cols
---

#### 1. Cartão de saudação (props)

```jsx
function Saudacao({ nome }) {
  return <h2>Olá, {nome}!</h2>
}

export default function App() {
  return (
    <div>
      <Saudacao nome="Maria" />
      <Saudacao nome="João" />
    </div>
  )
}
```

::right::

**Desafio:** adicione uma terceira `<Saudacao />` com o seu nome e crie uma prop `idade` opcional que aparece
embaixo do "Olá".

---
layout: two-cols
---

#### 2. Lista de tarefas

```jsx
const tarefas = ['Estudar JSX', 
'Criar um componente',
 'Testar props'
 ]

function ListaTarefas() {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa}>{tarefa}</li>
      ))}
    </ul>
  )
}
```

::right::

**Desafio:** troque o array `tarefas` por uma lista de objetos `{ id, texto }` e use `tarefa.id` como `key` em vez do
texto.

---
layout: two-cols
---

#### 3. Botão com evento

```jsx
function BotaoCurtir() {
  function handleClick() {
    alert('Você curtiu!')
  }

  return <button 
  onClick={handleClick}>Curtir
  </button>
}
```

::right::

**Desafio:** crie um segundo botão `BotaoDescurtir` que mostra um alerta diferente, e renderize os dois lado a lado
dentro do `App`.

---

### CSS

O Vite não instala nenhuma biblioteca de CSS por padrão, então precisamos adicionar manualmente. Vamos utilizar o [ReactBootstrap](https://react-bootstrap.netlify.app/).

A instalação requer dois pacotes npm `react-bootstrap` e `bootstrap`.

```shell
npm install react-bootstrap
npm install bootstrap
```

E para utilizar o react bootstrap em todo o projeto chamamos precisamos invocar o css do bootstrap no ponto de entrada da aplicação:

```js
// src/main.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
```

---
layout: two-cols
---

### Estilizando com `className`

Assim como em HTML puro, também podemos escrever nosso próprio CSS e aplicar via `className` (lembrando: não é `class`, que é palavra reservada em JS).

```css
/* src/App.css */
.card {
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;
}
```
::right::

```jsx
// src/App.jsx
import './App.css'

function App() {
  return (
    <div className="card">
      Conteúdo do card
    </div>
  )
}
```
---

Também é possível aplicar estilo diretamente no elemento com a prop `style`, passando um **objeto** JavaScript (as chaves ficam em `camelCase`):

```jsx
function Aviso() {
  return (
    <div style={{ backgroundColor: 'yellow', padding: '8px' }}>
      Atenção!
    </div>
  )
}
```

- `className`: aponta para uma classe definida em um arquivo `.css` importado — melhor para estilos reutilizáveis.
- `style`: útil para valores **dinâmicos**, calculados em tempo de execução (ex: cor que depende de uma prop ou state).

---

#### Usando componentes do ReactBootstrap

Com o `react-bootstrap` instalado, em vez de montar as classes do Bootstrap manualmente (`className="btn btn-primary"`), usamos os componentes prontos da biblioteca:

```jsx
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Exemplo() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Título do card</Card.Title>
        <Card.Text>Algum texto de exemplo dentro do card.</Card.Text>
        <Button variant="primary">Confirmar</Button>
      </Card.Body>
    </Card>
  )
}
```
<!-- 
Cada componente (`Button`, `Card`, `Navbar`, etc.) já vem com as classes e o comportamento do Bootstrap aplicados, e aceita props como `variant` para trocar o estilo (`primary`, `danger`, `outline-secondary`...). -->

---

### Navegação com a tag `a`

Antes de conhecer o `react-router-dom`, vale lembrar como a navegação funciona nativamente no HTML: com a tag `<a>`.

```html
<a href="/partidas">Partidas</a>
```

- Ao clicar, o navegador faz uma **nova requisição HTTP** para a URL do `href`.
- A página inteira é **descartada e recarregada** (reload completo), incluindo todo o JavaScript, CSS e estado da aplicação.
- Numa SPA React isso é um problema: perdemos todo o estado em memória (ex: `useState`, dados já buscados) e o app React precisa iniciar do zero novamente.

É justamente esse recarregamento que o roteamento client-side do React (via `react-router-dom`) evita.

---

### React Router

O Vite/React sozinhos não têm roteamento embutido, diferente de frameworks como Next.js, aqui **nós** decidimos qual
componente renderizar para cada URL.

O [`react-router-dom`](https://reactrouter.com/en/main) é a biblioteca mais usada para isso em SPAs: ela sincroniza a
URL do navegador com o que é renderizado na tela, sem recarregar a página inteira.

- Trocar de "página" = trocar o componente renderizado, mantendo o app carregado (estado, dados em memória etc. não se perdem).
- A navegação usa a History API do navegador (`pushState`), então os botões voltar/avançar do browser continuam funcionando.

---

#### Instalação e configuração

```shell
npm install react-router-dom
```

Envolvemos o componente raiz com `<BrowserRouter>` para habilitar o roteamento em toda a aplicação:

```jsx
// src/main.jsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

---

Dentro do `App`, declaramos as rotas com `<Routes>` e `<Route>`:

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Partidas from './pages/Partidas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/partidas" element={<Partidas />} />
    </Routes>
  )
}
```

---

#### Navegando entre rotas

Para criar links que trocam de rota sem recarregar a página, usamos o componente `Link` no lugar da tag `<a>`:

```jsx
import { Link } from 'react-router-dom'

<Link to="/partidas">Partidas</Link>
```

- `<a href="...">` faz o navegador recarregar a página inteira (perde o estado do app).
- `<Link to="...">` apenas atualiza a URL e troca o componente renderizado, mantendo a SPA "viva".

A seguir, um exemplo de navbar usando `Link` junto com componentes do ReactBootstrap:

---

```jsx
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
const NavbarTop = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/partidas">
            Partidas
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavbarTop
```

---

## Render no REACT

Renderizar significa transformar o estado atual de um componente (props + state) em uma árvore de elementos React (JSX) que será convertida para DOM real no navegador.

- Render inicial
  - O componente é chamado como função → gera JSX.
  - React converte JSX em Virtual DOM e monta no navegador.

- Re-renderização que ocorre quando:
  - props mudam (pai envia novos valores).
  - state muda (setState ou useState).
  - Context ou hook dependente muda.

Quando o componente é chamado novamente ele criando nova árvore virtual. O React compara com a árvore antiga e aplica mudanças mínimas no DOM real.


---
layout: image
image: /csrssr.png
background-size: contain
---



---
layout: two-cols
---

### SSR (Server-Side Rendering)

Recurso oferecido por meta-frameworks React (Next.js, Remix, Astro, etc). O nosso projeto Vite **não** faz isso — sem um
desses frameworks, o React só roda no cliente. Fica aqui como comparação conceitual.

- Como funciona: a página é renderizada no servidor a cada requisição, e o HTML já pronto é enviado ao browser.
- Vantagens: HTML completo desde o primeiro byte (melhor SEO e Time-to-First-Byte previsível); dados sempre frescos.
- Custos: mais carga no servidor; latência inclui fetch + render a cada request; cache exigirá camada externa (CDN/reverse proxy) para escalar.
- Quando usar: páginas indexáveis que dependem de dados variáveis por request (auth, geolocalização, personalização) ou dados que mudam com frequência.

::right::

#### CSR (Client-Side Rendering)

É o que o nosso projeto Vite faz por padrão.

- Como funciona: o servidor entrega a casca da página (`index.html`) e o browser busca os dados (ex.: useEffect + axios) e renderiza no cliente.
- Vantagens: ótima experiência em dashboards/SPAs autenticadas; menos carga no servidor; interações ricas após o primeiro carregamento.
- Custos: conteúdo chega “vazio” para robôs/SEO; pode ter layout shift durante loading.
- Quando usar: áreas logadas (SEO menos relevante), interação pesada, polling, websockets, formulários complexos.


---

#### Hydration x Reconciliação

| Aspecto       | Hydration                                         | Reconciliação                                                                   |
| ------------- | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| Objetivo      | Tornar **interativo** um DOM já existente         | Calcular **diferenças** entre árvores e aplicar no DOM                          |
| Quando ocorre | Primeira montagem no cliente após SSR         | Em **toda atualização** (e também durante a hydration para corrigir mismatches) |
| Efeito no DOM | Idealmente **reuso** dos nós + **anexar eventos** | **Adicionar/alterar/remover** nós conforme o diff                               |
| APIs típicas  | `hydrateRoot(...)` (usado quando há SSR; nosso projeto Vite usa apenas `createRoot`) | Interna ao React; você vê os efeitos via `setState`, transições etc.            |



---

### Componentes de classe

Os **componentes de classes** têm acesso a recursos adicionais, como o ciclo de vida do componente.
Isso permite que os desenvolvedores controlem o comportamento do componente em diferentes estágios, `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`

Eles também têm suporte nativo ao gerenciamento de estado usando o objeto `state`. Isso permite que os desenvolvedores
armazenem e atualizem o estado interno do componente de forma fácil e intuitiva.

Esses componentes precisavam de um método render() para poder retornar o JSX.

```jsx
import React, { Component } from 'react'

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---
layout: two-cols
---

### Componentes funcionais

Um componente funcional, basicamente, é uma função em JavaScript/ES6 que retorna um elemento do React (JSX).

Os componentes funcionais oferecem uma sintaxe mais concisa, facilidade de reutilização e melhor desempenho, sendo a escolha preferida para novos projetos e aqueles que buscam uma abordagem mais moderna de desenvolvimento. Eles possibilitam gerênciar o lifecycle através de `hooks`.

- é uma função em JavaScript/ES6
- deve retornar um elemento em React (JSX)
- sempre começa com letra maiúscula (convenção dos nomes)
- aceita props como parâmetro, se necessário

::right::

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
export default Welcome;
```

```jsx
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="John"/>
    </div>
  )
}
```

`props` são a forma de comunicação entre componentes react. As props transportam dados apenas do elemento pai para os elementos
filhos.

<!--
Conceitos-chave para o aluno lembrar
Render acontece toda vez que props ou state mudam.
React não recria o DOM inteiro: ele compara e só aplica mudanças.
Virtual DOM é o segredo da eficiência.
Render não é ruim; re-renderizar é normal. O problema é quando envolve cálculos pesados ou listas grandes sem otimização.
-->
---
layout: two-cols
---

### useState hook

Você chama `useState` dentro do seu componente funcional para declarar uma variável `state`. Essa variável deve ser
criada no escopo do componente, ao tentar criar um `state` dentro de uma função, bloco condicional ou loop irá causar um
erro.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  return (<div>{count}</div>);
}
```

<!--
return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
-->

::right::

- A chamada `{useState(0)}` declara a variável de estado count com um valor inicial de 0.
- A função setCount é usada para atualizar a variável.
- `useState` pode ser usado para gerenciar vários tipos de dados, incluindo números, strings, booleanos, arrays ou objetos.
- As atualizações de estado sempre devem ser feitas usando a função setter retornada por useState.
- Nunca modifique diretamente a variável de estado.
- Os componentes do React são renderizados novamente sempre que seu estado muda.
Isso garante que a IU reflita os valores de estado mais recentes.

---
layout: image
image: /useState.png
background-size: contain
---

---
layout: image
image: /state.png
background-size: contain
---

---
layout: two-cols
---

### useEffect hook

Hooks são funções que possibilitam gerenciar efeitos em componentes funcionais.

- Buscar data de API's
- Manipular DOM
- Criar temporizadores

```jsx
useEffect(function, dependencies)
```
```jsx
useEffect(() => {

}, []);
```

<!--
import { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);

    // Cleanup quando o componente for desmontado
    return () => clearInterval(timer);
  }, []);

  return <p>Hora atual: {hora.toLocaleTimeString()}</p>;
}
-->

::right::

- O primeiro argumento `function` é uma função que contém a lógica do efeito colateral.
- O segundo argumento `dependencies` (opcional) é uma matriz de dependências.
Isso informa ao React quando executar novamente o efeito, se nenhuma dependência for especificada,
o efeito será executado após cada renderização.

Ao executar, por padrão o `effect` vai rodar depois do render inicial e depois de cada update subsequente. Esse
padrão pode ser alterado usando a um `array` de dependências. Se o array estiver vazio essa função só vai executar uma
vez, se tiver um valor(es), toda vez que esse valor for alterado a função vai ser executada.

---
layout: image
image: /useEffect.png
background-size: contain
---

---
layout: image
image: /useEffectanatomy.png
background-size: contain
---

---
layout: image
image: /useEffectDependency.png
background-size: contain
---


---

### useContext hook

Utilizado para facilitar o consumo de valores do Context API sem precisar passar props manualmente. Evita o “prop drilling” (passar props de componente em componente até chegar onde precisa).

```jsx
const TemaContext = React.createContext("light");

function Botao() {
  const tema = React.useContext(TemaContext);
  return <button style={{ background: tema === "dark" ? "black" : "white" }}>Clique</button>;
}
```

---

### Outros hooks úteis

React oferece outros hooks nativos para casos mais específicos de performance e acesso direto ao DOM:

- **`useRef`**: guarda um valor mutável que não dispara re-render quando muda. Muito usado para acessar elementos do
  DOM diretamente (`inputRef.current.focus()`) ou guardar valores entre renders (ex: id de um `setInterval`).
- **`useMemo`**: memoriza o **resultado** de um cálculo caro entre renders, recalculando apenas quando as dependências
  mudam. Evita refazer operações pesadas (ex: filtrar/ordenar uma lista grande) a cada render.
- **`useCallback`**: memoriza a **referência** de uma função entre renders. Útil para evitar re-renders desnecessários
  em componentes filhos otimizados com `React.memo` que recebem essa função como prop.

```jsx
const total = useMemo(() => calcularTotalPesado(itens), [itens]);

const handleClick = useCallback(() => {
  fazerAlgo(id);
}, [id]);
```

#### Hooks customizados

Também é possível criar hooks próprios (funções que começam com `use` e podem chamar outros hooks) para extrair e
reutilizar lógica com estado entre componentes — por exemplo, um `useFetch` que encapsula `useState` + `useEffect`.

---

```jsx
const [count, setCount] = useState(0)
return(
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>mais</button>
        <button onClick={() => setCount(count - 1)}>menos</button>
    </div>
)
```

```jsx
const [hello, setHello] = useState("Hello")
const [bool, setBool] = useState(true)
return(
    <div>
        <p>{hello}</p>
        <button onClick={() => setHello("goodbye")}>bye</button>
        {bool ? <p>verdadeiro</p> : <p>false</p>}
        <button onClick={() => bool ? setBool(false) : setBool(true)}>toogle</button>
    </div>
)
```

---

```jsx
    const [counter, setCounter] = useState(0)
    const [word, setWord] = useState("no")

    useEffect(() => {
        console.log("renderizou")
    }, []);

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Mais</button>

            <p>{word}</p>
            <button onClick={() => setWord("yes")}>yes</button>
        </div>
    )
```

---

### callback

Um callback é uma função passada como prop de um componente pai para um componente filho.
Assim, o filho pode “avisar” o pai quando algo acontece (ex: clique em um botão, envio de formulário, seleção de item etc.).

- É um jeito de inverter o fluxo: o filho não decide, apenas notifica.
- Quem tem a lógica e os dados é o pai (a página ou container).

1. Separação de responsabilidades
- O componente filho deve ser apenas apresentação (UI).
- O pai é quem sabe o que fazer com as informações (regras, lógica de negócio).

2. Reuso
- Se o filho tiver lógica dentro dele, você não consegue reutilizar.
- Se o filho apenas dispara um callback, ele pode ser usado em qualquer lugar.

3.Unidirecionalidade do React
- O React segue o fluxo de cima para baixo (pai → filho).
- Callbacks permitem que um evento “suba” do filho para o pai, respeitando esse fluxo.

<!--
**Como funciona?**
O pai define a função handleEnviar que contém a lógica (atualizar estado, chamar API, etc.).
O pai passa essa função como prop para o filho (onEnviar={handleEnviar}).
O filho recebe a prop e chama essa função (onEnviar(texto)) quando o usuário interage.
O pai recebe o valor e toma as decisões (armazenar no estado, mandar para servidor, etc.).

**Por que a lógica deve ficar no pai e não no filho?**
O pai tem o estado global/local que interessa à página.
O filho pode ser usado em contextos diferentes (um formulário pode servir para criar um usuário ou editar um perfil).
Se a lógica estivesse no filho, seria engessada: o filho teria que saber sempre o que fazer.
Colocando a lógica no pai, o mesmo componente filho pode ter comportamentos diferentes dependendo de onde é usado.
-->

---

```jsx
function Pagina() {
  const [nome, setNome] = React.useState("");

  // Função que o filho vai chamar
  function handleEnviar(dado) {
    setNome(dado);
    console.log("Recebi do filho:", dado);
  }

  return (
    <div>
      <h1>Nome recebido: {nome}</h1>
      <Formulario onEnviar={handleEnviar} />
    </div>
  );
}
```

---

```jsx
function Formulario({ onEnviar }) {
  const [texto, setTexto] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={() => onEnviar(texto)}>Enviar</button>
    </div>
  );
}
```

---

### Fetch API

```jsx
useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((apiData) => {
            setData(apiData.message);
        });
}, [update]);
```

---
layout: image
image: /fetchaxios.png
background-size: contain
---


---
layout: two-cols
---

### Axios

Axios é um cliente HTTP baseado em promessa para `node.js` e navegador. É isomórfico (pode rodar no navegador e
nodejs com a mesma base de código). No lado do servidor utiliza o módulo http nativo node.js, enquanto no
cliente (navegador) utiliza XMLHttpRequests. `npm install axios`

```jsx
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;
```

::right::

```jsx
axios({
  method: 'post',
  url: '/login',
  data: {
    firstName: 'Finn',
    lastName: 'Williams'
  }
});
```

- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.options(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`

---
layout: image
image: /isolamentorede.png
background-size: contain
---

---
layout: image
image: /instancia.png
background-size: contain
---

---
layout: two-cols
---

#### Axios Post

Depois que uma solicitação HTTP POST é feita, o Axios retorna uma promessa que é cumprida ou rejeitada, dependendo da
resposta do serviço de backend

```jsx
axios.post('/login', {
  firstName: 'Finn',
  lastName: 'Williams'
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
```

Se a promessa for cumprida, o primeiro argumento de then() será chamado; se a promessa for rejeitada, o segundo
argumento será chamado.

::right::

```json
{
  // `data` é a resposta(*response*)
  data: {},
  // `status` é o HTTP status code
  status: 200,
  // `statusText` é a mensagem de status
  statusText: 'OK',
  // `headers` headers da resposta
  headers: {},
  // `config` configuração para o axios
  config: {},
  // `request` é o request dessa response
  request: {}
}
```

---

META PLATFORMS, Inc. Learn React. Disponível em: https://react.dev/learn. Acesso em: 10 set. 2025.

DIO. *React – Componentes de classes x componentes funcionais*. Disponível em: <https://www.dio.me/articles/react-componentes-de-classes-x-componentes-funcionais>. Acesso em: 10 set. 2025.

FREECODECAMP. *Componentes funcionais, props e JSX em React – tutorial de React.js para iniciantes*. Disponível em: <https://www.freecodecamp.org/portuguese/news/componentes-funcionais-props-e-jsx-em-react-tutorial-de-react-js-para-iniciantes/>. Acesso em: 10 set. 2025.

MOZILLA DEVELOPER NETWORK. *Using Fetch – Web API*. Disponível em: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>. Acesso em: 10 set. 2025.

AXIOS. *Axios API – Introduction*. Disponível em: <https://axios-http.com/docs/api_intro>. Acesso em: 10 set. 2025.

SCALER. *Virtual DOM in React*. Disponível em: <https://www.scaler.com/topics/react/virtual-dom-in-react/>. Acesso em: 10 set. 2025.

---

GOULART, Vini B. *How to protect a route with JWT token in React using Context API*. Dev.to, 2023. Disponível em: <https://dev.to/vinibgoulart/how-to-protected-a-route-with-jwt-token-in-react-using-context-api-l38>. Acesso em: 10 set. 2025.

ATATUS. *Cross-Site Request Forgery: A Threat to Open Web Applications*. Disponível em: <https://www.atatus.com/blog/cross-site-request-forgery-a-threat-to-open-web-applications/>. Acesso em: 10 set. 2025.

OWASP. *Cross-Site Request Forgery (CSRF)*. Disponível em: <https://owasp.org/www-community/attacks/csrf>. Acesso em: 10 set. 2025.

JWT.IO. *JSON Web Tokens Introduction*. Disponível em: <https://jwt.io/>. Acesso em: 10 set. 2025.

ALURA. *O que é JSON Web Tokens (JWT)*. Disponível em: <https://www.alura.com.br/artigos/o-que-e-json-web-tokens>. Acesso em: 10 set. 2025.

---

PERERA, Gimnath. *Yup vs Zod vs Joi: a comprehensive comparison of JavaScript validation libraries*. Dev.to, 2023. Disponível em: <https://dev.to/gimnathperera/yup-vs-zod-vs-joi-a-comprehensive-comparison-of-javascript-validation-libraries-4mhi>. Acesso em: 10 set. 2025.

ESCAPE. *How to Secure Express.js API*. Disponível em: <https://escape.tech/blog/how-to-secure-express-js-api/>. Acesso em: 10 set. 2025.

DEVELOPEROM. *Protect your REST APIs in Node.js*. Medium, 2022. Disponível em: <https://medium.com/@developerom/protect-your-rest-apis-in-node-js-253c11a2dfd7>. Acesso em: 10 set. 2025.
