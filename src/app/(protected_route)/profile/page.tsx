"use client";
import Navbar from "@/components/navbar";
import HistoryCard from "@/components/historycard";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import DeleteConfirmationModal from "@/components/DeletePopUp";
import { CiSquarePlus } from "react-icons/ci";
import ModalUserSeminar from "@/components/modalUserSeminar";


const Profile = ({ Name_arg, Nim_arg }:any) => {
  const display_Name = Name_arg || "NamaNamaNama";
  const display_Nim = Nim_arg || "NimNimNim";

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSeminarModalOpen, setIsSeminarModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    // setItemToDelete(null);
  };

  const confirmDelete = () => {
    // if (itemToDelete) {
    //   handleDeleteUserSubmit(itemToDelete.id);
    // }
    closeDeleteModal();
  };
  
  const openSeminarModal = () => {
      setIsSeminarModalOpen(true);
  }
  
  const confirmSeminar = () => {
      setIsSeminarModalOpen(false);
  }
  
  return (
    <div className="h-screen flex flex-col bg-[#0D6FBC]">
      {/* Top part */}
      <div className="min-h-[70px] bg-blue-500">
        {/* Content for the top part */}
        <Navbar />
      </div>

      <div className="flex-row flex h-full">
        {/* Bottom part */}
        <div className="flex w-1/5 justify-between flex-col">
          {/* Left part */}
          {/* Content for the left part */}
          <div className="relative inset-x-0 top-14 mx-auto h-[75px] w-full bg-parent text-center">
            <div className="flex justify-center h-[35px] w-full  bg-parent ">
              <div className="flex items-center text-xs font-bold text-white md:text-xl">
                {display_Name}
              </div>
            </div>
            <div className="flex justify-center h-[35px] w-full  bg-parent">
              <div className="flex items-center text-xs font-bold text-white md:text-xl">
                {display_Nim}
              </div>
            </div>
          </div>
          <div>
            <hr className="w-[80%] mx-auto m-3 text-grey-300" />
            <button className="inset-x-0 rounded-xl mx-auto w-[60%] bg-[#0D6FBC] flex flex-row hover:bg-[#4e9edc] mb-5">
              <IoLogOutOutline
                color="white"
                size="30px"
                className="ml-2 mt-1.5 md:max-w-1/4"
              />
              <text className="my-auto mx-auto font-bold text-xs text-white md:text-xl">
                Logout
              </text>
            </button>
          </div>
        </div>

        {/* Right part */}
        <div className="flex flex-col h-full w-full">
          {/* Right-top */}
          <div className="max-h-[90%] flex flex-row h-full w-full">
            <div className="flex-1 h-full py-3 pr-3">
              <div className="rounded-xl w-full h-full shadow-md mx-auto bg-primary p-3">
                <div className="flex items-center">
                  <h1 className="mx-1 font-bold text-white text-xl">Seminar</h1>
                  <CiSquarePlus className="mx-1 mt-1 w-[40px] h-[40px] hover:bg-[#add03f] rounded-md  text-white"  onClick={openSeminarModal}/>
                </div>
                <div className=" mx-auto p-3 max-w-full h-[31vh] overflow-y-auto scrollbar">
                  <HistoryCard
                    display_text="JudulKerjaPraktik"
                    handleDeleteButton={openDeleteModal}
                  />
                </div>
                <div className="flex justify-end mx-8"></div>
              </div>
            </div>

            {/* Right-bottom */}
            <div className="flex-1 h-full py-3 pr-3">
              <div className="rounded-xl w-full h-full shadow-md mx-auto bg-primary p-3">
                <div className="flex items-center">
                  <h1 className="mx-1 font-bold text-white text-xl">
                    Kerja Praktik
                  </h1>
                  <CiSquarePlus className="mx-1 mt-1 w-[40px] h-[40px] hover:bg-[#add03f] rounded-md  text-white" />
                </div>
                <div className=" mx-auto p-3 max-w-full h-[31vh] overflow-y-auto scrollbar">
                  <HistoryCard
                    display_text="JudulKerjaPraktik"
                    handleDeleteButton={openDeleteModal}
                  />
                </div>
                <div className="flex justify-end mx-8"></div>
              </div>
            </div>
          </div>
          <div className="rounded-xl w-full min-h-[10%] mx-auto pr-3 pb-3">
            <div className="rounded-xl h-full shadow-md bg-[#add03f] flex items-center justify-center">
              <p className="text-center text-white text-sm italic">
                Warning: Pastikan anda bertanggung jawab terhadap apa yang anda
                inputkan
              </p>
            </div>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
      <ModalUserSeminar
                isOpen={isSeminarModalOpen}
                title="Add New Seminar"
                action="Add"
                onConfirm={confirmSeminar} />

    </div>
  );
};

export default Profile;
