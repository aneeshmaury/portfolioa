// "use client";
// import { useState } from "react";
import Link from "next/link";

//local imports
import MobileView from "./mobileView";
// import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import ThemeSwitcher2 from "@/app/components/ThemeSwitcher2";

//icons
import { GoHome } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiPantsThin } from "react-icons/pi";

function Navbar() {
  return (
    <>
      <nav className=" sticky top-0  z-50 bg-slate-100 pt-2 pb-2">
        {/* Navbar container start */}
        <div className="flex justify-evenly">
          {/* logo Section */}
          <Link href={"#home"}>
            <div
              className="hidden md:flex lg:flex cursor-pointer pb-2
              border-b-2 border-transparent hover:border-blue-500 
              transition duration-300 ease-in-out
              "
            >
              <PiPantsThin size={20} />
              Shayaliza
            </div>
          </Link>

          {/* Menu section - shown on md and lg, hidden on sm */}
          <div className="hidden md:flex lg:flex space-x-5 list-none ">
            <Link href={"#home"}>
              <li
                className="pl-4 pr-4 flex cursor-pointer pb-2
                border-b-2 border-transparent hover:border-blue-500 
                transition duration-300 ease-in-out"
              >
                <GoHome className="" size={20} />
                Home
              </li>
            </Link>
            <Link href={"#skills"}>
              <li
                className="pl-4 pr-4 flex cursor-pointer pb-2
                border-b-2 border-transparent hover:border-blue-500 
                transition duration-300 ease-in-out "
              >
                Skills
              </li>
            </Link>
            <Link href={"#projects"}>
              <li
                className="pl-4 pr-4 cursor-pointer pb-2
                border-b-2 border-transparent hover:border-blue-500 
                transition duration-300 ease-in-out"
              >
                Projects
              </li>
            </Link>
            <li className="pl-4 pr-4 flex cursor-pointer">
              <MdOutlineLocalPhone size={20} />
              Contact
            </li>
          </div>

          {/* Buttons section - shown on md and lg, hidden on sm */}
          <div className="hidden md:flex lg:flex space-x-2 list-none">
            <ThemeSwitcher2 />
          </div>
        </div>
        {/* Navbar container end */}

        {/* MobileView component - shown on sm, hidden on md and lg */}
        <div className="md:hidden lg:hidden">
          <MobileView />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
