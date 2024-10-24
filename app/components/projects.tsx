'use client'

import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Image from "next/image"


const Projects = () => {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end start']
    })

    // Define transforms based on scroll position
    const letterSpacing = useTransform(scrollYProgress, [0, 0.05], ['0px', '-50px']); // Collapse effect
    const textView = useTransform(scrollYProgress, [0, 0.05], ['initial', 'none']); // Collapse effect

    const ballView = useTransform(scrollYProgress, [0.05, 0.1, 0.15], ['none', 'initial', 'none']); 
    const ballMergeA = useTransform(scrollYProgress, [0.05, 0.15], ['0rem', '4rem']); 
    const ballMergeB = useTransform(scrollYProgress, [0.05, 0.15], ['0rem', '-4rem']); 

    const bigBallView = useTransform(scrollYProgress, [0.15, 0.25, 0.35], ['none', 'initial', 'none']); 
    const bigBallScale = useTransform(scrollYProgress, [0.15, 0.35], [1, 2]); 

    const cupView = useTransform(scrollYProgress, [0.35, 0.45], ['none', 'initial']); 
    const cupScale = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [1, 2.25, 2.3]); 

    const cupHandleScale = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 0.25, 1]); 

    const cupTranslateX = useTransform(scrollYProgress, [0.45, 0.55], ['0rem','-35rem']); 
    const cupTranslateY = useTransform(scrollYProgress, [0.45, 0.55], ['0rem','-15rem']); 

    const projectView = useTransform(scrollYProgress, [0.5, 0.8], ['none', 'initial']); 
    const projectTranslate = useTransform(scrollYProgress, [0.5, 0.7], [-1000, 550]); 
    const project2Translate = useTransform(scrollYProgress, [0.6, 0.8], [-1000, 550]); 
    const project3Translate = useTransform(scrollYProgress, [0.7, 0.9], [-1000, 550]); 








    return (
        <div className="h-[1000vh] mt-64 relative overflow-clip" ref={scrollRef}>

                <div className="top-[40%] sticky w-full flex flex-col items-center justify-center">

                    {/* Cup Animation */}

                    {/* Content with letter-spacing animation */}
                    <motion.h2
                        style={{ letterSpacing: letterSpacing, display: textView}}
                        className="text-8xl font-normal text-mocha-100 mb-4"
                    >
                        Take a sip
                    </motion.h2>

                    <motion.h2
                        style={{ letterSpacing: letterSpacing, display: textView }}
                        className="text-8xl font-normal text-mocha-400"
                    >
                        of my best work.
                    </motion.h2>

                    {/* Content with ball merging animation */}
                    <div className="relative w-full h-full">
                        {/* Ball A */}
                        <motion.div
                            className="w-28 h-28 top-0 bg-mocha-100 rounded-full absolute "
                            style={{ display: ballView, left: '48%', y: ballMergeA}}
                        >
                        </motion.div>

                        {/* Ball B */}
                        <motion.div
                            className="w-28 h-28 top-[8rem] bg-mocha-300 rounded-full absolute "
                            style={{ display: ballView, left: '48%', y: ballMergeB}}
                        >
                        </motion.div>

                        {/* Big */}
                        <motion.div
                            className="w-28 h-28 top-[4.5rem] left-[48%] bg-mocha-200 rounded-full absolute "
                            style={{ display: bigBallView, scale: bigBallScale}}

                        >
                        </motion.div>

                        {/* Big */}
 
                        <motion.div
                            className="w-28 h-28 top-[4.5rem] left-[48%] bg-mocha-200 rounded-full border-8 border-gray-300 drop-shadow-lg absolute z-50 "
                            style={{ display: cupView, scale: cupScale, x: cupTranslateX, y: cupTranslateY}}
                        >
                        </motion.div>

                        <motion.div
                            className="w-16 h-10 top-[7rem] left-[58%] bg-gray-300 rounded-lg border-8 border-gray-300 drop-shadow-xl absolute "
                            style={{ display: cupView, scaleX: cupHandleScale, x: cupTranslateX, y: cupTranslateY}}
                        >
                        </motion.div>

                        {/* Projects */}
                        <div className="flex justify-end mr-24">
                            <motion.div 
                            className="absolute bg-mocha-200 p-4 rounded-xl overflow-hidden flex items-center"
                            style={{display: projectView, y: projectTranslate}}
                            >
                            <a href='https://wahidkamruddin.github.io/lofi-soundboard/' target="_blank" ><Image src='/images/1.png' alt='project'width={700} height={700} className="rounded-xl object-cover"/></a>
                            </motion.div>

                            <motion.div 
                                className="absolute bg-mocha-200 p-4 rounded-xl overflow-hidden flex items-center"
                                style={{display: projectView, y: project2Translate}}
                                >
                                <a href='http://www.fitbyte.me/' target="_blank"><Image src='/images/2.png' alt='project'width={700} height={700} className="rounded-xl object-cover"/></a>
                            </motion.div>

                            <motion.div 
                                className="absolute bg-mocha-200 p-4 rounded-xl overflow-hidden flex items-center"
                                style={{display: projectView, y: project3Translate}}
                                >
                                <a className='' href='https://www.afterschoolstartup.com/' target= "_blank"><Image src='/images/3.png' alt='project'width={700} height={700} className="rounded-xl object-cover"/></a>
                            </motion.div>
                        </div>
                        
                    </div>
                </div>

                

                
        </div> 
    )
}

export default Projects;
