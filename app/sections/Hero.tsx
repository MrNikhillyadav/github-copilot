import Navbar from "../components/Navbar";
import heroimage from "../assets/heroimage.jpg"
import { BiLogoVisualStudio } from "react-icons/bi";
import { Button  } from "../components/buttonVariants";
import { SiGithubcopilot } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa6";
import FedEx from "../components/FedEx"
import Image from 'next/image'

const miniNavItems = [
    { "id": 1, "title": "Plans"},
    { "id": 2, "title": "Tutorials"},
    { "id": 3, "title": "Extensions"},
    { "id": 4, "title": "What's new"},

]

export  function Hero(){
    return (
        <div className="p-2  h-full pb-[6rem] bg-no-repeat bg-cover  md:bg-center  md:bg-cover  " 
        style={{
            backgroundImage :`url(${heroimage.src})`,
            backgroundPosition: 0 ,
            // backgroundSize: 900,
        }}>
            <Navbar/>
            <div className="flex mt-4 md:py-2 px-4 max-w-[1480px] m-auto md:items-center  gap-6 md:justify-start ">
                <div className="flex gap-8 justify-between">
                    <div className=" flex justify-center gap-4 items-center">
                        <h1 className=" text-[16px] md:text-lg font-bold cursor-pointer">GitHub Copilot </h1>
                        <span className="">/</span>
                    </div>
                    <div className=" flex justify-between gap-12 items-center">
                        <div className="md:hidden">Overview</div>
                        <span><FaAngleDown/></span>
                    </div>

                </div>

                    <div className="hidden px-1 md:inline-flex text-[14px] justify-center items-center font-semibold gap-8">
                        {miniNavItems.map(({id,title}) =>(
                            <span className="hidden md:block hover:underline underline-white underline-offset-4 cursor-pointer" key={id}>{title}</span>
                        ))}
                    </div>

            </div>
            {/* Hero Page */}
            <div className="flex flex-col md:mt-4 py-20 gap-6 justify-center items-center">
                <div className="border flex justify-center items-center md:gap-4 border-white/30 py-1  gap-2 px-4 font-bold rounded-full">
                    <SiGithubcopilot/>
                    Github copilot is now available for free
                </div>
                <h1 className="text-[36px] md:text-7xl  font-bold text-center px-16 md:px-0 leading-10    tracking-tight">The AI editor for everyone</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <Button title="Get started for free" size="lg" variant={"primary"} />
                    <Button title="See plans & pricing" size="lg" variant={"secondary"} />
                </div>
                <div className="md:inline-flex text-center  md:flex-row -mt-2 justify-center items-center gap-2">
                    Already have 
                    <div className="flex gap-2"> 
                        <div className="text-blue-500 text-xl"><BiLogoVisualStudio/> </div> 
                        Visual Studio Code ? <span className="underline underline-offset-4 cursor-pointer "> Open now</span>

                    </div>
                  
                    
                </div>
                {/* video */}
                <div className="hidden md:flex" >
                    <video autoPlay loop muted width="1220" height="240" className=" rounded-xl mt-10"
                    src="https://github.githubassets.com/assets/hero-lg-c3f7fc42e245.mp4">
                    </video>
                </div>
                <div className=" md:hidden">
                    <video autoPlay loop muted width="2220" height="240" className="  aspect-video overflow-x-clip rounded-xl mt-10"
                    src="https://github.githubassets.com/assets/hero-lg-c3f7fc42e245.mp4">
                    </video>
                </div>
            </div>
        </div>
    )
}