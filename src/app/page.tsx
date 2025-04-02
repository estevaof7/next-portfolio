import NavBar from './components/nav-bar';
import About from './components/about';
import Session2 from './components/projects';
import Footer from './components/footer';
import { BreakPointView } from './components/breakpoint-view';

export default function Home() {
  //QUANDO ALGO NÃO DER CERTO, VERIFICA SE PELO MENOS UM BG-RED-500 ESTÁ SENDO APLICADO.

  //adicionar typescript ... tailwind ... bootstrap ... ver se separa em categorias

  //PRÓXIMAS FEATURES (depois de lançar)
  //tooltip nos cards de tecnologias
  //cards de tecnologia serem clicados e abrem um modal com o projeto que eu utilizei e como eu utilizei
  //tipagem dos dados ... no about eu vou fazer um range
  //no meu celular... menu lateral não está rolando ... cor do progress não está rolando
  //melhorar visual... pegar referências
  //problema hidratação
  return (
    <main className="text-md">
      <NavBar />
      <About />
      <Session2 />
      <Footer />
      <BreakPointView />
    </main>
  );
}
