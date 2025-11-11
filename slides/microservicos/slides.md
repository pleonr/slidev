---
src: ../cover/cover.md
theme: default
image: /side-logo.png
title: Microservices
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
  ogTitle: Microservices
  ogDescription: Support material for classes
routerMode: hash
---

---

<Toc />

---

# Comunicação entre microsserviços

Dentro da Arquitetura Web baseada em microservices um dos pontos críticos é a comunicação entre eles.
Em uma arquitetura de microsserviços, cada serviço é projetado para ser independente, mas ainda precisam
se comunicar para cumprir os requisitos da aplicação. Escolher uma estratégia de comunicação eficaz
entre microsserviços é crucial, pois impacta o desempenho, a confiabilidade e a manutenibilidade do sistema.

A comunicação pode ser dividida em dois padrões principais:

- Comunicação Síncrona{style="color: lightgreen;"}

  Utilizado em APIS REST principalmente e outros protocolos como GRPC e Graphql, dependem de um `request` e um `response`.

- Comunicação Assíncrona{style="color: lightgreen;"}

  Utilizado quando o processamento de uma requisição pode ser ou precisa ser assíncrona. Para trabalhar com esse
  tipo de comunicação são utilizados sistemas de mensageria, streaming de eventos ou outras técnicas.


---

## Desafios na Comunicação entre Microsserviços

A comunicação entre microsserviços apresenta alguns desafios devido à sua natureza distribuída. Esses desafios podem afetar o desempenho, a consistência e a resiliência do sistema como um todo. Abaixo, estão alguns dos principais desafios na comunicação entre microsserviços:

1. Latência e Desempenho{style="color: lightgreen;"}
Em uma arquitetura distribuída, a comunicação entre microsserviços pode introduzir latência, especialmente em comunicações síncronas (como HTTP/REST). Cada chamada entre serviços exige tempo de rede, processamento e pode acumular latência, especialmente em sistemas onde há muitas chamadas encadeadas.
Minimizar a latência exige otimizar a comunicação e, quando possível, utilizar métodos assíncronos para reduzir o tempo de espera entre serviços.
2. Consistência dos Dados{style="color: lightgreen;"}
Garantir consistência entre microsserviços é difícil, especialmente porque cada serviço gerencia seu próprio banco de dados. Diferentes serviços podem ter visões diferentes dos dados em um determinado momento.
Técnicas como o padrão Saga ou eventual consistency (consistência eventual) ajudam a mitigar esses problemas, mas exigem um planejamento cuidadoso para garantir que o sistema se comporte conforme esperado.

---

3. Gestão de Erros e Tolerância a Falhas{style="color: lightgreen;"}
Falhas de comunicação são comuns, se um serviço dependente falha ou fica temporariamente indisponível, isso pode afetar outros serviços.
Padrões como Circuit Breaker (Disjuntor), Retry (Re-tentativa) e Fallback (Retorno Alternativo) ajudam a lidar com falhas de maneira controlada. O Circuit Breaker, por exemplo, interrompe temporariamente chamadas para um serviço problemático, enquanto o Retry tenta repetir chamadas com falhas antes de desistir.
4. Gerenciamento de Segurança{style="color: lightgreen;"}
Cada microsserviço requer autenticação e autorização para garantir que dados e operações sejam acessados apenas por serviços autorizados. Ferramentas como OAuth, JSON Web Tokens (JWT), e autenticação de API ajudam na proteção, mas adicionar esses controles em cada serviço aumenta a complexidade.
5. Monitoramento e Observabilidade{style="color: lightgreen;"}
Em uma arquitetura de microsserviços, rastrear o caminho de uma requisição que passa por vários serviços é desafiador. É necessário monitorar e observar a saúde dos serviços, identificando onde ocorrem problemas e gargalos.
Ferramentas de rastreamento distribuído, como Graphana, Datadog, NewRelic e Prometheus, ajudam a monitorar o fluxo entre serviços e a identificar problemas de desempenho e falhas de comunicação.

