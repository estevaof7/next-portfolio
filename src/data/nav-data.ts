import { isPt } from '@/language';

export const navData = [
  { href: '#about', label: isPt ? 'Sobre' : 'About' },
  {
    href: '#professional-projects',
    label: isPt ? 'Projetos profissionais' : 'Professional projects'
  },
  {
    href: '#personal-projects',
    label: isPt ? 'Projetos pessoais' : 'Personal projects'
  },
  { href: '#contact', label: isPt ? 'Contato' : 'Contact' }
];
