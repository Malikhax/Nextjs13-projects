import { FC } from "react"
import Image, { StaticImageData } from "next/image"
import Button from "./Button"

const PortfolioBox:FC<{img:string | StaticImageData,link:string}> = (props)=>{
    return(
        <div className="w-72 h-72  mx-auto relative">
            <Image src={props.img} alt="Portfolio image" className="w-full h-full rounded-2xl"/>
            <div className="absolute bottom-0 left-24"><a href={props.link}><Button text="Open"/></a></div>
        </div>
    )
}
export default PortfolioBox