import { IoIosArrowForward } from "react-icons/io";


export function Features(){
    return <div className="bg-[rgba(21,26,33,255)] flex-col px-[8rem]  pt-[96px] pb-4  p-2 h-full flex justify-start items-start">
        {/* title */}
        <div className="flex flex-col text-center gap-8 items-center justify-center">
            <h4 className="border  border-white/30 py-1  gap-2 px-4 font-bold rounded-full">Features</h4>
            <h1 className="text-[32px] md:text-[64px] leading-[5rem] font-semibold">Customizable.<br className ="md:hidden"/> Contextual.<br className ="hidden md:block"/> 
            AI-powerful.</h1>

            <div className =" object-scale-down">
                <video  autoPlay loop muted  width="1248" height="647" className="w-[1248px] h-[647px]  overflow-x-clip rounded-3xl mt-10"
                src="https://github.githubassets.com/assets/features-breakout-436c5a320c72.mp4"></video>
            </div>

            {/* 1 */}
           <div> 
                <div className=' w-full grid grid-cols-2  leading-10 my-6 gap-8 '>
                        <div className="grid-cols-8  mr-10 tracking-tight  text-start font-semibold  ">
                            <h1 className=" text-[30px]">Create tests, docs, and more. </h1>
                            <h2 className=" text-[30px] text-white/50">Ask GitHub Copilot a question, get the right answer for you, and accept the code with a single click. </h2>
                            
                        </div>
                        <div className="grid-cols-4 text-[16px] ml-40  leading-6 ">
                            <div className="flex justify-start items-center gap-6  flex-col  ">
                                <div className="text-start px-8">
                                Answers that know how you code.
                                <p className="text-white/50">GitHub Copilot can use your code and Custom Instructions to code the way you prefer.</p>
                                </div>
                                <div className="text-start px-8">
                                Create tests, docs, and more. 
                                <p className="text-white/50">Ask GitHub Copilot to generate them and add them to your codebase with just one click.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col py-8 items-center justify-start">
            <h1 className="inline-flex gap-2 items-center justify-center text-blue-400 hover:underline underline-offset-4 font-bold text-md">Our favourite Copilot prompts <IoIosArrowForward/> </h1>
        </div>
    </div>
}