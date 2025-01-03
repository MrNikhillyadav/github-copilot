'use client'
import { useState } from 'react';
import { GetContent } from '../components/GetContent';

export default function FaQs() {
    const [SelectedContentCategory, setSelectedContentCategory] = useState('General');

    function handleClick(category: string) {
        setSelectedContentCategory(category);
    };

    const defaultStyle = {
        "unselected": "px-4 py-3  md:text-[16px] text-[#aaaeb6] rounded-md hover:border text-start",
        "selected": "px-4 py-3 md:text-[16px] bg-white/10 text-white shadow-sm rounded-md hover:border text-start"
    };

    return (
        <div>
            <div className="px-6 bg-[rgba(21,26,33,255)] md:px-[8rem] pt-4 pb-[80px]">
                <h1 className="text-[28px] mb-16 md:text-[50px] text-white tracking-tight leading-[54px] font-semibold">
                    Frequently <br className="hidden md:block" /> asked questions
                </h1>
                <div className='grid grid-cols-12 py-8'>
                    <div className="md:col-span-4 flex flex-col gap-4 pr-8">
                        {["General", "Plans & Pricing", "Privacy", "Responsible AI"].map((item, index) => {
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => handleClick(item)} 
                                className={SelectedContentCategory === item ? defaultStyle['selected']: defaultStyle['unselected']}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-span-1 text-[#646c76]"> </div>
                    <div className="flex flex-col col-span-7 px-8 rounded-md">
                        <h1 className="py-4 text-lg font-semibold text-[#aaaeb6]">{SelectedContentCategory}</h1>
                        <div className="mt-4 text-start"> 
                            <GetContent SelectedContentCategory={SelectedContentCategory} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
