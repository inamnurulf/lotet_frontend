// components/SearchBar.tsx
import Image from "next/image";
import { eventNames } from "process";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState("")
  var searchTerm = ""
  function handleChange() {

  }
  return  (
    <div className="container mx-auto mt-20">
      <div className="hug items-center justify-center bg-gray-100">
        <div className="mr-4 bg-gray-100">
          <Image 
          src = {"./search.svg"}
          alt = "Search"
          width={48}
          height={48}
          />
        </div>
        <div className="">
          <input
            type="text"
            // value={searchTerm}
            // onChange={handleChange}
            className="w-full h-10 px-4 pr-10 text-sm bg-gray-100 border border-gray-300 rounded-lg lg:w-80 focus:outline-none"
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
