const Hero = () => {
    return (
        <div className="h-screen bg-mocha-100">
            <div className="p-28">
                <div className="mt-16 text-8xl font-normal">
                    <h2 className="text-mocha-300">Welcome</h2>
                    <h2 className="mt-6 text-mocha-200">to</h2>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-9xl text-mocha-400 font-normal">Wahid's</h1>
                    <h1 className="my-4 text-8xl text-mocha-300 font-light">Code <span className="text-mocha-200">Café</span><span className="text-mocha-400">.</span></h1>

                    <button className="mt-14 py-4 px-20 bg-transparent text-mocha-400 font-light text-2xl border-mocha-400 border rounded-2xl hover:bg-mocha-200 hover:text-obsidian-100 hover:duration-700">Brew My Portfolio</button>

                </div>

        </div>
        </div>
        
    )
}

export default Hero;