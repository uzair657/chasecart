import logo from "public/logo.png"
import Image from "next/image"
import Link from "next/link"
import {ShoppingCart} from "lucide-react"


export default function Header(){
    return(
        
<nav className="cursor-pointer py-4 px-20 items-center bg-white sticky top-0 z-50  shadow dark:bg-gray-900 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href={"/"}>
         <Image src={logo} alt="ChaseCart" className=" w-24"/>
    </Link>
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <Link href={"/category/female"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Female</Link>
        </li>
        <li>
        <Link href={"/category/male"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Male</Link>
        </li>
        <li>
        <Link href={"/category/kids"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Kids</Link>
        </li>
        <li>
        <Link href={"/products"}className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-500 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >All Products</Link>
        </li>
        <li className="md: hidden">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex justify-center items-center relative">
         <span className="absolute right-1 top-0 rounded-md bg-sky-500 h-5 w-5 text-white  text-center text-sm">
           0
         </span>
         <ShoppingCart className="h-6 w-6" />
       </div>
        </li>
      </ul>
    </div>
    <div className="h-12 w-12  rounded-full bg-gray-200 flex justify-center items-center relative hover:scale-110 duration-500 cursor-pointer">
         <span className="absolute right-1 top-0 rounded-md bg-sky-500 h-5 w-5 text-white  text-center text-sm">
           0
         </span>
         <ShoppingCart className="h-6 w-6" />
       </div>
  </div>
</nav>

    //     <div className=" flex cursor-pointer justify-between py-6 px-28 items-center bg-black sticky top-0 z-50  shadow">
    //         <Link href={"/"}>
    //         <Image src={logo} alt="ChaseCart" className=" w-24"/>
    //         </Link>
            
    //         <ul className="flex gap-x-10 items-center" >
    //             <li className="text-white"> 
                
    //             <Link href={"/category/female"}>Female</Link>
    //             </li>
    //             <li className="text-white">
    //                 <Link href={"/category/male"} >Male</Link>
    //                 </li>
    //             <li className="text-white">
    //                 <Link href={"/category/kids"}>Kids</Link>
    //             </li>
    //             <li className="text-white"> 
    //             <Link href={"/category/allproducts"}>All Products</Link>
    //             </li>
    //         </ul>
    //         <div className="h-12 w-12 rounded-full bg-gray-200 flex justify-center items-center relative">
    //     <span className="absolute right-1 top-0 rounded-md bg-sky-500 h-5 w-5 text-white  text-center text-sm">
    //       0
    //     </span>
    //     <ShoppingCart className="h-6 w-6" />
    //   </div>
    //     </div>
    )
}
