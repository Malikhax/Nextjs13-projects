import { FC } from "react";

const Button:FC<{text:string}> =(props)=>{
    return(
        <button className="border-2 py-2 px-5 rounded-3xl 
        font-bold hover:bg-red-500"
        >{props.text}</button>
    )
}
export default Button;