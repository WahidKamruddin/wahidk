'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const Projects = () => {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end start']
    })

    // Define transforms based on scroll position
    const letterSpacing = useTransform(scrollYProgress, [0, 1/8], ['0px', '-50px']); // Collapse effect
    const textView = useTransform(scrollYProgress, [0, 1/8], ['initial', 'none']); // Collapse effect

    const ballView = useTransform(scrollYProgress, [1/8, 1/4, 3/8], ['none', 'initial', 'none']); 
    const ballMergeA = useTransform(scrollYProgress, [1/8, 3/8], ['0rem', '4rem']); 
    const ballMergeB = useTransform(scrollYProgress, [1/8, 3/8], ['0rem', '-4rem']); 

    const bigBallView = useTransform(scrollYProgress, [3/8, 4/8, 5/8], ['none', 'initial', 'none']); 
    const bigBallScale = useTransform(scrollYProgress, [3/8, 5/8], [1, 2]); 

    const cupView = useTransform(scrollYProgress, [5/8, 6/8], ['none', 'initial']); 
    const cupScale = useTransform(scrollYProgress, [3/8, 5/8, 6/8], [1, 2.25, 2.3]); 

    const cupHandleScale = useTransform(scrollYProgress, [4/8, 5/8, 6/8], [0, 0.25, 1]); 

    const cupTranslateX = useTransform(scrollYProgress, [6/8, 7/8], ['0rem','-40rem']); 
    const cupTranslateY = useTransform(scrollYProgress, [6/8, 7/8], ['0rem','-15rem']); 

    const iPadView = useTransform(scrollYProgress, [6/8, 7/8], ['none', 'initial']); 
    const iPadTranslate = useTransform(scrollYProgress, [6/8, 7/8], [1000, 0]); 
    

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDES = ['/images/mellowmind.png', '/images/fit.jpg', '/images/afterschoolstartup.png' ]



    return (
        <div className="h-[1000vh] relative overflow-clip" ref={scrollRef}>

                <div className="top-[40%] sticky w-full flex flex-col items-center justify-center">

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
                    </div>

                    <motion.div
                        className="w-1/2 h-[30rem] top-1/4 left-[40rem] bg-mocha-100 border border-black rounded-xl absolute"
                        style={{ display: iPadView, x: iPadTranslate}}
                    >
                        {/* insert carousel */}
                        <div className="h-full flex justify-center items-center p-6 rounded-xl"><div className="w-full bg-vanilla-100 mx-10"><EmblaCarousel slides={SLIDES} options={OPTIONS}/></div></div>
                    </motion.div>
                </div>
        </div> 
    )
}

export default Projects;
