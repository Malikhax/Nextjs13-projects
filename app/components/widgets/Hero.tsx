import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import heroImg from "../../../public/introhero.jpg"
import Button from "../shared/Button"

const Hero =() =>{
    return( 
        <section>
            <Wrapper>
                <div className="flex space-x-4 items-center justify-center text-center mt-20 md:text-left ">
                    <div className="flex-1">
                        <div className="text-5xl font-bold py-2">Hello!</div>
                        <div className="text-5xl font-bold py-2">I am Osama malik |</div>
                        <div className="text-sm py-3 max-w-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et mollitia non dolores quis porro iusto quam, expedita labore magni accusamus.</div>
                        <Button text={"SEE PORTFOLIO"} />
                    </div>
                    <div className="">
                        <Image src={heroImg} alt="Hero Image" height={500}  className="rounded-3xl hidden md:block"/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default Hero