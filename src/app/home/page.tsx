import Carousell from "@/components/carousell";
import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <section className="flex items-center flex-col overflow-hidden bg-primary min-h-screen">
      <Navbar defaultform={false} />
      <div className="md:flex">
        <div className="md:w-[50vw] flex flex-col justify-center items-center min-h-screen">
          <div className="">
            <div className="flex items-end">
            <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">Pengen</div>
            <div className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold px-3 text-secondary">CUMLAUDE</div>
            </div>
            <div className="text-white text-xl py-3">Cari KP dulu !</div>
          </div>
        </div>
        <div className="bg-secondary w-screen md:w-[50vw] min-h-screen flex items-center">
          <div className="mx-auto">
            <div className="text-white text-2xl px-7 py-2 font-semibold">
              Whats New?
            </div>
            <Carousell />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
