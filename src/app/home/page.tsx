"use client";
import Carousell from "@/components/carousell";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useRef, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const typedRef = useRef<any>(null);
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  useEffect(() => {
    const options = {
      strings: ["CUMLAUDE", "Lulus Aja !"],
      typeSpeed: 100,
      loop: true,
    };

    typedRef.current = new Typed("#animated-text", options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);
  return (
    <section className="flex items-center flex-col bg-primary max-h-screen">
      <Navbar defaultform={false} />
      <div className="md:flex">
        <div className="md:w-[50vw] flex flex-col justify-center items-start min-h-screen">
          <div className="left-[15%] relative" >
            <div className="flex items-end" data-aos="fade-right">
              <div className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                Pengen
              </div>
              <div className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold px-3 text-secondary">
                <span id="animated-text" className="text-secondary"></span>
              </div>
            </div>
            <div className="text-white text-xl py-3" data-aos="fade-left">
              Tetep kudu cari KP dulu !
            </div>
          </div>
          <div className="w-full text-center absolute" data-aos="fade-right">
            <FaArrowDown className="text-white animate-bounce md:hidden mx-auto mt-[120vw]"/>
          </div>
        </div>
        <div className="bg-secondary w-screen md:w-[50vw] min-h-screen flex items-center" id="whatsnew">
          <div className="mx-auto">
            <div className="text-white text-2xl px-7 py-2 font-semibold">
              Whats New?
            </div>
            <Carousell />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
