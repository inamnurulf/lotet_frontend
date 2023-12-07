"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import Logo from "../../public/Logo.svg"

const Navbar = ({ defaultform = true }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isFaded, setIsFaded] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const { logout, token, name } = useAuth();

  const fadeEffect = {
    opacity: isFaded ? 1 : 0,
    transition: "opacity 0.1s ease-in-out",
  };

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout=()=>{
    logout()
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (defaultform === true) {
      setIsFaded(true);
    } else {
      setIsFaded(scrollY >= 40);
    }
  }, [scrollY]);

  return (
    <div className="absolute w-0 self-start h-full z-01">
      {defaultform ? null : <div className="w-screen md:h-[5vh]"></div>}
      <div className="sticky top-0 w-screen ">
        <div
          className=" absolute w-screen h-[70px] top-0 bg-white"
          style={fadeEffect}
        ></div>
        <div className={`relative bg-white w-screen ${defaultform ? " w-full " : " md:w-[90vw] md:rounded-full "}  mx-auto p-2 h-[70px]  top-0 flex justify-between items-center`}>
          <div>
            <Image
              src={Logo}
              width={155}
              alt="Logo"
              height={64}
              className="max-h-[40px] md:max-h-[50px] w-[150px]"
            />
          </div>
          <div className="justify-between hidden md:flex">
            <Link
              href="/home"
              className="lg:text-xl text-primary mx-5 hover:bg-primary hover:text-white lg:px-3 duration-200  rounded-xl font-semibold"
            >
              Home
            </Link>
            <Link
              href="/kerjapraktik"
              className="lg:text-xl text-primary mx-5 hover:bg-primary hover:text-white lg:px-3 duration-200 rounded-xl font-semibold"
            >
              Kerja Praktik
            </Link>
            <Link
              href="/seminar"
              className="lg:text-xl text-primary mx-5 hover:bg-primary hover:text-white lg:px-3 duration-200 rounded-xl font-semibold"
            >
              Seminar
            </Link>
          </div>
          {token ? <Link
            href="/profile"
            className="w-[150px] text-primary text-center justify-center hidden md:flex "
          >
            <div className="hover:bg-primary hover:text-white px-3 duration-200 rounded-xl font-semibold lg:text-xl">
              Profile
            </div>
          </Link>
            :
            <Link
              href="/auth/login"
              className="w-[150px] text-primary text-center justify-center hidden md:flex "
            >
              <div className="hover:bg-primary hover:text-white px-3 duration-200 rounded-xl font-semibold lg:text-xl">
                Login
              </div>
            </Link>}
          <div className="text-3xl md:hidden px-3 ">
            {isOpen ? (
              <HiOutlineMenuAlt3 onClick={handleNavbar} />
            ) : (
              <AiOutlineClose onClick={handleNavbar} />
            )}
          </div>
        </div>
        {!isOpen ? (
          <div className="w-full items-center bg-white">
            <div className=" z-[100] w-full md:w-[90vw] text-right md:hidden flex justify-center flex-col items-center p-3">
              <a
                href="/home"
                className="mx-3 hover:bg-primary hover:text-white w-full p-3 "
              >
                Home
              </a>
              <a
                href="/kerjapraktik"
                className="mx-3 hover:bg-primary hover:text-white w-full p-3 "
              >
                Kerja Praktik
              </a>
              <a
                href="/seminar"
                className="mx-3 hover:bg-primary hover:text-white w-full p-3 "
              >
                Seminar
              </a>
              {token ?
                <a
                  className="mx-3 hover:bg-primary hover:text-white w-full p-3 "
                  href="/profile"
                >
                  Logout
                </a>
                :
                <a
                  href="/auth/login"
                  className="mx-3 hover:bg-primary hover:text-white w-full p-3 "
                >
                  Login
                </a>}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
