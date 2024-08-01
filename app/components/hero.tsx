'use client'
import {motion} from "framer-motion"

const Hero = () => {
    return (
        <div className="h-screen bg-mocha-100">
            <div className="p-28">
                <motion.div 
                className="mt-16 text-8xl font-normal"
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 100, x:0}
                }}
                initial= "hidden"
                animate= "visible"
                transition={{duration: 0.75, delay:0.25}}
                >
                    <h2 className="text-mocha-300">Welcome</h2>
                    <h2 className="mt-6 text-mocha-200">to</h2>
                </motion.div>
                
                <div 
                className="flex flex-col justify-center items-center">
                    <motion.h1 
                        className="text-9xl text-mocha-400 font-normal"
                        variants={{
                            hidden: {opacity: 0, y:-50},
                            visible: {opacity: 100, y:0}
                        }}
                        initial= "hidden"
                        animate= "visible"
                        transition={{duration: 0.75, delay: 0.25}}
                    > 
                        Wahid&apos;s 
                    </motion.h1>

                    <motion.h1 
                        className="my-4 text-8xl text-mocha-300 font-light"
                        variants={{
                            hidden: {opacity: 0, y:-50},
                            visible: {opacity: 100, y:0}
                        }}
                        initial= "hidden"
                        animate= "visible"
                        transition={{duration: 0.75, delay: 0.25}}
                    >
                        Code <span className="text-mocha-200">Café</span><span className="text-mocha-400">.</span>
                    </motion.h1>

                    <motion.button 
                        className="mt-14 py-4 px-20 bg-transparent text-mocha-400 font-light text-2xl border-mocha-400 border rounded-2xl hover:bg-mocha-200 hover:text-vanilla-100 hover:duration-700"
                        variants={{
                            hidden: {opacity: 0, y:0},
                            visible: {opacity: 100, y:0}
                        }}
                        initial= "hidden"
                        animate= "visible"
                        transition={{duration: 1, delay: 1}}
                    >
                        Brew My Portfolio
                    </motion.button>

                </div>

        </div>
        </div>
        
    )
}

export default Hero;