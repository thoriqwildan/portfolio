import About from "./ui/about";
import Contact from "./ui/contact";
import Footer from "./ui/footer";
import Hero from "./ui/hero";
import NavBar from "./ui/navbar";
import Projects from "./ui/projects";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
