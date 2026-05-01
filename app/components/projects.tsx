"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

type Tech = { icon: React.ReactNode; href: string };

type ProjectCardProps = {
  href?: string;
  image: string;
  alt: string;
  accent: string;
  translate: MotionValue<number>;
  display: MotionValue<string>;
  techs: Tech[];
};

const ProjectCard = ({ href, image, alt, accent, translate, display, techs }: ProjectCardProps) => {
  const imageEl = (
    <Image
      src={image}
      alt={alt}
      width={700}
      height={500}
      style={{ height: "auto" }}
      className={`relative rounded-3xl group-hover:scale-105 duration-500${!href ? " cursor-not-allowed" : ""}`}
    />
  );

  return (
    <motion.div
      className="absolute shadow-xl rounded-3xl group"
      style={{ display, y: translate }}
    >
      <div className={`absolute w-full h-full ${accent} rounded-3xl group-hover:blur group-hover:scale-105 duration-500`} />

      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{imageEl}</a>
      ) : imageEl}

      <div className="absolute w-full h-12 mt-8 text-4xl flex items-center justify-center gap-12">
        {techs.map((tech, i) => (
          <a key={i} href={tech.href} target="_blank" rel="noopener noreferrer" className="group-hover:scale-105">
            {tech.icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

const REACT: Tech = { icon: <FaReact className="text-cyan-400" />, href: "https://react.dev/" };
const NEXT: Tech  = { icon: <RiNextjsFill />, href: "https://nextjs.org/" };
const TAIL: Tech  = { icon: <RiTailwindCssFill className="text-sky-400" />, href: "https://tailwindcss.com/" };
const FIGMA: Tech = { icon: <Image src="/figma.svg" alt="Figma" width={40} height={40} />, href: "https://www.figma.com/" };

const Projects = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const letterSpacing  = useTransform(scrollYProgress, [0, 0.05], ["0px", "-37px"]);
  const textView       = useTransform(scrollYProgress, [0, 0.05], ["initial", "none"]);

  const ballView   = useTransform(scrollYProgress, [0.05, 0.1, 0.15], ["none", "initial", "none"]);
  const ballMergeA = useTransform(scrollYProgress, [0.05, 0.15], ["0rem", "4rem"]);
  const ballMergeB = useTransform(scrollYProgress, [0.05, 0.15], ["0rem", "-4rem"]);

  const bigBallView  = useTransform(scrollYProgress, [0.15, 0.25, 0.35], ["none", "initial", "none"]);
  const bigBallScale = useTransform(scrollYProgress, [0.15, 0.35], [1, 2]);

  const cupView        = useTransform(scrollYProgress, [0.35, 0.45], ["none", "initial"]);
  const cupScale       = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [1, 2.25, 2.3]);
  const cupHandleScale = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 0.25, 1]);
  const cupTranslateX  = useTransform(scrollYProgress, [0.45, 0.55], ["0rem", "-35rem"]);
  const cupTranslateY  = useTransform(scrollYProgress, [0.45, 0.55], ["0rem", "-15rem"]);

  const projectView      = useTransform(scrollYProgress, [0.5, 0.8],  ["none", "initial"]);
  const projectTranslate  = useTransform(scrollYProgress, [0.5,  0.65], [-1000, 550]);
  const project2Translate = useTransform(scrollYProgress, [0.55, 0.75], [-1000, 550]);
  const project3Translate = useTransform(scrollYProgress, [0.65, 0.85], [-1000, 550]);
  const project4Translate = useTransform(scrollYProgress, [0.75, 0.95], [-1000, 550]);

  const projects = [
    {
      name: "Mellow Mind",
      href: "https://wahidkamruddin.github.io/lofi-soundboard/",
      image: "/images/1.png",
      alt: "Mellow Mind lofi soundboard",
      accent: "bg-red-900",
      translate: projectTranslate,
      techs: [REACT, TAIL],
    },
    {
      name: "Fitbyte",
      image: "/images/2.png",
      alt: "Fitbyte fitness tracker",
      accent: "bg-orange-500",
      translate: project2Translate,
      techs: [REACT, NEXT, TAIL, FIGMA],
    },
    {
      name: "After School Startup",
      href: "https://www.afterschoolstartup.com/",
      image: "/images/3.png",
      alt: "After School Startup landing page",
      accent: "bg-indigo-600",
      translate: project3Translate,
      techs: [REACT, NEXT, TAIL, FIGMA],
    },
    {
      name: "Sheikh AI",
      href: "https://asksheikh.ai/",
      image: "/images/4.png",
      alt: "Sheikh AI chat interface",
      accent: "bg-lime-900",
      translate: project4Translate,
      techs: [REACT, NEXT, TAIL, FIGMA],
    },
  ];

  return (
    <div className="h-[800vh] md:h-[1000vh] mt-64 relative overflow-clip" ref={scrollRef}>
      <div className="top-[40%] sticky w-full flex flex-col items-center justify-center">
        <motion.h2
          style={{ letterSpacing, display: textView }}
          className="text-6xl md:text-8xl font-normal text-mocha-100 mb-4"
        >
          Take a sip
        </motion.h2>

        <motion.h2
          style={{ letterSpacing, display: textView }}
          className="text-6xl md:text-8xl font-normal text-mocha-400"
        >
          of my best work.
        </motion.h2>

        <div className="relative w-full h-full">
          {/* Ball A */}
          <motion.div
            className="w-28 h-28 top-0 bg-mocha-100 rounded-full absolute"
            style={{ display: ballView, left: "48%", y: ballMergeA }}
          />

          {/* Ball B */}
          <motion.div
            className="w-28 h-28 top-[8rem] bg-mocha-300 rounded-full absolute"
            style={{ display: ballView, left: "48%", y: ballMergeB }}
          />

          {/* Merged ball */}
          <motion.div
            className="w-28 h-28 top-[4.0rem] left-[48%] bg-mocha-200 rounded-full absolute"
            style={{ display: bigBallView, scale: bigBallScale }}
          />

          {/* Cup body */}
          <motion.div
            className="w-28 h-28 top-[4.5rem] left-[48%] bg-mocha-200 rounded-full border-8 border-gray-300 drop-shadow-lg absolute z-50"
            style={{ display: cupView, scale: cupScale, x: cupTranslateX, y: cupTranslateY }}
          />

          {/* Cup handle */}
          <motion.div
            className="w-16 h-10 top-[7rem] left-[58%] bg-gray-300 rounded-lg border-8 border-gray-300 drop-shadow-xl absolute"
            style={{ display: cupView, scaleX: cupHandleScale, x: cupTranslateX, y: cupTranslateY }}
          />

          <div className="flex justify-center md:justify-end md:mr-24 z-40">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} display={projectView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
