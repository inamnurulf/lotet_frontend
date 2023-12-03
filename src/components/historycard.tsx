"use client";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";



const HistoryCard : React.FC = () => {
  return (
    <div className="text-primary bg-white p-4 my-3 rounded-lg md:max-w-[95%] mx-auto  overflow-hidden">
      <div className="flex justify-between w-full">
        <div className="max-w-[100%]">
          <h2 className="md:text-xl font-bold"></h2>

        </div>
        <div className="flex md:text-3xl items-center">
          <div></div>
          <AiOutlineDelete
            className="hover:bg-primary hover:text-white rounded-md"
            onClick={() =>console.log('Delete Button Clicked') }
          />
          <BiEdit
            className="hover:bg-primary hover:text-white rounded-md"
            onClick={() => {console.log('Edit Button Clicked')}}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;