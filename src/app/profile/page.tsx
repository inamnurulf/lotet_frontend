"use client";
import Navbar from "@/components/navbar"
import HistoryCard from "@/components/historycard";

const Profile = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-black h-[70px]">
                <Navbar></Navbar>
            </div>
            <div className="flex-1 grid grid-cols-12 ">
                {/* Container informasi profile (di kiri) */}
                <div className="col-span-3 bg-red-300 ">

                </div>

                {/* Container kanan isi list seminar & kp */}
                <div className="col-span-9 grid grid-rows-2">
                    <div className="flex flex-col items-center row-span-1 bg-secondary max-h-full ">
                        <div className="flex flex-col w-[85%] h-[55vh]">
                            <h1 className="text-2xl font-bold text-white my-3">Seminar</h1>
                            <div className="flex-1 bg-primary rounded-md p-3 w-full overflow-y-auto scrollbar">
                                <HistoryCard/>
                                <HistoryCard/>
                                <HistoryCard/>
                                <HistoryCard/>
                                <HistoryCard/>
                            </div>
                            <div className="flex flex-row-reverse my-3">
                                <button className="w-[10%] bg-[#add03f] rounded-md hover:bg-[#76970f]">
                                    +add
                                </button>
                            </div>

                        </div>
                        {/* Container List Seminar */}

                        {/* Container tombol add */}
                        <div className="flex justify-end mx-8">

                        </div>

                    </div>
                    <div className="row-span-1 bg-primary">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile