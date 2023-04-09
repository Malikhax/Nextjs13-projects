import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import introImg from "../../../public/introhero.jpg"
import Button from "../shared/Button"

const IntroSec =()=>{
    return(
        <section className="bg-slate-800">
            <Wrapper>
                <div className="m-10 py-6 flex justify-between items-center space-x-8">
                    <div className="flex flex-col justify-between items-center">
                        <Image src={introImg} alt="Hero intro" height={600} className="rounded-2xl" />
                        <div className="mt-4 block md:hidden "><Button text={"Download CV"}/></div>
                    </div>
                    <div className="flex-1 lg:space-y-10 md:space-y-2 md:block hidden">
                        <h1 className="text-xl font-bold md:text-2xl lg:text-6xl">Hello, I am Osama Malik</h1>
                        <p className="text-sm sm:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda error accusamus nesciunt at ad itaque? Omnis ad eveniet illum perferendis culpa laboriosam esse hic ipsum neque iure officia itaque rerum ea tempora aliquid, voluptates, asperiores fugiat commodi sed? Eius mollitia numquam praesentium vel neque nobis rem sunt aut delectus ipsum.</p>
                        <table className="table-auto border-separate">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>:Osama malik</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>:23</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>:Peshawar,pakistan</td>
                            </tr>
                            <tr>
                                <td>Number</td>
                                <td>:0330000000</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:xyz9@gmail.com</td>
                            </tr>
                            </tbody>
                        </table>
                        <Button text={"Download CV"}/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default IntroSec