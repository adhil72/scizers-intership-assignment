import { ButtonHTMLAttributes } from "react";


export default function OutlinedButton(props:ButtonHTMLAttributes<HTMLButtonElement>){
    return <button {...props} className="px-8 py-4 border-solid border-2 border-secondary text-secondary rounded-md text-sm font-bold uppercase">{props.children}</button>
}