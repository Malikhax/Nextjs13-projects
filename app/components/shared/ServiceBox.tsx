import { FC } from "react"
import Image from "next/image"

const ServiceBox:FC<{logo:string,header:string,description:string}> = (props)=>{
    return(
        <div className="border w-72 h-72 pt-3 text-center flex flex-col items-center">
            <div className="pt-3"><Image src={props.logo} alt="html5 logo" width={80} height={80}/></div>
            <h1 className="text-2xl font-semibold pt-3">{props.header}</h1>
            <p className="pt-3 w-56">{props.description}</p>
        </div>
    )
}
export default ServiceBox