import Navbar from "./Navbar";
import heroimage from "../assets/heroimage.jpg"
import { BiLogoVisualStudio } from "react-icons/bi";

import Image from "next/image";


export default function Hero(){
    return (
        <div className="h-full bg-cover " style={{
            backgroundImage :`url(${heroimage.src})`,
            
        }}>
            <Navbar/>

            {/* Hero Page */}
            <div className="flex flex-col mt-10 py-20 gap-10 justify-center items-center">
                <div className="border border-white/30 py-1 px-4 rounded-full">Github copilot is now available for free</div>
                <h1 className="text-7xl font-bold">The AI editor for everyone</h1>

                <div className="flex gap-8">
                    <button className="bg-white rounded-lg px-8 py-3 text-black font-medium">Get started for free</button>
                    <button className="border-2 border-white rounded-lg px-8 py-3 text-white font-medium">See plans & pricing</button>
                </div>
                <div className="inline-flex justify-center items-center gap-2">Already have <span className="text-blue-500 text-xl"> 
                    <BiLogoVisualStudio/> </span> Visual Studio Code ? <span className="underline cursor-pointer ">Open now</span>
                </div>
                {/* video */}
                <div >
                    <video autoPlay loop muted width="1220" height="240" className=" rounded-xl mt-10"
                    src="https://github.githubassets.com/assets/hero-lg-c3f7fc42e245.mp4">
                    </video>
                </div>
            </div>
        </div>
    )
}