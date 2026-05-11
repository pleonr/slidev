---
src: ../cover/cover.md
theme: default
image: /side-logo.png
title: Microservices security
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
  ogTitle: Microservices security
  ogDescription: Support material for classes TEDSII
routerMode: hash
---

---

# Tópicos Especiais em Segurança

Nos últimos anos, APIs e arquiteturas de microserviços se tornaram a base de aplicações modernas, conectando sistemas, dispositivos móveis, serviços em nuvem e plataformas distribuídas. Essa evolução trouxe maior escalabilidade e integração, mas também transformou APIs em um dos principais alvos de ataques cibernéticos. Vazamentos de dados, abuso de permissões, scraping automatizado e falhas de autenticação demonstram que uma API insegura pode comprometer milhões de usuários e causar enormes prejuízos financeiros e reputacionais. Casos envolvendo empresas como Facebook, Uber e T-Mobile mostram que segurança não deve ser tratada como um recurso opcional, mas como parte essencial do desenvolvimento de software moderno.

---
layout: two-cols
---

## Caso 1 — Facebook / Cambridge Analytica (2018)

O escândalo envolvendo o Facebook e a Cambridge Analytica revelou como APIs podem ser utilizadas de forma abusiva para coleta massiva de dados pessoais, onde um aplicativo de testes de personalidade utilizava a API do Facebook para coletar informações não apenas dos usuários que aceitavam o aplicativo, mas também de seus amigos.
Isso permitiu a extração de dados de dezenas de milhões de pessoas sem consentimento explícito.

- Violação massiva de privacidade
- Uso de dados para campanhas políticas e manipulação de opinião
- Multas bilionárias e danos à reputação do Facebook
- Debate global sobre proteção de dados

::right::

- Principais falhas de segurança
  - Permissões excessivas na API
  - Controle insuficiente de acesso aos dados
  - Falta de limitação de escopo
  - Ausência de monitoramento adequado do uso da API
- Lições aprendidas
  - APIs devem seguir o princípio do menor privilégio
  - Dados sensíveis precisam de escopos bem definidos
  - Auditoria e monitoramento são essenciais
  - Consentimento do usuário deve ser claro e transparente

---
layout: two-cols
---

## Caso 2 — Clubhouse (2021)

O aplicativo de áudio social Clubhouse sofreu um incidente onde dados públicos de aproximadamente 1,3 milhão de usuários foram coletados automaticamente através de scraping.

Aa plataforma não possuía mecanismos suficientes para impedir coleta automatizada em larga escala.

- Dados de usuários expostos
- Risco de phishing e engenharia social
- Construção de bases de dados para spam
- Problemas reputacionais para a empresa

::right::

- Principais falhas
  - Ausência de proteção anti-scraping
  - Rate limiting insuficiente
  - APIs excessivamente abertas
  - Falta de detecção de comportamento automatizado

- Lições aprendidas
  - Dados “públicos” também precisam de proteção
  - APIs devem implementar rate limiting
  - Sistemas precisam detectar bots e automações
  - Monitoramento de tráfego anômalo é fundamental

---
layout: two-cols
---

## Caso 3 — Uber (2016)

Os invasores obtiveram acesso a credenciais armazenadas incorretamente em um repositório privado, permitindo acesso indevido à infraestrutura e APIs internas da empresa.

- Dados de usuários expostos
- Multas milionárias
- Danos reputacionais severos
- Questionamentos sobre governança de segurança
- Processos regulatórios

::right::

- Principais falhas
  - Chaves e credenciais expostas
  - Gestão inadequada de secrets
  - Segurança insuficiente em integrações internas
  - Falta de segmentação e proteção de APIs internas
- Lições aprendidas
  - Nunca armazenar secrets em repositórios
  - Utilizar vaults e rotação de credenciais
  - APIs internas também precisam de proteção
  - DevSecOps deve fazer parte do pipeline


---
layout: two-cols
---

## Caso 4 — Ticketmaster / Snowflake (2024)

Em 2024, a gigante de venda de ingressos Ticketmaster confirmou um grande vazamento de dados ligado ao ambiente cloud da Snowflake. O incidente afetou múltiplas empresas que utilizavam a plataforma.

Os atacantes utilizaram credenciais roubadas por malwares do tipo infostealer para acessar ambientes sem autenticação multifator (MFA). A campanha comprometeu dezenas de empresas e milhões de registros de usuários.

- Dados colocados à venda na dark web
- Possíveis golpes e phishing contra clientes
- Investigação internacional envolvendo dezenas de empresas

::right::

