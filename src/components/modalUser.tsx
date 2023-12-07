import React from "react";
import Dropdown from "./atom/dropDown";
import DateCalendar from "./atom/datePicker";
import ImageUploadForm from "./imageUpload";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// interface ModalUserSeminarProps {
//   title: string,
//   action: string,
// }

const ModalUser = ({ title, action, isOpen, onClose, onConfirm, isKP }: any) => {
  if (!isOpen) return null;

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  },[]);

  const handleImageChange = (url: string | null) => {
    setPreviewUrl(url);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleDropdownChange =  (options: any) => {
    setSelectedOptions(Array.isArray(options) ? options.map(x => x.value) : []);
  };

  const handleSubmit = () => {
    console.log(previewUrl);
    console.log(selectedDate);
    console.log(selectedOptions);
  }

  useEffect(()=>{
    // console.log(selectedOptions)
  },[selectedOptions])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <form className="z-02 bg-white border border-primary w-1/2 rounded-lg shadow-lg p-8" data-aos="fade-up">
          <h2 className="text-center text-xl font-bold mb-2">
            {title}
          </h2>
          <ImageUploadForm onImageChange={handleImageChange} />
          <div className="mb-2">
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
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Title
              </label>
              <input
                className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
              //   onChange={}
              ></input>
            </div> : null}
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
            //   onChange={}
            ></textarea>
          </div>
          <div className="flow-root mb-2">
            <div className="w-fit float-left" >
              <label className="block text-gray-700 font-semibold mb-2">
                Date
              </label>
              <DateCalendar onDateChange={handleDateChange} />
            </div>
            <div className="w-1/2 float-right">
              <label className="block text-gray-700 font-semibold mb-2">
                Category
              </label>
              <Dropdown onSelectValue={handleDropdownChange} />
            </div>
          </div>
          <div className="w-full flex flex-row-reverse gap-3">
            <button
              className="bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
              // onClick={onConfirm}
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