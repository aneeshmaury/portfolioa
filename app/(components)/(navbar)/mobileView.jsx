"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { PiPantsThin } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
import ThemeSwitcher2 from "@/app/components/ThemeSwitcher2";

function MobileView() {
  //use states
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="mr-4 ml-4 mt-2">
        <div className="flex justify-between">
          {/* logo Section */}
          <Link
            href={"/"}
            // className={`${route === "/" ? "text-red-500" : "text-pink-300"}`}
          >
            <div
              className="flex cursor-pointer"
              onClick={() => {
                closeMenu();
              }}
            >
              <PiPantsThin size={20} />
              PantParade
            </div>
          </Link>
          <div className="" onClick={toggleMenu}>
            {menuOpen ? (
              <>
                <RxCross1 className="ml-auto cursor-pointer" />
                <div className="block list-none ">
                  <Link
                    href={"/home"}
                    // className={`${
                    //   route === "/home" ? "text-red-500" : "text-pink-300"
                    // }`}
                  >
                    <li
                      className="flex cursor-pointer"
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      <GoHome className="" size={20} />
                      Home
                    </li>
                  </Link>
                  <li className="cursor-pointer">About Us</li>
                  <li className=" cursor-pointer " y>
                    {/* <span className="flex"> */}
                    {/* {" "} */}
                    Category
                    {/* </span> */}
                  </li>
                  <li className="flex cursor-pointer">
                    <MdOutlineLocalPhone size={20} />
                    Contact
                  </li>
                  <li>
                    <ThemeSwitcher2 />
                  </li>
                </div>
              </>
            ) : (
              <GiHamburgerMenu size={20} className="cursor-pointer" />
            )}
          </div>
        </div>
        {/* Navbar container end */}
      </nav>
    </>
  );
}

export default MobileView;