- Principais falhas
  - Ausência de MFA em contas críticas
  - Credenciais reutilizadas e vazadas
  - Segurança insuficiente em ambientes cloud
  - Monitoramento inadequado de acessos suspeitos
- Lições aprendidas
  - MFA deve ser obrigatório
  - APIs e ambientes cloud precisam de monitoramento contínuo
  - Credenciais comprometidas devem ser rotacionadas rapidamente
  - Segurança “secure by design” é essencial

---
layout: image-right
image: /owasp.png
background-size: contain
---

## OWASP

A OWASP (Open Worldwide Application Security Project) é uma organização sem fins lucrativos focada em melhorar a segurança de software e aplicações web. Ela é conhecida mundialmente por produzir materiais gratuitos sobre segurança da informação, boas práticas de desenvolvimento seguro, documentação técnica, ferramentas e rankings de vulnerabilidades.

[OWASP Official Website](https://owasp.org/?utm_source=chatgpt.com)

---
layout: image
image: /owasp1.png
background-size: contain
---

---
layout: image
image: /owasp2.png
background-size: contain
---

---
layout: image
image: /owasp3.png
background-size: contain
---

---
layout: image
image: /owasp4.png
background-size: contain
---

---
layout: image
image: /owasp5.png
background-size: contain
---

---
layout: image
image: /falha.png
background-size: contain
---

---
layout: image
image: /impacto.png
background-size: contain
---



---
layout: image
image: /auth.png
background-size: contain
---

---
layout: image
image: /auth2.png
background-size: contain
---

---
layout: image
image: /auth3.png
background-size: contain
---

---
layout: image
image: /auth4.png
background-size: contain
---


---
layout: two-cols
---

## Autenticação

Os dois principais métodos de autenticação na web são através de `sessions` e `tokens`. Cada um tem suas características
pontos fracos e fortes, como sempre a utilização desses métodos varia conforme com o projeto e o escopo.

Ou seja `depende`...

### Sessions

O método de **sessions** é o tradicional na web sendo utilizado em diversos tipos de aplicativos...

Ele consiste em:

::right::

- Usuário faz o login
- O server cria uma sessão, essa sessão é armazenada em memória no server ou em um banco de dados
- O server devolve o response do login e com o {session ID}
- O cliente armazena essa sessão em um cookie no browser
- O cliente faz uma requisição enviando juntamente o cookie
- O servidor busca essa sessão para checar se ela é válida
- Se estiver tudo certo o servidor devolve o response


---

Essa abordagem foi muito utilizada e existe debate entre os prós e cons de utilizar sessões.
Dentre os cons podemos destacar os dois principais:

#### Segurança:

O principal ponto de falha de segurança nessa abordagem são os ataques de `cross site request forgery`,
[CSRF](https://owasp.org/www-community/attacks/csrf)

Esse tipo de ataque consiste em utilizar uma sessão atualizada em um cookie no navegador da vítima, e enviar um request
malicioso que usa essa sessão armazenada para fazer alguma ação no servidor verdadeiro.

Se a aplicação for desenvolvida com recursos modernos e frameworks para validação, esse risco diminuí, também é
necessária uma boa engenharia social por parte do atacante...

---
layout: image
image: /csrf.webp
backgroundSize: contain
---

---

#### Performance issues

O maior problema atual na utilização de sessões é a sessão ser armazenada ou em memória no servidor, ou em um banco de
dados, não parece um problema grande né..., mas pense da seguinte forma...

1) cada usuário que faz login cria uma sessão.
2) a sessão é armazenada
3) quando um usuário faz qualquer request o server deve:
   - buscar no banco de dados ou em memória essa sessão e validar se é válida
4) agora imagine que temos 10 instâncias desse servidor(API) em execução,
uma API escalada horizontalmente em um cloud server
5) e imagine que temos 1 milhão de usuários logados em cada instância e cada usuário vai fazer em média 5 requisições

---

### JWT

