'use client';

import NavBar from './components/nav-bar';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import { TailwindProvider } from '@/providers/tailwind-compatibility';
import TailwindTester from './components/tailwind-tester';

export default function Home() {
  //PENSAR SE COLOCA A FUNÇÃO DO UTILS NO PROVIDER ... VER O QUE FICA MELHOR ... DEU CERTO!!!
  //PRECISO ARRUMAR A CONSTANDO DO TAILWIND COLORS PORQUE ESTÃO DIFERENTE DO QUE ESTÁ NA DOCUMENTAÇÃO

  //no meu celular...
  //    menu lateral
  //    cor do progress
  //    cor dos cards menores
  //    cor do texto do rodapé
  //arrumar problema do navigator e esses erros de linha LF
  //instalar husky para pre-commit e executar o comando npx prettier src/ --write
  //adicionar this.portfolio
  //meses project-data ... fazer enum

  //currículo: passar sessão projetos para cima ?
  //footer: campos input para enviar email
  //ver se separa em categorias o tech stack ...
  //mobile: projetos > div com as tecnologias e botões > ver alguma maneira de usar o useRef para que quando a soma da width dos cards e da width dos botões for maior ou igual à width da div pai, para que haja a quebra
  //melhorar visual... pegar referências
  //problema hidratação
  //elementos carregar e disparar animação a medida que for fazendo o scroll?
  //soft skills em baixo do tech stack em um acordeon ? elton disse que seria legal ter as soft skills no postfólio
  //modal "projects I used..." talvez personalizar, tirar o x (porque já tem o botão de fechar) e no lugar dele, colocar a logo da tecnologia
  return (
    <main className="text-md">
      <TailwindProvider>
        <TailwindTester />
        <NavBar />
        <About />
        <Projects />
        <Footer />
        {/* <BreakPointView /> */}
      </TailwindProvider>
    </main>
  );
}
