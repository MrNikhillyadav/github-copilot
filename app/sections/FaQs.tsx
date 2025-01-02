export default function FaQs(){
    return (
        <div>
            <div className="px-6 md:px-[8rem]  py-[96px]">
                <h1 className="text-[28px] my-4 md:text-[48px] font-semibold ">Frequently <br className="hidden md:block"/> asked questions</h1>
                <div className='grid grid-cols-3 py-8 '>
                    <div className="border flex flex-col gap-4   pr-8 text-center">
                        {["General","Plans & Pricing","Privacy","Responsible AI"].map((item,index) =>{
                            return (
                            <div key={index} className="px-4 py-4 rounded-md  hover:border text-start">
                                {item}
                            </div>)
}                           )}
                    </div>
                    <div className="border col-span-2  text-center">
                        General
                    </div>
                    
                </div>
            </div>
        </div>
    )
}