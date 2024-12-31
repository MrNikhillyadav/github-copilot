import { IoIosArrowForward } from "react-icons/io";


export function Features(){
    return <div className="bg-[rgba(21,26,33,255)] flex-col md:px-[8rem]  pt-[96px] pb-4  md:p-2 h-full flex md:justify-start md:items-start">
        {/* title */}
        <div className="flex flex-col text-center gap-8 items-center justify-center">
            <h4 className="border  border-white/30 px-4 py-1   gap-0 md:gap-2 md:px-4 font-bold rounded-full">Features</h4>
            <h1 className="text-[32px] md:text-[64px] leading-9 md:leading-[5rem] font-semibold">Customizable.<br className ="md:hidden"/> Contextual.<br className =""/> 
            AI-powerful.</h1>

            <div className =" rounded-3xl mx-4 my-4 object-cover md:object-scale-down">
                <video  autoPlay loop muted  className="w-[750vh] h-[380px] object-cover  md:w-[1248px] md:h-[647px]  overflow-x-clip rounded-3xl md:mt-10"
                src="https://github.githubassets.com/assets/features-breakout-436c5a320c72.mp4"></video>
            </div>

            {/* 1 */}
           <div> 
                <div className=' w-full md:grid md:grid-cols-2 pr-12 px-6 md:px-2 leading-8 md:leading-10 my-4 md:my-6 gap-8 '>
                        <div className="md:grid-cols-8  text-[22px] md:text-[30px] md:mr-10 tracking-tight  text-start font-semibold  ">
                            <h1 className=" md:text-[30px]">Create tests, docs, and more. </h1>
                            <h2 className=" md:text-[30px] text-white/50">Ask GitHub Copilot a question, get the right answer for you, and accept the code with a single click. </h2>
                            
                        </div>
                        <div className="md:hidden flex flex-col my-4  items-start justify-start">
                            <h1 className="inline-flex gap-2 items-center justify-center  text-blue-400 hover:underline underline-offset-4 font-bold text-md">Our favourite Copilot prompts <IoIosArrowForward/> </h1>
                        </div>
                        <div className=" flex justify-center items-center md:grid-cols-4 text-[16px]  md:my-0  md:ml-40 pr-6 md:pr-0 leading-6 ">
                            <div className="md:flex justify-start items-center gap-6  md:flex-col  ">
                                <div className="text-start my-6 md:my-0 md:px-8">
                                Answers that know how you code.
                                <p className="text-white/50">GitHub Copilot can use your code and Custom Instructions to code the way you prefer.</p>
                                </div>
                                <div className="text-start  md:px-8">
                                Create tests, docs, and more. 
                                <p className="text-white/50">Ask GitHub Copilot to generate them and add them to your codebase with just one click.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        {/* 2 */}
        <div className="hidden md:flex flex-col py-8 items-center justify-start">
            <h1 className="inline-flex gap-2 items-center justify-center text-blue-400 hover:underline underline-offset-4 font-bold text-md">Our favourite Copilot prompts <IoIosArrowForward/> </h1>
        </div>
    </div>
}