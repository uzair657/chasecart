"use client";
import logo from "public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function Header() {
  return (
    <Popover className="flex cursor-pointer bg-white justify-between py-6 px-20 items-center  sticky top-0 z-50  shadow">
      <Link href={"/"}>
        <Image src={logo} alt="ChaseCart" className=" w-32" />
      </Link>
      <div className="">
        <div className="hidden sm:flex gap-x-10 items-center">
          <Link href={"/category/female"} className="hover:text-sky-500">
            Female
          </Link>
          <Link href={"/category/male"} className="hover:text-sky-500">
            Male
          </Link>
          <Link href={"/category/kids"} className="hover:text-sky-500">
            Kids
          </Link>
          <Link href={"/products"} className="hover:text-sky-500">
            All Products
          </Link>
        </div>
      </div>
      {/* Hamburger Icon */}
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button
          className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-400
                hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      <Transition
        as={Fragment}
        enter="duration-500 ease-out"
        enterFrom="scale-95 opacity-0"
        enterTo="opacity-100 scale-100"
        leave="duration-300 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="scale-95 opacity-0"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              {/* Logo  & Icon Section*/}
              <div className="flex justify-between">
                <Link href={"/"}>
                  <Image src={logo} alt="ChaseCart" className=" w-24" />
                </Link>
                {/* Close Menu Icon */}
                <Popover.Button
                  className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-400
                    hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <div className="-mr-2">
                {/* Nav Menu */}
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      className="hover:text-sky-500 px-2"
                      href={"/category/female"}
                    >
                      Female
                    </Link>
                    <Link
                      className="  hover:text-sky-500 px-2"
                      href={"/category/male"}
                    >
                      Male
                    </Link>
                    <Link
                      className=" hover:text-sky-500 px-2"
                      href={"/category/kids"}
                    >
                      Kids
                    </Link>
                    <Link
                      className="hover:text-sky-500 px-2"
                      href={"/products"}
                    >
                      All Products
                    </Link>
                  </nav>
                  <div className="h-12 w-12  mt-4 rounded-full bg-gray-200 flex justify-center items-center relative hover:scale-110 duration-500 cursor-pointer">
                    <span className="absolute right-1 top-0 rounded-md bg-sky-500 h-5 w-5 text-white  text-center text-sm">
                      0
                    </span>
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      {/* Cart Section Desktop */}
      <div className="hidden sm:flex">
        <div className="h-12 w-12  rounded-full bg-gray-200 flex justify-center items-center relative hover:scale-110 duration-500 cursor-pointer">
          <span className="absolute right-1 top-0 rounded-md bg-sky-500 h-5 w-5 text-white  text-center text-sm">
            0
          </span>
          <ShoppingCart className="h-6 w-6" />
        </div>
      </div>
    </Popover>
  );
}
