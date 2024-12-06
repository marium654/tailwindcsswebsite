import Image from "next/image"


function Skill(){
    return(
        <main className="w-full h-full md:h-[400px] bg-white flex justify-center items-start mt-20">
            <div className="w-full md:w-[80%] flex flex-col justify-center items-center">
                {/* top */}
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-xl 
                    rounded-xl text-gray-500 mt-2">Skill</div>
                    <p className="mt-3 text-center text-xs md:text-lg">The skills,tools and technologies I am really good at:</p>
                </div>
                {/* bottom */}
                <div className=" w-full md:w-[55%] flex flex-wrap justify-center items-center gap-4 mt-10">
                    {/* box1 */}
                    <div>
                    <Image src={"/typescript.jpg"}
                    width={100}
                    height={100}
                     className="w-[70px]  md:w-[95px]"
                    alt="typescript"></Image>
                    </div>
                    {/* box2 */}
                    <div>
                    <Image src={"/javascript.jpg"}
                    width={100}
                    height={200}
                        className="w-[70px]  md:w-[90px]"
                    alt="javascript"></Image>
                    </div>
                    {/* box3 */}
                    <div>
                    <Image src={"/next.jpg"}
                    width={100}
                    height={200}
                      className="w-[70px]  md:w-[90px]"
                    alt="next"></Image>
                    </div>
                    {/* box4 */}
                    <div>
                    <Image src={"/react.jpg"}
                    width={100}
                    height={200}
                        className="w-[70px]  md:w-[90px]"
                    alt="react"></Image>
                    </div>
                    {/* box5 */}
                    <div>
                    <Image src={"/node.jpg"}
                    width={100}
                    height={200}
                      className="w-[70px]  md:w-[90px]"
                    alt="node"></Image>
                    </div>
                    {/* box6 */}
                    <div>
                    <Image src={"/nest.jpg"}
                    width={100}
                    height={200}
                       className="w-[70px]  md:w-[90px]"
                    alt="nest"></Image>
                    </div>
                    {/* box7 */}
                    <div>
                    <Image src={"/tailwindcss.jpg"}
                    width={100}
                    height={200}
                        className="w-[70px]  md:w-[90px]"
                    alt="tailwindcss"></Image>
                    </div>
                    {/* box8 */}
                    <div>
                    <Image src={"/storybook.jpg"}
                    width={100}
                    height={200}
                      className="w-[70px]  md:w-[90px]"
                    alt="storybook"></Image>
                    </div>
                    
                     {/* box1 */}
                     <div>
                    <Image src={"/git.jpg"}
                    width={100}
                    height={200}
                    className="w-[70px]  md:w-[90px]" 
                    alt="git"></Image>
                    </div>
                    {/* box2 */}
                    <div>
                    <Image src={"/figma.jpg"}
                    width={100}
                    height={200}
                      className="w-[70px]  md:w-[90px]"
                    alt="figma"></Image>
                    </div>
                    {/* box3 */}
                    <div>
                    <Image src={"/express.jpg"}
                    width={100}
                    height={200}
                      className="w-[70px]  md:w-[90px]"
                    alt="express"></Image>
                    </div>
                    {/* box4 */}
                    <div>
                    <Image src={"/cypress.jpg"}
                    width={100}
                    height={200}
                      className="w-[70px]  md:w-[90px]"
                    alt="cypress"></Image>
                    </div>
                    {/* box5 */}
                    <div>
                    <Image src={"/sass.jpg"}
                    width={100}
                    height={200}
                    className="w-[70px]  md:w-[90px]"
                    alt="sass.jpg"></Image>
                    </div>
                    {/* box6 */}
                    <div>
                    <Image src={"/postgrsql.jpg"}
                    width={100}
                    height={200}
                       className="w-[70px] md:w-[90px]"
                    alt="postgrsql"></Image>
                    </div>
                    

                </div>
            </div>
        </main>
    )
}
export default Skill