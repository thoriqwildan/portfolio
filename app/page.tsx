import About from "./ui/about";
import Footer from "./ui/footer";
import Hero from "./ui/hero";
import NavBar from "./ui/navbar";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero />
      <About />
      <Footer/>
    </main>
  );
}
