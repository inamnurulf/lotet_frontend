"use client"
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  },[]);
  return (
    <section className="!max-w-screen">
      <a href="/home" className="min-w-screen min-h-screen bg-primary justify-center items-center flex flex-col backgroundsection cursor-default">
        <div data-aos="fade-right" className="w-96 h-52 text-center text-white text-4xl font-bold">
          <Image
             src={"./Logo-wht.svg"}
             width={155}
             alt="Logo"
             height={64}
             className="w-80 h-44"
          />
          <div
          className="font-light animate-bounce text-sm cursor-pointer m-11">(Click to Explore)</div>
          </div>
        {/* <div className="mt-8 transform transition-transform hover:scale-105 bg-secondary px-5 py-2 rounded-xl hover:bg-white text-white hover:text-secondary">
          <a
            href="/home"
            className="text-xl font-semibold"
          >
            Start
          </a>
        </div> */}
      </a>
    </section>
    
  )
}
