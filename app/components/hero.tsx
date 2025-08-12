"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";



const Hero = () => {
  return (
    <div className="w-full pb-12 md:h-screen bg-mocha-100">
      <div className="pt-12 ml-4 md:p-24">
        <motion.div
          className="text-5xl md:text-8xl font-normal"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 100, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <h2 className="text-mocha-300">Welcome</h2>
          <h2 className="text-mocha-200">to</h2>
        </motion.div>

        <div className="flex flex-col justify-center items-center">
          <motion.h1
            className="text-6xl md:text-9xl text-mocha-400 font-normal"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 100, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            Wahid&apos;s
          </motion.h1>

          <motion.h1
            className="my-4 text-5xl md:text-8xl text-mocha-300 font-light"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 100, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            Code <span className="text-mocha-200">Café</span>
            <span className="text-mocha-400">.</span>
          </motion.h1>

          <motion.div
            className="mt-16 text-mocha-400 font-light text-2xl flex items-center"
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 100, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
            href="#contact"
              className="text-xl px-3 py-2 border-mocha-400 border-2 rounded-full hover:text-vanilla-100 hover:bg-mocha-400 hover:scale-110 duration-300"
            >
              Get in touch
            </Link>
            <a href="https://low-centaur-4a2.notion.site/24879d01f30580389689e2a00edc6b4f?v=24879d01f30581f797b3000c6c8ab662&source=copy_link" target="_blank" className="text-2xl ml-6 p-2 rounded-full border-mocha-400 border-2 hover:text-vanilla-100 hover:bg-mocha-400 hover:scale-110 duration-300">
              <CiCoffeeCup/>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
