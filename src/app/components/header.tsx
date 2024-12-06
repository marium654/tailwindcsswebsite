import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"


function Header (){
    return(
     <header className="w-full h-10 flex justify-between items-center  bg-white">
        {/* logo */}
        <div>
            <h1 className="text-3xl font-bold pl-3">{"<MA/>"}</h1>
        </div>
        {/* Nav liks */}
        <ul className="hidden md:block">
            <li className="space-x-5 pr-4">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
              <Link href={"/projects"}>Project</Link>
              <button className="bg-gray-600  hover:bg-gray-950 text-white py-2 px-4 rounded-xl font-bold">Daownload CV</button>
            </li>
        </ul>
        
        <Sheet>
            <SheetTrigger className="text-xl md:hidden">
             <Menu/>
           </SheetTrigger>
            <SheetContent>
          <SheetHeader>
           <SheetTitle>Marium Anwar</SheetTitle>
          <SheetDescription>
           <ul>
            <li className="flex flex-col gap-y-4">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
              <Link href={"/projects"}>Project</Link>
              <button className="bg-gray-800 text-white py-2 px-4 rounded-lg font-bold">Daownload CV</button>
            </li>
        </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet> 

     </header>
    )
  }
  export default Header