"use client"
import { Button  } from "../components/buttonVariants";
import Link from 'next/link';

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    currency?: string;
    primaryButton?: {
        title: string;
        onClick?: () => void;
    };
    secondaryButton?: {
        title: string;
        onClick?: () => void;
    };
    additionalText?: string;
    bottomMostText? : string;
}

export function PricingCard({
    title,
    description,
    price,
    currency = "USD",
    primaryButton,
    secondaryButton,
    additionalText,
    bottomMostText
}: PricingCardProps) {
    return (
        <div className="card drop-shadow-lg grid grid-rows-1 mb-8 md:mb-0  justify-center items-center p-4 rounded-xl transition duration-120 hover:bg-white/5 hover:bg-opacity-50 ">
           <div className="grid grid-rows-1  text-center items-center "> 
                    <div className="grid grid-rows-3  items-center  gap-2">
                            <h1 className="text-[32px] font-semibold">{title}</h1>
                            <p className="text-[14px] px-6  text-center text-[#8B949E]">{description}</p>
                            <div className="text-center flex items-center justify-center  ">
                                <span className="md:text-[36px] font-semibold text-center">{price}</span>
                                <span className="text-[#8B949E] text-end text-[14px]">{currency}</span>
                            </div>
                        </div>
           </div>
                  
           
            <div className="flex flex-col  gap-2 px-4 mt-4 "> 
                {primaryButton && (
                    <Link  href = "https://github.com/copilot"
                        target='_blank'>
                        <Button title={primaryButton.title} size="lg" variant={"primary"} onClick={primaryButton.onClick} />
                    </Link>
                    
                )}
                {secondaryButton && (
                    <Link href = "https://github.com/features/copilot/plans"
                         target='_blank'>
                        <Button title={secondaryButton.title} size="md" variant={"secondary"} onClick={secondaryButton.onClick} />
                    </Link>
                )}
            </div>

           <div className="flex flex-col gap-2 pt-2 "> 
                {additionalText && (
                        <div className=" text-[12px]">{additionalText}</div>
                    )}
                    {bottomMostText && (
                        <p className="text-[#8B949E] text-center text-[12px] md:px-8 ">{bottomMostText}</p>
                    )}
           </div>
            
        </div>
    );
}
