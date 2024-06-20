import { ButtonHTMLAttributes } from "react";

export default function SolidButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className={"font-bold px-8 py-4 transition-transform ease-in-out duration-200 uppercase hover:scale-105 " + props.className}>
        {props.children}
    </button>
}