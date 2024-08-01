'use client'

import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

const Me = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    
    const arrList = ['developer.', 'designer.', 'coffee-addict.'];

    const [role] = useTypewriter({
        words: arrList,
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 90,
    });
    
    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

    return ( 
    <div className="h-screen overflow-clip" >
        <div className="py-40 px-14">
            <div ref={ref} className="flex justify-between">
                <motion.div 
                    className="text-8xl"
                    initial={{x:-100}}
                    style={{transform: isInView ? "none" : "translateX(200px)"}}
                    transition={{duration: 1, delay:2}}
                >
                    <h1 className="my-6 text-mocha-300">About me</h1>
                    <h1 className="my-6 text-mocha-200 relative right-32">About me</h1>
                    <h1 className="my-6 text-mocha-100 relative right-64">About me</h1>
                </motion.div>
                
                <div className="">
                    <h1 className="my-6 text-mocha-100 text-8xl">Hi, I&apos;m <span className="text-mocha-300">Wahid,</span></h1>
                    <h1 className="my-6 text-mocha-100 text-7xl">a <span className="text-mocha-300">{role}</span></h1>
                </div>
            </div>

            <div className="text-mocha-100 font-light flex justify-between">
                <div className="ml-32 mt-24 text-4xl">
                    <h4 className="my-4">A Bengali-American CS student</h4>
                    <h4 className="my-4">with a coffee addiction.*</h4>

                    <p className="text-2xl mt-24">*Currently in rehab (switched to water)</p>
                </div>

                <div className="p-6 mr-24 bg-mocha-200 rounded-xl">
                    <Image alt='me' src='/images/picture.jpeg' width={300} height={300}/>
                </div>
            </div>
            

        </div>
    </div> 
    )}
 
export default Me;