import Header from "../components/portfolio/Header";
import Intro from "../components/portfolio/Intro";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
