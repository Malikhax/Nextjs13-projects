import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import html5Img from "../../assets/images/html5.svg"
import apiImg from "../../assets/images/api-tester.svg"
import devImg from "../../assets/images/app-developer.svg"
import codeImg from "../../assets/images/coding-review.svg"
import uiImg from "../../assets/images/ui-ux.svg"
import testImg from "../../assets/images/hacker-web-tester.svg"
import ServiceBox from "../shared/ServiceBox"

const serviceData =[
    {
        logo:html5Img,
        header:"Web Design",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sit optio quo. Veniam corporis quod maxime?"
    },
    {
        logo:apiImg,
        header:"Api Pentest",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sit optio quo. Veniam corporis quod maxime?"
    },
    {
        logo:devImg,
        header:"Web Developement",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sit optio quo. Veniam corporis quod maxime?"
    },
    {
        logo:codeImg,
        header:"Code Review",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sit optio quo. Veniam corporis quod maxime?"
    },
    {
        logo:uiImg,
        header:"UI/UX Design",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sit optio quo. Veniam corporis quod maxime?"
    },
    {
        logo:testImg,
        header:"Web Pentest",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sit optio quo. Veniam corporis quod maxime?"
    },
    
]

const ServiceSection = ()=>{
    return (
        <section>
            <Wrapper>
                <div className="mt-20">
                    <div className="max-w-lg flex flex-col text-center mx-auto">
                        <h1 className="text-3xl font-bold sm:text-4xl">My <span className="text-red-500">Services</span></h1>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Recusandae quasi ullam pariatur perferendis excepturi corrupti?</p>
                    </div>
                </div>
                <div className="my-20 flex flex-col justify-around gap-y-8 items-center md:grid grid-cols-2 gap-x-8 lg:grid-cols-3">
                    {
                        serviceData.map((items)=>{
                            return(
                                <ServiceBox key={items.logo} logo={items.logo} header={items.header} description={items.description}/>
                            )
                        })
                    }
                </div>
            </Wrapper>
        </section>
    )
}
export default ServiceSection