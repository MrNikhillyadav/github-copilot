'use client'
import { useState } from 'react';
import { GetContent } from '../components/GetContent';

export default function FaQs() {
    const [SelectedContentCategory, setSelectedContentCategory] = useState('General');

    function handleClick(category: string) {
        setSelectedContentCategory(category);
    };

    const defaultStyle = {
        "unselected": "px-4 py-3 cursor-pointer  md:text-[16px] text-[#aaaeb6] rounded-md nd:hover:border text-start",
        "selected": "px-4 py-3 cursor-pointer md:text-[16px] md:bg-white/10 text-white shadow-sm rounded-md md:hover:border text-start"
    };

    return (
        <div>
            <div className="px-6 bg-[#161B22] md:px-[8rem] pt-16 pb-[80px]">
                <h1 className="text-[28px] text-center md:text-start mb-4 md:mb-16 md:text-[50px] text-white tracking-tight md:leading-10 md:leading-[54px] font-semibold">
                    Frequently <br className="hidden md:block" /> asked questions
                </h1>
                <div className='grid grid-cols-12 md:py-8'>
                    <div className="col-span-12 md:col-span-4 flex flex-col gap-4 pr-8">
                        {["General", "Plans & Pricing", "Privacy", "Responsible AI"].map((item, index) => {
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => handleClick(item)} 
                                    className={SelectedContentCategory === item ? defaultStyle['selected']: defaultStyle['unselected']}
                                >
                                    {item}

                                    <div className="md:hidden"><GetContent SelectedContentCategory={SelectedContentCategory} /> </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="hidden md:block md:col-span-1 text-[#646c76]"> </div>
                    <div className=" hidden md:flex flex-col col-span-12 md:col-span-7 px-8 rounded-md">
                        <h1 className="md:py-4 text-lg font-semibold text-[#aaaeb6]">{SelectedContentCategory}</h1>
                        <div className="mt-4 text-start duration-300 cursor-pointer"> 
                            <GetContent SelectedContentCategory={SelectedContentCategory} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
