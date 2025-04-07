import { isPt } from '@/language';
import { VideoStartsOn } from '@/models/projects-model';

export const projectsData = {
  videoStarts: VideoStartsOn.LEFT,
  professional: {
    title: isPt ? 'Projetos profissionais' : 'Professional projects',
    projects: [
      {
        title: isPt ? 'Tribanco' : 'Banking website',
        description: 'verificar',
        gifPath: '/img/project-gif/tribanco.gif',
        alt: isPt ? 'Projeto tribanco' : 'Banking project'
      },
      {
        title: isPt
          ? 'Gerenciador de ingressos e eventos'
          : 'Ticket and event manager',
        description: 'verificar',
        gifPath: '/img/project-gif/ingresso.gif',
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
        gifPath: '/img/project-gif/coffeshop.gif',
        alt: isPt ? 'Projeto coffeshop' : 'Coffeshop project',
        links: {
          repo: 'https://github.com/estevaof7/coffee-shop',
          demo: 'https://coffee-shopf7.netlify.app/'
        }
      },
      {
        title: 'My first React project',
        description: 'verificar',
        gifPath: '/img/project-gif/react1.gif',
        alt: isPt ? 'Projeto react' : 'React project',
        links: {
          repo: 'https://github.com/estevaof7/react-project-1',
          demo: 'https://spectacular-daifuku-50a414.netlify.app/'
        }
      },
      {
        title: 'CineJava',
        description: 'verificar',
        gifPath: '/img/project-gif/cinejava.gif',
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
        gifPath: '/img/project-gif/agenda.gif',
        alt: isPt ? 'Projeto agenda' : 'Contacts project',
        links: {
          repo: 'https://github.com/estevaof7/agenda',
          youtube: 'https://www.youtube.com/watch?v=aG6yPrYZAs4'
        }
      },
      {
        title: 'Easy Carousel',
        description: 'verificar',
        gifPath: '/img/project-gif/carrossel.gif',
        alt: 'Projeto tribanco',
        links: {
          repo: 'https://github.com/estevaof7/carousel',
          demo: 'https://estevaof7.github.io/carousel/',
          youtube: 'https://www.youtube.com/watch?v=twr7BSXEBL8'
        }
      },
      {
        title: 'My First Landing Page',
        description: 'verificar',
        gifPath: '/img/project-gif/landing-page.gif',
        alt: isPt ? 'Projeto landing page' : 'Landing page project',
        links: {
          repo: 'https://github.com/estevaof7/my-first-landing-page',
          demo: 'https://estevaof7.github.io/my-first-landing-page/'
        }
      },
      {
        title: isPt ? 'Equação do Segundo Grau' : 'Quadratic Equation',
        description: 'verificar',
        gifPath: '/img/project-gif/eq2grau.gif',
        alt: isPt
          ? 'Projeto equação do segundo grau'
          : 'Quadratic equation project',
        links: {
          repo: 'https://github.com/estevaof7/equacao2grau',
          demo: 'https://estevaof7.github.io/equacao2grau/'
        }
      },
      {
        title: 'Tabs CSS',
        description: 'verificar',
        gifPath: '/img/project-gif/tabs.gif',
        alt: isPt ? 'Projeto tabs' : 'Tabs project',
        links: {
          repo: 'https://github.com/estevaof7/tabs',
          demo: 'https://estevaof7.github.io/tabs/'
        }
      }
    ]
  }
};
