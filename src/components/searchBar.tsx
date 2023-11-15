// components/SearchBar.tsx
"use client";
import Image from "next/image";
import { eventNames } from "process";
import { ChangeEvent, FormEvent, useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return  (
    <div className="container mx-4 mt-20">
      <div className="flex justify-start space-x-4 bg-gray-100 border-gray-300 rounded-lg px-4">
        <div className="flex items-center bg-gray-100">
          <Image 
          src = {"./search.svg"}
          alt = "Search"
          width={32}
          height={32}
          />
        </div>
        <div className="flex items-center w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className="flex items-center w-full h-10 text-sm bg-gray-100 focus:outline-none"
            placeholder="Search"
          />
        </div>
        {/* {searchTerm && (
          <div className="mt-10 text-2xl">Search term: {searchTerm}</div>
        )} */}
      </div>
    </div>
  );
};

export default SearchBar;