<!--
6. Gerenciamento de Escalabilidade
7. Orquestração vs. Coreografia
8. Dependências de Tempo de Execução
9. Problemas de Versão e Compatibilidade
10. Problemas de Dependência e Acoplamento
-->

---

## Comunicação Indireta
Na comunicação indireta, os processos não precisam conhecer diretamente uns aos outros.
A troca de informações ocorre por meio de um intermediário, como filas de mensagens, sistemas de publicação/assinatura ou middleware.


- Processos não precisam conhecer diretamente seus pares.
- Usa intermediários como filas de mensagens (Message Queues), tópicos (Publish/Subscribe) ou sistemas de armazenamento compartilhado.
- Reduz o acoplamento entre os processos, facilitando a escalabilidade.
- Pode ser assíncrona por natureza, permitindo maior flexibilidade e tolerância a falhas.

---
layout: image-right
image: /alexander-graham-bell.png
---

## Why

Em 1876 Alexander Graham Bell fez a primeira chamada telefonica e registrou a patente do telefone. E a forma inicial
era através de uma conexão direta entre cada ponto de telefone para cada outro ponto.

Ou seja para cada ligação entre uma casa e outro precisava de um cabo entre elas, um ano depois em 1878, a confusão
entre cabos passando por cima de postes, árvores e casas foi uma bagunça.

Para resolver esse problema Grambell utilizou de uma companhia telefonica a primeira desse tipo, onde cada casa era
conectada a telefonica que fazia o redicionamento da chamada para o local correto.

<!--
Alexander Graham Bell was a Scottish-born Canadian-American inventor, scientist,
and engineer who is credited with patenting the first practical telephone.
He also co-founded the American Telephone and Telegraph Company in 1885.
-->

---
layout: two-cols
---

## API Gateway

Um Gateway da API é um componente de rede que funciona entre o cliente e os serviços de backend.
Em vez de se comunicar diretamente com seu backend, os clientes enviam suas chamadas apenas para o gateway da API.

Lá, as solicitações recebidas podem ser processadas diretamente ou encaminhadas para os serviços subjacentes.

Um API pode implementar os serviços de Reverse Proxy e Load Balance, além de outras funcionalidades.

