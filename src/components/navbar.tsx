"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isFaded, setIsFaded] = useState(false);

  const fadeEffect = {
    opacity: isFaded ? 1 : 0,
    transition: "opacity 0.1s ease-in-out",
  };

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
    setIsFaded(scrollY >= 40);
  }, [scrollY]);

  return (
    <>
      <div className="w-full bg-blue-300 h-[5vh]"></div>
      <div className="sticky top-0">
        <div
          className="bg-red-300 absolute w-full h-[70px] top-0"
          style={fadeEffect}
        ></div>
        <div className="relative w-[95vw] md:w-[90vw] mx-auto p-2 h-[70px] bg-red-300 rounded-full top-0 flex justify-between items-center">
            <div>
                <Image src={'./Logo.svg'} width={155} alt="Logo" height={64} className="max-h-[40px] md:max-h-[50px] w-[150px]"/>
            </div>
            <div className="flex justify-between">
                <div className="mx-3">Home</div>
                <div className="mx-3">Kerja Praktik</div>
                <div className="mx-3">Seminar</div>
            </div>
            <div className="w-[150px] text-center">
                Sign In 
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
