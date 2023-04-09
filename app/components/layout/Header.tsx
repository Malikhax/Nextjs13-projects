"use client"
import Wrapper from "../shared/Wrapper";
import { useState } from "react";
import Link from "next/link";
import menuOpenImg from "../../assets/images/menuopen.jpg"
import menuCloseImg from "../../assets/images/close.png"
import Image from "next/image";

const Header = ()=>{
    const [nav,setNav] = useState(true)
    const handleNav =()=>{
        setNav(!nav)
    }
    return (
        <header>
            <Wrapper>
                <div className='flex justify-between items-center py-6'>
                    <div className='text-4xl font-bold'>
                    Osama
                    </div>
                    <div className="hidden md:block">
                        <ul className='flex space-x-4 font-semibold cursor-pointer'>
                            <li className="hover:text-red-500">Home</li>
                            <li className="hover:text-red-500">About</li>
                            <li className="hover:text-red-500">Service</li>
                            <li className="hover:text-red-500">Portfolio</li>
                            <li className="hover:text-red-500">Resume</li>
                            <li className="hover:text-red-500">Contact</li>
                        </ul>
                    </div>
                    <div onClick={handleNav} className="relative md:hidden">
                        {
                            !nav ? <><Image src={menuCloseImg} alt="menu" width={25}/> </> : <><Image src={menuOpenImg} alt="menu" width={20}/> </>
                        }
                    </div>
                </div>
            </Wrapper>
            <div className={!nav ? 'absolute right-0 bg-black w-[60%] text-center font-semibold ease-in-out duration-500 md:hidden' : 'fixed hidden'}>
                    <ul className="space-y-6 text-2xl">
                        <li className="hover:text-red-500 cursor-pointer  border-b-[1px] border-red-900 pt-6"><Link href={"#"}></Link>Home</li>
                        <li className="hover:text-red-500 cursor-pointer  border-b-[1px] border-red-900"><Link href={"#"}></Link>About</li>
                        <li className="hover:text-red-500 cursor-pointer  border-b-[1px] border-red-900"><Link href={"#"}></Link>Service</li>
                        <li className="hover:text-red-500 cursor-pointer  border-b-[1px] border-red-900"><Link href={"#"}></Link>Portfolio</li>
                        <li className="hover:text-red-500 cursor-pointer  border-b-[1px] border-red-900"><Link href={"#"}></Link>Resume</li>
                        <li className="hover:text-red-500 cursor-pointer  border-b-[1px] border-red-900"><Link href={"#"}></Link>Contact</li>
                    </ul>
            </div>
        </header>
        
    )
}
export default Header;