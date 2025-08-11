---
src: ../cover/cover.md
theme: default
background: side-logo.png
image: /side-logo.png
title: TypeScript e TypeORM
author: Pablo Leon Rodrigues
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
selectable: true
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="1" maxDepth="2"></Toc>

---
layout: two-cols
---

# Introdução TypeScript

Pense em JavaScript com super poderes...

TypeScript é superset do javascript gratuíta e de código aberto desenvolvida pela Microsoft e teve sua primeira versão publicada em 2012.
Adiciona tipagem estática opcional para o javascript e utiliza a extensão `.ts` para seus arquivos.
Sua principal característica é a inferência de tipos, fornecendo uma detecção em tempo de escrita de erros de tipagem.

```ts
type Result = "pass" | "fail"
function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}
```

::right::

![](/typeScript.svg)

O TypeScript possuí um transpilador "*TSC*", ao interpretar código escrito usando o TypeScript o transpilador remove a inferência de tipos gerando
código JavaScript.

```js
function verify(result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}
```

---
layout: two-cols
---

## Instalação

Utilizando o npm podemos instalar o TypeScript com o comando:

```shell
npm install -g typescript
```

Então podemos criar arquivos `.ts` que é o formato padrão. Por exemplo `Hello.ts`

```ts
function greet(name: string) {
  console.log("Hello, " + name);
}

greet("Alice");
```

Aqui definimos que o parâmetro de `greet` deve ser uma string.

::right::

Para compilar esse arquivo usando o commando `tsc`, que vai interpretar o arquivo e remover a inferência de tipos.

```shell
tsc Hello.ts
```

O resultado desse comando é um arquivo javascript chamado `Hello.js`. Podemos instalar a lib `ts-node`, essa lib
executa o arquivo `ts` sem a necessidade de compilar primeiro.

```shell
npm install -g ts-node
```

Depois podemos executar:

```shell
ts-node Hello.ts
```
---

## Tipos Primitivos

Usamos os tipos primitivos do JavaScript `string`, `number` e `boolean` que podem ser obtidos
com o operador `typeof` do JavaScript.

Para identificar `arrays` usamos a sintaxe tipo do valor e `[]` como por exemplo `number[]`, também podemos
usar `Array<number>`.

O TypeScript também possui um tipo especial, `any`, que você pode usar sempre que não quiser que um valor específico
cause erros de verificação de digitação. Se você não definir um tipo o TS vai utilizar o any.
Você pode passar a flag `noImplicitAny` para o compilador(`tsc`) para tratar casos com `any` como erro.

Ao declarar uma variável usando `const`, `var` ou `let`, você pode opcionalmente adicionar uma
anotação de tipo para especificar explicitamente o tipo da variável

```ts
let myName: string = "Alice";
```

---

## Classes

```ts
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const p = new Pessoa("Maria", 30);
console.log(p.apresentar());
```

---

## Herança

```ts
class Animal {
  constructor(public nome: string) {}

  emitirSom(): void {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log("Au Au!");
  }
}

const dog = new Cachorro("Rex");
dog.emitirSom(); // "Au Au!"
```

---

## Interfaces

```ts
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

function mostrarUsuario(u: Usuario) {
  console.log(`${u.id} - ${u.nome} (${u.email})`);
}

mostrarUsuario({ id: 1, nome: "João", email: "joao@email.com" });
```

---

## Funções

```ts
function soma(a: number, b: number): number {
  return a + b;
}

const multiplicar = (a: number, b: number): number => a * b;

function saudar(nome: string, saudacao?: string): string {
  return `${saudacao ?? "Olá"}, ${nome}`;
}

console.log(soma(2, 3));
console.log(multiplicar(4, 5));
console.log(saudar("Maria"));
```

---

Se você quiser anotar o tipo de retorno de uma função que retorna uma promessa, você deve usar o tipo `Promise`:

```ts
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

Funções anônimas são um pouco diferentes das declarações de funções. Quando uma função aparece em um local onde o
TypeScript pode determinar como ela será chamada, os parâmetros dessa função recebem tipos automaticamente.

```ts
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

---

## Objetos

Além dos primitivos, o tipo mais comum que você encontrará é um tipo de objeto. Refere-se a qualquer valor
JavaScript com propriedades, que são quase todos eles! Para definir um tipo de objeto, simplesmente listamos
suas propriedades e seus tipos.

```ts
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

Aqui, anotamos o parâmetro com um tipo com duas propriedades - x e y - que são ambas do tipo número. Você pode
usar `,` ou `;` para separar as propriedades, e o último separador é opcional de qualquer maneira.

---

Os tipos de objeto também podem especificar que algumas ou todas as suas propriedades são opcionais.
Para fazer isso, adicione um `?` após o nome da propriedade:

```ts
function printName(obj: { first: string; last?: string }) {/*...*/}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

Em JavaScript, se você acessar uma propriedade que não existe, obterá o valor indefinido em vez de um erro de
tempo de execução. Por causa disso, ao ler uma propriedade opcional, você terá que verificar se há indefinido
antes de usá-la.

```ts
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
  if (obj.last !== undefined) { //'obj.last' is possibly 'undefined'.
    console.log(obj.last.toUpperCase());
  }
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

---

## Laços de Repetição

```ts
// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of
const nomes = ["Ana", "Bia", "Carlos"];
for (const n of nomes) {
  console.log(n);
}

// while
let contador = 0;
while (contador < 3) {
  console.log(`Contagem: ${contador}`);
  contador++;
}
```

---
layout: two-cols
---

## Estruturas Condicionais

```ts
const idade = 18;

// if / else
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// ternário
let cat = idade >= 18 ? "Maior" : "Menor";
console.log(status);
```

::right::

```ts
// switch
const cor = "vermelho";
switch (cor) {
  case "vermelho":
    console.log("Pare!");
    break;
  case "verde":
    console.log("Siga!");
    break;
  default:
    console.log("Cor inválida");
}
```

---
layout: two-cols
---

# ORM
Object-Relational Mapping

ORM significa(*Object-Relational Mapping*) Mapeamento Objeto-Relacional. É uma técnica de programação que atua como
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

### Quickstart

```shell
npx typeorm init --name MyProject --database postgres
```

```
MyProject
├── src                   // place of your TypeScript code
│   ├── entity            // place where your entities (database models) are stored
│   │   └── User.ts       // sample entity
│   ├── migration         // place where your migrations are stored
│   ├── data-source.ts    // data source and all connection configuration
│   └── index.ts          // start point of your application
├── .gitignore            // standard gitignore file
├── package.json          // node module dependencies
├── README.md             // simple readme file
└── tsconfig.json         // TypeScript compiler options
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

https://www.typescriptlang.org/

https://www.typescriptlang.org/play

https://www.typescriptlang.org/docs

https://www.typescriptlang.org/docs/handbook/intro.html

https://www.typescriptlang.org/cheatsheets

https://typeorm.io/