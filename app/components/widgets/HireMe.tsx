import Image from "next/image"
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import bgImage from "../../assets/images/bg-service.png"

const HireMe = ()=>{
    return(
        <section>
            <div className="relative h-96 w-full">
                <Image src={bgImage} alt="bg image" className="w-full h-full"/>
            <Wrapper>
                <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl font-semibold">I am Available For Freelancer !</h1>
                    <div><Button text="Hire Me" /></div>
                </div>
            </Wrapper>
            </div>
        </section>
    )
}

export default HireMe