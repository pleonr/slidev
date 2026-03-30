

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