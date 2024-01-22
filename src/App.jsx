import "./app.scss"



import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax.jsx/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experience/Experience";
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar/>
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="services" />
      </section>
      <section>
      <Services></Services>
      </section>
      <section id="Experience">
        <Parallax type="portfolio" />
      </section>
      <Experience/>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
     
    </div>
  );
};

export default App;