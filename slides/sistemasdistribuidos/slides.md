---
src: ../cover/cover.md
theme: default
background: side-logo.png
image: /side-logo.png
title: Ubiquitous Computing, Clouds, IoT e Smart Environments
author: Pablo Leon Rodrigues
class: text-center
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
mdc: true
selectable: true
export:
  format: pdf
  timeout: 30000
  withClicks: false
---

---

<Toc columns="1" maxDepth="1"></Toc>

---
layout: image-right
image: /intro.png
alt: Introdução
background-size: 100%
---

# Introdução

[Ubiquitous](https://translate.google.com/?sl=pt&tl=en&text=Computa%C3%A7%C3%A3o%20Ub%C3%ADqua%3A%0ANuvens%2C%20IoT%20e%20Ambientes%20Inteligentes&op=translate) Computing, Clouds, IoT e Smart Environments

A disciplina Ubiquitous Computing: Clouds, IoT e Smart Environments investiga os fundamentos, arquiteturas e desafios dos sistemas distribuídos modernos que integram computação em nuvem, dispositivos inteligentes e ambientes pervasivos. A proposta é entender como tecnologias invisíveis mas onipresentes moldam a maneira como interagimos com o mundo digital, proporcionando conectividade contínua, processamento descentralizado e ambientes responsivos que se adaptam às necessidades dos usuários de forma dinâmica e inteligente.

---
layout: image-right
image: /markweiser.jpg
alt: Mark Weiser
---

## Ubiquitous Computing (Computação Ubíqua) {style="color: green;"}

O conceito definido por Mark Weiser nos anos 1990 de computação ubíqua se refere a uma visão onde a tecnologia está presente em todos os lugares de forma invisível e integrada ao ambiente, sendo que a interação entre usuários e dispositivos é fluida, intuitiva e contextual.

  - Dispositivos pequenos e integrados no ambiente (ex.: sensores, atuadores).
  - Processamento distribuído e descentralizado.
  - Sem a necessidade de interação explícita com dispositivos.
  - Assistentes virtuais. Tecnologias vestíveis.


<!--
How did Mark Weiser define ubiquitous computing?
He is often referred to as the father of ubiquitous computing. He coined the term in 1988 to describe a future in which invisible computers,
embedded in everyday objects, replace PCs. Other research interests included garbage collection, operating sys- tems, and user interface design.
-->

---
layout: two-cols
---

## Cloud Computing (Computação em Nuvem) {style="color: green;"}

É um modelo de computação que fornece acesso sob demanda a recursos de TI, como hardware e software, através da Internet.

- Elasticidade: Recursos são alocados e liberados dinamicamente.
- Pagamento por uso: Custos são proporcionais ao consumo.
- Escalabilidade: Suporte a cargas de trabalho variáveis.

::right::

E podem ser definidos como modelos de Serviço:

- IaaS (Infraestrutura como Serviço): Amazon EC2.
- PaaS (Plataforma como Serviço): Google App Engine.
- SaaS (Software como Serviço): Gmail, Microsoft 365.

Futuramente AIS (Artificial Intelligence Services?)


---
layout: two-cols
---

## Internet of Things (IoT) {style="color: green;"}

A IoT conecta objetos físicos à Internet, permitindo que coletem, processem e troquem dados automaticamente. Cada dispositivo na IoT possui um identificador único e está equipado com sensores e atuadores.

- Conectividade: Integração de dispositivos através de redes.
- Sensores: Coleta de dados em tempo real.
- Automação: Respostas baseadas em eventos, sem intervenção humana.

::right::

<img class="m-auto -z-5 top-0 bottom-0 max-w-100" style="background-color: white" src="/iot.jpg"/>


<!--
#IOT

Casas inteligentes (lâmpadas e termostatos conectados).
Agricultura de precisão (sensores para monitorar umidade e nutrientes do solo).
Saúde conectada (dispositivos médicos inteligentes).
-->

---
layout: two-cols
---

## Smart Environments (Ambientes Inteligentes) {style="color: green;"}

São ambientes físicos equipados com tecnologia IoT e computação ubíqua, projetados para melhorar a qualidade de vida e a eficiência por meio de automação e interatividade.

- Integração: Sensores, dispositivos e softwares atuando juntos.
- Inteligência: Capacidade de aprender com dados e adaptar-se ao comportamento dos usuários.
- Automação: Controle automático de dispositivos para otimizar recursos e facilitar tarefas.


::right::

<img class="m-auto -z-5 top-0 bottom-0 max-w-100" style="background-color: white" src="/smart-environment.png"/>

<!--
#Environments

Smart Homes: Casas que ajustam automaticamente luz, temperatura e segurança.
Cidades Inteligentes (Smart Cities): Gerenciamento eficiente de tráfego, energia e resíduos.
Hospitais Inteligentes: Monitoramento remoto de pacientes e gestão automatizada de medicamentos.
-->



---
layout: image-right
image: /einica.webp
alt: Einiac 1946
---

# Um pouco de história

- 1945 ... ~1985
- Computação centralizada
- Computadores grandes e caros
- Já existiam sistemas com distribuição de
processamento
  - Múltiplos processadores
  - Basicamente de controle centralizado
- Baixa (nenhuma) interação e conectividade

<!--
Criado pelos engenheiros John Eckert e John Mauchly na Universidade da Pensilvânia durante os anos de 1937-1943, o ENIAC tinha como objetivo principal computar dados balísticos de artilharia em altas velocidades para ajudar as tropas aliadas na Segunda Guerra Mundial. No entanto, o ENIAC só foi concluído após o fim da guerra, sendo então utilizado nos primeiros anos da Guerra Fria, tendo contribuído para o projeto da bomba de hidrogênio.[6]

O ENIAC pesava cerca de 30 toneladas e ocupava cerca de 180m², ele era tão grande que tinha de ser disposto em U com três painéis sobre rodas, para que os operadores pudessem se mover em torno dele. Foram gastos cerca de US$ 500 000,00 em sua construção.
-->

---
layout: two-cols
---

## Evolução

Durante esse período aconteceu uma evolução tecnológica sem precedentes com mudanças radicais
- ↑ capacidade de processamento
- ↓ Custo ($)

O que gerou uma evolução continua
- ↑ Capacidade de processamento e desempenho
de redes
- ↓ Custos

::right::

Durante a década de 1980 um novo conceito surgiu.
- Redes de computadores (locais)
  - Facilitar a comunicação entre computadores
- Microprocessadores → PC
  - Aumento no número de computadores

Já no início dos anos 90
- Sistemas abertos
- Interoperabilidade

<!--
Sistemas abertos são aqueles projetados com base em padrões abertos e interoperáveis, permitindo que diferentes componentes, desenvolvidos por fornecedores distintos, trabalhem juntos de maneira integrada.
POSIX, TCP/IP, HTTP, LDAP, HTML, APIS

Ainda nos anos 90 teve início uma evolução das redes de larga escala.
- Redes públicas (governamentais)
- Internet
- Custo de conexão ↓
inpulsionado pelos computadores pessoais.

| Finance and commerce              | eCommerce e.g. Amazon and eBay, PayPal, online banking and trading                              |
|-----------------------------------|-------------------------------------------------------------------------------------------------|
| The information society           | Web information and search engines, ebooks, Wikipedia; social networking: Facebook and MySpace. |
| Creative industries and education | online gaming, music and film in the home, user-generated content, e.g. YouTube, Flickr         |
| Healthcare                        | health informatics, on online patient records, monitoring patients                              |
| Education                         | e-learning, virtual learning environments; distance learning                                    |
| Transport and logistics           | GPS in route finding systems, map services: Google Maps, Google Earth                           |
| Science                           | The Grid as an enabling technology for collaboration between scientists                         |
| Environmental management          | sensor technology to monitor earthquakes, floods or tsunamis                                    |
-->

---


<Youtube id="b0b8YLRdUqw" width="100%" height="100%"/>

<!--
Desenhar arquitetura
clientes > patch server
clientes > login server
login server > proxy servers
proxy servers > world server
world server > synch server
world server > game servers
proxy servers > game servers
synch server >  database
-->


---
layout: two-cols-header
---

::left::

Coulouris
COULOURIS, G.; DOLLIMORE, J.; KINDBERG, T.; BLAIR, G. Sistemas Distribuídos: Conceitos e Projeto. 5. ed. São Paulo: Pearson, 2013.

<img class="m-auto max-w-70" style="background-color: white" src="/sd_coulouris.jpg"/>

::right::

Tanenbaum
TANENBAUM, A. S.; VAN STEEN, M. Distributed Systems: Principles and Paradigms. 4. ed. Upper Saddle River: Pearson Prentice Hall, 2023.

<img class="m-auto max-w-82" style="background-color: white" src="/sd_tanenbaum.jpg"/>

---
layout: two-cols
---

# Definição de Sistemas distribuídos

-  Tanembaum
> “... is a collection of independent computers
  that appear to the users of the system as a
  single computer.”

-  Coulouris
> “... hardware or software components located
  at networked computers communicate and
  coordinate their actions only by passing
  messages.”

::right::

Os principais desafios dos sistemas distribuídos atuais estão:

- Sistemas abertos
- Heterogeneidade
- Segurança
- Escalabilidade
- Tratamento de falhas
- Concorrência
- Transparência
- Qualidade de serviço


---
layout: two-cols
---

## Concorrência

- É a regra, serialização é exceção
- Vários usuários em múltiplos processadores
- Deve-se manipular recursos compartilhados
- Inexistência de relógio global
- Para cooperar é necessário coordenação
- Limites relacionados a precisão da sincronização
- Não há noção única e global do tempo
- Falhas independentes
  - Falhas são inevitáveis. Responsabilidade dos programadores
  - Falhas em rede: isolamento, dificuldade de diferenciação

::right::

## Qualidade

- Principais propriedades não funcionais
  - Confiabilidade
  - Segurança
  - Desempenho
- Aspectos importantes na qualidade de serviço
  - Adaptatividade: atender sistemas variáveis
  - Disponibilidade: de recursos
- Aplicativos manipulam informações em relação ao tempo
  - QoS → satisfazer os prazos finais

---
layout: two-cols
---

## Compartilhamento de recursos

- Usuários estão acostumados com o
compartilhamento de recursos
  - Impressoras, arquivos, mecanismos de busca, …
- Hardware: redução de custos
- O foco maior são nas abstrações de mais alto nível
  - Informações necessárias ao trabalho, aplicações ou atividades sociais
- Padrões de compartilhamento variam
  - Acesso a busca na web
  - Trabalho colaborativo apoiado por computadores

::right::

- O termo “serviço” utilizado como parte um sistema computacional que gerencia recursos
  - Serviço de sistema de arquivos
  - Serviço de impressão
  - Serviço de pagamento eletrônico

- Acesso ao serviço:
  - Operações que ele fornece (exporta)
  - Leitura, escrita, exclusão (caso de arquivos)
  - Recursos ficam encapsulados dentro de computadores
    - Acessíveis de outros
    - Por uma interface de comunicação

---

## Sistemas abertos

- Pode ser estendido ou reimplementado
- Compartilhamento de recursos
  - Disponibilizados a vários clientes
- Especificação das interfaces publicadas
  - Disponíveis
  - RFC (ietf), W3C ...
- Sistemas distribuídos abertos
  - Projetados com padrões públicos
  - Comunicação uniforme
- Uso de hardware ou software heterogêneo
  - Independência de fornecedores


---
layout: two-cols
---

## Heterogeneidade

- Rede
- Hardware
- Sistemas
- Operacionais
- Linguagem de programação
- Implementações
- Representação de dados

::right::

- Middleware:
  - Camada de software
  - Mascara heterogeneidade
  - Modelo computacional uniforme
- Migração/mobilidade código
  - Programas transferidos, executados em outro local
  - Máquinas virtuais de processo (JVM, CLR)
  - Javascript

---
layout: two-cols
---

## Segurança

- Enviar dados sigilosos, em uma ou mais mensagens de forma segura
- Informações compartilhadas de alto valor
  - Confidencialidade: acessos autorizados
  - Integridade: alteração dos dados
  - Disponibilidade: interferência de acesso
  - Autenticidade: é realmente quem diz ser
- Desafios em aberto
  - Deny of services (ataque)
  - Segurança de código móvel

::right::

## Escalabilidade

- Funcionamento efetivo e eficaz em escalas diferentes de componentes
  - Rede local, Intranet, Internet …
- Escalável: permanece eficiente
  - Aumento significativo de recursos ou usuários
- Desafios de projeto: para crescer
  - Controlar o custo de acesso aos recursos: replicação
  - Controlar a perda (gargalo) de desempenho
    - Estruturas e algoritmos hierárquicos ou descentralizados
  - Impedir que os recursos se esgotem: IPv6

---

<img class="m-auto -z-5 bottom-0 right-0 left-0 max-w-full max-h-full" style="background-color: white" src="/internet_growth.png"/>

<!--
https://growthchart.weebly.com/
-->

---
layout: two-cols
---

## Tratamento de Falhas

- Falhas em sistemas distribuídos: parciais
  - Particularmente difíceis
- Detecção de falhas
  - Gerenciar a ocorrência de falhas que não podem ser detectadas, Algumas podem ser detectadas: checksum
- Mascaramento de falhas: Retransmissão de mensagem ou mazenamento replicado
- Tolerância a falhas: fornecer o serviço na presença de falhas
  - Timeout de webserver
- Recuperação de falhas: projetar software que possa
  - Recuperar o estado de dados permanentes: rollback

::right::

## Redundância

- Regra para tornar serviços tolerantes a falhas
  - Existir mais de uma rota para comunicação
  - Replicação de tabelas, componentes de hardware ou bancos de dados
- Sistemas distribuídos: alto grau de disponibilidade em falhas de hardware
  - Grande redundância


---
layout: two-cols
---

## Concorrência

- Suporte a concorrência por meio de processos ou threads concorrentes
- Acesso compartilhado a vários recursos
  - Controle de acesso e conteúdo?
- Recursos num SD devem ser projetados para operarem de forma segura
  - Prever os casos
  - Impedir perda de recursos por acessos compartilhado

::right::

## Transparência

- Ocultar a separação dos componentes de um sistema distribuído
  - Sistema deve ser percebido como um todo e não uma coleção de recursos
  - Usuários finais ou programadores de aplicativos
- A transparência possui grande influência sobre o projeto do software num sistema distribuído

---

# Modelos Físicos

Segunda Aula

No contexto de Sistemas Distribuídos, os modelos físicos representam a base concreta sobre a qual os sistemas são implementados. os modelos físicos descrevem explicitamente os componentes físicos envolvidos, computadores, servidores, dispositivos móveis, sensores embarcados e outros hardwares bem como os meios de comunicação que interconectam esses elementos, por exemplo redes locais (LANs), redes geograficamente distribuídas (WANs), redes sem fio e a própria Internet.

- Descrição explícita do sistema: **hardware**, computadores, dispositivos móveis e embarcados
- Redes de interconexão para troca de mensagens
- Busca abstrair detalhes específicos, definindo um modelo físico mínimo
- **Classificações:**
  - Sistemas Distribuídos Primitivos
  - Sistemas Distribuídos Adaptados para a Internet
  - Sistemas Distribuídos Contemporâneos
  - Sistemas Distribuídos de Sistemas

---

## Sistemas Distribuídos Primitivos

- Surgiram no final dos anos 70 e início dos 80
- Redes locais (Ethernet) com conectividade limitada com a Internet
- Serviços básicos: compartilhamento de impressoras, arquivos, e-mail e transferência de arquivos
- Geralmente sistemas homogêneos com qualidade de serviço primitiva

---

## Sistemas Distribuídos Adaptados para a Internet

- Evolução dos modelos primitivos (anos 90)
- Expansão com o crescimento da Internet (ex.: Google em 1996)
- Sistemas em maior escala, com nós interconectados globalmente
- Aumento da heterogeneidade: hardware, SO, linguagens e middleware
- Ênfase em padrões abertos e serviços web


---

## Sistemas Distribuídos Contemporâneos

- Evolução dos modelos anteriores
- Impulsionados pela computação móvel e pervasiva/ubíqua e em nuvem
  - Computação Móvel
  - Computação Pervasiva/Ubíqua
  - Computação em Nuvem
- Sistemas distribuídos verdadeiramente globais e heterogêneos
- Smart Environment

---

### Computação Móvel

Acesso a informações de todos os lugares e a qualquer momento com “Computadores” compactos portados de forma prática pelo usuário.
Parciptíveis ao usuário, sempre presente algumas vezes coletando informações do ambiente relevantes ao usuário.

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/mobile.png"/>


---

### Computação Pervasiva

É um paradigma de sistemas distribuídos no qual os dispositivos computacionais se integram de maneira invisível e
onipresente ao ambiente, permitindo que serviços e informações estejam disponíveis a qualquer hora e em qualquer lugar.

Em outras palavras, essa abordagem busca tornar a tecnologia parte do cotidiano, com uma rede heterogênea de sensores
 e dispositivos que se comunicam de forma transparente, suportando mobilidade, escalabilidade e interoperabilidade
 sem que o usuário precise gerenciar explicitamente os recursos computacionais.

- Meios de computação estão distribuídos pelo ambiente
  - Perceptíveis ou não aos usuários
  - Extração de informações detalhadas do ambiente
- Utiliza as informações para construir modelos computacionais
  - Configurar, controlar e ajustar aplicações
  - Atender as necessidades de um dispositivo ou usuário
- Ambiente povoado de sensores, computação e aplicações
  - Detectar a existência e interagir com outros integrantes

---
layout: image
image: /comp_pervasiva.png
background-size: contain
---

---

### Computação Ubíqua

Com ideia de tornar a interação homem computador invisível e ou imperceptível, sendo uma união da computação móvel com a pervasiva {style="color: green;"}.

Termo criado por Mark Wiser (1998) Artigo: “The Computer for 21 Century” para a Scientifc American (1991)

> “The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it.”

<br>

- Mobilidade
- Presença distribuída
- Imperceptível
- Inteligente
- Altamente integrada fisicamente
- Interoperabilidade espontânea

---
layout: two-cols-header
---

#### Pervasiva

- Difundida em toda parte
- Orientada a tecnologia
- Computadores e dispositivos móveis

::right::

#### Ubíqua

- Computação em qualquer lugar
- Orientado a usuário ou aplicação
- Uso de dispositivos em geral

---

### Redes de Sensores

São parte da tecnologia que habilita a computação pervasiva/ubíqua

- Usadas para processar informações
  Fazem mais que apenas a comunicação, identificando variáveis do sistema, informações do ambiente, mudanças
- Equipados com dispositivo(s) de sensoriamento
- Ligados por rede sem fio (em geral)
- Recursos limitados: uso eficiente
- Aplicações de medição e vigilância


---

### Clusters e Grids

Relacionados para a computação de alto desempenho, podendo fornecer paralelismo de tarefas

#### Cluster

- Processamento paralelo e distribuído
- Cluster (Network of Workstations)
- Máquinas homogêneas, mesmo SO, rede estável e de alto desempenho
- SSI (Single System Image), facilita gerenciamento de máquinas homogêneas com o mesmo sistema operacional e interconexão estável

<br>

#### Grids (Grades)

- Máquinas heterogêneas: arquitetura, SO, rede, ...
- Podem possuir vários domínios administrativos
- Cluster de cluster

<!--
Em sistemas distribuídos, os grids (ou grades) consistem em uma infraestrutura que integra recursos computacionais
heterogêneos, os quais podem estar espalhados por diferentes locais e sob múltiplos domínios administrativos.
Ao contrário dos clusters, que normalmente reúnem máquinas homogêneas com mesmo sistema operacional e configurações
 similares, os grids agregam nós com arquiteturas, sistemas operacionais e recursos variados, funcionando como um
 "cluster de clusters". Essa abordagem possibilita a execução de aplicações de alta demanda computacional,
 aproveitando a capacidade total dos recursos disponíveis, enquanto oculta a complexidade inerente à sua
 heterogeneidade e distribuição física. Em outras palavras, os grids oferecem uma visão unificada dos recursos,
  facilitando o gerenciamento e a execução de tarefas que exigem alto desempenho e escalabilidade.
-->


---

## Sistemas Distribuídos de Sistemas (System-of-Systems)

Sistemas Distribuídos de Sistemas, ou System-of-Systems (SoS), representam uma evolução dos sistemas distribuídos tradicionais, em que vários sistemas autônomos, heterogêneos e distribuídos são interconectados e cooperam para atingir objetivos comuns, mantendo certa independência operacional. Essa abordagem é comum em contextos modernos como cidades inteligentes, ambientes industriais, sistemas de transporte, saúde digital e defesa.

- Autonomia dos Sistemas Componentes
- Abordam sistemas ultra em larga escala (Ultra Large Scale)
- Distribuição Física e Lógica
- Sistemas complexos
- Dinamicidade e Evolução
- Sinergia Funcional
- Exemplo: gerenciamento ambiental para enchentes integrando sensores, clusters, grids e computação móvel

<!--
Autonomia dos Sistemas Componentes
Cada sistema integrante de um SoS é completo e funcional por si só, com seus próprios objetivos, políticas e mecanismos de controle. Eles podem operar de forma independente, mesmo fora do contexto colaborativo do SoS.

Distribuição Física e Lógica
Os sistemas componentes estão fisicamente dispersos e interagem via redes, formando uma estrutura altamente distribuída com múltiplas camadas e tecnologias.

Heterogeneidade Tecnológica
Diferentes sistemas podem utilizar plataformas, linguagens, protocolos e arquiteturas distintas, exigindo integração por meio de middleware, APIs e padrões abertos.

Dinamicidade e Evolução
Sistemas podem entrar ou sair do SoS dinamicamente, e a configuração do conjunto pode mudar com o tempo — o que exige tolerância a mudanças e mecanismos de adaptação.

Sinergia Funcional
A união dos sistemas proporciona capacidades que nenhum deles teria isoladamente, promovendo funcionalidades mais ricas, escaláveis e adaptativas.
-->

---

| **Sistemas Distribuídos** |           **Primitivos**           |                   **Adaptados para Internet**                   |                                             **Contemporâneos**                                            |
|:-------------------------:|:----------------------------------:|:---------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------:|
|         **Escala**        |              Pequenos              |                             Grandes                             |                                                Utragrandes                                                |
|    **Heterogeneidade**    | Limitada, relativamente homogêneas | Significativa em termos de plataformas, linguagens e middleware |          Maiores dimensões introduzidas incluindo estilos de arquitetura radicalmente diferentes          |
|    **Sistemas Abertos**   |          Não é prioridade          |   Prioridade significativa, com introdução de diversos padrões  |  Grande desafio para a pesquisa, com os padrões existentes ainda incapazes de abranger sistemas complexos |
|  **Qualidade de Serviço** |            Em seu início           |   Prioridade significativa, com introdução de vários serviços   | Grande desafio para a pesquisa, com os serviços existentes ainda incapazes de abranger sistemas complexos |

---
layout: two-cols
---

# Modelos de Arquitetura para Sistemas Distribuídos

- Estrutura baseada em **componentes** e suas inter-relações

Divisão em:

- **Elementos:** Como as entidades se comunicam, suas funções e localização
- **Padrões de Arquitetura:** Organizam camadas lógicas e físicas, clientes leves e serviços web
- **Middleware:** Abstrai e integra diferentes tecnologias e plataformas

::right::

## Elementos de Arquitetura

- **Entidades:** Processos, threads, objetos, componentes e serviços web
- **Paradigmas de Comunicação:**
  - Direta: requisição-resposta e invocação remota
  - Indireta: comunicação em grupo, publish-subscribe, filas de mensagens, espaços de tupla
- Importância do mapeamento físico das entidades para desempenho e confiabilidade

<!--
pag 42
Sistemas Distribuídos, Conceitos e Projeto
Entidades em comunicação
-->

---

### Entidades em comunicação

<br>

- Processos
  - Alguns tipos podem não ser suportados
  - Threads são em geral os pontos de comunicação
- Objetos
  - Acessados por meio de uma linguagem de definição de interface (IDL)
- Componentes
  - Similares a Objetos (interface)
  - Fornecem as dependências explícitas: remove dependências ocultas
- Serviços Web
  - Uso de interface e encapsulamento
  - Associados a padrões da W3C

---
layout: two-cols
---

### Paradigmas de Comunicação

- **Comunicação entre processos**
  - Baixo nível de suporte
  - API para programação de sockets
- **Requisição-Resposta:**
  - Cliente envia solicitação, servidor processa e responde
- **Invocação Remota:**
  - RPC (Remote Procedure Call) e RMI (Remote Method Invocation)
- **Comunicação Indireta:**
  - Uso de filas, publish-subscribe, espaços de tupla e memória compartilhada distribuída
  - Desacoplamento espacial e temporal

::right::

#### Comunicação entre processos (Process-to-Process Communication)

- É o paradigma mais primitivo, baseado em troca direta de mensagens entre processos.
- Usa APIs de sockets (ex: TCP, UDP) para envio e recebimento de dados.
- Tem baixo nível de abstração, exigindo maior controle do programador.
- Exemplo: comunicação entre dois serviços por TCP/IP.



---
layout: two-cols
---

#### Requisição-Resposta

- Padrão para troca de mensagens em interação cliente-servidor
- Fluxo:
  - Cliente solicita
  - Servidor processa e responde
- Primitivo usado onde o desempenho é fundamental (ex.: HTTP)
- Aplicável tanto na comunicação entre processos quanto em invocação remota

::right::

#### Invocação Remota (*Remote Invocation*)

- **Remote Procedure Call (RPC):**
  - Inovação que permite chamar processos (*ou máquinas*) remotos como se fossem locais
  - O sistema oculta o processo de troca de mensagens
- **Remote Method Invocation (RMI):**
  - Similar ao RPC, mas voltado para objetos
- Invocação Remota


---
layout: two-cols
---

#### Comunicação Indireta

- **Comunicação em Grupo:**
  - Envio de mensagem de um para vários
  - Abstração que permite ingresso e envio sem conhecer os destinatários
  - Registro de membros e identificação de falhas
- **Publish-Subscribe:**
  - Produtores/publicadores disseminam eventos
  - consumidores/assinantes recebem via serviço intermediário
  - Reagem a eventos

::right::

#### Comunicação Indireta

- **Filas de Mensagens:**
  - Mensagens são enviadas para uma fila; o receptor retira quando desejar
- **Espaços de Tupla:**
  - Inserção de informações estruturadas em espaços compartilhados e persistentes
  - Retirada das informações quando leitores quiserem
- **Memória Compartilhada Distribuída:**
  - Abstrai o compartilhamento de memória entre processos sem memória física compartilhada
  - Alto nível de transparência


---

| Paradigma            | Acoplamento | Abstração | Exemplos            | Vantagem                             |
| -------------------- | ----------- | --------- | ------------------- | ------------------------------------ |
| Comunicação direta   | Alto        | Baixa     | Sockets TCP/UDP     | Controle direto                      |
| Invocação remota     | Médio       | Média     | RPC, RMI, gRPC      | Facilidade de uso                    |
| Comunicação indireta | Baixo       | Alta      | MQ, Pub/Sub, Tuplas | Escalabilidade e tolerância a falhas |


---

## Entidades e Paradigmas de Comunicação

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/entidadeseparadigmas.png"/>

---
layout: two-cols
---

### Funções e Responsabilidades

- O estilo das funções é fundamental para a arquitetura global
- **Estilos básicos:**
  - **Cliente/Servidor:**
    - Mais citado na literatura, porém com desafios de escalabilidade
  - **Peer-to-Peer:**
    - Todos os nós com funções equivalentes, interagindo cooperativamente
    - Boa escalabilidade

::right::

### Cliente/Servidor

O cliente faz requisições e consome serviços.
O servidor processa as requisições e fornece recursos ou serviços.

Esse modelo é amplamente utilizado na internet, sendo a base para serviços como websites, e-mails, bancos de dados e aplicações em nuvem.

- Servidores podem atuar como clientes de outros servidores
  - Exemplo: Servidor Web acessa um servidor de arquivos local ou serviços DNS
- A interação pode ocorrer em múltiplos níveis

---

#### Tipos de Arquitetura Cliente-Servidor

**Arquitetura de 2 camadas (Two-tier)**
- Cliente comunica-se diretamente com o servidor.
- Exemplo: um aplicativo acessando diretamente um banco de dados.

**Arquitetura de 3 camadas (Three-tier)**

- Introduz uma camada intermediária (servidor de aplicação) para processar lógica de negócios.
- Exemplo: um site que acessa um servidor de aplicação, que por sua vez consulta um banco de dados.

**Arquitetura de N camadas (Multi-tier)**

- Divide os serviços em várias camadas (frontend, backend, banco de dados, etc.).
- Exemplo: sistemas de grande porte como Amazon e Google, onde há múltiplos servidores para diferentes funções.


---
layout: two-cols
---

#### Cliente-Servidor: Cliente

- Envia requisições ao servidor
  - Ativo: inicia o fluxo de processamento
  - Objetivo: consultar ou alterar o estado do recurso
- Geralmente reside em nodo diferente do servidor
- Fluxo:
  - Envia requisição → Aguarda retorno → Lê e processa resposta

::right::

#### Cliente-Servidor: Servidor

- Mantém o recurso a ser acessado (arquivos, BD, impressora, etc.)
- Reage a pedidos de processamento
- Geralmente reside no mesmo nodo do recurso
- Fluxo:
  - Ouve uma porta → Aceita conexões → Processa requisições → Devolve resposta


<!--
Exemplo API
-->

---
layout: two-cols
---

#### Vantagens

- Centralização do controle → O servidor gerencia os recursos e a segurança.
- Facilidade de manutenção → Atualizações ocorrem no servidor, sem necessidade de alterar todos os clientes.
- Segurança → Controle de acesso mais rigoroso e dados protegidos no servidor.

::right::

#### Desvantagens

- Ponto único de falha → Se o servidor falha, todos os clientes são afetados.
- Carga no servidor → Um grande número de clientes pode sobrecarregar o servidor.
- Menos escalável que P2P → Dependendo da infraestrutura, pode ter dificuldades em lidar com milhões de conexões simultâneas.


---
layout: two-cols
---

### Peer-to-Peer (P2P)

A arquitetura Peer-to-Peer (P2P) é um modelo de comunicação em sistemas distribuídos onde os participantes (nós) atuam como pares (peers), sem distinção rígida entre clientes e servidores.
- Nos sistemas P2P, os nós executam funções semelhantes
- Interagem cooperativamente
- Podem ser fornecedores ou consumidores de recursos
- A comunicação depende da aplicação (ex.: bitTorrent)
- Importância na implementação dos algoritmos para distribuição e recuperação de recursos

::right::

Cada nó pode funcionar tanto como fornecedor quanto como consumidor de recursos. O P2P distribui a carga entre os próprios participantes.

- Descentralização: Em redes P2P puras, não há um servidor central que coordena a comunicação. Distribuição de armazenamento, processamento e comunicação
- Escalabilidade: Como os nós compartilham recursos entre si, a rede pode crescer facilmente sem sobrecarregar um único ponto.
- Autonomia e Dinamismo: Os peers podem entrar e sair da rede livremente, tornando a arquitetura altamente adaptável.
- Tolerância a Falhas: Se um nó falha, outros podem assumir suas funções sem impactar toda a rede.


---
layout: two-cols
---

### Peer-to-Peer | Vantagens e Desvantagens

- **Vantagens:**
  - Alta disponibilidade de recursos
  - Tolerância a falhas
  - Custo-benefício
  - Autonomia e dinamismo
  - Distribuição de carga
- **Desvantagens:**
  - Gerenciamento complexo (dificuldade de coordenar os peers)
  - Problemas de segurança (como compartilhamento não autorizado e vulnerabilidades abertas)
  - Qualidade de serviço variável (dependendo da conectividade dos peers)

::right::

### Arquiteturas P2P peer to peer

- **Puras:**
  - Todos os nodos são peers iguais (sem autoridade central)
- **Híbridas:**
  - Pelo menos um servidor central para facilitar a interconexão
- **Super-Peer:**
  - Nós com maior capacidade atuam como intermediários

---

<!-- Slide 39: p2p Puras -->
#### p2p Puras

- Possibilidade de remoção de um peer sem grandes problemas
- Cada peer mantém sua própria lista de peers vizinhos
  - Mensagens são retransmitidas até se obter resultado ou condição de parada

---

#### p2p Puras | Comunicação

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/p2pcomunicacao.png"/>

---
layout: two-cols
---

#### p2p Híbridas

- Existência de pelo menos um servidor central:
  - Atua como terminal de roteamento (estático ou dinâmico)
  - Facilita a interconexão entre peers
- Maior parte do processamento ocorre entre os peers

::right::

Existência de pelo menos 1 servidor central

- Atua como terminal de roteamento
- Pode ser estático ou dinâmico
- Facilitar a interconexão
- Maior parte do processamento entre os peers

---

#### p2p Híbridas | Comunicação

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/p2phibrida.png"/>

---

<!-- Slide 43: p2p Super-Peer -->
#### p2p Super-Peer

- **Super-Peers:**
  - Recebem conexões dos peers e guardam informações
  - Atuam como intermediários entre os peers
  - Interconectados da forma p2p pura
- **Peers:**
  - Entram na rede através de conexão
  - Upload da lista de recursos compartilhados
  - Podem conectar-se a mais de um super-peer

---

#### p2p Super-Peer | Comunicação

<img class="m-auto -z-5 bottom-0 right-0 max-w-full max-h-full" style="background-color: white" src="/p2psuper.png"/>

---
layout: two-cols
---

## Localização (Posicionamento)

Localização (Posicionamento) refere-se ao modo como as entidades (processos, servidores, componentes) são mapeadas na infraestrutura física do sistema distribuído. Esse posicionamento é essencial para determinar propriedades-chave, como:

- Desempenho: A latência e o tempo de resposta são impactados pelo posicionamento físico dos recursos computacionais.
- Confiabilidade: A replicação e a redundância dos servidores ajudam a aumentar a tolerância a falhas.
- Segurança: A localização dos componentes pode influenciar a exposição a ataques e vulnerabilidades.

::right::

### Modelos de Posicionamento
O material lista quatro modelos principais para definir como os recursos e processos são distribuídos em um sistema distribuído:

  - Múltiplos servidores
  - Uso de cache e proxy server
  - Código móvel
  - Agentes móveis

---
layout: two-cols
---

### Múltiplos Servidores

Um serviço pode ser distribuído entre vários servidores, permitindo balanceamento de carga e maior escalabilidade.

- Distribuir recursos entre servidores
- Manter réplicas
- Exemplos: Web, sistemas de diretório (LDAP), clusters

::right::

### Cache e Proxy Server

Técnicas que armazenam dados temporariamente para reduzir o tempo de acesso e a carga sobre os servidores centrais.

- Funciona como cache em CPUs: mantém uma cópia local
- Enquanto a cópia estiver válida, utiliza-a, caso contrário, busca na origem e armazena
- Exemplos: Browsers

---
layout: two-cols
---

### Proxy Server

Um Proxy Server é um intermediário entre um cliente e um servidor final. Ele pode ser usado para melhorar o desempenho, aumentar a segurança e otimizar a comunicação em sistemas distribuídos. No contexto dos modelos de localização em sistemas distribuídos, os servidores proxy desempenham um papel fundamental na caching de dados, na filtragem de conteúdo e na otimização do tráfego de rede.

- Focado no tráfego web
- Proxy server (web)
- Cache para um conjunto de máquinas
- Podem assumir outras funções: firewall
- SQUID

::right::

Dependendo do tipo de proxy, ele pode modificar, armazenar ou simplesmente retransmitir a solicitação.

1. O cliente faz uma requisição para um recurso (por exemplo, um site).
2. O proxy intercepta a requisição e verifica se já possui uma cópia local do recurso.
3. Se o recurso estiver em cache: O proxy o fornece diretamente ao cliente, reduzindo a latência e o consumo de banda.
4. Se o recurso não estiver em cache: O proxy solicita a informação ao servidor real e a armazena para futuras requisições.
5. O proxy retorna a resposta ao cliente.

---
layout: two-cols
---

1. **Forward Proxy (Proxy Direcionado)**
    - Atua entre um cliente interno e a internet.
    - Permite controle de acesso à internet e filtragem de conteúdo.
    - Exemplo: Empresas utilizam forward proxies para restringir o acesso a determinados sites.
2. **Reverse Proxy**
    - Atua entre um cliente externo e servidores internos.
    - Melhora a segurança ao ocultar os servidores reais e distribuir a carga de requisições.
    - Exemplo: Serviços como NGINX e Apache podem ser usados como reverse proxy para balanceamento de carga.

::right::

3. **Transparent Proxy (Proxy Transparente)**
    - O cliente não precisa configurar o proxy manualmente, pois ele intercepta as requisições automaticamente.
    - Usado por ISPs e empresas para filtrar tráfego sem que os usuários percebam.
4. **Proxy de Cache**
    - Armazena temporariamente recursos frequentemente acessados para reduzir latência e tráfego na rede.
    - Exemplo: O Squid Proxy é amplamente usado para caching de páginas web.
5. **Proxy de Segurança**
    - Filtra tráfego malicioso e protege usuários contra ataques.

---

### Agentes Móveis
São programas que podem se mover de um computador para outro enquanto estão em execução, carregando consigo tanto código quanto dados. Essa característica permite que eles executem tarefas distribuídas, otimizando a comunicação e o acesso a recursos de forma eficiente.

- Autonomia: Podem operar de forma independente, sem necessidade de intervenção contínua do usuário.
- Mobilidade: Têm a capacidade de migrar entre diferentes sistemas para realizar suas tarefas.
- Interação: Podem se comunicar com outros agentes ou sistemas distribuídos.
- Adaptabilidade: Podem modificar seu comportamento de acordo com o ambiente no qual estão executando.
- Exemplo: Manutenção/instalação de software em ambientes controlados

---
layout: two-cols
---

#### Vantagens

- Redução de tráfego de rede: Ao invés de transferir grandes volumes de dados entre servidores, o agente se desloca até o local onde a informação está armazenada, processa os dados e retorna apenas com os resultados relevantes.
- Eficiência no acesso a recursos: Permite realizar operações localmente, reduzindo latências de rede.
- Execução distribuída de tarefas: Agentes móveis podem ser utilizados para dividir e processar grandes volumes de informações em diferentes máquinas.

::right::

#### Desvantagens

- Riscos à segurança: Agentes móveis podem ser ameaças para os sistemas que visitam, podendo acessar dados não autorizados.
- Vulnerabilidade dos agentes: Eles mesmos podem ser comprometidos, impedindo a execução correta de suas tarefas ou sendo manipulados por terceiros.
- Mecanismos de proteção:
  - Restrição de permissões do agente (sandboxing).
  - Autenticação e controle de acesso.
  - Uso de criptografia para proteger informações transportadas pelos agentes.


---
layout: two-cols
---

### Código Móvel

- Usuário armazena e executa código localmente
- Vantagens:
  - Boa resposta interativa (reduz atrasos de rede)
- Permite comunicação:
  - Servidor atua ativamente enquanto o cliente permanece reativo
- Exemplos: applets Java, JavaScript, modelo push

::right::

Nessa estratégia o cliente interage com o sistema(servidor) e faz download de um applet.

O código do applet é baixado e interpretado pelo cliente(mobile ou não)

O usuário interage com o applet que se comunica com o servidor.

---

## Padrões de Arquiteturas

Os padrões de arquitetura são baseados nos elementos de arquitetura dos sistemas distribuídos e fornecem estruturas recorrentes para melhorar o desempenho e a organização de sistemas. Eles não são soluções completas, mas ajudam a estruturar a solução de maneira eficiente.

- Baseados em elementos de arquitetura
- Fornecem estruturas recorrentes com bom desempenho em certas circunstâncias
- Não são soluções completas, mas aliados a outros padrões podem resultar em boas soluções
- Principais elementos:
  - Camadas lógicas
  - Camadas físicas
  - Clientes leves (Thin Clients)
  - Serviços Web

---
layout: two-cols
---

### Camadas Lógicas

Um sistema complexo é dividido em camadas, onde cada camada utiliza os serviços da camada inferior. Isso possibilita modularidade, facilidade de manutenção e escalabilidade.

- Relacionadas à abstração do sistema
- Um sistema complexo pode ser dividido em camadas:
  - Cada camada utiliza os serviços da inferior
  - As camadas superiores não conhecem os detalhes das inferiores

::right::

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/camadaslogicasservico.png"/>

### Camadas Lógicas de Serviços | Plataforma

- Consistem das camadas de hardware e software de baixo nível
- Fornecem serviços implementados de formas variadas nos computadores
- Funcionam como interface do sistema, facilitando comunicação e coordenação

<!-- - Exemplos: x86/Windows, x86_64/Linux, ARM/Android, etc.-->

---
layout: two-cols
---

### Middleware

Segundo Coulouris, middleware é a camada de software que fica “entre” as aplicações e
 s sistemas subjacentes (como sistemas operacionais e redes), com o objetivo de ocultar
as diferenças e a heterogeneidade dos ambientes distribuídos.

Em outras palavras, ele fornece um
conjunto de serviços básicos como mecanismos de comunicação, coordenação e compartilhamento de dados
que permitem que os componentes de um sistema distribuído interajam de forma transparente, facilitando o
desenvolvimento de aplicações sem que os desenvolvedores precisem se preocupar com os detalhes
de implementação das comunicações ou com as especificidades de cada plataforma.

::right::

Esta definição enfatiza que o middleware não é apenas um “conector” entre diferentes sistemas, mas sim uma
camada de abstração que viabiliza a construção e operação de sistemas distribuídos complexos
ao oferecer um ambiente uniforme e integrado para a interação entre componentes heterogêneos.

---
layout: two-cols
---

### Middleware

- Camada de software que mascara a heterogeneidade dos sistemas
- Representado por um conjunto de processos/objetos em diferentes computadores que interagem
- Objetivo: fornecer elementos básicos para a construção de componentes de software distribuídos

::right::

### Modelos de Middleware

- Primeiros exemplos:
  - Chamadas de procedimentos remotos (Sun RPC)
  - Comunicação em grupo (ISIS)
- Classificações atuais (não exaustivas):
  - Baseados em eventos, serviços, máquinas virtuais, agentes, banco de dados, espaços de tuplas,
  memória compartilhada distribuída e sistemas P2P

---

### Modelos de Middleware (cont.)

- Classificações não são exatas nem fechadas
- Plataformas modernas tendem a oferecer soluções híbridas
- Middleware facilita o desenvolvimento de aplicações distribuídas
- Limitações:
  - Confiabilidade dependente das aplicações
  - Nem sempre é possível abstrair toda a comunicação sem considerar necessidades específicas


---
layout: two-cols
---

### Camadas Físicas

- Complementam as camadas lógicas
- Organizam as camadas lógicas em servidores apropriados
- Relacionadas à decomposição funcional de uma aplicação:
  - Apresentação, lógica de negócio e acesso a dados

::right::

Arquitetura de Camadas Físicas complementa a lógica ao garantir que a distribuição e a
comunicação entre os componentes considerem as limitações e capacidades do ambiente físico,
proporcionando uma implantação mais eficiente e robusta dos sistemas distribuídos.
---

#### Duas Camadas

- Representação de sistemas organizados em duas camadas

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/2camadas.png"/>

---

#### Três Camadas

- Representação de sistemas organizados em três camadas

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/3camadas.png"/>

---

#### n Camadas

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/ncamadas.png"/>

  [Introdução ao J2EE](http://www.dsc.ufcg.edu.br/~jacques/cursos/j2ee/html/intro/intro.htm)

---
layout: two-cols
---

### Clientes Magros (Thin Clients)

Camada de software com interface local para o usuário acessando serviços de um computador remoto (servidor/nuvem).

Utiliza a rede para conectar em outro dispositivo e usa os recursos do dispositivo onde conectou

- **Vantagens:**
  - Uso de dispositivos simples, baratos e com poucos recursos
  - Melhora com serviços interligados em rede
- **Desvantagens:**
  - Limitações em aplicações com altas taxas de interação, processamento ou gráficos
  - Latência de rede e do sistema operacional

::right::

#### Exemplos de Clientes Magros

- Computação de rede virtual (VNC)
- Remote Desktop (MS e Apple)
- LTSP
- Dispositivos de hardware específicos:
  - KVM-over-IP, Clientron, Wyse 3040, Viewsonic Sc-t25 Citrix, Ncomputing network PC, Ory PC Expanion L120

---

### Serviços Web
Os serviços web são um tipo de arquitetura de software baseada em padrões abertos que permitem a interoperabilidade entre diferentes sistemas e tecnologias.

- Encapsulamento e Interface – Os serviços web são acessíveis via APIs bem definidas.
- Padrões da W3C – Seguem padrões abertos como XML, JSON, SOAP e REST.
- Interoperabilidade – Permitem a comunicação entre diferentes plataformas e linguagens de programação​

Exemplos: SOAP (Simple Object Access Protocol), REST (Representational State Transfer), GraphQL, WebSockets


---
layout: two-cols
---

# Modelos Fundamentais

São usados para descrever sistemas distribuídos de forma mais abstrata, preocupando-se com requisitos, desempenho e confiabilidade.

- Comunicação através de troca de mensagens em rede
- Processos se comunicam

- Abordam os aspectos essenciais dos sistemas distribuídos:
  - Interação
  - Falhas
  - Segurança
  - Desempenho e Confiabilidade

::right::

<br>

- Concentram-se apenas nos elementos essenciais
- Objetivos:
  - Tornar explícitas suposições relevantes
  - Generalizar o que é possível ou não (algoritmos de propósito geral e propriedades desejáveis)
- Garantias baseadas em análises lógicas e provas matemáticas

---
layout: two-cols
---

## Interação

- Processos interagem via troca de mensagens
- Comunicação envolve:
  - Fluxo de informações
  - Coordenação e sincronização de atividades
- Desafios:
  - Atrasos na comunicação
  - Ordenação de eventos e sincronização de relógios
    (Uso de relógios lógicos e algoritmos, ex.: Lamport)

::right::

## Falhas

- Falhas ameaçam a operação correta do sistema
  - Podem ser de hardware ou software
- O modelo de falhas define e classifica essas falhas
- Base para analisar efeitos e projetar sistemas tolerantes a falhas

---

## Segurança

- Segurança é fundamental para proteger recursos e informações
- Requer:
  - Modelo modular e protocolos abertos
  - Definição e classificação das formas de ataques
- Base para análise de ameaças e desenvolvimento de sistemas resilientes

---
layout: two-cols
---

# Modelos de Interação

- Sistemas distribuídos compostos de vários processos interagindo de diferentes formas:
  - Cliente/Servidor, P2P, pub/sub, etc.
- Cada processo possui:
  - Algoritmo (sequência) e dados (variáveis)
- Envolve transmissão e recepção de mensagens para coordenação e transferência de informações

::right::

## Modelos de Interação | Desempenho de Rede

- **Latência:**
  - Tempo entre o início da transmissão e o início da recepção
  - Inclui tempo de transmissão, atraso de rede e processamento
- **Largura de banda:**
  - Volume total de dados transmitidos
- **Jitter:**
  - Variação no atraso de transmissão entre mensagens

---

## Modelos de Interação | Relógios e Mensagens de Tempo

Nos sistemas distribuídos, cada computador possui seu próprio relógio interno. Entretanto, esses relógios não são perfeitamente sincronizados e podem apresentar diferenças de tempo ao longo da execução do sistema. Essa falta de sincronização pode gerar problemas na coordenação entre processos distribuídos, principalmente na ordenação de eventos e na consistência de dados.

Problemas na Sincronização de Relógios
- Cada computador mede o tempo de forma independente, resultando em timestamps (marcas de tempo) diferentes para eventos que ocorrem simultaneamente em diferentes máquinas.
- Mesmo que um ajuste inicial seja feito, os relógios continuam a variar ao longo do tempo devido à diferença nas taxas de oscilação dos cristais dos processadores.
- Esse desvio ao longo do tempo é chamado de drift, e pode ser definido como a taxa na qual um relógio local se desvia de um relógio ideal e preciso.

---

### Sherlock Holmes

Na noite de 30 de Junho para 1 Julho 2012 na Inglaterra, muitos serviços online e sistemas ao redor do mundo falharam simultaneamente.

- Servidores travaram e pararam de responder.
- Algumas linhas aéreas não conseguiam processar reservas ou entradas e saídas por várias horas. Voos ficaram parados.
- Vários servidores ficaram indisponíveis

---

## Relógios em Sistemas Distribuídos

São utilizados para medir tempo em sistemas
- Agendamentos, timouts, detecção de falhas, retry
- Performance e estatistica
- Logs, gravar quando um evento ocorreu
- Validação de datas e tempo (cache)

Commando dig para DNS

```bash
dig www.cst.com.ac.uk
```

Certificado de algum site https

---
layout: two-cols
---

## Relógios Físicos

Relógios de quartzo utilizam oscilações de cristais de quartzo para manter a precisão do tempo, são comuns em eletrônicos devido à sua estabilidade e baixo custo.

- O cristal de quartzo oscila em uma frequência fixa quando energizado.
- Um circuito eletrônico traduz essas oscilações em sinais de clock. (Efeito Piezoeletric)
- Esses sinais são usados para temporização e coordenação de pacotes de dados.

::right::

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/rossonadorquartzo.webp"/>


---
layout: two-cols
---

### Erro em Quartz Clocks

Pequenos desvios na oscilação do cristal de quartzo podem levar a erros cumulativos, impactam a precisão de sistemas críticos que dependem de sincronização precisa.

Essa variação é chamada de drift, o drift refere-se à variação gradual da frequência ao longo do tempo e pode ser causado por diversos fatores como temperatura, idade do cristal e tensão de alimentação.

- Drift é medido em partes por milhão (ppm - parts per million).
- 1 ppm = 1 microsegundo por segundo = 86ms por dia. Em um ano são 32 segundos.

::right::

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/drif.png"/>

<!---
- Uso de compensadores térmicos (TCXO - Temperature Compensated Crystal Oscillator).
- Osciladores de quartzo controlados por fornos (OCXO - Oven Controlled Crystal Oscillator).
- Ajustes periódicos via sincronização com sinais de referência externos, como GPS ou NTP.
-->

---

## Leap Seconds

Todo ano em 30 Junho e 31 Dezembro em 23:59:59: UTC(Universal Time Coordinated), astronomos efetuam os cálculos para determinar a velocidade de rotação da terra. Atualmente utilizamos duas principais formas de medir o tempo.

- Baseada em Astronomia GMT(Greenwich Mean Time) que leva em consideração a posição soloar de acordo com a visualização no meridiano de Greenwich.
- Baseado em Quantum Mechanics TAI(International Atomic Time) 1 dia é 24 x 60 x 60 x9,192,631,770 periods of caesium-133's frequencia de ressonância.

[Leap seconds](http://leapsecond.com/) são ajustes de tempo aplicados ao Tempo Universal Coordenado (UTC).
- Introduzidos para compensar a desaceleração da rotação da Terra.
- Usados para manter o tempo atômico alinhado com o tempo astronômico.

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/leapsecond.jpg"/>


---
layout: two-cols-header
---

Para reduzir os problemas causados pelo desvio de relógios e melhorar a coordenação em sistemas distribuídos, algumas estratégias podem ser usadas...

::left::

### **Sincronização Baseada em Fonte Externa**

- Utiliza fontes externas precisas, como GPS e servidores de tempo atômico, para sincronizar os relógios dos computadores da rede.
- Possui precisão de até 1 microssegundo, mas tem limitações:
  - Não funciona bem em ambientes internos.
  - Alto custo de implementação.

::right::

### **Protocolos de Sincronização de Tempo**

- Protocolo de Tempo de Rede (NTP - Network Time Protocol): amplamente utilizado na Internet para sincronizar relógios com precisão de milissegundos.
- Protocolo de Tempo de Christian: baseia-se na comunicação com um servidor confiável que fornece a hora correta.
- Protocolo de Tempo de Berkeley: usado quando não há uma fonte externa confiável, sincronizando os relógios baseando-se na média dos tempos dos computadores da rede.



---
layout: two-cols
---

## Modelos de Interação | Sistemas Distribuídos Síncronos

- Tempos de execução com limites mínimos e máximos
- Mensagens devem ser recebidas dentro de um tempo máximo conhecido
- A taxa de desvio dos relógios é conhecida
- Desafios:
  - Sem Garantias, sistema não confiável
  - Dificuldade em obter valores reais e garantir prazos sem alocar recursos necessários

::right::

## Modelos de Interação | Sistemas Distribuídos Assíncronos

- Não há garantias quanto aos tempos de execução ou atrasos nas transmissões
- A maioria dos sistemas reais é assíncrona
  - Compartilham tempo de processamento e acesso à rede sem sincronização rigorosa
- Estratégias:
  - Uso de tempo limite de espera
  - Execução concorrente de outras atividades
- Qualquer solução válida para sistemas assíncronos pode ser aplicada em ambientes síncronos
- Problemas podem surgir em sistemas de tempo real (ex.: transmissão multimídia)

---

## Ordenação de Eventos

- Necessidade de determinar a ordem dos eventos:
  - Antes, depois ou simultâneos
- Mesmo sem um relógio único, é possível descrever a execução pela ordem dos eventos

O algoritmo de Lamport, é uma técnica fundamental para ordenar eventos em sistemas
distribuídos sem depender de um relógio global. Cada processo no sistema mantém um
relógio lógico, que é um contador interno incrementado a cada evento local.
Quando um processo envia uma mensagem para outro, ele anexa o valor atual do seu relógio.
 Ao receber a mensagem, o processo receptor atualiza seu relógio para o valor máximo
 entre o seu próprio e o timestamp recebido, incrementando-o em seguida.

Essa abordagem garante que se um evento A causou um evento B (por exemplo, A envia uma mensagem que B recebe), então o timestamp de A será menor que o timestamp de B. Assim, o algoritmo estabelece uma relação de causalidade parcial entre os eventos, permitindo que os sistemas distribuídos mantenham uma noção consistente de ordem mesmo na ausência de um relógio sincronizado. Vale lembrar que, embora essa ordenação seja suficiente para respeitar a causalidade, ela não é uma ordenação total, ou seja, eventos que não têm relação causal direta podem ter timestamps que não reflitam uma ordem “real” sem a aplicação de critérios adicionais.

---

### Conceito de Ordem Causal(Causality)

Lamport propôs a relação "happened-before" (→) para definir a ordem dos eventos, essa relação é baseada na física que diz,
Casualidade é a relação entre causas e efeitos, que deriva da teoria da relatividade de Einstein.

- Se dois eventos ocorrem no mesmo processo, o que ocorre primeiro tem precedência.
- Se um evento "A" envia uma mensagem e outro evento "B" recebe essa mensagem, então A → B.
- Se A → B e B → C, então A → C (transitividade).
- Essas regras criam uma ordem parcial dos eventos no sistema.

O algoritmo de Lamport é utilizado em diversos contextos, como:

- Controle de concorrência em bancos de dados distribuídos.
- Protocolos de mutual exclusion distribuída.
- Sistemas de replicação distribuída, como o Google Spanner.
- Blockchain e consistência eventual em sistemas distribuídos.


---

<Youtube id="nfRouGH0oMg" width="100%" height="100%"/>

---

```python
class Process:
  def __init__(self, process_id):
    self.process_id = process_id
    self.clock = 0

  def event(self):
    """Executa um evento interno e incrementa o relógio lógico."""
    self.clock += 1
    print(f"Processo {self.process_id} executou um evento. Novo relógio: {self.clock}")

  def send_message(self, receiver):
    """Envia uma mensagem para outro processo e inclui o relógio lógico."""
    self.clock += 1  # Incrementa antes de enviar
    print(f"Processo {self.process_id} enviando mensagem para {receiver.process_id} com timestamp {self.clock}")
    receiver.receive_message(self.clock)

  def receive_message(self, sender_clock):
    """Recebe uma mensagem, ajusta o relógio lógico."""
    self.clock = max(self.clock, sender_clock) + 1
    print(f"Processo {self.process_id} recebeu mensagem. Novo relógio: {self.clock}")
```

---

```python
P1 = Process(1)
P2 = Process(2)

P1.event()
P1.send_message(P2)
P2.event()
P2.send_message(P1)
```

Output:

```bash
❯ python3 lamport.py
Processo 1 executou um evento. Novo relógio: 1
Processo 1 enviando mensagem para 2 com timestamp 2
Processo 2 recebeu mensagem. Novo relógio: 3
Processo 2 executou um evento. Novo relógio: 4
Processo 2 enviando mensagem para 1 com timestamp 5
Processo 1 recebeu mensagem. Novo relógio: 6
```

---

### Ordenação de Eventos

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/ordenacaoeventos.png"/>

---

## Modelos de Falhas

- Define como as falhas se manifestam
- Proporciona entendimento dos efeitos e consequências
- Conceitos-chave: Falha - Erro - Defeito

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/falhaerrodefeito.png"/>

  (Referência: T. S. Weber, 2014)

---

### Problema dos dois Generais

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/two-generals.png"/>

---

### Problema dos dois Generais

Imagine dois generais (General A e General B) que comandam exércitos separados e precisam atacar um inimigo em conjunto para terem sucesso. Eles estão posicionados em montanhas opostas, com o inimigo em um vale entre eles.

A única forma de comunicação entre os generais é por meio de mensageiros, que precisam atravessar o vale inimigo para entregar as mensagens. No entanto, esses mensageiros podem ser capturados, impedindo que a mensagem chegue ao destino.

Para que o ataque seja bem-sucedido, ambos os generais precisam atacar exatamente ao mesmo tempo. Se um atacar sem o outro, o exército inimigo derrotará o general solitário.

O problema surge porque nenhum dos generais pode ter certeza absoluta de que sua mensagem foi recebida pelo outro. Mesmo que um general envie uma mensagem com a ordem de ataque e o outro responda confirmando o recebimento, não há garantia de que essa confirmação também chegue com sucesso. Isso cria um ciclo infinito de confirmações, sem que um consenso definitivo possa ser alcançado.

---

#### Implicações em Sistemas Distribuídos

O problema dos dois generais exemplifica um desafio fundamental em sistemas distribuídos: a dificuldade de alcançar um consenso confiável em uma rede não confiável. Isso tem implicações diretas para:

- Protocolos de Comunicação: Em redes distribuídas, pacotes de dados podem ser perdidos, corrompidos ou atrasados, tornando difícil garantir que todas as partes envolvidas tenham o mesmo estado da informação.
- Consistência de Dados: Em bancos de dados distribuídos, garantir que todas as réplicas tenham exatamente os mesmos dados no mesmo momento é um problema semelhante ao dos dois generais.
- Confirmação de Mensagens: Em sistemas de mensagens distribuídas, como filas de mensagens e comunicação entre servidores, garantir que uma mensagem foi recebida e processada corretamente é um desafio.

---

Embora o problema dos dois generais seja matematicamente impossível de resolver com 100% de certeza, na prática, soluções aproximadas são usadas, como:

- Protocolos de confirmação de recebimento (ex.: TCP, que retransmite pacotes perdidos).
- Algoritmos de consenso como Paxos e Raft, usados em sistemas distribuídos para alcançar acordos de forma confiável mesmo em redes instáveis.
- Timeouts e retries para mitigar falhas de comunicação.


---

### Erro, Falha e Defeito

- Erro: É uma discrepância entre o comportamento esperado e o comportamento real de um sistema. Um erro pode ser resultado de um defeito e pode levar a uma falha.
- Defeito (Bug): É uma imperfeição no design, implementação ou operação do sistema. Um defeito pode levar à ocorrência de um erro em determinadas circunstâncias.
- Falha: Ocorre quando um erro afeta o funcionamento do sistema, tornando-o incapaz de fornecer o serviço esperado.

A relação entre esses conceitos pode ser vista da seguinte maneira: um defeito pode causar um erro, e um erro pode levar a uma falha caso não seja tratado adequadamente.

---

Os Modelos de Falhas são utilizados em sistemas distribuídos para definir, classificar e entender como as falhas podem ocorrer e se manifestar. Eles são essenciais para a análise dos efeitos das falhas e para o desenvolvimento de sistemas tolerantes a falhas.

- Falhas por Omissão – Ocorrem quando um componente do sistema falha ao executar uma operação esperada, como a não entrega de uma mensagem ou a ausência de resposta de um serviço.
- Falhas Arbitrárias – Incluem comportamentos inesperados e imprevisíveis, como respostas erradas ou funcionamento incorreto.
- Falhas de Temporização – Acontecem quando um sistema distribuído síncrono não consegue respeitar os prazos estabelecidos para resposta.
- Modelo de Falhas de Cristian – Uma abordagem para entender e lidar com falhas no tempo de execução de sistemas distribuídos.

---

### Falhas por Omissão e Arbitrárias

| Parada<br>por falha       | Processo             | O processo para e permanece parado. Outros processos podem detectar esse estado.                                                               |
|---------------------------|:--------------------:|------------------------------------------------------------------------------------------------------------------------------------------------|
| Colapso                   | Processo             | O processo para e permanece parado. Outros processos podem não detectar esse estado.                                                           |
| Omissão                   | Canal                | Uma mensagem inserida em um buffer de envio nunca chega no buffer de recepção do destinatário.                                                 |
| Omissão de envio       | Processo             | Um processo conclui um envio, mas a mensagem não é enviada                                                                                     |
| Omissão de recepção    | Processo             | Uma mensagem é colocada no buffer de recepção de um processo, mas esse processo não a recebe efetivamente.                                     |
| Arbitrária (bizantina) | Processo ou canal | Ele pode enviar/transmitir mensagens arbitrárias em qualquer momento, cometer omissões; um processo pode parar ou realizar uma ação incorreta. |

---

### Byzantine Generals

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/byzantine.webp"/>

---

Imagine um grupo de generais bizantinos que precisam coordenar um ataque a um inimigo. Eles se comunicam apenas por meio de mensageiros, mas alguns generais podem ser traidores e enviar informações erradas. O objetivo do grupo leal é decidir em conjunto se devem atacar ou recuar, garantindo que todos os generais leais tomem a mesma decisão, independentemente da ação dos traidores.

O desafio está no fato de que:

- Os generais não podem confiar totalmente na comunicação, pois mensagens podem ser adulteradas ou contraditórias.
- Alguns generais podem mentir deliberadamente para confundir os outros.
- O consenso precisa ser alcançado mesmo na presença dessas falhas.
- O problema dos generais bizantinos demonstra que, sem um protocolo adequado, é impossível alcançar um consenso confiável em um sistema distribuído quando há agentes maliciosos.


---

#### Falha Bizantina em Sistemas Distribuídos

Em um sistema distribuído real, uma falha bizantina pode se manifestar das seguintes formas:

- Um nó da rede pode enviar mensagens diferentes para diferentes partes do sistema, causando inconsistências.
- Um servidor pode processar requisições de maneira incorreta, retornando dados errados ou contraditórios.
- Mensagens podem ser corrompidas por erro de software ou hardware, gerando informações incoerentes.
- Ataques de segurança, como a introdução de nós maliciosos em uma rede peer-to-peer, podem comprometer a confiabilidade do sistema.

---

Podemos mitigar o problema da falha Bizantine utilizando as seguintes abordagens:

1. Algoritmos de Consenso Tolerantes a Falhas Bizantinas
  São protocolos projetados para permitir que um sistema atinja um consenso mesmo na presença de nós maliciosos ou falhos. Exemplos incluem:
  - PBFT (Practical Byzantine Fault Tolerance) – Um algoritmo que permite que sistemas distribuídos continuem funcionando corretamente, desde que menos de 1/3 dos nós sejam bizantinos.
  - Algoritmo de Paxos Bizantino – Uma versão modificada do Paxos que lida com falhas arbitrárias.
  - Algoritmo de consenso do Bitcoin (Proof-of-Work) – Baseado em mineração, ele tolera até 50% de nós maliciosos.
2. Redundância e Replicação
  Execução redundante: Múltiplas cópias do mesmo processo são executadas e comparadas para detectar anomalias.
  Votação majoritária: Se vários nós independentes chegam a um consenso sobre um resultado, ele pode ser considerado confiável.
3. Criptografia e Assinaturas Digitais
  Uso de assinaturas digitais para garantir que as mensagens não sejam adulteradas durante a transmissão.
  Hashing e verificação de integridade para garantir a autenticidade dos dados.

---

### Falhas de Temporização

- Aplicáveis a sistemas distribuídos síncronos
- Problema: indisponibilidade de resposta dentro de um intervalo de tempo

| Relógio    | Processo | O relógio local do processo ultrapassa os limites de sua taxa de desvio em relação ao tempo físico. |
|------------|:--------:|:---------------------------------------------------------------------------------------------------:|
| Desempenho | Processo |              O processo ultrapassa os limites do intervalo de tempo entre duas etapas.              |
| Desempenho | Canal    |                  A transmissão de uma mensagem demora mais do que o limite deﬁnido.                |

---

### Modelo de Falhas de Christian

É uma abordagem para caracterizar e detectar falhas em sistemas distribuídos baseada em premissas temporais. Nesse modelo, pressupõe-se que os processos podem falhar de forma definitiva (crash-stop) e que existe um limite superior conhecido para atrasos nas comunicações e respostas. Assim, se um processo não responder dentro desse tempo previamente estipulado, o sistema o considera como tendo falhado.

- Assunção de falhas por crash-stop: uma vez que um processo falha, ele deixa de operar e não se recupera espontaneamente.
- Dependência de limites temporais: o modelo supõe que é possível definir um tempo máximo de resposta (timeout) baseado em características conhecidas da rede e do processamento. Se esse tempo for excedido, o processo é marcado como inoperante.
- Detecção baseada em timeouts: essa estratégia permite que os sistemas distribuídos identifiquem e isolem falhas, facilitando a implementação de mecanismos de tolerância, mesmo que a determinação exata do “momento” da falha seja complexa em ambientes assíncronos.

O modelo de falhas de Christian fornece uma base para projetar mecanismos de detecção de falhas em sistemas distribuídos, contando com a existência de limites temporais que permitam distinguir entre atrasos normais e a real inatividade de um processo.

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/modelodefalhasdecristian.png"/>
(Referência: T. S. Weber, 2014)

---
layout: two-cols
---

### Modelos de Segurança

- Alcançados protegendo:
  - Processos
  - Canais de comunicação
- Visa impedir acessos não autorizados e garantir direitos de acesso
- Importância de associar invocações e resultados à identidade do executor

- **Servidor:** Confere a identidade e os direitos de quem requisita
- **Cliente:** Verifica a identidade do servidor

::right::

- Servidores e processos P2P publicam interfaces que permitem acesso de qualquer local
- Tarefas ficam sujeitas a ataques externos

<br>

#### Invasor (Atacante)

- Processo que pode:
  - Enviar mensagens a outros processos
  - Ler ou copiar mensagens em trânsito
- Pode estar em um computador legitimamente conectado ou agir de forma não autorizada

---
layout: two-cols
---

#### Ameaças a Processos

- Processos podem receber mensagens sem conseguir identificar o remetente
- **Servidores:**
  - Mesmo solicitando identificação, podem não confirmar a legitimidade
- **Clientes:**
  - Ao receber resultados, podem não saber se vêm de um servidor autêntico (risco de spoofing)

::right::

#### Ameaça aos Canais de Comunicação

- Invasores podem copiar, alterar ou injetar mensagens
- Risco à integridade e à privacidade das comunicações
- Mensagens podem ser armazenadas para uso futuro

#### Canais Seguros

- Camada adicional à comunicação:
  - Criptografia
  - Autenticação de mensagens
- Garante que cada processo conheça a identidade do remetente
- Fornece privacidade, integridade e impede reordenação ou reprodução de mensagens


---
layout: two-cols
---

#### Negação de Serviço (DoS)

Um ataque DDoS é um tipo de ataque que visa interromper as operações normais de um servidor, serviço ou rede alvo inundando-o com tráfego de internet. Sobrecarregado com tráfego, o servidor ou rede não consegue mais lidar com solicitações normais, o que faz com que ele fique significativamente mais lento ou trave completamente.

- Denial of Service (DoS)
- Caracterizado por inúmeras solicitações e transmissões contínuas
- Objetivo: sobrecarregar os recursos físicos, retardando ou bloqueando operações válidas

::right::

#### Códigos Móveis

- Risco na execução de códigos vindos de fontes externas
  (Ex.: anexos de e-mail, navegação)
- Podem atuar como "cavalos de troia"
- Riscos: acesso e modificação não autorizada dos recursos
- Medidas de segurança:
  - Limitar o acesso (ex.: em Java)
  - Análise rigorosa do código

<!-- guerra javascript apple
-->

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/ddos.jpg"/>

<!--
Distributed Denial-of-Service (DDoS)

Ataque à Estônia (2007)
Em 2007, a Estônia foi alvo de uma série de ataques DDoS que paralisaram serviços governamentais, bancários e de mídia. Esses ataques, considerados pioneiros em escala nacional, demonstraram como questões políticas e geopolíticas podem desencadear ataques cibernéticos coordenados.

Ataque à Spamhaus (2013)
A organização Spamhaus, que combate o envio de spam na internet, sofreu um dos maiores ataques DDoS já registrados. Utilizando técnicas de amplificação, o ataque gerou um volume de tráfego que ultrapassou centenas de gigabits por segundo, evidenciando a capacidade de sobrecarregar redes e serviços críticos.

Ataque à Dyn (2016)
Um dos episódios mais impactantes, esse ataque utilizou a botnet Mirai – que explorava dispositivos IoT mal protegidos – para atingir o provedor de DNS Dyn. Como consequência, diversos serviços populares, como Twitter, Netflix e Reddit, enfrentaram indisponibilidade, demonstrando a interdependência das infraestruturas online.

Ataque ao GitHub (2018)
Neste caso, o GitHub foi atingido por um ataque recorde que explorou servidores Memcached para amplificar o tráfego, alcançando picos de 1,35 terabits por segundo. Apesar da rápida mitigação pelo provedor, o episódio serviu como alerta para as novas técnicas de amplificação que podem ser utilizadas em ataques DDoS.

Esses exemplos ressaltam não só a evolução técnica e o aumento da escala dos ataques DDoS, mas também a necessidade contínua de desenvolver mecanismos de defesa robustos para proteger sistemas e serviços críticos na era digital.
-->

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/ddos.avif"/>

---

<img class="m-auto -z-5 bottom-0 top-0 right-0 max-w-full max-h-full" style="background-color: white" src="/ddos-02.avif"/>

---































































CYBER SECURITY BRAZIL. "SaaS está morto", declara CEO da Microsoft. Disponível em: https://www.cybersecbrazil.com.br/post/saas-est%C3%A1-morto-declara-ceo-da-microsoft. Acesso em: 14 jan. 2025.

Weber, T. S, Um roteiro para exploração dos conceitos básicos de tolerância a falhas, 2014. Disponível em https://www.researchgate.net/publication/228681453_Um_roteiro_para_exploracao_dos_conceitos_basicos_de_tolerancia_a_falhas

Wiser, Mark. The Computer for 21 Century. SIGMOBILE Mob. Comput. Commun. Rev., 1999. p. 3-11.Disponível em https://dl.acm.org/doi/pdf/10.1145/329124.329126

BDC NETWORK. Taking Full Advantage of Smart Building Technology. Disponível em: https://www.bdcnetwork.com/video/taking-full-advantage-smart-building-technology. Acesso em: 1 fev. 2025.

BRAINVIRE. The Future of Mobile Computing. Disponível em: https://www.brainvire.com/The-future-of-mobile-computing/. Acesso em: 1 fev. 2025.

NORTON. DDoS Attacks. Disponível em: https://us.norton.com/blog/emerging-threats/ddos-attacks. Acesso em: 1 fev. 2025.

SKETCHPLANATIONS. The Two Generals' Problem. Disponível em: https://sketchplanations.com/the-two-generals-problem. Acesso em: 1 fev. 2025.

---

Material adaptado do Professor Marcelo Trindade Rebonatto