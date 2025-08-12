"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import Image from "next/image";

import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import Link from "next/link";



const Projects = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Define transforms based on scroll position
  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["0px", "-37px"]
  ); // Collapse effect
  const textView = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["initial", "none"]
  ); // Collapse effect

  const ballView = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.15],
    ["none", "initial", "none"]
  );
  const ballMergeA = useTransform(
    scrollYProgress,
    [0.05, 0.15],
    ["0rem", "4rem"]
  );
  const ballMergeB = useTransform(
    scrollYProgress,
    [0.05, 0.15],
    ["0rem", "-4rem"]
  );

  const bigBallView = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35],
    ["none", "initial", "none"]
  );
  const bigBallScale = useTransform(scrollYProgress, [0.15, 0.35], [1, 2]);

  const cupView = useTransform(
    scrollYProgress,
    [0.35, 0.45],
    ["none", "initial"]
  );
  const cupScale = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45],
    [1, 2.25, 2.3]
  );

  const cupHandleScale = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45],
    [0, 0.25, 1]
  );

  const cupTranslateX = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    ["0rem", "-35rem"]
  );
  const cupTranslateY = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    ["0rem", "-15rem"]
  );

  const projectView = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ["none", "initial"]
  );
  const projectTranslate = useTransform(
    scrollYProgress,
    [0.5, 0.65],
    [-1000, 550]
  );
  const project2Translate = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    [-1000, 550]
  );
  const project3Translate = useTransform(
    scrollYProgress,
    [0.65, 0.85],
    [-1000, 550]
  );
  const project4Translate = useTransform(
    scrollYProgress,
    [0.75, 0.95],
    [-1000, 550]
  );

  return (
    <div className="h-[800vh] md:h-[1000vh] mt-64 relative overflow-clip" ref={scrollRef}>
      <div className="top-[40%] sticky w-full flex flex-col items-center justify-center">
        {/* Cup Animation */}

        {/* Content with letter-spacing animation */}
        <motion.h2
          style={{ letterSpacing: letterSpacing, display: textView }}
          className="text-6xl md:text-8xl font-normal text-mocha-100 mb-4"
        >
          Take a sip
        </motion.h2>

        <motion.h2
          style={{ letterSpacing: letterSpacing, display: textView }}
          className="text-6xl md:text-8xl font-normal text-mocha-400"
        >
          of my best work.
        </motion.h2>

        {/* Content with ball merging animation */}
        <div className="relative w-full h-full">
          {/* Ball A */}
          <motion.div
            className="w-28 h-28 top-0 bg-mocha-100 rounded-full absolute "
            style={{ display: ballView, left: "48%", y: ballMergeA }}
          ></motion.div>

          {/* Ball B */}
          <motion.div
            className="w-28 h-28 top-[8rem] bg-mocha-300 rounded-full absolute "
            style={{ display: ballView, left: "48%", y: ballMergeB }}
          ></motion.div>

          {/* Big */}
          <motion.div
            className="w-28 h-28 top-[4.0rem] left-[48%] bg-mocha-200 rounded-full absolute "
            style={{ display: bigBallView, scale: bigBallScale }}
          ></motion.div>

          {/* Big */}

          <motion.div
            className="w-28 h-28 top-[4.5rem] left-[48%] bg-mocha-200 rounded-full border-8 border-gray-300 drop-shadow-lg absolute z-50 "
            style={{
              display: cupView,
              scale: cupScale,
              x: cupTranslateX,
              y: cupTranslateY,
            }}
          ></motion.div>

          <motion.div
            className="w-16 h-10 top-[7rem] left-[58%] bg-gray-300 rounded-lg border-8 border-gray-300 drop-shadow-xl absolute"
            style={{
              display: cupView,
              scaleX: cupHandleScale,
              x: cupTranslateX,
              y: cupTranslateY,
            }}
          ></motion.div>

          {/* Projects */}
          <div className="flex justify-center md:justify-end md:mr-24 z-40">

            {/* Mellow Mind */}
            <motion.div
              className="absolute shadow-xl rounded-3xl group"
              style={{ display: projectView, y: projectTranslate }}
            >
              <div className="absolute w-full h-full bg-red-900 rounded-3xl group-hover:blur group-hover:scale-105 duration-500"></div>

              <a href="https://wahidkamruddin.github.io/lofi-soundboard/" target="_blank">
                <Image
                  src="/images/1.png"
                  alt="project"
                  width={700}
                  height={500}
                  className="relative rounded-3xl group-hover:scale-105 duration-500"
                />
                </a>

                <div className="absolute w-full h-12 mt-8 text-4xl flex items-center justify-center gap-12">
                  <Link href="https://react.dev/" target="_blank" className="group-hover:scale-105"><FaReact className="text-cyan-400"/></Link>
                  <Link href="https://tailwindcss.com/" target="_blank" className="group-hover:scale-105"><RiTailwindCssFill className="text-sky-400"/></Link>
                </div>
            </motion.div>


            {/* Fitbyte */}
            <motion.div
              className="absolute shadow-xl rounded-3xl group"
              style={{ display: projectView, y: project2Translate }}
            >
              <div className="absolute w-full h-full bg-orange-500 rounded-3xl group-hover:blur group-hover:scale-105 duration-500"></div>

              <a href="" target="_blank">
                <Image
                  src="/images/2.png"
                  alt="project"
                  width={700}
                  height={500}
                  className="relative rounded-3xl cursor-not-allowed group-hover:scale-105 duration-500"
                />
                </a>

                <div className="absolute w-full h-12 mt-8 text-4xl flex items-center justify-center gap-12">
                  <Link href="https://react.dev/" target="_blank" className="group-hover:scale-105"><FaReact className="text-cyan-400"/></Link>
                  <Link href="https://nextjs.org/" target="_blank" className="group-hover:scale-105"><RiNextjsFill/></Link>
                  <Link href="https://tailwindcss.com/" target="_blank" className="group-hover:scale-105"><RiTailwindCssFill className="text-sky-400"/></Link>
                  <Link href="https://www.figma.com/" target="_blank" className="group-hover:scale-105"><Image src="/figma.svg" alt="Figma Logo" width={40} height={40} /></Link>
                </div>
            </motion.div>


            {/* After School Startup */}
            <motion.div
              className="absolute shadow-xl rounded-3xl group"
              style={{ display: projectView, y: project3Translate }}
            >
              <div className="absolute w-full h-full bg-indigo-600 rounded-3xl group-hover:blur group-hover:scale-105 duration-500"></div>

              <a href="https://www.afterschoolstartup.com/" target="_blank">
                <Image
                  src="/images/3.png"
                  alt="project"
                  width={700}
                  height={500}
                  className="relative rounded-3xl group-hover:scale-105 duration-500"
                />
                </a>

                <div className="absolute w-full h-12 mt-8 text-4xl flex items-center justify-center gap-12">
                  <Link href="https://react.dev/" target="_blank" className="group-hover:scale-105"><FaReact className="text-cyan-400"/></Link>
                  <Link href="https://nextjs.org/" target="_blank" className="group-hover:scale-105"><RiNextjsFill/></Link>
                  <Link href="https://tailwindcss.com/" target="_blank" className="group-hover:scale-105"><RiTailwindCssFill className="text-sky-400"/></Link>
                  <Link href="https://www.figma.com/" target="_blank"className="group-hover:scale-105"><Image src="/figma.svg" alt="Figma Logo" width={40} height={40} /></Link>
                </div>
            </motion.div>


            {/* Sheikh AI */}
            <motion.div
              className="absolute shadow-xl rounded-3xl group"
              style={{ display: projectView, y: project4Translate }}
            >
              <div className="absolute w-full h-full bg-lime-900 rounded-3xl group-hover:blur group-hover:scale-105 duration-500"></div>

              <a href="https://asksheikh.ai/" target="_blank">
                <Image
                  src="/images/4.png"
                  alt="project"
                  width={700}
                  height={500}
                  className="relative rounded-3xl group-hover:scale-105 duration-500"
                />
                </a>

                <div className="absolute w-full h-12 mt-8 text-4xl flex items-center justify-center gap-12">
                  <Link href="https://react.dev/" target="_blank" className="group-hover:scale-105"><FaReact className="text-cyan-400"/></Link>
                  <Link href="https://nextjs.org/" target="_blank" className="group-hover:scale-105"><RiNextjsFill/></Link>
                  <Link href="https://tailwindcss.com/" target="_blank" className="group-hover:scale-105"><RiTailwindCssFill className="text-sky-400"/></Link>
                  <Link href="https://www.figma.com/" target="_blank" className="group-hover:scale-105"><Image src="/figma.svg" alt="Figma Logo" width={40} height={40} /></Link>
                </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
