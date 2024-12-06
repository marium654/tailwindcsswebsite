import Image from "next/image"
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

function Work(){
    return(
        <main className="w-full h-full md:h-full flex justify-center items-start mb-12">
            <div className="w-full md:w-[80%] flex flex-col justify-center items-center">
                {/* top */}
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-xl 
                    rounded-xl text-gray-500 mt-2">Work</div>
                    <p className="mt-3 text-center text-xs md:text-lg">The skills,tools and technologies I am really good at:</p>
                </div>
               <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg">
                {/* left */}
                <div className="w-[100%] md:w-[40%]  flex justify-center items-center">
                   <Link href={"/http://localhost:3000/projects"}>
                   <Image src={"/e-commerceweb.jpg"}
                    width={100}
                    height={100}
                    className="w-[400px] rounded-xl"
                    alt="e-commerceweb"></Image>
                   </Link>
                </div>
                {/* right */}
                <div className="w-[100%] md:w-[70%] space-y-4 mt-4 md:mt-0">
                    <h1 className="text-2xl font-bold">E-Commerce Website</h1>
                    <p>A fast, responsive e-commerce site built with Next.js and Tailwind CSS,featuring
                        category browsing and cart management.Powered by PostgreSQL, TypeScript, and Express.js
                        for optimal performance.</p>
                        <div className="flex flex-wrap gap-x-3">
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm 
                    rounded-xl text-gray-500 mt-2">Typescript</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm 
                    rounded-xl text-gray-500 mt-2">Next.js</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm 
                    rounded-xl text-gray-500 mt-2">Tailwind</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm 
                    rounded-xl text-gray-500 mt-2">HTML</div>
                        </div>
                       <Link href={"/"}><FaExternalLinkAlt  className="mt-4"/></Link>
                </div>
                
               </div>
                       {/* box 2 */}
                       <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg">
                {/* left */}
                <div className="w-[100%] md:w-[40%]  flex justify-center items-center">
                   <Link href={"/http://localhost:3000/projects"}>
                   <Image src={"/e-commerceweb.jpg"}
                    width={100}
                    height={100}
                    className="w-[400px] rounded-xl"
                    alt="e-commerceweb"></Image>
                   </Link>
                </div>
                {/* right */}
                <div className="w-[100%] md:w-[70%] space-y-4 mt-4 md:mt-0">
                    <h1 className="text-2xl font-bold">E-Commerce Website</h1>
                    <p>A fast, responsive e-commerce site built with Next.js and Tailwind CSS,featuring
                        category browsing and cart management.Powered by PostgreSQL, TypeScript, and Express.js
                        for optimal performance.</p>
                        <div className="flex flex-wrap gap-x-3">
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm 
                    rounded-xl text-gray-500 mt-2">Typescript</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm 
                    rounded-xl text-gray-500 mt-2">Next.js</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm 
                    rounded-xl text-gray-500 mt-2">Tailwind</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm 
                    rounded-xl text-gray-500 mt-2">HTML</div>
                        </div>
                       <Link href={"/"}><FaExternalLinkAlt  className="mt-4"/></Link>
                </div>
                
               </div>
               
            </div>
        </main>
    )
}
export default Work