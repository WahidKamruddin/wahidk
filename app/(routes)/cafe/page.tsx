import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Me from "@/app/components/me";
import Projects from "@/app/components/projects";
import Contact from "@/app/components/contact";

const cafe = () => {
    return ( 
        <div className="w-full bg-vanilla-100 scroll-smooth	">
            <div className="fixed w-full"><Navbar/></div>
            <Hero/>
            <Me/>
            <Projects/>
            <Contact/>

        </div>
    );

};

export default cafe;