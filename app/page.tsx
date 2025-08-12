"use client";
import AudioPlayer from "./components/audio";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Me from "./components/me";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <div className="fixed top-5 right-5 z-50"><AudioPlayer/></div>
      <Hero />
      <Me />
      <Projects />
      <Contact />
    </>
  );
}
