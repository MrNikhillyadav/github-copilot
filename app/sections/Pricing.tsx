"use client"
import { PricingCard } from "../components/PricingCard";
import { BiLogoVisualStudio } from "react-icons/bi";

export function Pricing() {
    return (
        <div className="bg-[#0d1117] flex  flex-col justify-center items-center px-4 md:px-[8rem] md:pb-20">
            <div className="border border-white/30 py-1 px-2 rounded-full">Pricing</div>
            <div>
                <h1 className="md:text-[64px] font-semibold">Take flight with GitHub Copilot</h1>
            </div>
            {/* Cards */}
            <div className="grid   py-4 mt-8  gap-4  md:grid-cols-2 lg:grid-cols-4">
               
                <PricingCard
                    title="Free"
                    description="For developers looking to get started with GitHub Copilot."
                    price="$10"
                    primaryButton={{ title: "Get started " }}
                    //@ts-expect-error: Additional text is not typed correctly
                    additionalText={
                        <div className="flex text-center justify-center items-center">
                            <div className="flex">Already have <BiLogoVisualStudio /> VS-Code? 
                            <div className="underline underline-offset-4 px-2  cursor-pointer">Open now</div></div>
                        </div>
                    }
                    //@ts-expect-error: Additional text is not typed correctly
                    bottomMostText={
                        <span> 
                            Includes up to 2,000 completions and 50 chat requests per month.
                        </span>
                    }
                />
                <PricingCard
                    title="Free"
                    description="For developers looking to get started with GitHub Copilot."
                    price="$10"
                    primaryButton={{ title: "Get started " }}
                    //@ts-expect-error: Additional text is not typed correctly
                    bottomMostText={
                        <> 
                           <span>Free for verified students, teachers, and maintainers of popular open source projects.</span> 
                           <span className="underline underline-offset-4 px-2  cursor-pointer">Learn more</span>
                        </>
                    }
                />
               
               
                <PricingCard
                    title="Free"
                    description="For developers looking to get started with GitHub Copilot."
                    price="$19"
                    primaryButton={{ title: "Get started " }}
                    secondaryButton={{ title: "Contact sales "}}
                    
                />
                <PricingCard
                    title="Free"
                    description="For developers looking to get started with GitHub Copilot."
                    price="$39"
                    primaryButton={{ title: "Get started " }}
                    secondaryButton={{ title: "Contact sales " }}
                    
                />
             
            </div>
        </div>
    );
}
