import About from "./ui/about";
import Hero from "./ui/hero";
import NavBar from "./ui/navbar";
import { BackgroundBeams } from "./ui/background-beams";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero />
      <About />
      <BackgroundBeams/>
    </main>
  );
}
