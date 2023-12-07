import React from "react";
import { AiFillWarning } from "react-icons/ai";


const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="flex-col h-80  rounded-xl bg-white">
            <div className="flex flex-initial justify-center items-center h-1/2 ">
            <AiFillWarning
                color='black'
                className='h-[80%] w-[80%] '
                />
            </div>
            <div className="flex-none h-1/2 min-w-full">
                <div className="flex justify-center h-1/3  ">
                    <p className="font-bold text-lg px-3 mt-3">Anda yakin ingin menghapus data?</p>
                </div>
                <div className="flex flex-row justify-around items-center h-1/2">
                    <button
                        className="h-1/2 w-1/4 bg-red-300 transform transition-transform hover:scale-105 font-semibold py-1 px-4 rounded-md "
                        type="button" 
                        onClick={onConfirm}   
                    >Tidak
                    </button>
                    <button
                        className="h-1/2 w-1/4 bg-green-300 transform transition-transform hover:scale-105 font-semibold py-1 px-4 rounded-md "
                        type="button"  
                        onClick={onClose}
                    >Ya
                    </button>
                </div>

            </div>
        </div>
    </div>
  
    );
};

export default DeleteConfirmationModal;
