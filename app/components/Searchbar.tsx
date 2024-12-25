import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineSlash } from "react-icons/hi2";

interface SearchInterface {
    title : string,
    // startIcon?:ReactElement,
    // endIcon? : ReactElement
}

export function SearchBar(props:SearchInterface){
    return (
        <div className='flex items-center justify-start gap-2 className="text-xs tracking-tight  px-2 py-1 rounded-lg w-[20vw] border bg-white/20 border-white/30 "'>

             <div  className="text-sm p-1 rounded-md text-white/80 "><IoSearchOutline/></div>
            <input placeholder={props.title} className="bg-transparent text-sm outline-none w-full"/> 
             <div  className="text-sm border border-white/30 p-1 rounded-md "><HiOutlineSlash/></div>
        </div>
    )
}