"use client";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";



const HistoryCard = ({
  display_text,
  handleDeleteButton,
  temp
}:any) => {
  return (
    <div className="text-primary bg-white hover:bg-[#add03f] hover:text-white p-2 my-3 rounded-lg md:max-w-[95%] mx-auto overflow-hidden">
      <div className="flex justify-between w-full">
        <div className="max-w-[100%]">
          <h2 className="md:text-base">{display_text}</h2>

        </div>
        <div className="flex md:text-2xl items-center">
          <div></div>
          <AiOutlineDelete
            className="hover:bg-primary hover:text-white rounded-md"
            onClick={handleDeleteButton}
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