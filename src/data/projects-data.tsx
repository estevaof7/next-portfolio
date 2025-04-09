import { isPt } from '@/language';
import { VideoStartsOn } from '@/models/projects-model';

enum Month { //trocar para inglês
  JANEIRO = 0,
  FEVEREIRO = 1,
  MARÇO = 2,
  ABRIL = 3,
  MAIO = 4,
  JUNHO = 5,
  JULHO = 6,
  AGOSTO = 7,
  SETEMBRO = 8,
  OUTUBRO = 9,
  NOVEMBRO = 10,
  DEZEMBRO = 11
}

export const projectsData = {
  videoStarts: VideoStartsOn.RIGHT,
  professional: {
    title: isPt ? 'Projetos profissionais' : 'Professional projects',
    projects: [
      {
        title: isPt ? 'Tribanco' : 'Banking website',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/tribanco.gif',
        alt: isPt ? 'Projeto tribanco' : 'Banking project',
        start: new Date(2025, Month.JANEIRO),
        end: new Date(2025, Month.MARÇO)
      },
      {
        title: isPt
          ? 'Gerenciador de ingressos e eventos'
          : 'Ticket and event manager',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/ingresso.gif',
        alt: isPt ? 'Projeto ingressos' : 'Ticket project',
        start: new Date(2025, Month.MARÇO),
        end: new Date()
      }
    ]
  },
  personal: {
    title: isPt ? 'Projetos pessoais' : 'Personal projects',
    projects: [
      {
        title: 'Coffeshop',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/coffeshop.gif',
        alt: isPt ? 'Projeto coffeshop' : 'Coffeshop project',
        links: {
          repo: 'https://github.com/estevaof7/coffee-shop',
          demo: 'https://coffee-shopf7.netlify.app/'
        },
        end: new Date(2025, Month.JANEIRO)
      },
      {
        title: 'My first React project',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/react1.gif',
        alt: isPt ? 'Projeto react' : 'React project',
        links: {
          repo: 'https://github.com/estevaof7/react-project-1',
          demo: 'https://spectacular-daifuku-50a414.netlify.app/'
        },
        end: new Date(2024, Month.DEZEMBRO)
      },
      {
        title: 'CineJava',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/cinejava.gif',
        alt: isPt ? 'Projeto cinejava' : 'Cinejava project',
        links: {
          repo: 'https://github.com/estevaof7/cinejava',
          youtube:
            'https://www.youtube.com/watch?v=DiwVSQ6t_Ps&feature=youtu.be'
        },
        end: new Date(2023, Month.DEZEMBRO)
      },
      {
        title: isPt ? 'Agenda Express/MongoDB' : 'Contacts Express/MongoDB',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/agenda.gif',
        alt: isPt ? 'Projeto agenda' : 'Contacts project',
        links: {
          repo: 'https://github.com/estevaof7/agenda',
          youtube: 'https://www.youtube.com/watch?v=aG6yPrYZAs4'
        },
        end: new Date(2024, Month.MAIO)
      },
      {
        title: 'Easy Carousel',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/carrossel.gif',
        alt: 'Projeto tribanco',
        links: {
          repo: 'https://github.com/estevaof7/carousel',
          demo: 'https://estevaof7.github.io/carousel/',
          youtube: 'https://www.youtube.com/watch?v=twr7BSXEBL8'
        },
        end: new Date(2024, Month.OUTUBRO)
      },
      {
        title: 'My First Landing Page',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/landing-page.gif',
        alt: isPt ? 'Projeto landing page' : 'Landing page project',
        links: {
          repo: 'https://github.com/estevaof7/my-first-landing-page',
          demo: 'https://estevaof7.github.io/my-first-landing-page/'
        },
        end: new Date(2023, Month.MARÇO)
      },
      {
        title: isPt ? 'Equação do Segundo Grau' : 'Quadratic Equation',
        description: () => <p>descrição</p>,
        gifPath: '/img/project-gif/eq2grau.gif',
        alt: isPt
          ? 'Projeto equação do segundo grau'
          : 'Quadratic equation project',
        links: {
          repo: 'https://github.com/estevaof7/equacao2grau',
          demo: 'https://estevaof7.github.io/equacao2grau/'
        },
        end: new Date(2023, Month.MAIO)
      },
      {
        title: 'Tabs CSS',
        description: () => (
          <p>
            {isPt
              ? 'Estilização de "abas" feita com manipulações entre CSS e JS quando eu estava praticando essa interação. Um projeto simples que me ajudou a praticar essa conversa que há entre JS, HTML e CSS.'
              : ''}
          </p>
        ),
        gifPath: '/img/project-gif/tabs.gif',
        alt: isPt ? 'Projeto tabs' : 'Tabs project',
        links: {
          repo: 'https://github.com/estevaof7/tabs',
          demo: 'https://estevaof7.github.io/tabs/'
        },
        end: new Date(2023, Month.JULHO)
      }
    ]
  }
};
