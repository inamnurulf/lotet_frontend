'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, KeyboardEvent } from "react";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleChange = () => {

  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>{
    if(e.key == 'Enter'){
      router.push(`/seminar/search/${searchRef.current?.value}`)
    } 
  }

  return (
    <div className="container mt-20">
      <div className="flex justify-start space-x-4 bg-gray-100 border-gray-300 rounded-lg px-4 shadow-md">
        <div className="flex items-center bg-gray-100">
          <Image 
            src="/search.svg"
            alt="Search"
            width={32}
            height={32}
          />
        </div>
        <div className="flex items-center w-full">
          <input
            type="text"
            ref={searchRef}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="flex items-center w-full h-10 text-sm bg-gray-100 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
