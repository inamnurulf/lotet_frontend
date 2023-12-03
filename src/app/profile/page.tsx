"use client";
import Navbar from "@/components/navbar"
import HistoryCard from "@/components/historycard";
import { IoLogOutOutline } from "react-icons/io5";

const Profile = () => {
    return (
        <div className="h-screen flex flex-col">
      {/* Top part */}
      <div className="h-[70px] bg-blue-500">
        {/* Content for the top part */}
        <Navbar/>
      </div>

      {/* Bottom part */}
      <div className="flex flex-1">
        {/* Left part */}
        <div className=" relative w-1/5 bg-[#0D6FBC]">
          {/* Content for the left part */}
          <div className="relative inset-x-0 top-14 mx-auto h-[75px] w-[70%] bg-black text-center">
            <div className="relative top-0 h-[35px] w-full  bg-black ">
                <div className="text-lg pt-1 font-bold text-white">NamaNamaNama</div>
            </div>
            <div className="flex bottom-0 h-[35px] w-full  bg-black">
                <div className="justify-items-center text-sm font-bold text-white">NimNimNim</div>

            </div>
          </div>
          
          <div className="absolute inset-x-0 bottom-[80px] rounded-xl mx-auto h-[40px] w-[70%] bg-[#0D6FBC] ">

          </div>
          <button className="absolute inset-x-0 bottom-6 rounded-xl mx-auto h-[40px] w-[60%] bg-[#0D6FBC] flex flex-row hover:bg-[#529cd5] ">
            <IoLogOutOutline 
                size='30px'
                className='ml-2 mt-1.5'
            />
            <text className="flex-1 mt-1.5 mx-2 font-bold md:text-xl">Logout</text>
          
          </button>
        </div>

        {/* Right part */}
        <div className="flex flex-col flex-1">
          {/* Right-top */}
          <div className="flex-1 bg-primary">
            {/* Content for the right-top */}
            <h1 className="mx-20 my-3 font-bold text-white">Seminar</h1>
            <div className="rounded-xl w-[85%] h-[70%] shadow-md mx-auto">
                <div className="bg-primary rounded-md mx-auto p-3 max-w-full h-[31vh] overflow-y-auto scrollbar">
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                </div>
            </div>
                <div className="flex justify-end mx-8">
                    <button className="mx-11 mt-1 w-[50px] h-[25px] bg-[#add03f] rounded-md  hover:bg-[#76970f]">
                        +add
                    </button>
                </div>
          </div>

          {/* Right-bottom */}
          <div className="flex-1 bg-primary">
            {/* Content for the right-bottom */}
            <h1 className="mx-20 my-3 font-bold text-white">Kerja Praktik</h1>
            <div className="rounded-xl w-[85%] h-[70%] shadow-md mx-auto">
                <div className="bg-primary rounded-md mx-auto p-3 max-w-full h-[31vh] overflow-y-auto scrollbar">
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                </div>
            </div>
                <div className="flex justify-end mx-8">
                    <button className="mx-11 mt-1 w-[50px] h-[25px] bg-[#add03f] rounded-md  hover:bg-[#76970f]">
                        +add
                    </button>
                </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Profile