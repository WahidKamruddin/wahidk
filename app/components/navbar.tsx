import Image from "next/image";

const Navbar = () => {
    return (
        <div>
            <ul className="pt-8 flex justify-center items-center cursor-pointer">
                <div className="p-4 border border-mocha-300 rounded-3xl backdrop-blur-sm flex">
                    <li className="mx-8 border-transparent border-b-4  hover:border-mocha-400 hover:duration-700 "><Image alt='home' src='/cafeHome.svg' width={43} height={43}/></li>
                    <li className="mx-8 border-transparent border-b-4  hover:border-mocha-400 hover:duration-700 "><Image alt='home' src='/person.svg' width={30} height={30}/></li>
                    <li className="mx-8 border-transparent border-b-4  hover:border-mocha-400 hover:duration-700 "><Image alt='home' src='/experience.svg' width={35} height={35}/></li>
                    <li className="mx-8 border-transparent border-b-4  hover:border-mocha-400 hover:duration-700 "><Image alt='home' src='/phone.svg' width={35} height={35}/></li>
                </div>
                
            </ul>
        </div>
    )
}

export default Navbar;