Dentre as alternativas recomendo o Kong e o [express gateway](https://www.express-gateway.io/)

::right::

<img class="m-auto -z-5 left-0  max-w-full max-h-full" src="/kong.png"/>

<br>

<img class="m-auto -z-5 left-0  bottom-0 max-w-full max-h-full" src="/expressgateway.png"/>

<!--
 Autenticação
 Controle de acesso
 Roteamento
 Monetização
 Rate Limit
 Load balance
 Caching
 Monitoring, loging
 Monetizing
 -->



---
layout: two-cols
---

## Load Balancer

O balanceamento de carga é a técnica usada para distribuir com eficiência solicitações de rede recebidas em um grupo de servidores e microsserviços na web.
Ele funciona como um "gerenciador", para dividir a carga entre diversos serviços garantindo nenhum fique sobrecarregado ou ocioso.

Diversos softwares existem para fazer o trabalho de Load Balancer dentre eles podemos destacar o Apache e o NGINX.

Para isso algum algoritmo de loadbalance é aplicado, dentre eles podemos destacar...

::right::

<img class="m-auto -z-5 top-0 left-0 right-0 max-w-full" style="background-color: white" src="/apache.png"/>

<br>

<img class="m-auto -z-5 left-0 bottom-0 right-0 max-w-full" style="background-color: white" src="/nginx.png"/>

<!-- Beneficios do load balance
Reduced downtime
Scalable
Efficiency
Redundancy
Flexibility
-->

---
layout: two-cols
---

- Round Robin:{style="color: lightgreen;"} As solicitações do cliente são distribuídas em todo o grupo de servidores disponíveis em ordem seqüencial.
- Sticky Round Robin:{style="color: lightgreen;"} Este é um algoritmo de melhoria do Round-Robin.
Se o usuário envia uma primeira solicitação e esta for atendida pelo Serviço A, as seguintes solicitações desse usuário vão para o Serviço A também.
- Least Connections:{style="color: lightgreen;"} Uma nova solicitação é enviada ao servidor com o menor número de conexões abertas.
A capacidade de computação relativa de cada servidor é considerada para determinar qual deles tem as menos conexões.
Esse algoritmo assume que todas as conexões requerem potência de processamento quase igual.

::right::

- Least Time:{style="color: lightgreen;"} envia solicitações ao servidor selecionado por uma fórmula que combina o tempo de
resposta mais rápido e o menor número de conexões ativas.
- Hash:{style="color: lightgreen;"} distribui solicitações com base em uma chave que você define, como o endereço IP do cliente ou o URL da solicitação.
- IP Hash:{style="color: lightgreen;"} o endereço IP do cliente é usado para determinar qual servidor recebe a solicitação.Este método suporta a persistência da sessão.
- Random two choices:{style="color: lightgreen;"} escolhe dois servidores aleatoriamente e envia a solicitação para os de servidores selecionados e, em seguida, aplica o algoritmo de menos conexões.

---
layout: two-cols-header
---

## Forward Proxy x Reverse Proxy

Proxies são elementos essenciais em redes de computadores e desempenham papéis importantes em segurança, desempenho e controle de acesso.

::left::

#### Forward proxy

Um forward proxy atua como um intermediário entre os clientes e a internet, direcionando as requisições dos clientes para os servidores externos.
É usado principalmente para controle de acesso à internet, cache de conteúdo, segurança e anonimização.

- Proteger clientes
- Controlar acessos
- Bloquear conteúdo
- Cache


::right::

#### Reverse proxy

O reverse proxy atua como um intermediário entre os clientes e os servidores.
Ele recebe as requisições dos clientes e as encaminha para o servidor correto na rede interna.
Ele é muito utilizado para balanceamento de carga, roteamento de requisições, cache de conteúdo e segurança.

- Proteger servidores
- Aumentar o desempenho
- Balanceamento de carga, Cache
- Criptografar e descriptografar as comunicações SSL


<!--
Mais utilizado quando se tem um cluster de serviços em uma intranet
Utilizado para fazer a comunicação entre uma rede fechada e a internet

Nginx, apache, haproxy
-->

---
layout: image
image: /reverseproxy.webp
---

---
layout: two-cols
---

## Message Broker

Message brokers também conhecidos como sistemas de messageria, são sistemas desenhados para facilitar a troca de
mensagens entre diferentes aplicações, serviços ou
sistemas. Eles desacoplam o remetente (producer) de uma mensagem do receptor (consumer), permitindo sistemas mais
escaláveis, confiáveis e de fácil manutenção.

[![](/Kafka.png)](https://kafka.apache.org/)
<br><br>
[![](/rabbitmq-logo-with-name.svg)](https://www.rabbitmq.com/)

::right::

<br>
<br>

[![](/amazonsqs.png)](https://aws.amazon.com/pt/sqs/)

<br><br>
<div style="background-color: white">
    <a href="https://activemq.apache.org/" target="_blank"><img src="/activemq.svg"/></a>
</div>


<!--
Message brokers são uma espécie de Load Balancer
The main difference between them is that Kafka is a distributed event streaming platform designed to ingest and process
massive amounts of data, while ActiveMQ is a traditional message broker that supports multiple protocols and flexible
messaging patterns.
-->

---

Por que usamos sistemas de messageria

- **Dissociação**: Produtores e consumidores não precisam se conhecer ou estar online simultaneamente.
- **Escalabilidade**: Eles permitem expandir produtores e consumidores de forma independente.
- **Confiabilidade**: Eles podem persistir mensagens para garantir a entrega mesmo que o consumidor esteja temporariamente indisponível.
- **Balanceamento de carga**: distribui mensagens uniformemente entre os consumidores.
- **Comunicação assíncrona**: suporta comunicação sem bloqueio entre serviços.

---

## Funcionamento

Normalmente são divididos em três partes

- **producers**: aplicativos ou serviços que enviam mensagens para um agente de mensagens.
- **brokers**: sistemas que recebem, armazenam e encaminham mensagens.
- **consumers**: aplicativos ou serviços que recebem mensagens de um agente de mensagens.


Sendo o fluxo geralmente dessa forma


* Um produtor envia uma mensagem para uma fila ou tópico específico no intermediário de mensagens.
* O agente de mensagens armazena a mensagem no queuetopic especificado.
* Um consumidor se inscreve no queuetopic para receber e processar mensagens.

---

## Protocolo AMQP

Dentre vários protocolos que podem ser utilizados para message brokers, vou falar um pouco do
Advanced Message Queuing Protocol (AMQP )... Protocolo Avançado de Enfileiramento de Mensagens,
é um protocolo aberto e padronizado de camada de aplicação para Middleware Orientado a Mensagens (MOM).

Ele foi projetado para envio e recebimento de mensagens assíncronas ou seja que talvez e normalmente não tenham uma
resposta imediata, o objetivo dele é ser altamente confiável, flexível e seguro para utilização em sistemas distribuídos.

<br> <br> <br>
<a href="https://www.amqp.org/" target="_blank">
    <img class="m-auto" src="/amqp-logo.png"/>
</a>

---

Características principais do AMQP:

- Orientação a mensagens: A comunicação no AMQP é feita por meio da troca de mensagens, que são unidades de dados autodescritivas que podem conter diversos tipos de informações.
- Roteamento: As mensagens podem ser roteadas para diferentes destinos com base em critérios predefinidos, como chaves de roteamento ou tópicos. Isso permite que os aplicativos publiquem mensagens e assinem tópicos específicos para receber apenas as mensagens relevantes para eles.
- Confiabilidade: O AMQP oferece vários mecanismos para garantir a entrega confiável de mensagens, incluindo confirmações de entrega, retransmissão automática e armazenamento persistente.
- Segurança: O AMQP suporta autenticação, autorização e criptografia para proteger as mensagens contra acesso não autorizado e adulteração.

---

Componentes principais do AMQP:

- Cliente: Um cliente AMQP é qualquer aplicativo que se conecta a um broker AMQP para enviar ou receber mensagens.
- Broker: Um broker AMQP é um servidor central que gerencia o roteamento e a entrega de mensagens entre clientes.
- Exchange: Uma exchange é um componente do broker que roteia mensagens para filas ou tópicos com base em critérios predefinidos.
- Fila: Uma fila é um armazenamento temporário para mensagens que aguardam serem consumidas por um cliente.
- Tópico: Um tópico é um tipo especial de exchange que publica mensagens para todos os clientes que assinaram esse tópico.


---

## pub/sub

O padrão Pub/Sub (Publicação/Assinatura) é um modelo de comunicação assíncrona amplamente utilizado para desacoplar
os produtores e consumidores de mensagens.

Ele permite que os aplicativos publiquem mensagens em um tópico central e que outros aplicativos se inscrevam
para receber essas mensagens.

As mensagens são entregues aos assinantes de forma assíncrona, o que significa que o editor e os assinantes não
precisam estar disponíveis ao mesmo tempo para que a comunicação ocorra.

Vamos implementar um exemplo de pub/sub com o protocolo amqp usando a biblioteca `pika` e o `rabbitmq`

---
layout: two-cols
---

### Exemplo de distribuição

Em um sistema Pub/Sub (Publicador/Assinante), o padrão `fanout` é uma forma de distribuição de mensagens onde uma única mensagem publicada é enviada para múltiplos assinantes.

- O publicador envia uma mensagem para um tópico.
- Todos os assinantes daquele tópico recebem uma cópia da mensagem.
- Isso acontece independentemente do número de assinantes.

::right::

#### Fanout

Imagine um leque (fan) se abrindo.  uma única origem (mensagem publicada) se espalha para vários destinos (assinantes). Uso típico: É o método padrão em muitos message brokers (como RabbitMQ) quando se quer replicar mensagens para múltiplos consumidores.

- Um para armazenar no banco de dados.
- Outro para gerar alertas.
- Outro para exibir em um painel.

---
layout: two-cols
---

#### Direct (Roteamento direto)

As mensagens são entregues somente aos assinantes cujo identificador (routing key) corresponde exatamente à chave usada pelo publicador. Como enviar uma carta a um endereço específico.

<br>

#### Header (Roteamento por cabeçalhos)

As mensagens trazem metadados (cabeçalhos) e o roteamento é feito comparando esses valores com os filtros dos assinantes.

::right::

#### Topic

Permite que os assinantes escolham padrões de tópicos como sensor.* ou *.error, para receber apenas as mensagens de interesse.

#### Work Queue (Fila de trabalho)

Descrição: Cada mensagem é entregue a apenas um consumidor. Mais utilizado para distribuir uma carga de trabalho entre múltiplos consumidores paralelos.

#### Store-and-Forward / Persistence

O broker pode armazenar mensagens até que o assinante as consuma.

---

| Método         | Entrega                         | Exemplo de uso           |
| -------------- | ------------------------------- | ------------------------ |
| **Fanout**     | Todos os assinantes             | Logs, broadcast          |
| **Direct**     | Um destino específico           | RPC, filas nomeadas      |
| **Topic**      | Assinantes filtram por padrão   | IoT, eventos filtráveis  |
| **Header**     | Filtros complexos via metadados | Roteamento por atributos |
| **Work Queue** | Um consumidor por tarefa        | Processamento paralelo   |
| **Multicast**  | Grupo selecionado               | Streaming, replicação    |



---

### Publisher (Publicador)

```python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='logs', exchange_type='fanout')

mensagem = "Hello, assinantes!"
channel.basic_publish(exchange='logs', routing_key='', body=mensagem)

print(f"[x] Mensagem enviada: {mensagem}")
connection.close()
```

---

### Subscriber (Assinante)

```python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='logs', exchange_type='fanout')

result = channel.queue_declare(queue='', exclusive=True)
queue_name = result.method.queue

channel.queue_bind(exchange='logs', queue=queue_name)

def callback(ch, method, properties, body):
    print(f"[x] Recebido: {body.decode()}")

channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
channel.start_consuming()
```

---

#### Testando localmente

- Suba o RabbitMQ com Docker:

```bash
docker run -d --name rabbitmq \
  -p 5672:5672 -p 15672:15672 \
  rabbitmq:3-management
```

- Execute o assinante:

```bash
python subscriber.py
```

- Envie mensagens com o publisher(algumas):

```bash
python publisher.py
```

- Acesse `http://localhost:15672` Login `guest` e senha: `guest`

---

## Monitoramento de microsserviços

Monitoramento é o processo contínuo de coleta, análise e visualização de métricas para garantir que sistemas estejam funcionando corretamente.

É uma forma eficaz de proativa para identificação de problemas, como erros durante a execução, downtime de serviços, garantia de SLAs(Service Legal Agreements) e identificação de pontos de melhoria no sistema.

Dentre os conceitos fundamentais podemos destacar, Métricas, Logs, Tracing, Observabilidade.


<div>
  <img class="m-auto -z-5 bottom-0 right-0 left-0 max-w-75" style="background-color: white" src="/Datadog_logo.png"/>
  <img class="m-auto -z-5 bottom-0 right-0 max-w-75" style="background-color: white" src="/graphana.png"/>
  <img class="m-auto -z-5 bottom-45 right-0 max-w-60" style="background-color: white" src="/new_relic.png"/>
  <img class="m-auto -z-5 bottom-0 left-0 max-w-70" style="background-color: white" src="/prometheus.png"/>
</div>

---
layout: two-cols
---

### Métricas {style="color: lightgreen;"}

Indicadores quantitativos sobre desempenho e saúde de um sistema.

- Latência (tempo de resposta de uma API)
- Taxa de erros e sucessos
- Uso de recursos CPU/memória, disco, rede
- Taxa de requisições (RPS - Requests per Second)

Ferramentas: Prometheus, Datadog, New Relic...

### Tracing {style="color: lightgreen;"}

Rastreio de requisições através de múltiplos serviços, sendo uma ferramenta importante para entender o fluxo do sistema e identificar gargalos.

Ferramentas: Jaeger, OpenTelemetry, Zipkin...

::right::

### Logs {style="color: lightgreen;"}

Registros detalhados de eventos que ocorrem no sistema

- Logs de acesso (HTTP)
- Logs de aplicação (ex.: exceções, mensagens do sistema)
- Logs de sistema (ex.: kernel, infraestrutura)

Ferramentas: ELK Stack (Elasticsearch, Logstash, Kibana), Fluentd...

### Alertas {style="color: lightgreen;"}

Configuração de notificações baseadas em eventos anormais ou limiares de métricas.

Ferramentas: PagerDuty, Grafana Alerting...



---

### OpenTelemetry

OpenTelemetry (OTel) é um projeto open source mantido pela Cloud Native Computing Foundation (CNCF), criado com o objetivo de padronizar a coleta e o envio de dados de observabilidade — ou seja, métricas, logs e traces (rastreamentos de execução),em sistemas distribuídos

- APIs e SDKs para várias linguagens (Go, Java, Python, C#, Node.js, etc.);
- Agentes e coletores para capturar e exportar dados;
- Integração com ferramentas de análise como Prometheus, Grafana, Jaeger, Zipkin, New Relic, Datadog, Elastic, entre outros.

![OpenTelemetry](/opentelemetry.png)

---

### Stack LGTM

![LGTM](/lgtm.png)

---

A pilha LGTM é uma solução de observabilidade de código aberto que combina quatro ferramentas – Loki, Grafana, Tempo e Mimir (ou Prometheus), para monitorar e depurar sistemas distribuídos. Ele fornece uma visão completa de logs, métricas e rastreamentos, com Loki para logs, Grafana para visualização, Tempo para rastreamento distribuído e Mimir (ou Prometheus) para métricas

1. Loki: Loki é um sistema de agregação de logs. Ele é otimizado para armazenamento e recuperação econômica de logs, tornando-o adequado para lidar com grandes volumes de dados de log. Loki armazena logs em formato compactado e indexado, permitindo consulta e filtragem eficientes. Integra-se perfeitamente com outras ferramentas e plataformas comumente usadas em ecossistemas de observabilidade.

2. Grafana: Grafana é uma plataforma popular de código aberto para visualização de dados de séries temporais. Ele fornece uma interface flexível e intuitiva para criar painéis, tabelas e gráficos para monitorar e analisar diversas métricas, incluindo dados de log. Grafana oferece suporte a inúmeras fontes de dados, incluindo Loki, permitindo aos usuários explorar e visualizar dados de log junto com outras métricas de maneira unificada. Ele também oferece recursos avançados como alertas, anotações e modelos.

---

3. Grafana Tempo é uma ferramenta open source de rastreamento distribuído (distributed tracing) desenvolvida pela Grafana Labs. Ele permite coletar, armazenar e consultar traces — ou seja, o histórico detalhado de uma requisição à medida que ela percorre diversos serviços e componentes em um sistema distribuído.
O Tempo mostra o caminho que uma requisição percorre dentro de sua aplicação — do início ao fim — permitindo identificar gargalos, falhas e latências em microserviços.

1. Prometheus é uma ferramenta open source de monitoramento e alerta, desenvolvida originalmente pelo SoundCloud e atualmente mantida pela Cloud Native Computing Foundation (CNCF), a mesma organização do Kubernetes e do OpenTelemetry.
Seu principal objetivo é coletar, armazenar e consultar métricas de sistemas e serviços em tempo real, de forma eficiente e escalável. Prometheus é amplamente utilizado em ambientes cloud-native, microserviços e arquiteturas distribuídas, devido à sua facilidade de integração com o Kubernetes e ao suporte nativo ao modelo pull-based de coleta de métricas.