Uma alternativa para o uso de sessions é a utilização de tokens, o mais utilizado hoje é o
JWT[**Json web token**](https://jwt.io/).

O JWT é um padrão de autenticação definido pela [RFC7519](https://datatracker.ietf.org/doc/html/rfc7519).
No JWT é utilizado um token Base64 que pode ser usado com par de chaves ou assinatura(public/private).

Usando JWT o servidor não precisa armazenar nada, ele gera o JWT e devolve para o cliente.



---

Um JWT é uma string com três partes separadas por um `.`, as três partes são `header`, `payload`, `signature`.

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSJ9.SnpFarLPRcuEFZ-bnUC-2PLhEAyzgdSYrS4oNcr6v5Q

<br>

<style>
   .meio {
      display: flex;
      justify-content: center;
      align-items: center;
   }
</style>
<div class="meio">
   <pre class="pre">
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
     <span style="color:rgb(178, 111, 0)">└──────────────────┬─────────────────┘</span>
                      <span style="color:rgb(178, 111, 0)">header</span>
      eyJpZCI6IjEiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSJ9.
     <span style="color:#d63aff">└────────────────────────┬───────────────────────┘</span>
                           <span style="color:#d63aff">payload</span>
      SnpFarLPRcuEFZ-bnUC-2PLhEAyzgdSYrS4oNcr6v5Q
     <span style="color:#00b9f1">└──────────────────────┬────────────────────┘</span>
                        <span style="color:#00b9f1">signature</span>
   </pre>
</div>

---

#### header

Headers é o cabeçalho do token onde passamos basicamente duas informações: o `alg` que informa
qual algoritmo é usado para criar a assinatura e o `typ` que indica qual o tipo de token.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### payload

É onde os dados são armazenados. Pode conter informações como o identificador do usuário, permissões,
expiração do token, etc. O JWT é assinado digitalmente, mas isso não é o mesmo que criptografia,
não é aconselhável utilizar dados sensíveis em um JWT.

```json
{
  "id": "1",
  "email": "teste@teste.com"
}
```

---

#### signature

A assinatura do token (signature) é composta pela codificação do header e do payload somada
a uma chave secreta gerada pelo algoritmo especificado no header.

```shell
HS256SHA256(
    base64UrlEncode(header) + "." + base64UrlEncode(payload), secret_key)
```

<br>

Outros atributos que são comuns no `payload` são:

- `sub`: usado para representar o `subject` ou id do usuário
- `iat`: usado para definir o `inserted at` do token
- `eat`: usado para definir o `expire at` do token

---
layout: image
image: /jwt.png
backgroundSize: contain
---

---

```ts
export const doLogin = async (req: Request, res: Response) => {
   const { username, password } = req.body
   if (!username || !password) {
      return res.status(400).json({ error: 'Username e password são obrigatórios' })
   }
   const usuarioRepository = AppDataSource.getRepository(Usuario)
   try {
      const usuario = await usuarioRepository.findOneBy({ username: username })
      if (!usuario) {
         return res.status(401).json({ error: 'Usuário não encontrado' })
      }
      const isPasswordValid = await bcrypt.compare(password, usuario.password)
      if (!isPasswordValid) {
         return res.status(401).json({ error: 'Credenciais inválidas' })
      }
      return res.status(200).json({ message: 'Login com sucesso' })
   } catch (error) {
      console.error('Erro durante login:', error)
      return res.status(500).json({ error: 'Internal server error' })
   }
}
```

---
layout: two-cols
---

Vamos adaptar a api para utilizar jwt. Primeiro precisamos adicionar o jsonwebtoken ao projeto.

```shell
npm install jsonwebtoken
npm i --save-dev @types/jsonwebtoken
```

Agora nosso processo de login ao verificar um usuário no banco, devemos gerar um token para enviar no response,
esse token vai ser utilizado para autenticar outras requisições.

No método de login vamos importar a lib do jsonwebtoken

```shell
import jwt from "jsonwebtoken"
```

::right::

Vamos mudar o trecho após a validação do login adicionando a criação do token e o retorno do mesmo no response

```ts
const token = jwt.sign({
   username: username
}, process.env.TOKEN, {
    expiresIn: '1h'
})

res.status(200).json({
   auth: true,
   token: token }).send()
```

Agora com o token, precisamos de um método para fazer a autenticação desse token.

---

```ts
import {Request, Response} from "express";
import jwt from "jsonwebtoken";
class Authentication {
    async hasAuthorization(req: Request, res: Response, next: () => void) {
        const bearerHeader = req.headers.authorization
        if (!bearerHeader) {
            res.status(403).json({auth: false, message: 'Nenhum token fornecido.'})
        }
        const bearer = bearerHeader.split(' ')[1]
        jwt.verify(bearer, process.env.TOKEN, function (err, decoded) {
            if (err) return res.status(500).json({
                auth: false,
                message: 'Failed to authenticate token.'
            });
            req.params.token = bearer;
            next();
        });
    }
}
export default new Authentication()
```

---

Depois precisamos adicionar a função que criamos para autenticação nas rotas que queremos "proteger".

```ts
routerUsuario.get("/usuarios/listar", Auth.hasAuthorization ,getUsuarios)
```

<!-- ![](/postman-jwt.png) -->