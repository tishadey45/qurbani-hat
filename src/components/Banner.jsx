import Image from "next/image";
import banner from "@/assets/banner.png";  
import Link from "next/link";

export default function Banner() {
  return (
    <div className="text-center mb-10 min-h-full flex items-center justify-center">
      <div className="items-center justify-center flex flex-col md:flex-row gap-6">
        <Image src={banner} alt="Banner Image" width={300} height={300}/>
        <div>
            <h1 className="text-3xl mb-4 font-bold bg-linear-to-r from-green-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">Welcome to QurbaniHat</h1>
            <p className="text-lg text-gray-600 mb-6">Find the best qurbani animals for your needs.</p>
           <Link href="/animals">
            <button className="btn bg-emerald-900 text-white rounded-2xl">All animals</button>
           </Link>
        </div>
        </div>   
         </div>
  );
}