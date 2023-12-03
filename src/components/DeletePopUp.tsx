import React from "react";
import { AiFillWarning } from "react-icons/ai";


const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }: any) => {
//   if (!isOpen) return null;

  return (
    // <div className="fixed inset-0 flex items-center justify-center z-50">
    //   <div className="modal bg-white md:w-1/2 max-w-[90vw] p-6 rounded-lg shadow-lg border border-primary">
    //     <p className="text-gray-800 mb-4 text-primary">
    //       Are you sure you want to delete this item?
    //     </p>
    //     <div className="flex justify-end">
    //       <button
    //         className="bg-gray-300 hover-bg-gray-400 text-gray-800 font-semibold py-2 px-4 mr-2 rounded text-sm	"
    //         onClick={onClose}
    //       >
    //         Cancel
    //       </button>
    //       <button
    //         className="bg-red-500 hover-bg-red-600 text-white font-semibold py-2 px-4 rounded"
    //         onClick={onConfirm}
    //       >
    //         Delete
    //       </button>
    //     </div>
    //   </div>
    //   <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} style={{ zIndex: -1 }}></div>
    // </div>
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col bg-white min-h-[45vh] max-h-[70px]  min-w-[180px] max-w-[35vw]  rounded-xl">
            <div className=" flex-initial h-[40%]  w-[40%] mx-auto ">
                <AiFillWarning
                color='black'
                className='h-full w-full '
                />
            </div>
            <p className="flex-none px-2 min-w-[180px] h-[60px] w-full font-bold text-xl text-center">Anda Yakin ingin Menghapus data?</p>
            <div className="flex-none grid grid-cols-2 gap-10 w-full  h-1/4">
                <button onClick={onClose} className=" min-h-[40px] h-[50px] min-w-18  rounded-2xl bg-red-400 mx-auto my-auto">
                    <h1 className="text-black font-bold text-xl md:text-2xl">Ya</h1>
                </button>
                <button onClick={onConfirm} className="  min-h-[40px] h-[50px] min-w-18  rounded-2xl bg-green-400 mx-auto my-auto">
                    <h1 className="text-black font-bold text-xl md:text-2xl">Tidak</h1>
                </button>

            </div>
        </div>
        
    </div>
  
    );
};

export default DeleteConfirmationModal;
