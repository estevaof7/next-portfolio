import NavBar from './components/nav-bar';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import { BreakPointView } from './components/breakpoint-view';
// import { BreakPointView } from './components/breakpoint-view';

export default function Home() {
  //instalar husky para pre-commit e executar o comando npx prettier src/ --write
  //adicionar this.portfolio
  //meses project-data ... fazer enum

  //currículo: passar sessão projetos para cima ?
  //footer: campos input para enviar email
  //ver se separa em categorias o tech stack ...
  //mobile: projetos > div com as tecnologias e botões > ver alguma maneira de usar o useRef para que quando a soma da width dos cards e da width dos botões for maior ou igual à width da div pai, para que haja a quebra
  //no meu celular... menu lateral não está rolando ... cor do progress não está rolando
  //melhorar visual... pegar referências
  //problema hidratação
  //elementos carregar e disparar animação a medida que for fazendo o scroll?
  //soft skills em baixo do tech stack em um acordeon ? elton disse que seria legal ter as soft skills no postfólio
  //modal "projects I used..." talvez personalizar, tirar o x (porque já tem o botão de fechar) e no lugar dele, colocar a logo da tecnologia
  return (
    <main className="text-md">
      <NavBar />
      <About />
      <Projects />
      <Footer />
      <BreakPointView />
    </main>
  );
}
