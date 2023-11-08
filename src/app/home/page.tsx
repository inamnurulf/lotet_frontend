import Carousell from "@/components/carousell";
import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <section className="flex items-center flex-col overflow-hidden">
      <Navbar defaultform={false} />
      <div className="h-[40vh] flex items-end">
        <Carousell />
      </div>
    </section>
  );
};

export default Home;
