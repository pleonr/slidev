---
src: ../cover/cover.md
theme: default
image: /side-logo.png
title: Nodejs
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
  ogTitle: Nodejs
  ogDescription: Support material for classes, TEDSII, WebMob
routerMode: hash
---

---

<Toc maxDepth="2"></Toc>

---

## Introdução ao Node.js

[Node.js](https://nodejs.org/pt-br/about/ ) é um ambiente de tempo de execução JavaScript de código aberto e multi plataforma .
É uma ferramenta popular para quase qualquer tipo de projeto!

O Node.js executa o mecanismo JavaScript V8, o núcleo do Google Chrome, fora do navegador.

Um aplicativo Node.js é executado em um único processo, sem criar um novo thread para cada
solicitação.

O node possibilita criar código para o servidor usando a mesma linguagem(JavaScript) utilizada no lado do cliente.

O nodejs tem utiliza [package managers](https://nodejs.org/en/download/package-manager) para instalação do node. Além
de existir binários para os principais SO's e a opção de compilar o código fonte.

O [NVM](https://github.com/nvm-sh/nvm)(*Node version manager*) é um gerenciador de versões do node, possibilitando
a utilização de diversas versões.

---
layout: two-cols
---

## Hello World!

- Criar pasta para a api node e entra nela
  - mkdir minhaapi
  - cd minhaapi
  - npm init > seguir default
  - indicar nome do entry point > `server.js`

Isso vai criar o `package.json`
  - criar o arquivo `index.js`
  - `console.log("Hello World");`

::right::

```json
{
  "name": "minhaapi",
  "version": "1.0.0",
  "description": "projeto TEDII",
  "main": "index.js",
  "scripts": {
    "test": ""
  },
  "author": "",
  "license": "GPL 3.0"
}
```
<br>

Execute o programa com `node server.js`

---
layout: two-cols
---

## NPM

O NPM[(*Node Package Manager*)](https://www.npmjs.com){style="color: grey"} é uma biblioteca para compartilhar código e um gerenciador de
dependências.

```json
{
  "name" : "foo",
  "version" : "1.2.3",
  "description" : "A package",
  "main" : "index.js",
  "keywords" : ["foo", "fool", "foolish"],
  "author" : "John Doe",
  "licence" : "ISC"
}
```

::right::

O comando para instalar um package é o `--install` ele vai fazer download do package e suas dependências na pasta
`node_modules`, e adicionar esse package no arquivo `package.json` dentro da propriedade `dependencies`.

O parâmetro `--save-dev` vai salvar o package em `devDependencies` para ser usado apenas no ambiente de desenvolvimento.

O parâmetro `--save-optional` vai salvar o package em `optionalDependencies` não sendo exclusivamente necessária para
a execução.

O parâmetro `--no-save` é auto-explicativo.

---
layout: two-cols
---

## Iniciando o projeto

Vamos instalar 3 dependências para o sistema:

- [Express:](https://expressjs.com/pt-br/){style="color: grey"}
  - `npm install express --save`
- [Nodemon:](https://nodemon.io/){style="color: grey"}
  - `npm install nodemon --save-dev`
- [Cors:](http://expressjs.com/en/resources/middleware/cors.html){style="color: grey"}
  - `npm install cors --save`

Para instalar esse projeto pela primeira vez, ao executar `npm install` o `npm` vai instalar todas as dependências que
estiverem salvas no `package.json`.

::right::

```json
{
  "name": "detranupf",
  "version": "1.0.0",
  "description": "projedo TEDII",
  "main": "index.js",
  "scripts": {
    "test": ""
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "nodemon": "^3.1.0"
  }
}
```

<!--
O que é CORS?
CORS é uma lib que funciona como um middleware, ele nos permite "relaxar" a segurança aplicada a uma API.
Isso é feito contornando os cabeçalhos,
que especificam quais podem acessar a API. Cross-Origin Resource SharingAccess-Control-Allow-Originorigins

Em outras palavras, o CORS é um recurso de segurança do navegador que restringe solicitações HTTP de origem cruzada
com outros servidores e específica quais domínios acessam seus recursos.
-->

---
layout: two-cols
---

## Nodemon

Nodemon é uma lib open source criada para habilitar *hot reload* no código, entre outras funcionalidades:

- reinicialização automática
- detectar extensão de arquivos monitorados
- monitorar pastas e alterações

::right::

```json
"scripts": {
  "test": "echo ... && exit 1",
  "dev":"nodemon index.js"
},
```

<br>

```shell
 leon@leon-dev > npm run dev

> detranupf@1.0.0 dev
> nodemon server.js

[nodemon] 3.1.0
[nodemon] to restart, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching: js,mjs,cjs,json
[nodemon] starting `node index.js`
```

---
layout: two-cols
---

## Express

Express é um web framework para node. Vamos editar o `index.js` para utilizar o express.

```js
console.log("Server UP");

const express = require('express');
const app = express();

port = 3001;

app.get('/', (req, res) => {
  res.send('Requisição get')
});

app.listen(port, () => {})
```

::right::

Ao acessar `localhost:3001`

![](/localhost3001.png)

---
layout: two-cols
---

## ES Modules

Modularizar a aplicação é uma abordagem para tornar o código mais fácil para leitura e
manutenção. Ela consiste em transformar scripts em módulos.

Ele substitui o `require` de arquivos pela sintaxe `import` e `export`.

Primeiro precisamos dizer ao nosso app json que utilizaremos módulos, para isso vamos modificar o `package.json`

::right::

```json {all|6|all}
{
  "name": "detranupf",
  "version": "1.0.0",
  "description": "projedo TEDII",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": ""
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "nodemon": "^3.1.0"
  }
}
```
<!--
Ao invés de adicionar `"type": "module"` é possível renomear os arquivos `js` para `mjs` de módulo então o `server.js` vira `server.mjs`.
-->

---
layout: two-cols
---

```js
// Name Export | Name Import
export const name = 'value'
import { name } from '...'

// Default Export | Default Import
export default 'value'
import anyName from '...'

// Rename Export | NameImport
export { name as newName }
import { newName } from '...'

// Name + Default | Import All
export const name = 'value'
export default 'value'
import * as anyName from '...'
```

::right::

https://www.samanthaming.com

![](/modules.png)

---
layout: two-cols
---

```js
import express from "express";

const app = express();
console.log("Server UP");

port = 3001;

app.get('/', (req, res) => {
  res.send('Requisição get')
});

app.listen(port, () => {})
```

---
layout: two-cols
---

## CRUD

CRUD(*Create, Read, Update, Delete*), são as quatro operações básicas de bancos de dados relacionais, porém esse
conceito pode ser aplicado a outros tipos de banco de dados.

CRUD's podem ser utilizados para testar software, ou como base para desenvolvimento, criando as estruturas básicas
e depois se aprofundando.

As operações são autoexplicativas...

- `Create`: Cria registros
- `Read`: Lista registros
- `Update`: Modifica registros
- `Delete`: Deleta registros

::right::

![](/CRUD.png)

---
layout: two-cols
---

### List (Read)


Vamos então buscar mais dados da nossa API, criando uma rota chamada `items`. Vamos criar uma lista em javascript para
retornar utilizando um método `get`.

`app.js`
```js
var items = [
  {
    id:1,
    item: "item 1"
  },
  {
    id:2,
    item: "item 2"
  }
]
```

::right::

```js
app.get("/items", (req, res) => {
  res.status(200).json(items);
});
```

`result`
```json
[
    {
        "id": 1,
        "nome": "item 1"
    },
    {
        "id": 2,
        "nome": "item 2"
    }
]
```

---
layout: two-cols
---

### Post (Create)

Agora vamos adicionar um item a nossa lista de items. Para isso precisamos fazer um `post` declarando que iremos enviar
dados para a API através do `body` da requisição.

Precisamos também adicionar um `middleware` ao nosso app, para dar acesso ao express e poder trabalhar com a requisição.

```js {all|2|all}
const app = express();
app.use(express.json())

app.post("/items", (req, res) => {
   items.push(req.body);
   res.status(201).send("Adicionado");
});
```

::right::

Mas precisamos enviar os dados do registro que queremos criar. No `body` da requisição vamos adiconar os dados.

![](/post.png)


<!--
Assim, temos aqui uma função executando outra função. Isso se chama middleware.
No caso do Express, esses middlewares são utilizados para ter acesso às requisições e às respostas no momento em que
elas estão sendo feitas, e para fazer algumas ações nelas, como exemplo, modificar o objeto, passar informações
extras etc.

Nós conseguimos encadear esses mini programas, esses middlewares, para fazer as alterações nas requisições e respostas
conforme necessário. No meu caso, estou utilizando um chamado express.json, que serve para executar esse express.json
em todas as requisições manipuladas pelo Express.
Ou seja, qualquer requisição cujo corpo é um objeto compatível com JSON, como um objeto com id e título ou um array
de objetos, passará por esse middleware e será convertido e analisado (ou 'parseado') para JSON.

Mas por que precisamos fazer essa conversão? Não estamos já trabalhando com objetos? Sim, estamos.
No entanto, toda vez que recebemos dados via corpo em uma requisição, eles chegam convertidos como string. Embora eles
tenham o formato JSON, formato de objeto, com pares de chave-valor, eles viajam na conexão HTTP no formato string. Para
conseguirmos utilizar os dados como JSON, ou seja, acessar as propriedades deles, precisamos converter essa string
novamente para JSON.
-->

---
layout: two-cols
---

### Get (Read)

Para buscar a informação adicionada vamos criar um método `get`
```js
app.get("/items/:id", (req, res) => {
  const index = buscaItem(req.params.id);
  res.status(200).json(items[index]);
});
```

Precisamos de uma função para buscar o item na lista.
```js
function buscaItem(id) {
    return items.findIndex(item => {
       return item.id === Number(id);
    });
}
```

::right::

![](/get.png)

---
layout: two-cols
---

### Update

E para alterar um registro? Precisamos identificar qual registro queremos editar.

```js
app.put("/items/:id", (req, res) => {
  const index = buscaItem(req.params.id);
  items[index].nome = req.body.nome;
  res.status(200).json(items[index]);
});
```

![](/put.png)

::right::

### Delete

Para remover um registro a lógica é muito parecida, precisamos indicar qual registro vai ser removido.

```js
app.delete("/items/:id", (req, res) => {
  const index = buscaItem(req.params.id);
  items.splice(index, 1);
  res.status(200).send("item removido");
});
```

![](/delete.png)

---
layout: two-cols
---

Vamos organizar melhor nossa aplicação. Crie uma pasta `src` para organizar melhor o código.

Vamos criar um novo arquivo chamado `app.js` que vai ter a lógica de rotas e outras atribuições e deixar o `index.js`
apenas como servidor.

![](/project_node.png)

::right::

`app.js`
```js
import express from 'express';

const app = express();
app.get("/", (req, res) => {
   res.status(200).send("home");
});

export default app;
```

`index.js`
```js
import app from "./src/app.js";

const PORT = 3001;
app.listen(PORT, () => {
   console.log("Server UP")
});
```

<!--
Os ES Modules, também conhecidos como ECMAScript Modules, são uma das principais adições ao JavaScript moderno.
Esses módulos permitem que os desenvolvedores
organizem seu código em arquivos separados, tornando o código mais legível, fácil de manter e reutilizável.
Neste artigo técnico, exploraremos o conceito de ES Modules, como eles funcionam e como usá-los em sua aplicação.
req e res é um callback function
-->

---

Também vamos criar pastas para separar os endpoints e sua lógica, para isso dentro da pasta de código fonte `src` crie
as pastas `controllers` e `routes`. Cada "entidade" ou "feature" do sistema vai ter seu arquivo de controller e rotas.

O controller vai ser responsável por armazenar a lógica de cada endpoint, práticamente todo o código relacionado ao
processamento dessa rota.

```js
/* usuarioController.js */
import pool from "../db.js";

export const getUsuarios = (req, res) => {
  try {
    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar usuarios' });
  }
};

```

---

No arquivo de routes(*rotas*) vamos definir o caminho e qual função do controller vai ser chamado.

```js
/* usuarioRoutes.js */
import express from 'express';
import { getUsuarios } from '../controllers/userController.js';
const router = express.Router();

router.get('/', getUsuarios);

export default router;
```

---

E no nosso app vamos chamar os arquivos de rotas.

```js
import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

const app = express();
app.use("/api/usuarios", usuarioRoutes);

export default app;
```

---

## Persistência em BD

Vamos utilizar o postgres para fazer a persistência dos dados. Nas máquinas do laboratório utilizamos o usuário
`postgres` com senha `masterkey`. Lembre que é necessário subir o serviço do postgres no windows.

### Env

Para utilizar credênciais de login em serviços uma prática comum é utilizar variáveis de ambiente para armazenar,
login, senha, url entre outras informações sensíveis.

[`Dotenv`](https://www.npmjs.com/package/dotenv) é um módulo de dependência zero que carrega variáveis ambiente de
um arquivo `.env` para `process.env.`, armazenando a configuração no ambiente separadamente do código.

```text
DB_NAME=projeto
DB_USER=postgres
DB_PASSWORD=masterkey
DB_HOST=localhost
```

---

### Lib PG

A lib [`pg`](https://www.npmjs.com/package/pg), é uma biblioteca para comunicação com o Postgresql.

```javascript
import pg from 'pg';
import dotenv from 'dotenv/config.js';

const { Pool } = pg;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const pool = new Pool({
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPassword,
    port: 5432
});
export default pool;
```

---

O pool de conexão do pg mantém um conjunto de conexões abertas e as reutiliza conforme necessário ele “empresta”
uma conexão e a “libera” automaticamente quando a query é concluída.

```javascript
import pool from "../db.js";
export const getTodasPessoas = async (req, res) => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM Usuarios');
        //const jsonData = result.rows.map(row => ({
        //    id: row.id,
        //    name: row.name
        //}));
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar pessoas' });
    } finally {
        client.release();
    }
};
```

<!--
O uso do pooling otimiza o uso das conexões ao banco, evitando a criação e o fechamento constantes de conexões.
Manutenção Fácil: A separação da lógica de conexão em um módulo dedicado torna o código mais modular e fácil de atualizar.
Escalabilidade: Esse padrão facilita a escalabilidade da aplicação conforme a necessidade de gerenciar múltiplas conexões.
-->

---

```js
export const getUsuario = async (req, res) => {
try {
const usuarioId = req.params.id;
const client = await pool.connect();
const result = await client.query(`
            SELECT * FROM Usuarios WHERE id_usuario = $1
        `, [usuarioId]);

        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar pessoas' });
    }
};
```

---

```js
export const deleteUsuario = async (req, res) => {
try {
const usuarioId = req.params.id;
const client = await pool.connect();
const result = await client.query(`
            DELETE FROM Usuarios WHERE id_usuario = $1
        `, [usuarioId]);

        res.status(200).send('usuario deletado');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar pessoas' });
    }
};
```

---

```js
export const postUsuarios = async (req, res) => {
try {
  const usuario = req.body;
  const client = await pool.connect();
  const result = await client.query(`
      INSERT INTO Usuarios(id_usuario, nome, email, password)
      VALUES ($1, $2, $3, $4) RETURNING *
  `, [
      usuario.id,
      usuario.nome,
      usuario.email,
      usuario.password
     ]
  );
  res.status(201).send('Usuário adicionado com sucesso');
  } catch (err) {
  console.error(err);
  res.status(500).json({ message: 'Erro ao buscar pessoas' });
  }
};
```

---

```js
export const putUsuario = async (req, res) => {
const id = req.params.id;
const nome = req.body.nome;
const client = await pool.connect();
  try {
    const result = await client.query(
    `UPDATE Usuarios SET nome = $2
     WHERE id_usuario = $1
     RETURNING *`,
      [id, nome]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(result.rows);
  } catch (err) {
      console.error(err);
      res.status(400).json({ message: 'Erro ao atualizar usuário' });
  }
};
```

---
layout: two-cols
---

# ORM
Object-Relational Mapping

ORM significa(*Object-Relational Mapper*) Mapeamento Objeto-Relacional. É uma técnica de programação que atua como
ponte entre bancos de dados relacionais (como MySQL ou Postgresql) e linguagens de programação orientadas a objetos.
Em termos mais simples, traduz-se entre o formato estruturado dos bancos de dados e o código orientado a objetos.


Aqui está um cenário típico: Tradicionalmente, você interagiria com um banco de dados usando SQL, uma linguagem
de consulta especial. Com o ORM, você pode interagir com o banco de dados utilizando a sintaxe da sua
linguagem de programação, trabalhando com objetos que representam seus dados.

::right::

![](/typeorm.png)

---
layout: two-cols
hideInToc: true
---

## Prós

- **Desenvolvimento rápido**: ao usar objetos e métodos em vez de escrever SQL bruto.
- **Código mais simples**: o código se torna mais limpo e fácil de entender.
- **Independência do banco de dados**: como o ORM cuida da tradução entre objetos e SQL, seu código se torna menos
dependente do banco de dados específico que está sendo usado. Isso facilita a troca de bancos de dados no futuro.
- **Erros reduzidos**: ORMs podem ajudar a evitar erros que podem ocorrer ao escrever consultas SQL complexas manualmente.

::right::

## Cons

- **Curva de aprendizado**: Há uma curva de aprendizado envolvida na compreensão de como usar um ORM de maneira eficaz.
Embora simplifiquem a interação com o banco de dados, eles introduzem uma nova camada de complexidade
à sua base de código.
- **Sobrecarga de desempenho**: a camada ORM pode adicionar alguma sobrecarga em comparação com consultas SQL otimizadas
e escritas à mão.
- **Controle limitado**: os ORMs podem não fornecer acesso a todas as funcionalidades de um banco de dados específico.

---

Mapeamento: você define classes em seu código que correspondem às tabelas em seu banco de dados.
As propriedades da classe são mapeadas para as colunas da tabela. O ORM essencialmente cria um modelo de como
seus objetos de dados e tabelas de banco de dados se relacionam entre si, permitindo que você execute operações
CRUD (Criar, Ler, Atualizar, Excluir) em seus dados usando métodos em sua linguagem de programação.

Por exemplo, para criar um novo registro, você criaria um objeto da classe correspondente, preencheria suas
propriedades e usaria um método ORM para persisti-lo no banco de dados.

```ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstName: string
    @Column()
    age: number
}
```

---


## TypeOrm

TypeORM é uma biblioteca ORM que utiliza JavaScript ou TypeScript. Ele preenche a lacuna entre o mundo orientado
a objetos do seu código e o formato estruturado dos bancos de dados relacionais.

Você define classes em seu código, decoradas com anotações especiais, para representar suas
tabelas de banco de dados. Essas classes são chamadas de “entidades” em TypeORM. As propriedades da classe são mapeadas
para as colunas na tabela do banco de dados. TypeORM essencialmente cria um mapeamento entre seus objetos de código
e o esquema do banco de dados.

- @Entity(): Define uma classe como uma entidade do banco de dados. Cada instância dessa classe representará uma linha em uma tabela do banco de dados.
- @PrimaryGeneratedColumn(): Marca uma propriedade como a chave primária
- @Column(): Define uma coluna na tabela correspondente à entidade.

```typescript
@Column({ type: "varchar", length: 100, unique: true })
email: string;
```


---

- Suporte TypeScript: TypeORM foi desenvolvido com TypeScript em mente, permitindo que você aproveite a segurança de
tipo para suas entidades e interações de banco de dados.
- Suporte a vários bancos de dados: TypeORM funciona com uma variedade de bancos de dados relacionais populares,
incluindo MySQL, PostgreSQL, SQL Server entre outros.
- Construtor de consultas: TypeORM fornece um construtor de consultas que permite construir consultas complexas de
banco de dados de forma programática, oferecendo uma alternativa ao SQL bruto.
- Padrão de repositório: TypeORM suporta o padrão de repositório, onde cada entidade pode ter sua própria classe de
repositório encapsulando a lógica de acesso a dados.
- Migrações: TypeORM ajuda a gerenciar alterações no esquema do banco de dados ao longo do tempo por meio de um
sistema de migrações.

---
layout: two-cols
---

```js
npm init -y
npm install express typeorm reflect-metadata pg dotenv
```

```
meu-projeto/
├─ src/
│  ├─ entity/
│  │  └─ User.js
│  ├─ data-source.js
│  └─ server.js
├─ .env
└─ package.json
```

::right::

```
//.env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=teste_typeorm
PORT=3000
```

---

```
import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import User from "./entity/User.js";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: [User],

  // somente em desenvolvimento
  synchronize: true,

  logging: true,
});
```


---

```typescript
// controller do usuário
import {Request, Response} from "express"
import {AppDataSource} from "../data-source"
import {Usuario} from "../models/usuario"
import dotenv from "dotenv"

dotenv.config()

export const addUsuario = async (req: Request, res: Response) => {
    try {
        const username: string = req.body.email
        if (!username) {
            return res.status(400).json({ error: 'email é obrigatório' })
        }
        const usuario: Usuario[] = AppDataSource.getRepository(Usuario).create(req.body)
        const results: Usuario[] = await AppDataSource.getRepository(Usuario).save(usuario)
        return res.status(200).send(results)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir Usuario' })
    }
}
```

---

```typescript
export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const results: Usuario[] = await AppDataSource.getRepository(Usuario).find()
        return res.status(200).send(results)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir Usuario' })
    }
}
```

---

```typescript
export const updateUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        if (!id) {
            return res.status(400).json({ error: 'id não encontrado' })
        }
        const usuario: Usuario = await AppDataSource.getRepository(Usuario).findOneBy({ id: id })
        if (!usuario) {
            return res.status(400).json({ error: 'usuário inválido' })
        }

        AppDataSource.getRepository(Usuario).merge(usuario, req.body)
        const results: Usuario = await AppDataSource.getRepository(Usuario).save(usuario)
        return res.status(200).send(results)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar Usuario' })
    }
}
```

---

```typescript
export const deleteUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        if (!id) {
            return res.status(400).json({error: 'usuário não encontrado'})
        }
        const results = await AppDataSource.getRepository(Usuario).delete(id)
        return res.status(204).send(results)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar Usuario' })
    }
}

```

---

```typescript
export const getUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        if (!id) {
            return res.status(400).json({error: 'usuário não encontrado'})
        }
        const results = await AppDataSource.getRepository(Usuario).findOneBy({id: id})
        return res.status(200).send(results)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar Usuario' })
    }
}
```

---

## Mapeamento de Relações

Usamos as seguintes anotações para definir os relacionamentos entre entidades.

- `@OneToOne()`: Um para um.
- `@ManyToOne()`: Muitos para um.
- `@OneToMany()`: Um para muitos.
- `@ManyToMany()`: Muitos para muitos.

```typescript
@OneToMany(() => Partida, (partida) => partida.campeonato)
partidas: Partida[];
```

Também usamos o `@JoinColumn()` junto com @OneToOne() ou @ManyToOne() para indicar que
essa coluna deve armazenar a chave estrangeira da outra entidade.

```typescript
@ManyToOne(() => Campeonato)
@JoinColumn({ name: "campeonato_id" })
campeonato: Campeonato;
```

<!--__dirname+"/entity/**/*.{js,ts}"-->

---

# Diagrama ER (visão geral)

- **User 1—N Playlist**: um usuário pode ter muitas playlists.
- **User 1—N Music**: um usuário (uploader) pode enviar muitas músicas.
- **Playlist N—N Music**: uma playlist contém muitas músicas e vice-versa.
  - Implementado com **entidade de junção** `PlaylistMusic` (ordem & data de adição).

> O arquivo `.dbml` acompanha este material (importe no dbdiagram.io).

---

# DBML (dbdiagram) — trecho

```text
Table users {
  id serial [pk]
  email text [not null, unique]
  name  text [not null]
}

Table musics {
  id serial [pk]
  title text [not null]
  duration int [not null]
  uploader_id int [ref: > users.id]
}

Table playlists {
  id serial [pk]
  name text [not null]
  owner_id int [not null, ref: > users.id]
}

Table playlists_musics {
  id serial [pk]
  playlist_id int [not null, ref: > playlists.id]
  music_id int [not null, ref: > musics.id]
  position int [not null]
  added_at timestamptz [not null, default: `now()`]

  indexes {
    (playlist_id, music_id) [unique]
  }
}
```

---

# Por que estes relacionamentos?

- **User→Playlist (1:N)**: um **owner** administra a playlist.
- **User→Music (1:N)**: um **uploader** (autor/dono) pode ter diversas músicas.
- **Playlist↔Music (N:N)**: playlists **misturam** músicas de várias fontes.
- **Entidade de junção (`PlaylistMusic`)**: precisamos de **ordem** e **metadados** (ex.: `position`, `added_at`).

---

# TypeORM: Entidade User (1:N → Playlist/Music)

```ts
// src/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from 'typeorm';
import { Playlist } from './Playlist';
import { Music } from './Music';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({ type: 'text', unique: true })
  email!: string;

  @Column({ type: 'text' })
  name!: string;

  @OneToMany(() => Playlist, (p) => p.owner)
  playlists!: Playlist[];

  @OneToMany(() => Music, (m) => m.uploader)
  musics!: Music[];
}
```

> Lado **OneToMany** é *inverse side* (a FK fica em `Playlist.owner` e `Music.uploader`).

---

# TypeORM: Entidade Playlist (N:1 owner, 1:N items)

```ts
// src/entities/Playlist.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { PlaylistMusic } from './PlaylistMusic';

@Entity({ name: 'playlists' })
export class Playlist {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string;

  @ManyToOne(() => User, (u) => u.playlists, { onDelete: 'CASCADE' })
  owner!: User;

  @OneToMany(() => PlaylistMusic, (pm) => pm.playlist, {
    cascade: ['insert', 'update'],
    orphanedRowAction: 'delete',
  })
  items!: PlaylistMusic[];
}
```

**Por que `orphanedRowAction: 'delete'`?**
Ao atualizar `items`, linhas órfãs em `playlists_musics` são removidas automaticamente.

---

# TypeORM: Entidade Music (N:1 uploader, 1:N playlists)

```ts
// src/entities/Music.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { PlaylistMusic } from './PlaylistMusic';

@Entity({ name: 'musics' })
export class Music {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'int' })
  duration!: number; // seconds

  @ManyToOne(() => User, (u) => u.musics, { onDelete: 'SET NULL', nullable: true })
  uploader!: User | null;

  @OneToMany(() => PlaylistMusic, (pm) => pm.music)
  playlists!: PlaylistMusic[];
}
```

**`SET NULL`** mantém a música mesmo se o uploader for removido.

---

# TypeORM: Entidade de junção (N:N) PlaylistMusic

```ts
// src/entities/PlaylistMusic.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique, Index } from 'typeorm';
import { Playlist } from './Playlist';
import { Music } from './Music';

@Entity({ name: 'playlists_musics' })
@Unique('UQ_playlist_music_unique', ['playlist', 'music'])
export class PlaylistMusic {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Playlist, (p) => p.items, { onDelete: 'CASCADE' })
  @Index()
  playlist!: Playlist;

  @ManyToOne(() => Music, (m) => m.playlists, { onDelete: 'CASCADE' })
  @Index()
  music!: Music;

  @Column({ type: 'int' })
  position!: number;

  @Column({ type: 'timestamptz', default: () => 'now()' })
  added_at!: Date;
}
```

> **Por que não `@ManyToMany` direto?** Precisamos de **campos extras** (ordem, data). A entidade de junção é a forma correta.

---

# Criando uma playlist com músicas (exemplo)

```ts
const userRepo = AppDataSource.getRepository(User);
const musicRepo = AppDataSource.getRepository(Music);
const playlistRepo = AppDataSource.getRepository(Playlist);

const owner = await userRepo.findOneByOrFail({ id: 1 });
const musics = await musicRepo.findBy([{ id: 10 }, { id: 20 }, { id: 30 }]);

const playlist = playlistRepo.create({
  name: 'Favoritas',
  owner,
  items: musics.map((m, idx) => ({ music: m, position: idx + 1 })),
});

await playlistRepo.save(playlist);
```

---

# Carregando relações (find + relations)

```ts
const playlist = await playlistRepo.findOne({
  where: { id: 1 },
  relations: { owner: true, items: { music: true } },
  order: { items: { position: 'ASC' } },
});
```

---

# Carregando relações (QueryBuilder)

```ts
const results = await playlistRepo
  .createQueryBuilder('pl')
  .leftJoinAndSelect('pl.owner', 'owner')
  .leftJoinAndSelect('pl.items', 'items')
  .leftJoinAndSelect('items.music', 'music')
  .where('owner.id = :ownerId', { ownerId: 1 })
  .orderBy('items.position', 'ASC')
  .getMany();
```