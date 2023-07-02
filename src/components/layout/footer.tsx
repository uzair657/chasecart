import React from "react";
import logo from "public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";

const footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100 mt-10 bg-gray-50">
      <div className="container  px-12 flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Left Logo and company info */}
        <div className="lg:w-1/3 flex-col items-start justify-center  lg:justify-start">
          <Link href={"/"}>
            <Image src={logo} alt="ChaseCart" className=" w-32" />
          </Link>
          <p className="my-4">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex justify-start space-x-3 ">
            <Link
              rel="noopener noreferrer"
              href="/"
              title="Facebook"
              className="flex items-center p-2 bg-slate-200 rounded-md"
            >
              <GrFacebookOption size={20} />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/"
              title="Twitter"
              className="flex items-center p-2 bg-slate-200 rounded-md"
            >
              <GrTwitter size={20} />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/"
              title="Instagram"
              className="flex items-center p-2 bg-slate-200 rounded-md "
            >
              <GrLinkedinOption size={20} />
            </Link>
          </div>
        </div>
        {/* Right all pages links and social media */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50 font-bold">
              Category
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href={"/category/male"}>Male</Link>
              </li>
              <li>
                <Link href={"/category/female"}>Female</Link>
              </li>
              <li>
                <Link href={"/category/men"}>Kids</Link>
              </li>
              <li>
                <Link href={"/products"}>All Products</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50 font-bold">
              Support
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href={"/"}>Support Carrer</Link>
              </li>
              <li>
                <Link href={"/"}>24h Service</Link>
              </li>
              <li>
                <Link href={"/"}>Quick Chat</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50 font-bold">Contact</h3>
            <ul className="space-y-1">
              <li>
                <Link href={"/"}>Whatsapp</Link>
              </li>
              <li>
                <Link href={"/"}>Support 24h</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2023{" "}
        <Link
          href={"https://github.com/uzair657"}
          className="hover:text-sky-500 cursor-pointer"
        >
          Uzair Ahmad
        </Link>{" "}
        . All rights reserved.
      </div>
    </footer>
  );
};

export default footer;
