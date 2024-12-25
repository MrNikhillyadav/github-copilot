import { ReactElement } from "react";

interface ButtonInterface{
  title : string;
  size : "sm" | "md" |"lg";
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  variant : 'primary'|'secondary'|'submit'|'disable',
  onClick?: () => void;
  loading?:boolean

}

const sizeStyles = {
  "sm" :"rounded-lg p-1 py-2 text-sm border border-1",
  "lg" :"rounded-lg px-6 py-3 text-[16px] font-semibold rounded-lg border-2",
}

const ButtonVariants = {
  "primary" : ' hover:bg-opacity-90 bg-white text-black',
  "secondary" : " hover:bg-white/10 bg-transparent text-white border-1 ",
}

export  function Button(props : ButtonInterface){ 
  return (
    <button  onClick={props.onClick} className={`flex  items-center justify-center ${ButtonVariants[props.variant]} ${props.loading && 'bg-opacity-50' }  ${sizeStyles[props.size]}`}>
      {props.startIcon}
      <span  className="pl-2 pr-2">
          {props.title}
      </span>
      {props.endIcon}
    </button>
  )
}