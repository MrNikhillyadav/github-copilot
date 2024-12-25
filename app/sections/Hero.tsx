import Navbar from "./Navbar";
import heroimage from "../assets/heroimage.jpg"
import { BiLogoVisualStudio } from "react-icons/bi";
import { Button  } from "../components/buttonVariants";
import { SiGithubcopilot } from "react-icons/si";
const miniNavItems = [
    { "id": 1, "title": "Plans"},
    { "id": 2, "title": "Tutorials"},
    { "id": 3, "title": "Extensions"},
    { "id": 4, "title": "What's new"},

]

export default function Hero(){
    return (
        <div className="h-full bg-cover " style={{
            backgroundImage :`url(${heroimage.src})`,
            
        }}>
            <Navbar/>
            <div className="flex py-2 px-4 max-w-[1480px] m-auto  gap-6 justify-start ">
                    <h1 className="text-lg font-bold cursor-pointer">GitHub Copilot </h1>
                    <span className="">/</span>
                    <div className="px-1 inline-flex text-[14px] justify-center items-center font-semibold gap-8">
                        {miniNavItems.map(({id,title}) =>(
                            <span className="hover:underline underline-white underline-offset-4 cursor-pointer" key={id}>{title}</span>
                        ))}
                    </div>

            </div>
            {/* Hero Page */}
            <div className="flex flex-col mt-4 py-20 gap-6 justify-center items-center">
               
                <div className="border flex justify-center items-center gap-4 border-white/30 py-1 px-4 font-bold rounded-full">
                    <SiGithubcopilot/>
                    Github copilot is now available for free
                </div>
                <h1 className="text-7xl font-bold  tracking-tight">The AI editor for everyone</h1>

                <div className="flex gap-4">
                    <Button title="Get started for free" size="lg" variant={"primary"} />
                    <Button title="See plans & pricing" size="lg" variant={"secondary"} />
                </div>
                <div className="inline-flex -mt-2 justify-center items-center gap-2">Already have <span className="text-blue-500 text-xl"> 
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