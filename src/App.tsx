import Nav from './components/Nav';
import Hero from './components/Hero';
import Engineering from './components/Engineering';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Engineering />
        <Experience />
        <Credentials />
        <Showcase />
      </main>
      <Footer />
    </>
  );
}
