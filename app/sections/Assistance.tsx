import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import explain from "../assets/explain.png"
import gradient from "../assets/gradient.png"
import mobile from "../assets/mobile.png"
import playstore from "../assets/playstore.png"
import appstore from "../assets/appstore.png"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";


export function Assistance(){
    return(
        <div className ="bg-[rgba(21,26,33,255)] px-4 md:px-[8rem] md:pb-20  ">
            <div
             style={{
                backgroundImage :`url(${gradient.src})`,
                backgroundPosition: 0 ,
                height: 700,
            }} className=" hidden  bg-yellow-300 mx-8 md:mx-0 px-8 md:px-0 object-cover md:inline-flex overflow-x-clip flex-col justify-center items-center md:gap-8  md:w-full rounded-3xl ">

                <h1 className="md:text-[3.2rem] tracking-tight font-semibold ">Ask for assistance <br /> right in your terminal</h1>
                <p className=" md:text-2xl inline-flex gap-4 items-center justify-center  font-semibold">Try copilot in the CLI  <IoIosArrowForward/></p>
                <Image 
                        src={explain}
                        width={900}
                        height={900}
                        alt="Picture of the author"
                        />    
            </div>

            <div className='flex  flex-col md:flex-row  py-[2rem] gap-12 text-center items-center justify-between'>
                <div className=" bg-white/5  py-8   rounded-2xl gap-8 items-center md:items-start justify-center drop-shadow-md md:p-16 md:py-20 flex flex-col ">
                        <div className="w-20 h-20 inline-flex items-center justify-center text-3xl rounded-full bg-blue-600">
                            <HiOutlineDevicePhoneMobile/>
                        </div>
                        <h1 className='text-[26px] md:text-[40px]  md:text-start font-semibold md:pr-[2rem] leading-10 tracking-tight'>Chat with your AI pair programmer on-the-go</h1>
                       <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:mt-[4rem]">
                        <Image
                                
                                src={playstore}
                                width={180}
                                height={53}
                                alt="Picture of the author"
                                />
                            <Image
                             
                                src={appstore}
                                width={180}
                                height={53}
                                alt="Picture of the author"
                                />
                       </div>

                </div>
                        <Image
                            className='rounded-3xl'
                            src={mobile}
                            width={700}
                            height={550}
                            alt="Picture of the author"
                            />
               

                
            </div>

        </div>
    )
}