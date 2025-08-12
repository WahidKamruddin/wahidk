'use client'

import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Me = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false }); // Animation will trigger only once when in view
    
    const arrList = ['developer.', 'designer.', 'coffee-addict.'];

    const [role] = useTypewriter({
        words: arrList,
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 90,
    });
    
    useEffect(() => {
        console.log("Element is in view: ", isInView);
    }, [isInView]);

    return ( 
    <div className="h-screen overflow-clip py-40 px-14">
            <div ref={ref} className="flex justify-between">
                <div>
                    <motion.div 
                        className="text-8xl"
                        initial={{ x: -100 }}
                        animate={isInView ? { x: 0 } : {}} // Apply animation only if in view
                        transition={{ duration: 1, delay: 0.25 }}
                    >
                        <h1 className="my-6 text-mocha-300">About me</h1>
                    </motion.div>
                    <motion.div 
                        className="text-8xl"
                        initial={{ x: -100 }}
                        animate={isInView ? { x: 0 } : {}} // Apply animation only if in view
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="my-6 text-mocha-200 relative right-32">About me</h1>
                    </motion.div>
                    <motion.div 
                        className="text-8xl"
                        initial={{ x: -100 }}
                        animate={isInView ? { x: 0 } : {}} // Apply animation only if in view
                        transition={{ duration: 1, delay: 0.75 }}
                    >
                        <h1 className="my-6 text-mocha-100 relative right-64">About me</h1>
                    </motion.div>
                </div>
                
                
                <div>
                    <h1 className="my-6 text-mocha-100 text-8xl">Hi, I&apos;m <span className="text-mocha-300">Wahid,</span></h1>
                    <h1 className="mt-6 text-mocha-100 text-7xl">a <span className="text-mocha-300">{role}</span></h1>
                </div>
            </div>

            <div className="text-mocha-300  text-xl font-light flex justify-end">
                <div className="w-5/12">
                    Im a Bangladeshi-American born and raised in NYC. I have a passion for cafes, coffee, and all things design. I love to create beautiful and functional digital experiences that make people&apos;s lives easier and more enjoyable. When I&apos;m not coding or designing, you can find me exploring new cafes, sipping on a cappuccino, or working on my next side project.
                </div>
            </div>
        </div>
    );
}

export default Me;
