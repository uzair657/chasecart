import logo from "public/logo.png"
import Image from "next/image"
import Link from "next/link"
import {ShoppingBag} from "lucide-react"

export default function Header(){
    return(
        <div className=" flex justify-between py-6 px-28 items-center bg-black">
            <Image src={logo} alt="ChaseCart" className=" w-24"/>
            <ul className="flex gap-x-10 items-center" >
                <li className="text-white"> 
                <Link href={"/"}>Female</Link>
                </li>
                <li className="text-white"><Link href={"/"}>Male</Link></li>
                <li className="text-white"><Link href={"/"}>Kids</Link></li>
                <li className="text-white"> <Link href={"/"}>All Products</Link></li>
            </ul>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer">
                <ShoppingBag/>
            </div>
        </div>
    )
}