---
src: ../cover/cover.md
theme: default
image: /side-logo.png
title: Programação Web Mobile
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
  ogTitle: Programação Web Mobile
  ogDescription: Support material for classes
routerMode: hash
---

---

<Toc />

---

# Programação Web Mobile

A Programação Web Mobile refere-se ao desenvolvimento de aplicações web otimizadas para dispositivos móveis. Ela permite que aplicações sejam acessadas por meio de navegadores em smartphones e tablets, sem a necessidade de instalação.

- Desenvolvimento de aplicações web adaptadas a dispositivos móveis
- Utiliza tecnologias web: **HTML5, CSS3, JavaScript**
- Compatível com múltiplas plataformas (Android, iOS, etc.)
- Executada via navegadores móveis ou empacotada como app híbrido

---

## Tipos de Aplicações

<br>

- **Web Apps**: Aplicações que rodam exclusivamente no navegador.
- **Progressive Web Apps (PWAs)**: Web apps com características de aplicativos nativos, como acesso offline, notificações push e ícone na tela inicial.
- **Híbridas**: Desenvolvidas com tecnologias web, mas empacotadas como apps usando ferramentas como Apache Cordova, Ionic, ou Capacitor.
- **Nativas**: Aplicações escritas em linguagens específicas para plataformas como Swift (iOS) e Kotlin (Android).


---

## Frameworks Populares

<br>

- **React Native**: Framework da Meta. Usa React e JavaScript/TypeScript para criar apps nativos.
- **Flutter**: Criado pela Google. Usa Dart e foca em UI nativa com alta performance.
- **Ionic**: Usa tecnologias web padrão e Capacitor/Cordova para acessar APIs nativas.
- **Vue.js + Quasar**: Permite criação de PWAs com design moderno.
- **Next.js**: Framework para React com suporte a SSR, ótimo para PWAs.

![](/icons.png)

---

## Responsividade

A responsividade garante que a aplicação se adapte bem a diferentes tamanhos de tela.

- **Media Queries** (`@media`)
- **Unidades relativas** (`em`, `%`, `vw`, `vh`)
- **Frameworks CSS** como ReactBootstrap e Tailwind CSS
- **Design adaptativo vs responsivo**

---
layout: two-cols-header
---

### Design Responsivo (Responsive Design)

Definição:
O design responsivo usa media queries em CSS para que o layout se adapte fluidamente ao tamanho da tela, reorganizando ou redimensionando elementos conforme necessário.

::left::

Características:

- Um único layout que se ajusta dinamicamente a diferentes tamanhos de tela.
- Usa unidades relativas como %, em, vh, vw.
- Utiliza breakpoints para modificar o layout em determinados tamanhos.

<br><br><br><br>

::right::

Vantagens:

- Mantém uma única base de código para todos os dispositivos.
- Melhor para manutenção e SEO (não há redirecionamentos).
- Adapta-se bem a novos dispositivos com tamanhos variados.

---
layout: two-cols-header
---

### Design Adaptativo (Adaptive Design)

Definição:
O design adaptativo cria múltiplas versões fixas do layout, uma para cada resolução alvo. O servidor ou o navegador escolhe qual layout carregar com base nas dimensões do dispositivo.

Características:

- Layouts pré-definidos para resoluções específicas (ex: 320px, 768px, 1024px).
- Pode haver vários arquivos HTML/CSS diferentes ou renderizações específicas no backend.
- Uso comum em sites mais antigos ou com foco em experiência controlada.

::left::

Vantagens:

- Maior controle sobre a experiência em cada tipo de dispositivo.
- Pode oferecer desempenho superior em dispositivos específicos.

::right::

Desvantagens:

- Requer mais esforço de design e manutenção.
- Menos flexível para novos tamanhos de tela.

---

App Responsivo:
- O layout se ajusta dinamicamente ao tamanho da tela.
- Usa proporções, flexbox, e layouts fluidos.
- Um único layout que funciona bem em diferentes dispositivos.

App Adaptativo:

- O app detecta a resolução ou tipo de dispositivo e exibe layouts diferentes.
- Pode haver componentes ou telas diferentes para tablets, smartphones, desktop.
- Costuma usar condições específicas ou breakpoints para alterar a UI.




---

## Boas Práticas

<br>

- **Interface Simples**: Evite excesso de informações.
- **Performance**: Otimize imagens, minimize scripts e use lazy loading.
- **Acessibilidade**: Implemente etiquetas e navegação por teclado.
- **Teste Cruzado**: Use BrowserStack ou emuladores para validar em diferentes dispositivos.

---

## Artigos Relevantes

1. **Progressive Web Apps: The Future of Mobile Web?**
   [Google Developers](https://developer.google.com/web/progressive-web-apps)

2. **Hybrid vs Native Mobile App Development**
   IEEE Access, 2021. DOI: 10.1109/ACCESS.2021.3071234

3. **Responsive Web Design: What It Is and How To Use It**
   [Smashing Magazine](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

4. **Mobile Web Performance Best Practices**
   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Performance)

5. **React Native vs Flutter: A Comparative Study**
   ACM Digital Library, 2022.


---

## Referências

- MDN Web Docs. [https://developer.mozilla.org](https://developer.mozilla.org)
- Google Developers. [https://developers.google.com](https://developers.google.com)
- Ionic Framework. [https://ionicframework.com](https://ionicframework.com)
- Flutter. [https://flutter.dev](https://flutter.dev)