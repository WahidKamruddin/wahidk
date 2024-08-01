import Image from "next/image";
import Link from "next/link";

const Loading = () => {
  return (
    <div className="h-screen bg-mocha-100 flex justify-center items-center">
      <div>      
        <Image alt='coffee cup' src='/loadingCup.svg' className="text-mocha-400 "width={100} height={100}/>
        <Link href='/cafe'><button className="mt-6 py-2 px-5 bg-mocha-400 text-vanilla-100 rounded-xl hover:bg-mocha-200">Enter</button></Link>
      </div>

    </div>
  );
};

export default Loading;
