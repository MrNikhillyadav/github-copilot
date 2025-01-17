import { ReactElement } from "react";
import { SlArrowRight } from "react-icons/sl";

interface ButtonInterface{
  title : string;
  size : "sm" | "md" |"lg";
  startIcon?: ReactElement,
  endIcon?: boolean,
  variant : 'primary'|'secondary',
  onClick?: () => void;
  loading?:boolean,
}

const sizeStyles = {
  "sm" :"rounded-lg p-1 py-2 text-[14px] border border-1",
  "md" :"rounded-md px-6 py-3 text-[14px] font-semibold rounded-lg border-2",
  "lg" :"rounded-lg px-6 py-3 text-[16px] font-semibold rounded-lg border-2",
}

const ButtonVariants = {
  "primary" : ' hover:bg-opacity-90 bg-white text-black',
  "secondary" : " hover:bg-white/10 backdrop-blur-sm text-white border-1 border-white/30 ",
}

export  function Button(props : ButtonInterface){ 

  return (
    <button onClick={props.onClick} className={`flex  items-center justify-center ${ButtonVariants[props.variant]} ${props.loading && 'bg-opacity-50' }  ${sizeStyles[props.size]}`}>
      {props.startIcon}
      <span  className="pl-2 pr-2 flex flex-row items-center justify-center gap-2">
          {props.title}
          {!props.endIcon &&
          <> 
            <SlArrowRight className="font-bold"/>
          </> 
          
        }
          

      </span>
      {props.endIcon}
    </button>
  )
}