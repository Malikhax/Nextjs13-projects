import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"

const ContactUS =()=>{
    return(
        <section>
            <Wrapper>
                <div>
                    <div className="max-w-lg flex flex-col text-center mx-auto">
                        <h1 className="text-3xl font-bold sm:text-4xl">Contact <span className="text-red-500">Us</span></h1>
                        <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta in neque dolores suscipit ea. Illum, enim tempore. Asperiores, debitis quidem.</p>
                    </div>
                    <div className="my-8">
                        <form action="" method="Post" className="space-y-4">
                            <input type="text" className="w-full border-2"  id="name" placeholder="Name" name="name" /><br/>
                            <div className="flex space-x-4">
                            <input type="email" className="border-2 flex-1" id="email" placeholder="Email" name="email" />
                            <input type="text" className="border-2 flex-1"  id="subject" placeholder="Subject" name="subject" />
                            </div>
                            <textarea placeholder="Your Message" className="w-full border-2 h-36"></textarea>
                            <div className="text-center"><Button text="Send Message" /></div>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default ContactUS