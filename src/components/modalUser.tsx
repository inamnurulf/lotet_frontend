import React from "react";
import Dropdown from "./atom/dropDown";
import DateCalendar from "./atom/datePicker";

// interface ModalUserSeminarProps {
//   title: string,
//   action: string,
// }

const ModalUser = ({ title, action, isOpen, onClose, onConfirm, isKP }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <form className="bg-white border border-primary w-1/2 rounded-lg shadow-lg p-8">
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
          {isKP ?                 
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Title
              </label>
              <input
                className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
              //   onChange={}
              ></input>
            </div> : <p></p>}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
            //   onChange={}
            ></textarea>
          </div>
          <div className="flow-root mb-6">
            <div className="w-fit float-left" >
              <label className="block text-gray-700 font-semibold mb-2">
                Date
              </label>
              <DateCalendar/>
            </div>
            <div className="w-1/2 float-right">
              <label className="block text-gray-700 font-semibold mb-2">
                Category
              </label>
              <Dropdown/>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse gap-3">
            <button
              className="bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onConfirm}
            >
              {action}
            </button>
            <button
              className="bg-red-200 transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
};

export default ModalUser;