import { ChromeProvider } from "./components/chrome-provider";
import Nav from "./components/nav";
import SectionDots from "./components/section-dots";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";

export default function Home() {
  return (
    <ChromeProvider>
      <Nav />
      <SectionDots />
      <Hero />
      <About />
      <Work />
      <Contact />
    </ChromeProvider>
  );
}
