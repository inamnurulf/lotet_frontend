import React from "react";
import { AiFillWarning } from "react-icons/ai";


const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="flex-col h-80  rounded-xl bg-white">
            <div className="flex-initial h-1/2">
            <AiFillWarning
                color='black'
                className='h-full w-full '
                />
            </div>
            <div className="flex-none h-1/2 min-w-full">
                <div className="flex justify-center items-center h-1/2 ">
                    <p className="font-bold text-lg px-2 ">Anda yakin ingin menghapus data?</p>
                </div>
                <div className="flex flex-row justify-around h-1/2">
                    <button
                        className="h-1/2  bg-red-500 transform transition-transform hover:scale-105 font-semibold py-1 px-4 rounded-md "
                        type="button" 
                        onClick={onConfirm}   
                    >Ya
                    </button>
                    <button
                        className="h-1/2  bg-green-500 transform transition-transform hover:scale-105 font-semibold py-1 px-4 rounded-md "
                        type="button"  
                        onClick={onClose}
                    >Tidak
                    </button>
                </div>

            </div>
        </div>
    </div>
  
    );
};

export default DeleteConfirmationModal;
