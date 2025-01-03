'use client'
import {useState} from 'react'
import { GetContent } from '../components/GetContent';

export default function FaQs(){
    const [SelectedContentCategory,setSelectedContentCategory] = useState('General')

    function handleClick(category:string){
        setSelectedContentCategory(category)
    };

    return (
        <div>
            <div className="px-6 bg-[#0C0C0C]  md:px-[8rem] py-[96px]">
                <h1 className="text-[28px] my-4 md:text-[48px] text-white font-semibold">Frequently <br className="hidden md:block"/> asked questions</h1>
                <div className='grid grid-cols-12 py-8'>
                    <div className=" md:col-span-4 flex flex-col gap-4 pr-8 ">
                        {["General","Plans & Pricing","Privacy","Responsible AI"].map((item,index) =>{
                            return (
                                <div 
                                    onClick={
                                        () => handleClick(item)
                                     }
                                    key={index} className="px-4 py-4 text-[#aaaeb6] rounded-md hover:border text-start">
                                        {item}
                                </div>
                            );
                        })}
                    </div>
                    <div className=" col-span-1 text-[#646c76] "> </div>
                    <div className=" flex flex-col col-span-7 px-8 rounded-md  ">
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
