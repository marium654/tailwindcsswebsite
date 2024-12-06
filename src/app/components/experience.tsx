
import Image from "next/image"


function Experience(){
    return(
        <main className="w-full h-full md:h-full flex justify-center items-start mt-20">
            <div className="w-full md:w-[80%] flex flex-col justify-center items-center">
                {/* top */}
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gray-200 w-[120px] h-10 flex justify-center items-center text-xl 
                    rounded-xl text-gray-500 mt-2">Experience</div>
                    <p className="mt-3 text-center text-xs md:text-lg">Here is a quick summary of my most recent experiences:</p>
                </div>
                {/* bottom */}
                <div className="bg-white w-full md:w-[55%] flex flex-wrap justify-center items-center gap-4 mt-10 p-5 rounded-xl shadow-lg">
                    
                   {/* top */}
                   <div className="flex flex-col md:flex-row justify-between w-full">
                       <h2 className="text-xl font-bold text-green-400">UPWORK</h2>
                       <h2 className="text-xl font-bold">Frontend Developer</h2>
                       <p>2024-Present</p>
                   </div>
                    {/* bottom */}
                    <div className="w-full md:w-[70%]">
                        <ul>
                            <li className="list-disc md:ml-20">Developed and optimized responsiveweb application using Next.js, Tailwind 
                            CSS, and React.js,ensuring seamless functionality across mobile and desktop devices.</li>
                                 <li className="list-disc md:ml-20 mt-3">They create intuitive, engaging interfaces, ensuring a smooth user experience and increasing satisfaction. </li>
                                 <li className="list-disc md:ml-20 mt-3"> They work closely with designers and back-end developers, turning designs into functional products 
                                    and solving technical challenges like performance and accessibility. </li>
                        </ul>
                    </div>
                </div>
                {/* div 2 */}

                <div className="bg-white w-full md:w-[55%] flex flex-wrap justify-center items-center gap-4 mt-10 p-5 rounded-xl shadow-lg mb-20">
                    
                   {/* top */}
                   <div className="flex flex-col md:flex-row justify-between w-full">
                       <h2 className="text-xl font-bold text-green-400">UPWORK</h2>
                       <h2 className="text-xl font-bold">Frontend Developer</h2>
                       <p>2024-Present</p>
                   </div>
                    {/* bottom */}
                    <div className="w-full md:w-[70%]">
                        <ul>
                            <li className="list-disc md:ml-20">Developed and optimized responsiveweb application using Next.js, Tailwind 
                                CSS, and React.js,ensuring seamless functionality across mobile and desktop devices.</li>
                                 <li className="list-disc md:ml-20 mt-3">Proficient in HTML, CSS, JavaScript, and modern frameworks like React or Vue.js, building responsive, dynamic websites. </li>
                                 <li className="list-disc md:ml-20 mt-3">They create intuitive, engaging interfaces, ensuring a smooth user experience and increasing satisfaction. </li>
                        </ul>
                    </div>
                    </div>
            </div>
        </main>
    )
}
export default Experience