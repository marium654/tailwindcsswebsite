import Image from "next/image"
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsCopy } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

function Footer(){
    return(
        <main className="w-full h-full md:h-[400px] bg-white flex justify-center items-start mt-20 pb-10">
            <div className="w-full md:w-[80%] flex flex-col justify-center items-center">
                {/* top */}
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gray-200 w-[120px] h-10 flex justify-center items-center text-xl 
                    rounded-xl text-gray-500 mt-2">Get in Touch</div>
                    <p className="mt-3 text-center text-xs md:text-lg">What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply
                        want to connect.</p>
                </div>
              <div className="mt-4 space-y-4">
                <h1 className="flex md:text-3xl justify-center items-center font-bold"> <CiMail className="mr-3 md:text-4xl"/>ABC@gmail.com < BsCopy className="ml-3 cursor-pointer"/></h1>
                <h2 className="flex md:text-3xl justify-center items-center"> <BsFillTelephoneFill className="mr-3 md:text-4xl"/>032326578022 < BsCopy className="ml-3 cursor-pointer"/></h2>
              </div>
              <div>
                <p className="mt-2">You may also find me on these platforms!</p>
                
                {/* social  */}
                <div className="flex justify-evenly items-center mt-2">
                <VscGithubInverted className="text-2xl"/>
                       <FaLinkedin className="text-2xl text-blue-500"/>
                       <FaFacebook className="text-2xl text-blue-500"/>
                </div>
              </div>
            </div>
        </main>
    )
}
export default Footer