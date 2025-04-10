import { isPt } from '@/language';
import { VideoStartsOn } from '@/models/projects-model';

enum Month {
  JANUARY = 0,
  FEBRUARY = 1,
  MARCH = 2,
  APRIL = 3,
  MAY = 4,
  JUNE = 5,
  JULY = 6,
  AUGUST = 7,
  SEPTEMBER = 8,
  OCTOBER = 9,
  NOVEMBER = 10,
  DECEMBER = 11
}

export const projectsData = {
  videoStarts: VideoStartsOn.RIGHT,
  professional: {
    title: isPt ? 'Projetos profissionais' : 'Professional projects',
    projects: [
      {
        title: isPt ? 'Tribanco' : 'Banking website',
        description: () => {
          return isPt ? (
            <>
              Participei do desenvolvimento do site institucional do Tribanco
              utilizando Next.js, React, TypeScript, Tailwind CSS e a biblioteca
              de componentes ShadCN.
              <br />
              <br />
              Fui responsável pela implementação do fluxo completo de três
              telas:
              <br />
              <br />
              <ul className="list-disc pl-4">
                <li>Declaração de Quitação Anual</li>
                <li>Limite Portador</li>
                <li>Resumo de Tarifas</li>
              </ul>
              <br />
              Também colaborei no desenvolvimento de outras telas, como Informe
              de Rendimentos e no gerenciamento de usuários.
              <br />
              <br />A integração com a API foi feita consumindo os endpoints
              fornecidos pelo backend, seguindo a arquitetura MVVM (Model - View
              - ViewModel). Além disso, todo o desenvolvimento foi acompanhado
              por testes unitários, realizados com a ferramenta Vitest.
            </>
          ) : (
            <>
              Project description en
              <br />
            </>
          );
        },
        gifPath: '/img/project-gif/tribanco.gif',
        alt: isPt ? 'Projeto tribanco' : 'Banking project',
        start: new Date(2025, Month.JANUARY),
        end: new Date(2025, Month.MARCH)
      },
      {
        title: isPt
          ? 'Gerenciador de ingressos e eventos'
          : 'Ticket and event manager',
        description: () => {
          return isPt ? (
            <>
              Projeto de um sistema de gerenciamento de ingressos, desenvolvido
              em Angular 16. A plataforma permite que organizadores criem
              eventos com diferentes variantes e lotes, enquanto os
              participantes podem logar e adquirir ingressos por meio de suas
              contas de usuário.
              <br />
              <br />
              Entrei na equipe com as telas principais já prontas e, desde
              então, venho atuando na correção de bugs, melhorias na interface e
              implementação de novas funcionalidades.
            </>
          ) : (
            <>
              Project description en
              <br />
            </>
          );
        },
        gifPath: '/img/project-gif/ingresso.gif',
        alt: isPt ? 'Projeto ingressos' : 'Ticket project',
        start: new Date(2025, Month.MARCH),
        end: new Date()
      }
    ]
  },
  personal: {
    title: isPt ? 'Projetos pessoais' : 'Personal projects',
    projects: [
      {
        title: 'Coffeshop',
        description: () => {
          return isPt ? (
            <>
              Site de uma cafeteria desenvolvido em React como parte dos meus
              estudos sobre a biblioteca. O projeto foi idealizado para aplicar
              na prática conceitos como componentes, props e estados.
              <br />
              <br />O desenvolvimento foi pausado temporariamente devido à
              priorização de projetos profissionais.
            </>
          ) : (
            <>
              Coffee shop website developed in React as part of my studies on
              the library. The project was designed to put into practice
              concepts such as components, props, and states.
              <br />
              <br />
              Development was temporarily paused as I began prioritizing
              professional projects.
            </>
          );
        },
        gifPath: '/img/project-gif/coffeshop.gif',
        alt: isPt ? 'Projeto coffeshop' : 'Coffeshop project',
        links: {
          repo: 'https://github.com/estevaof7/coffee-shop',
          demo: 'https://coffee-shopf7.netlify.app/'
        },
        end: new Date(2025, Month.JANUARY)
      },
      {
        title: 'CineJava',
        description: () => {
          return isPt ? (
            <>
              Aplicação desenvolvida com o objetivo de consolidar conhecimentos
              em Java e sua integração com o MySQL.
              <br />
              <br />
              Trata-se de um sistema para gerenciamento de filmes e sessões de
              cinema, com foco na implementação da lógica de negócio, e
              aplicação de princípios da Programação Orientada a Objetos (POO).
              <br />
              <br />A interface gráfica foi mantida simples, priorizando a
              estrutura e funcionamento do backend.
            </>
          ) : (
            <>
              Application developed with the aim of consolidating knowledge in
              Java and its integration with MySQL.
              <br />
              <br />
              It is a system for managing movies and cinema showtimes, with a
              focus on implementing business logic and applying Object-Oriented
              Programming (OOP) principles.
              <br />
              <br />
              The graphical interface was kept simple, prioritizing the
              structure and functionality of the backend.
            </>
          );
        },
        gifPath: '/img/project-gif/cinejava.gif',
        alt: isPt ? 'Projeto cinejava' : 'Cinejava project',
        links: {
          repo: 'https://github.com/estevaof7/cinejava',
          youtube:
            'https://www.youtube.com/watch?v=DiwVSQ6t_Ps&feature=youtu.be'
        },
        end: new Date(2023, Month.DECEMBER)
      },
      {
        title: 'My first React project',
        description: () => {
          return isPt ? (
            <>
              Projeto desenvolvido para praticar conceitos fundamentais do
              React, como criação de componentes, manipulação de estado, consumo
              de dados via fetch e testes unitários.
              <br />
            </>
          ) : (
            <>
              Project developed to practice fundamental React concepts such as
              component creation, state management, data fetching, and unit
              testing.
              <br />
            </>
          );
        },
        gifPath: '/img/project-gif/react1.gif',
        alt: isPt ? 'Projeto react' : 'React project',
        links: {
          repo: 'https://github.com/estevaof7/react-project-1',
          demo: 'https://spectacular-daifuku-50a414.netlify.app/'
        },
        end: new Date(2024, Month.DECEMBER)
      },

      {
        title: isPt ? 'Agenda Express/MongoDB' : 'Contacts Express/MongoDB',
        description: () => {
          return isPt ? (
            <>
              Aplicação de agenda desenvolvida para praticar Node.js, Express e
              as operações CRUD com MongoDB.
              <br />
              <br />O projeto inclui validação de login, autenticação de
              usuários e gerenciamento completo de uma lista de contatos.
            </>
          ) : (
            <>
              Agenda application developed to practice Node.js, Express, and
              CRUD operations with MongoDB.
              <br />
              <br />
              The project includes login validation, user authentication, and
              full contact list management.
            </>
          );
        },
        gifPath: '/img/project-gif/agenda.gif',
        alt: isPt ? 'Projeto agenda' : 'Contacts project',
        links: {
          repo: 'https://github.com/estevaof7/agenda',
          youtube: 'https://www.youtube.com/watch?v=aG6yPrYZAs4'
        },
        end: new Date(2024, Month.MAY)
      },
      {
        title: 'Easy Carousel',
        description: () => {
          return isPt ? (
            <>
              Em vez de utilizar um carrossel pronto de bibliotecas, decidi
              desenvolver o meu do zero.
              <br />
              <br />
              Implementei opções personalizáveis, como a quantidade de slides e
              o espaçamento entre os botões, além de permitir a cópia dos
              códigos HTML, CSS e JavaScript para uso em outros projetos.
            </>
          ) : (
            <>
              Instead of using a pre-built carousel from a library, I decided to
              create my own from scratch.
              <br />
              <br />I implemented customizable options such as the number of
              slides and the spacing between buttons, and made it possible to
              copy the HTML, CSS, and JavaScript code for use in other projects.
            </>
          );
        },
        gifPath: '/img/project-gif/carrossel.gif',
        alt: 'Projeto tribanco',
        links: {
          repo: 'https://github.com/estevaof7/carousel',
          demo: 'https://estevaof7.github.io/carousel/',
          youtube: 'https://www.youtube.com/watch?v=twr7BSXEBL8'
        },
        end: new Date(2024, Month.OCTOBER)
      },
      {
        title: 'My First Landing Page',
        description: () => {
          return isPt ? (
            <>
              Minha primeira landing page responsiva, desenvolvida como parte de
              um curso com o professor Luiz Otávio, da Udemy.
              <br />
            </>
          ) : (
            <>
              My first responsive landing page, developed as part of a course
              with Professor Luiz Otávio from Udemy.
              <br />
            </>
          );
        },
        gifPath: '/img/project-gif/landing-page.gif',
        alt: isPt ? 'Projeto landing page' : 'Landing page project',
        links: {
          repo: 'https://github.com/estevaof7/my-first-landing-page',
          demo: 'https://estevaof7.github.io/my-first-landing-page/'
        },
        end: new Date(2023, Month.MARCH)
      },
      {
        title: isPt ? 'Equação do Segundo Grau' : 'Quadratic Equation',
        description: () => {
          return isPt ? (
            <>
              Com formação em matemática, um dos meus primeiros projetos ao
              aprender JavaScript foi desenvolvê-lo para resolver equações do
              segundo grau.
              <br />
              <br />O sistema foi pensado para extrair tanto raízes reais quanto
              imaginárias, e também funciona normalmente para equações do
              primeiro grau — basta atribuir o valor 0 ao coeficiente <i>a</i>.
            </>
          ) : (
            <>
              With a graduation in mathematics, one of my first projects when
              learning JavaScript was to develop a tool for solving quadratic
              equations.
              <br />
              <br />
              It was designed to extract both real and imaginary roots, and it
              also works for linear equations — just set the coefficient{' '}
              <i>a</i> to 0.
            </>
          );
        },
        gifPath: '/img/project-gif/eq2grau.gif',
        alt: isPt
          ? 'Projeto equação do segundo grau'
          : 'Quadratic equation project',
        links: {
          repo: 'https://github.com/estevaof7/equacao2grau',
          demo: 'https://estevaof7.github.io/equacao2grau/'
        },
        end: new Date(2023, Month.MAY)
      },
      {
        title: 'Tabs CSS',
        description: () => {
          return isPt ? (
            <>
              Projeto de abas interativas desenvolvido para praticar a
              integração entre HTML, CSS e JavaScript no começo dos meus
              estudos.
              <br />
              <br />A ideia foi explorar a manipulação do DOM e transições
              visuais usando classes e eventos, fortalecendo minha compreensão
              sobre a comunicação entre essas tecnologias.
            </>
          ) : (
            <>
              Interactive tabs project developed to practice the integration
              between HTML, CSS, and JavaScript at the beginning of my studies.
              <br />
              <br />
              The goal was to explore DOM manipulation and visual transitions
              using classes and events, strengthening my understanding of how
              these technologies communicate with each other.
            </>
          );
        },
        gifPath: '/img/project-gif/tabs.gif',
        alt: isPt ? 'Projeto tabs' : 'Tabs project',
        links: {
          repo: 'https://github.com/estevaof7/tabs',
          demo: 'https://estevaof7.github.io/tabs/'
        },
        end: new Date(2023, Month.JULY)
      }
    ]
  }
};
