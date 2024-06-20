import { ButtonHTMLAttributes } from "react";


export default function OutlinedButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className={`px-8 py-4 border-solid border-2 rounded-md font-bold uppercase hover:scale-105 ${props.className}`}>{props.children}</button>
}