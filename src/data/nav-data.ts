import { isPt } from '@/language';
import { NavModel } from '@/models/nav-model';

export const navData: NavModel = {
  logo: {
    href: '#about',
    text: 'Estêvão Ferreira'
  },
  links: [
    { href: '#about', text: isPt ? 'Sobre' : 'About' },
    {
      href: '#professional-projects',
      text: isPt ? 'Projetos profissionais' : 'Professional projects'
    },
    {
      href: '#personal-projects',
      text: isPt ? 'Projetos pessoais' : 'Personal projects'
    },
    { href: '#contact', text: isPt ? 'Contato' : 'Contact' }
  ]
};
