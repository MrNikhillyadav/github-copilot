import { Button  } from "../components/buttonVariants";
import { BiLogoVisualStudio } from "react-icons/bi";

interface pricingCardInterface {
    title : string;
    topDesc : string;
    price : string;
    priceDesc? string;
    secBtn? : boolean;
    secDesc? : string;
    bottomDesc? : string;
}

export function PricingCard(props:pricingCardInterface){
    return ( 
            <div className="card drop-shadow-lg  flex flex-col justify-center items-center p-4 rounded-xl hover:bg-[#1d232de7] "> 
                    <h1 className="text-[32px] font-semibold ">Free  </h1>
                    <p className="text-[14px] px-6 text-center text-[#8B949E]" > 
                        For developers looking to get started with the Github copilot.
                    </p>
                    <div className =" text-center flex my-8" >
                        <span className ="md:text-[36px] font-semibold text-center"> $0 </span>
                        <span className="text-[#8B949E] text-end text-[14px] " > USD </span>
                    </div>
                    <Button title="Get started >" size="lg" variant={"primary"} />
                    <p className="pt-4 text-[12px] " > 
                        Already have <BiLogoVisualStudio/> VS-Code? <span className="underline underline-offset-4 cursor-pointer">Open now </span>
                    </p>
                    <p className=" text-[#8B949E] text-[12px] md:px-8 text-center my-3" >
                        Includes up to 2,000+ completions and 50 chat requests per month.
                    </p>
                </div>
    )
}