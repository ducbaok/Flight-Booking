import Link from "next/link"
import { poppins } from "./component/asset/font"
import { BsFacebook } from "react-icons/bs"
import { BsTwitterX } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { MdFlight } from "react-icons/md";
export default function Footer() {
    return (
        <div className="mt-24 bg-blue-600 w-full h-[250px] flex-center">
            <div className=" flex justify-between w-[1300px] py-12 h-full">
                <div className="flex items-start justify-center">
                    <MdFlight className="text-4xl text-white" />
                    <h1 className="text-3xl font-serif font-bold text-white ">Name</h1>
                </div>
                <div className="flex flex-row gap-10 justify-center items-start">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className={`${poppins.className} text-xl  font-semibold text-white`}>Help</h1>
                        <Link className="text-white" href="/">FAQ</Link>
                        <Link className="text-white" href="/">Customer Service</Link>
                        <Link className="text-white" href="/">How to Guides</Link>
                        <Link className="text-white" href="/">Contact Us</Link>
                        
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className={`${poppins.className} text-xl  font-semibold text-white`}>Get in touch</h3>
                        <div className="flex gap-3">
                            <BsFacebook className="w-[40px] h-[40px] text-white"></BsFacebook>
                            <BsTwitterX className="w-[40px] h-[40px] text-white"></BsTwitterX>
                            <BsInstagram className="w-[40px] h-[40px] text-white"></BsInstagram>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}