import { isPt } from '@/language';

export const projectsData = {
  professional: {
    title: isPt ? 'Projetos profissionais' : 'Professional projects',
    projects: [
      {
        title: isPt ? 'Tribanco' : 'Banking website',
        description: 'verificar',
        gifPath: 'img/project-gif/',
        alt: isPt ? 'Projeto tribanco' : 'Banking project'
      },
      {
        title: isPt
          ? 'Gerenciador de ingressos e eventos'
          : 'Ticket and event manager',
        description: 'verificar',
        gifPath: 'img/project-gif/',
        alt: isPt ? 'Projeto ingressos' : 'Ticket project'
      }
    ]
  },
  personal: {
    title: isPt ? 'Projetos pessoais' : 'Personal projects',
    projects: [
      {
        title: 'Coffeshop',
        description: 'verificar',
        gifPath: 'img/project-gif/',
        alt: isPt ? 'Projeto coffeshop' : 'Coffeshop project',
        links: {
          repo: 'https://github.com/estevaof7/coffee-shop',
          demo: 'https://coffee-shopf7.netlify.app/'
        }
      },
      {
        title: 'My first React project',
        description: 'verificar',
        gifPath: 'img/project-gif/react1.gif',
        alt: isPt ? 'Projeto react' : 'React project',
        links: {
          repo: 'https://github.com/estevaof7/react-project-1',
          demo: 'https://spectacular-daifuku-50a414.netlify.app/'
        }
      },
      {
        title: 'CineJava',
        description: 'verificar',
        gifPath: 'img/project-gif/cinejava.gif',
        alt: isPt ? 'Projeto cinejava' : 'Cinejava project',
        links: {
          repo: 'https://github.com/estevaof7/cinejava',
          youtube:
            'https://www.youtube.com/watch?v=DiwVSQ6t_Ps&feature=youtu.be'
        }
      },
      {
        title: isPt ? 'Agenda Express/MongoDB' : 'Contacts Express/MongoDB',
        description: 'verificar',
        gifPath: 'img/project-gif/agenda.gif',
        alt: isPt ? 'Projeto agenda' : 'Contacts project',
        links: {
          repo: 'https://github.com/estevaof7/agenda',
          youtube: 'https://www.youtube.com/watch?v=aG6yPrYZAs4'
        }
      },
      {
        title: 'Easy Carousel',
        description: 'verificar',
        gifPath: 'img/project-gif/carrossel.gif',
        alt: 'Projeto tribanco',
        links: {
          repo: 'https://github.com/estevaof7/carousel',
          demo: 'https://estevaof7.github.io/carousel/',
          youtube: 'https://www.youtube.com/watch?v=twr7BSXEBL8'
        }
      },
      {
        title: 'My First Landing Page',
        description: 'verificar ************* PAREI AQUI *************',
        gifPath: 'img/project-gif/',
        alt: 'Projeto tribanco',
        links: {
          repo: '',
          demo: '',
          youtube: ''
        }
      },
      {
        title: isPt ? 'Tribanco com Next.js' : ' with Next.js',
        description: 'verificar',
        gifPath: 'img/project-gif/',
        alt: 'Projeto tribanco',
        links: {
          repo: '',
          demo: '',
          youtube: ''
        }
      },
      {
        title: isPt ? 'Tribanco com Next.js' : ' with Next.js',
        description: 'verificar',
        gifPath: 'img/project-gif/',
        alt: 'Projeto tribanco',
        links: {
          repo: '',
          demo: '',
          youtube: ''
        }
      }
    ]
  }
};
