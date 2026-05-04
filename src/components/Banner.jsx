import Image from "next/image";
import banner from "@/assets/banner.png";  
import Link from "next/link";

export default function Banner() {
  return (
    <div className=" mb-10 min-h-full flex justify-center items-center">
      <div className="items-center justify-center flex flex-col md:flex-row gap-6">
        <Image src={banner} alt="Banner Image" width={300} height={300}/>
        <div>
            <h1 className="text-6xl mb-4 font-bold bg-linear-to-r from-green-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">Welcome to QurbaniHat</h1>
            <p className="text-2xl text-gray-600 mb-6 text-start">Find the best qurbani animals for your needs.</p>
           <Link href="/all-animals">
            <button className="animal-btn text-start">All animals</button>
           </Link>
        </div>
        </div>   
         </div>
  );
}

