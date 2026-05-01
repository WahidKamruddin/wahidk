"use client";

import { useTypewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ROLES = ["developer.", "designer.", "coffee-addict."];

const ABOUT_HEADINGS = [
  { color: "text-mocha-300", offset: "" },
  { color: "text-mocha-200", offset: "relative right-32" },
  { color: "text-mocha-100", offset: "relative right-64" },
] as const;

const Me = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [role] = useTypewriter({
    words: ROLES,
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 90,
  });

  return (
    <div className="h-screen overflow-clip py-40 px-14">
      <div ref={ref} className="flex justify-between">
        <div>
          {ABOUT_HEADINGS.map(({ color, offset }, i) => (
            <motion.h1
              key={i}
              className={`text-8xl my-6 ${color} ${offset}`}
              initial={{ x: -100 }}
              animate={isInView ? { x: 0 } : {}}
              transition={{ duration: 1, delay: 0.25 + i * 0.25 }}
            >
              About me
            </motion.h1>
          ))}
        </div>

        <div>
          <h1 className="my-6 text-mocha-100 text-8xl">Hi, I&apos;m <span className="text-mocha-300">Wahid,</span></h1>
          <h1 className="mt-6 text-mocha-100 text-7xl">a <span className="text-mocha-300">{role}</span></h1>
        </div>
      </div>

      <div className="text-mocha-300 text-xl font-light flex justify-end">
        <div className="w-5/12">
          I&apos;m a Bangladeshi-American born and raised in NYC. I have a passion for cafes, coffee, and all things design. I love to create beautiful and functional digital experiences that make people&apos;s lives easier and more enjoyable. When I&apos;m not coding or designing, you can find me exploring new cafes, sipping on a cappuccino, or working on my next side project.
        </div>
      </div>
    </div>
  );
};

export default Me;
