import NavBar from './components/nav-bar';
import About from './components/about';
import Session2 from './components/session2';
import Footer from './components/footer';
import { BreakPointView } from './components/breakpoint-view';

export default function Home() {
  //QUANDO ALGO NÃO DER CERTO, VERIFICA SE PELO MENOS UM BG-RED-500 ESTÁ SENDO APLICADO.

  //PRÓXIMAS FEATURES (depois de lançar)
  //tooltip nos cards de tecnologias
  //cards de tecnologia serem clicados e abrem um modal com o projeto que eu utilizei e como eu utilizei
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
