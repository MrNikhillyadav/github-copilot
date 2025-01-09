import { Button  } from "../components/buttonVariants";

export  function Pricing(){
    return (
        <div className ="bg-[#0d1117] flex flex-col justify-center items-center px-4 md:px-[8rem] md:pb-20  ">
            <div className="border  border-white/30 py-1 px-2 rounded-full">
                    Pricing
            </div>
            <div> 
                <h1 className="md:text-[64px] font-semibold">Take flight with GitHub Copilot</h1>
            </div>
            {/* cards */}
            <div className="grid  py-4 mt-8 grid-cols-4"> 
                <div className="card drop-shadow-lg  flex flex-col justify-center items-center p-4 rounded-xl hover:bg-[#1d232de7] "> 
                    <h1 className="text-[32px] font-semibold ">Free </h1>
                    <p className="text-[14px] px-6 text-center text-[#8B949E]" > 
                        For developers looking to get started with Github copilot.
                    </p>
                    <div className =" text-center flex my-8" >
                        <span className ="md:text-[36px] font-semibold text-center"> $0 </span>
                        <span className="text-[#8B949E] text-end text-[14px] " > USD </span>
                    </div>
                    <Button title="Get started >" size="lg" variant={"primary"} />
                    <p className="pt-4 text-[12px] " > 
                        Already have VS Code? <span className="underline underline-offset-4 cursor-pointer">Open now </span>
                    </p>
                    <p className=" text-[#8B949E] text-[12px] md:px-8 text-center my-3" >
                        Includes up to 2,000 completions and 50 chat requests per month.
                    </p>
                </div>
            </div>
        </div>
    )
}