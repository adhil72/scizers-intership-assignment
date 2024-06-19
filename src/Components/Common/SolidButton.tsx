import { ButtonHTMLAttributes } from "react";

export default function SolidButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className={"bg-tint text-white font-bold px-6 py-4 transition-transform ease-in-out duration-200 rounded-xl uppercase hover:bg-opacity-80 hover:scale-105 " + props.className}>
        {props.children}
    </button>
}