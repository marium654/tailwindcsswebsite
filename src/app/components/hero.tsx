import { Dot, Github, Instagram, Linkedin, LocateIcon, LocateOffIcon, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



function Hero(){
  return(
    <main className="w-full h-full md:h-[400px] flex justify-center items-center bg-white ">
        <div className="flex w-full md:w-[80%] h-full flex-col md:flex-row justify-between items-start pt-6">
            {/* left */}
            <div className="w-full md:w-[40%] flex justify-center items-center">
               <Image src={"/picture.jpg"}
               width={100}
               height={100}
               alt="hero"
               className="w-[300px] h-[300px]"
               ></Image>
            </div>
            {/* right */}
            <div className="w-full p-5 md:w-[60%] space-y-5">
            <h1 className="text-3xl">Hi, I'm Marium Anwar 👋</h1>
            <p>A Web Developer with a passion for creating clean, responsive websites. I specialize in front-end development, building intuitive user interfaces, 
              and ensuring seamless user experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I craft websites that are both functional
               and visually appealing. Let's bring your digital ideas to life!"</p>
             <div>
                <p className="flex"><MapPin/>Karachi, Pakistan</p>
                <p className="flex"><Dot className="text-green-500"/>Available for new projects</p>
             </div>
             <div className="flex space-x-3">
             <Link href={"https//github.com/marium-anwer"}><Github className="text-gray-800"/> </Link>
             <Link href={"https//linkdein.com/marium-anwer"}><Linkedin className="text-blue-500"/> </Link>
             <Link href={"https//Instagram.com/marium-anwer"}><Instagram className="text-pink-500"/></Link>
           
             </div>
            </div>
        </div>
    </main>
  )
}
export default  Hero