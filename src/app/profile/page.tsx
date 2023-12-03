"use client";
import Navbar from "@/components/navbar"
import HistoryCard from "@/components/historycard";

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
        <div className="flex flex-row w-1/5 bg-green-500">
          {/* Content for the left part */}
          <div className="flex items-end rounded-xl mx-auto h-[40px] w-[70%] bg-red-950 ">
            
          </div>
          <div className="flex items-end rounded-xl mx-auto h-[40px] w-[70%] bg-red-950 ">
            
          </div>
         
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