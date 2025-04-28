import NavBar from './components/nav-bar';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
// import { BreakPointView } from './components/breakpoint-view';

export default function Home() {
  //footer: campos input para enviar email
  //animação ao carregar elementos igual no tribanco
  //ver se separa em categorias o tech stack ...
  //adicionar this.portfolio
  //mobile: projetos > div com as tecnologias e botões > ver alguma maneira de usar o useRef para que quando a soma da width dos cards e da width dos botões for maior ou igual à width da div pai, para que haja a quebra
  //cards de tecnologia serem clicados e abrem um modal com o projeto que eu utilizei e como eu utilizei
  //no meu celular... menu lateral não está rolando ... cor do progress não está rolando
  //melhorar visual... pegar referências
  //problema hidratação
  return (
    <main className="text-md">
      <NavBar />
      <About />
      <Projects />
      <Footer />
      {/* <BreakPointView /> */}
    </main>
  );
}
