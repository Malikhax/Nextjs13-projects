"use client"
import Image from "next/image"
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import FImag from "../../../public/introhero.jpg"
import Link from "next/link"
import PortfolioBox from "../shared/PortfolioBox"
import { useState } from "react"

//images
import webImg1 from "../../assets/images/web1.jpg"
import webImg2 from "../../assets/images/web2.webp"
import webImg3 from "../../assets/images/web3.webp"
import testImg1 from "../../assets/images/test1.jpg"
import testImg2 from "../../assets/images/test2.jpeg"
import designImg1 from "../../assets/images/design1.png"
import designImg2 from "../../assets/images/design2.jpg"
import designImg3 from "../../assets/images/design3.jpg"

const projectData=[
    {
        slug:"All",
        project:[
            {
                link:'https://www.google.com',
                img:webImg1
            },
            {
                link:'https://www.google.com',
                img:testImg1
            },
            {
                link:'https://www.google.com',
                img:designImg2
            },
            {
                link:'https://www.google.com',
                img:webImg2
            },
            {
                link:'https://www.google.com',
                img:designImg1
            },
            {
                link:'https://www.google.com',
                img:designImg3
            },
        ]
    },
    {
        slug:"Web",
        project:[
            {
                link:'https://www.google.com',
                img:webImg1
            },
            {
                link:'https://www.google.com',
                img:webImg2
            },
            {
                link:'https://www.google.com',
                img:webImg3
            }
        ]
    },
    {
        slug:"Design",
        project:[
            {
                link:'https://www.google.com',
                img:designImg1
            },
            {
                link:'https://www.google.com',
                img:designImg2
            },
            {
                link:'https://www.google.com',
                img:designImg3
            },
        ]
    },
    {
        slug:"Test",
        project:[
            {
                link:'https://www.google.com',
                img:testImg1
            },
            {
                link:'https://www.google.com',
                img:testImg2
            },
        ]
    },
]

const PortfolioSection =()=>{
    const [selectedItem,setSelectedItem] =useState("All")
    const selectedItemData = projectData.find((item)=>item.slug===selectedItem) //call back function
    return(
        <section className="bg-gray-800">
            <Wrapper>
                <div className="max-w-lg flex flex-col text-center mx-auto pt-20">
                     <h1 className="text-3xl font-bold sm:text-4xl">My <span className="text-red-500">Portfolio</span></h1>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Recusandae quasi ullam pariatur perferendis excepturi corrupti?</p>
                </div>
                <div className="flex justify-center mt-10 space-x-6">
                    {
                        projectData.map((item)=>{
                            return(
                                <div key={item.slug} onClick={()=>setSelectedItem(item.slug)}>
                                    <Button text={item.slug}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="my-10 gap-x-5 flex flex-col justify-around gap-5 md:grid grid-cols-2 lg:grid-cols-3 pb-20">
                    {
                        selectedItemData?.project.map((items)=>{
                            return(
                                <>
                                    <PortfolioBox img={items.img} link={items.link} />    
                                </>
                                )
                        })                       
                    }
                    
                </div>
            </Wrapper>
        </section>
    )
}
export default PortfolioSection