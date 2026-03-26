---
src: ../cover/cover.md
theme: default
image: /side-logo.png
title: ORM
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
  ogTitle: ORM
  ogDescription: Support material for classes, TEDSII, WebMob, POO
routerMode: hash
---

---

## JDBC

O JDBC (*Java Database Connectivity*) é a API padrão do Java para conectar sua aplicação a praticamente qualquer banco de dados relacional (MySQL, [PostgreSQL](https://jdbc.postgresql.org/), Oracle, etc.).

Pense nele como um "tradutor": não importa qual banco você use, o código Java será quase o mesmo.

Para o JDBC funcionar, precisamos seguir um roteiro básico de 5 etapas:

- Carregar o Driver: Importar a biblioteca específica do banco (ex: MySQL Connector).
- Estabelecer Conexão: Abrir a "ponte" entre o Java e o Banco.
- Criar um Statement: Preparar a sua consulta SQL.
- Executar a Query: Enviar o comando e receber os dados.
- Fechar Conexão: Desligar tudo para não gastar memória.

---
layout: image
image: /jdbc.png
backgroundSize: contain
---

---
layout: image
image: /intelij.png
backgroundSize: contain
---

---

Precisamos adicionar o Driver JDBC (um arquivo .jar) do seu banco de dados.
- Se usa Maven, adicione a dependência no pom.xml.
- Se usa o projeto puro, adicione o JAR ao Build Path.

```xml
<dependency>
    <groupId>com.meubanco</groupId>
    <artifactId>meu-driver</artifactId>
    <version>1.0</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/lib/nome-do-driver.jar</systemPath>
</dependency>
```

Crie uma pasta chamada lib dentro da pasta do seu projeto e coloque o .jar lá. O ${project.basedir} ajuda o Maven a encontrar o caminho relativo.

---

## Maven

Criado pela a Apache, o [Maven](https://mvnrepository.com/) é uma ferramenta de automação de compilação (build) e gerenciamento de dependências. Ele resolve o "inferno dos JARs" (ter que baixar dezenas de bibliotecas manualmente e torcer para que elas sejam compatíveis entre si).

O Arquivo pom.xml, POM significa Project Object Model. É um arquivo XML onde você descreve tudo sobre o seu projeto:

- Identidade: Nome, versão e grupo (ex: com.minhaempresa).
- Dependências: Quais bibliotecas seu projeto usa (o Maven as baixa do Maven Central, um repositório online gigante).
- Plugins: Ferramentas extras (para gerar relatórios, compactar o projeto, etc.).

- Repositório Remoto: Onde o Maven busca as bibliotecas na internet.
- Repositório Local (Pasta .m2): Quando o Maven baixa um JAR, ele guarda no seu computador. Se você criar 10 projetos que usam o mesmo Driver JDBC, o Maven baixa apenas uma vez e compartilha com todos.

---

|Instrução| Ação|
|---|---|
| mvn clean | Limpa a pasta target (apaga arquivos de compilações antigas).|
| mvn compile | Transforma seus .java em .class.|
| mvn test | Executa os testes unitários (JUnit) automaticamente.|
| mvn package | Empacota o código compilado em um arquivo .jar ou .war.|
| mvn install | Copia o seu .jar para o seu repositório local (para outros |projetos seus usarem).

O Maven dita uma estrutura de pastas padrão.

- src/main/java: Seus códigos fonte Java.
- src/main/resources: Arquivos de configuração, imagens, SQLs.
- src/test/java: Seus testes.
- target: Onde o Maven coloca o resultado final (o que foi "construído").

---

O IntelliJ abrirá automaticamente o arquivo pom.xml. É aqui que a mágica acontece.
Para adicionar o driver do banco de dados, você deve inserir o bloco `<dependencies>` logo abaixo da tag `<version>` do seu projeto:

```xml
<dependencies>
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <version>9.0.0</version>
    </dependency>
</dependencies>
```

<!--
O Botão Mágico de "Reload"

Sempre que você altera o pom.xml (adiciona ou remove algo), o IntelliJ exibe um pequeno ícone de elefante com setas azuis no canto superior direito do editor de texto.

Erro Comum: "Maven não encontra o Java"

Se o Maven reclamar de versão do Java, vá em:
File > Settings (ou Ctrl + Alt + S) > Build, Execution, Deployment > Build Tools > Maven > Importing.
Verifique se o JDK for importer é o mesmo que você está usando no projeto.
-->

---

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class TesteJDBC {
    public static void main(String[] args) {
        // Dados da conexão
        String url = "jdbc:mysql://localhost:3306/meu_banco";
        String usuario = "root";
        String senha = "password";
    }
}
```

---

```java
try {
  // 1 & 2. Conectando
  Connection conexao = DriverManager.getConnection(url, usuario, senha);
  System.out.println("Conectado com sucesso!");
  // 3. Criando o comando
  Statement statement = conexao.createStatement();
  String sql = "SELECT id, nome FROM usuarios";
  // 4. Executando e lendo resultados
  ResultSet resultado = statement.executeQuery(sql);
  while (resultado.next()) {
      System.out.println("ID: " +
      resultado.getInt("id") +
      " | Nome: " + resultado.getString("nome"));
  }
  // 5. Fechando tudo
  conexao.close();
} catch (Exception e) {
  System.out.println("Erro: " + e.getMessage());
}
```

<!--
Sempre que for inserir dados vindos do usuário (como um formulário), nunca use Statement comum para evitar ataques de SQL Injection. Use o PreparedStatement:

String sql = "INSERT INTO usuarios (nome) VALUES (?)";
PreparedStatement stmt = conexao.prepareStatement(sql);
stmt.setString(1, "Fulano de Tal"); // O Java limpa o texto pra você
stmt.executeUpdate();
-->

---

## Buildpath

Build Path (Caminho de Compilação) é um dos conceitos mais fundamentais do desenvolvimento Java. Imagine que o compilador Java (javac) é um mestre de obras: o Build Path é a lista de onde ele deve buscar os materiais (classes, bibliotecas e recursos) para construir o seu "prédio" (o arquivo .jar ou .class final).

Se algo não estiver no Build Path, o Java simplesmente dirá: "Não conheço essa classe", resultando no famoso erro ClassNotFoundException ou NoClassDefFoundError.

---

### O que compõe o Build Path?

Basicamente, ele é formado por quatro pilares:

- Source Folders (Código Fonte): São as pastas onde estão os seus arquivos .java (geralmente a pasta src).

- JRE System Library: É o "kit básico". Contém as classes padrão do Java (como String, List, System).

- Referenced Libraries (JARs externos): São as bibliotecas de terceiros que você adiciona, como o driver JDBC que você baixou.

- Projects: Se o seu sistema for dividido em vários módulos, você pode adicionar um projeto como dependência de outro.

---

### Diferença entre Build Path e Classpath

Embora usados como sinônimos às vezes, há uma diferença sutil de "tempo":

- Build Path (Tempo de Compilação): É usado pela sua IDE (Eclipse, IntelliJ, VS Code) para verificar se o código que você escreveu está correto e transformá-lo em bytecode.

- Classpath (Tempo de Execução): É usado pela JVM quando você dá o "Play" no programa. Ele diz onde estão os arquivos que o computador precisa ler para o app rodar de fato.


---

### Como configurar (Manualmente)

Se você não estiver usando Maven ou Gradle, terá que fazer isso "na mão" na sua IDE:

> No IntelliJ: File > Project Structure > Modules > Aba Dependencies.

> No VS Code: Geralmente configurado via arquivo .classpath ou na seção Java Projects na barra lateral.


---

## ORM
Object-Relational Mapping

ORM significa(*Object-Relational Mapper*) Mapeamento Objeto-Relacional. É uma técnica de programação que atua como
ponte entre bancos de dados relacionais (como MySQL ou Postgresql) e linguagens de programação orientadas a objetos.
Em termos mais simples, traduz-se entre o formato estruturado dos bancos de dados e o código orientado a objetos.


Aqui está um cenário típico: Tradicionalmente, você interagiria com um banco de dados usando SQL, uma linguagem
de consulta especial. Com o ORM, você pode interagir com o banco de dados utilizando a sintaxe da sua
linguagem de programação, trabalhando com objetos que representam seus dados.

---
layout: image
image: /diferenca.png
backgroundSize: contain
---

---
layout: image
image: /traducao.png
backgroundSize: contain
---

---
layout: image
image: /paradoxo.png
backgroundSize: contain
---

---
layout: image
image: /mapeamento.png
backgroundSize: contain
---

---
layout: image
image: /ponte.png
backgroundSize: contain
---

---
layout: image
image: /manager.png
backgroundSize: contain
---

---

## JPA

O JPA (Java Persistence API), agora conhecida como Jakarta Persistence, é uma especificação Java oficial que padroniza o mapeamento objeto-relacional (ORM). Ela define interfaces e anotações para persistir objetos Java em bancos de dados relacionais sem escrever SQL direto, exigindo uma implementação (como Hibernate ou EclipseLink)

Como o JPA funciona?

O JPA não é uma ferramenta que você "roda", mas sim um conjunto de regras e interfaces. Para usá-lo, você precisa de uma implementação (um framework que coloque essas regras em prática).

- Entidades: São classes Java simples (POJOs) que representam as tabelas do seu banco de dados. Você usa anotações como @Entity, @Id e @Column para dizer ao JPA como mapear cada campo.

- EntityManager: É a interface principal. Ela funciona como um "gerente" que cuida do ciclo de vida dos seus objetos (salvar, atualizar, buscar e deletar).

- JPQL (Java Persistence Query Language): Uma linguagem de consulta similar ao SQL, mas que foca nos objetos e atributos da classe, em vez de tabelas e colunas.

---
layout: image
image: /hibernate.png
backgroundSize: contain
---

---
layout: image
image: /jpql.png
backgroundSize: contain
---

---
layout: image
image: /uml.png
backgroundSize: contain
---


---
layout: image
image: /ciclo.png
backgroundSize: contain
---

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

## Hibernate

O Hibernate moderno (versão 6+) utiliza as especificações do Jakarta EE. No seu pom.xml, dentro da tag `<dependencies>`, adicione o seguinte:

```xml
<dependencies>
    <dependency>
        <groupId>org.hibernate.orm</groupId>
        <artifactId>hibernate-core</artifactId>
        <version>6.4.4.Final</version> </dependency>

    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <version>9.0.0</version>
    </dependency>
</dependencies>
```

---
layout: image
image: /fetchtypes.png
backgroundSize: contain
---


---
layout: image
image: /n1.png
backgroundSize: contain
---


---

https://medium.com/@linkonahad10/getting-started-hibernate-with-java-a-step-by-step-guide-c36c23046f55