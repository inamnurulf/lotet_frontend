import React from "react";
import MyDropdown from "./dropDown";

// interface ModalUserSeminarProps {
//   title: string,
//   action: string,
// }

const ModalUserSeminar = ({ title, action, isOpen, onClose, onConfirm }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <form className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-center text-2xl font-bold mb-4">
            {title}
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
            //   onChange={}
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
            //   onChange={}
            ></textarea>
          </div>
          <MyDropdown/>

            <button
              className="bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onConfirm}
            >
              {action}
            </button>
        </form>
      </div>
    );
};

export default ModalUserSeminar;