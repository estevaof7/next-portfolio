import { isPt } from '@/constants/language';
import {
  ProjectsModel,
  ProjectType,
  VideoStartsOn
} from '@/models/projects-model';
import { getTech, Tech } from './tech-data';
import { getDate, MONTH } from '@/utils/get-date';

const currently = isPt ? 'atualmente' : 'currently';

const typeLabel = (type: ProjectType): string => {
  if (type === ProjectType.PERSONAL) {
    return isPt ? 'Projeto pessoal' : 'Personal project';
  }
  return isPt ? 'Projeto profissional' : 'Professional project';
};

export const projectsData: ProjectsModel = {
  videoStarts: VideoStartsOn.RIGHT,
  professional: {
    title: isPt ? 'Projetos profissionais' : 'Professional projects',
    projects: [
      {
        title: isPt
          ? 'Dietitian - Startup de nutrição'
          : 'Dietitian - Nutri startup',
        description: () => {
          return isPt ? (
            <>
              Faço parte de uma startup que está desenvolvendo uma plataforma
              com o objetivo de revolucionar o mundo da nutrição.
              <br />
              <br />O sistema auxilia nutricionistas na criação de planos
              alimentares personalizados, no gerenciamento de gastos e na
              análise precisa da ingestão nutricional de seus pacientes.
              <br />
              <br /> A plataforma conta com um extenso banco de dados de
              alimentos (incluindo informações das tabelas TBCA, TACO e IBGE) e
              realiza cálculos automáticos de macronutrientes, calorias e
              micronutrientes ao criar ou editar refeições e planos alimentares.
              <br />
              <br />
              O sucesso da empresa depende diretamente do empenho e dedicação da
              equipe em entregar um produto de alta qualidade, dentro dos prazos
              e alinhado às necessidades do mercado.
              <br />
              <br />
              Como desenvolvedor frontend no projeto, fui responsável pela
              implementação de módulos essenciais da aplicação, incluindo:
              <br />
              <br />
              <ul className="list-disc pl-4">
                <li>
                  <b>Módulo de Refeições:</b> listagem, cadastro e visualização
                  de refeições personalizadas
                </li>
                <li>
                  <b>Módulo de Alimentos:</b> listagem de alimentos das tabelas
                  TBCA, TACO e IBGE, além do cadastro de alimentos
                  personalizados
                </li>
                <li>
                  <b>Módulo Financeiro:</b> gerenciamento de gastos e lucros do
                  nutricionista
                </li>
                <li>
                  <b>Módulo Daily:</b> Postagens no formato do instagram com comentários e likes para o nutricionista acompanhar seus pacientes
                </li>
                <li>
                  <b>Módulo de Configurações:</b> Gerenciamento da conta do nutricionista
                </li>
                <li>
                  <b>Módulo de Integração com o WhatsApp:</b> Integração com o WhatsApp para envio de mensagens e notificações
                </li>
                <li>
                  <b>Módulo de Prontuário:</b> Gerenciamento de prontuários de pacientes
                </li>
              </ul>
            </>
          ) : (
            <>
              I am part of a startup that is developing a platform with the goal
              of revolutionizing the nutrition world.
              <br />
              <br />
              The system assists nutritionists in creating personalized meal
              plans, managing expenses, and precise analysis of their
              patients&apos; nutritional intake.
              <br />
              <br />
              The platform has an extensive food database (including information
              from TBCA, TACO, and IBGE tables) and performs automatic
              calculations of macronutrients, calories, and micronutrients when
              creating or editing meals and meal plans.
              <br />
              <br />
              The company&apos;s success depends directly on the team&apos;s
              commitment and dedication to delivering a high-quality product,
              within deadlines and aligned with market needs.
              <br />
              <br />
              As a frontend developer on the project, I was responsible for
              implementing essential application modules, including:
              <br />
              <br />
              <ul className="list-disc pl-4">
                <li>
                  <b>Meals Module:</b> listing, registration, and visualization
                  of personalized meals
                </li>
                <li>
                  <b>Foods Module:</b> listing of foods from TBCA, TACO, and
                  IBGE tables, in addition to registering personalized foods
                </li>
                <li>
                  <b>Financial Module:</b> management of nutritionist expenses
                  and profits
                </li>
              </ul>
              <br />
              This project provided me with experience in developing complex
              interfaces, data integration, and creating a responsive and
              intuitive user experience using modern frontend technologies.
            </>
          );
        },
        gifPath: '/img/project-gif/dietitian.gif',
        alt: isPt ? 'Projeto tribanco' : 'Banking project',
        start: getDate(MONTH.JULY, 2025),
        end: currently,
        tech: [
          getTech(Tech.NEXT),
          getTech(Tech.REACT),
          getTech(Tech.TS),
          getTech(Tech.TAILWIND)
        ],
        techPosition: 'image',
        type: typeLabel(ProjectType.PROFESSIONAL)
      },

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
              I contributed to the development of Tribanco’s institutional
              website using Next.js, React, TypeScript, Tailwind CSS, and the
              ShadCN component library.
              <br />
              <br />
              I was responsible for the complete implementation of three main
              pages:
              <br />
              <br />
              <ul className="list-disc pl-4">
                <li>Annual Debt Clearance Statement</li>
                <li>Bearer Limit</li>
                <li>Tariff Summary</li>
              </ul>
              <br />
              I also collaborated on the development of other pages, such as
              Income Report and User Management.
              <br />
              <br />
              The API integration was done by consuming the endpoints provided
              by the backend, following the MVVM (Model - View - ViewModel)
              architecture. In addition, the entire development process was
              supported by unit testing using Vitest.
            </>
          );
        },
        gifPath: '/img/project-gif/tribanco.gif',
        alt: isPt ? 'Projeto tribanco' : 'Banking project',
        start: getDate(MONTH.JANUARY, 2025),
        end: getDate(MONTH.MARCH, 2025),
        tech: [
          getTech(Tech.NEXT),
          getTech(Tech.REACT),
          getTech(Tech.TS),
          getTech(Tech.TAILWIND)
        ],
        techPosition: 'image',
        type: typeLabel(ProjectType.PROFESSIONAL)
      },

      {
        title: isPt
          ? 'Sistema de Gerenciamento e Monitoramento Médico'
          : 'Medical Management and Monitoring System',
        description: () => {
          return isPt ? (
            <>
              Participei do desenvolvimento de um sistema voltado para o
              gerenciamento e monitoramento de informações médicas.
              <br />
              <br />
              Minhas principais atividades incluíram correção de bugs,
              manutenção de funcionalidades existentes e a migração da aplicação
              do Angular 6 para Angular 18, visando maior performance, segurança
              e compatibilidade com tecnologias mais modernas.
            </>
          ) : (
            <>
              I contributed to the development of a system focused on medical
              information management and monitoring.
              <br />
              <br />
              My main responsibilities included bug fixing, maintaining existing
              features, and migrating the application from Angular 6 to Angular
              18, aiming to improve performance, security, and compatibility
              with modern technologies.
            </>
          );
        },
        gifPath: '/img/project-gif/mv.gif',
        alt: isPt ? 'Projeto MV' : 'MV project',
        start: getDate(MONTH.MAY, 2025),
        end: getDate(MONTH.JUNE, 2025),
        tech: [
          getTech(Tech.ANGULAR),
          getTech(Tech.TS),
          getTech(Tech.BOOTSTRAP)
        ],
        techPosition: 'image',
        type: typeLabel(ProjectType.PROFESSIONAL)
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
              Ticket management system project developed with Angular 16. The
              platform allows event organizers to create events with different
              variants and ticket lots, while participants can log in and
              purchase tickets through their user accounts.
              <br />
              <br />I joined the team after the main screens were already built,
              and since then, I&apos;ve been working on bug fixes, interface
              improvements, and the implementation of new features.
            </>
          );
        },
        gifPath: '/img/project-gif/ingresso.gif',
        alt: isPt ? 'Projeto ingressos' : 'Ticket project',
        start: getDate(MONTH.MARCH, 2025),
        end: getDate(MONTH.MAY, 2025),
        techPosition: 'image',
        tech: [
          getTech(Tech.ANGULAR),
          getTech(Tech.TS),
          getTech(Tech.BOOTSTRAP)
        ],
        type: typeLabel(ProjectType.PROFESSIONAL)
      },

      {
        title: isPt
          ? 'Versão web do app da PGFN (Procuradoria-Geral da Fazenda Nacional)'
          : 'Web version of a Government Agency National Treasury app',
        description: () => {
          return isPt ? (
            <>
              Desenvolvi juntamente com outro desenvolvedor a versão web do
              aplicativo da Procuradoria-Geral da Fazenda Nacional (PGFN),
              originalmente criado em Flutter.
              <br />
              <br />
              A aplicação foi construída com Angular 19, TypeScript e Angular
              Material, mantendo a identidade visual e a experiência do app
              mobile.
              <br />
              <br />
              Os usuários podem acessar notícias, consultar eventos e se
              inscrever neles, com uma interface responsiva e acessível.
              <br />
              <br />
              Atualmente, estamos utilizando dados mockados para testes.
            </>
          ) : (
            <>
              I co-developed the web version of the application for the Office
              of the Attorney General of the National Treasury (PGFN),
              originally built in Flutter.
              <br />
              <br />
              The web app was developed using Angular 19, TypeScript, and
              Angular Material, while maintaining the visual identity and user
              experience of the mobile app.
              <br />
              <br />
              Users can access news, view events, and register for them through
              a responsive and accessible interface.
              <br />
              <br />
              Currently, we are using mock data for testing.
            </>
          );
        },
        gifPath: '/img/project-gif/pgfn.gif',
        alt: isPt ? 'Projeto pgfn' : 'Pgfn project',
        end: getDate(MONTH.MAY, 2025),
        tech: [
          getTech(Tech.ANGULAR),
          getTech(Tech.TS),
          getTech(Tech.BOOTSTRAP)
        ],
        techPosition: 'image',
        type: typeLabel(ProjectType.PROFESSIONAL)
      },

      {
        title: isPt ? 'Leitor QR Code SESC' : 'QR code reader for SESC',
        description: () => {
          return isPt ? (
            <>
              Projeto desenvolvido para o Sesc utilizando Angular 19 (mobile).
              <br />
              <br />
              Atuei na construção de uma aplicação mobile de leitura de QR Code,
              voltada para o controle de acesso nas catracas das unidades.
              Funcionários utilizam o app para escanear os QR Codes apresentados
              por clientes ou visitantes, e a aplicação retorna os dados da
              pessoa, indicando se a entrada está liberada ou bloqueada.
              <br />
              <br />O sistema é integrado à plataforma principal, garantindo
              segurança e agilidade no processo de validação de acesso.
            </>
          ) : (
            <>
              Project developed for a sports club using Angular 19 (mobile).
              <br />
              <br />
              I worked on building a mobile QR code reader application designed
              for access control at the club entrances. Staff members use the
              app to scan QR codes presented by clients or visitors, and the
              system returns the person’s information, indicating whether access
              is authorized or blocked.
              <br />
              <br />
              The app is integrated with the main platform, ensuring secure and
              efficient entry validation.
            </>
          );
        },
        gifPath: '/img/project-gif/sesc.gif',
        alt: isPt ? 'Projeto sesc' : 'Ticket sesc',
        start: getDate(MONTH.MARCH, 2025),
        end: getDate(MONTH.APRIL, 2025),
        tech: [
          getTech(Tech.ANGULAR),
          getTech(Tech.TS),
          getTech(Tech.BOOTSTRAP)
        ],
        techPosition: 'image',
        type: typeLabel(ProjectType.PROFESSIONAL)
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
        buttons: [
          {
            text: isPt ? 'Repositório' : 'Repository',
            href: 'https://github.com/estevaof7/coffee-shop'
          },
          {
            text: 'Demo',
            href: 'https://coffee-shopf7.netlify.app/'
          }
        ],
        end: getDate(MONTH.JANUARY, 2025),
        tech: [
          getTech(Tech.REACT),
          getTech(Tech.JS),
          getTech(Tech.CSS),
          getTech(Tech.BOOTSTRAP)
        ],
        techPosition: 'text',
        type: typeLabel(ProjectType.PERSONAL)
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
        buttons: [
          {
            text: isPt ? 'Repositório' : 'Repository',
            href: 'https://github.com/estevaof7/cinejava'
          },
          {
            text: isPt ? 'Vídeo' : 'Video',
            href: 'https://www.youtube.com/watch?v=DiwVSQ6t_Ps&feature=youtu.be'
          }
        ],
        end: getDate(MONTH.DECEMBER, 2023),
        tech: [getTech(Tech.JAVA), getTech(Tech.MYSQL)],
        techPosition: 'text',
        type: typeLabel(ProjectType.PERSONAL)
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
        buttons: [
          {
            text: isPt ? 'Repositório' : 'Repository',
            href: 'https://github.com/estevaof7/react-project-1'
          },
          {
            text: 'Demo',
            href: 'https://spectacular-daifuku-50a414.netlify.app/'
          }
        ],
        end: getDate(MONTH.DECEMBER, 2024),
        tech: [getTech(Tech.REACT), getTech(Tech.JS), getTech(Tech.CSS)],
        techPosition: 'text',
        type: typeLabel(ProjectType.PERSONAL)
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
        buttons: [
          {
            text: isPt ? 'Repositório' : 'Repository',
            href: 'https://github.com/estevaof7/agenda'
          },
          {
            text: isPt ? 'Vídeo' : 'Video',
            href: 'https://www.youtube.com/watch?v=aG6yPrYZAs4'
          }
        ],
        end: getDate(MONTH.MAY, 2024),
        tech: [
          getTech(Tech.NODE),
          getTech(Tech.MONGODB),
          getTech(Tech.JS),
          getTech(Tech.BOOTSTRAP)
        ],
        techPosition: 'text',
        type: typeLabel(ProjectType.PERSONAL)
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
        alt: isPt ? 'Projeto carrossel' : 'Carousel project',
        buttons: [
          {
            text: isPt ? 'Repositório' : 'Repository',
            href: 'https://github.com/estevaof7/carousel'
          },
          {
            text: 'Demo',
            href: 'https://estevaof7.github.io/carousel/'
          },
          {
            text: isPt ? 'Vídeo' : 'Video',
            href: 'https://www.youtube.com/watch?v=twr7BSXEBL8'
          }
        ],
        end: getDate(MONTH.OCTOBER, 2024),
        tech: [
          getTech(Tech.JS),
          getTech(Tech.CSS),
          getTech(Tech.BOOTSTRAP),
          getTech(Tech.HTML)
        ],
        techPosition: 'text',
        type: typeLabel(ProjectType.PERSONAL)
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
        buttons: [
          {
            text: isPt ? 'Repositório' : 'Repository',
            href: 'https://github.com/estevaof7/my-first-landing-page'
          },
          {
            text: 'Demo',
            href: 'https://estevaof7.github.io/my-first-landing-page/'
          }
        ],
        end: getDate(MONTH.MARCH, 2024),
        tech: [getTech(Tech.HTML), getTech(Tech.CSS), getTech(Tech.JS)],
        techPosition: 'text',
        type: typeLabel(ProjectType.PERSONAL)
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
        buttons: [
          {
            text: isPt ? 'Repositório' : 'Repository',
            href: 'https://github.com/estevaof7/equacao2grau'
          },
          {
            text: 'Demo',
            href: 'https://estevaof7.github.io/equacao2grau/'
          }
        ],
        end: getDate(MONTH.MAY, 2023),
        tech: [getTech(Tech.JS), getTech(Tech.HTML), getTech(Tech.CSS)],
        techPosition: 'text',
        type: typeLabel(ProjectType.PERSONAL)
      }
      // {
      //   title: 'Tabs CSS',
      //   description: () => {
      //     return isPt ? (
      //       <>
      //         Projeto de abas interativas desenvolvido para praticar a
      //         integração entre HTML, CSS e JavaScript no começo dos meus
      //         estudos.
      //         <br />
      //         <br />A ideia foi explorar a manipulação do DOM e transições
      //         visuais usando classes e eventos, fortalecendo minha compreensão
      //         sobre a comunicação entre essas tecnologias.
      //       </>
      //     ) : (
      //       <>
      //         Interactive tabs project developed to practice the integration
      //         between HTML, CSS, and JavaScript at the beginning of my studies.
      //         <br />
      //         <br />
      //         The goal was to explore DOM manipulation and visual transitions
      //         using classes and events, strengthening my understanding of how
      //         these technologies communicate with each other.
      //       </>
      //     );
      //   },
      //   gifPath: '/img/project-gif/tabs.gif',
      //   alt: isPt ? 'Projeto tabs' : 'Tabs project',
      //   buttons: [
      //     {
      //       text: isPt ? 'Repositório' : 'Repository',
      //       href: 'https://github.com/estevaof7/tabs'
      //     },
      //     {
      //       text: 'Demo',
      //       href: 'https://estevaof7.github.io/tabs/'
      //     }
      //   ],
      //   end: getDate(MONTH.JULY, 2023),
      //   tech: [getTech(Tech2.JS), getTech(Tech2.CSS), getTech(Tech2.HTML)],
      //   type: typeLabel(ProjectType.PERSONAL)
      // }
    ]
  }
};
