import NavBar from './components/nav-bar';
import About from './components/about';
import Session2 from './components/session2';
import Footer from './components/footer';

export default function Home() {
  //QUANDO ALGO NÃO DER CERTO, VERIFICA SE PELO MENOS UM BG-RED-500 ESTÁ SENDO APLICADO.
  return (
    <>
      <NavBar />
      <About />
      <Session2 />
      <Footer />
    </>
  );
}
