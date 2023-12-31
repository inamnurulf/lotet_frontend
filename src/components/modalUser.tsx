import React from "react";
import Dropdown from "./atom/dropDown";
import DateCalendar from "./atom/datePicker";
import ImageUploadForm from "./imageUpload";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const ModalUser = ({ title, action, isOpen, onClose, onConfirm, isKP }: any) => {
  if (!isOpen) return null;

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [additional, setAdditional] = useState<string | null>(null);
  const [titleData, settitleData] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedOptions, setSelectedOptions] = useState<string[]|null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const handleImageChange = (url: string | null) => {
    setPreviewUrl(url);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };


  const handleNameChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setName(() => (value));
  }

  const handleDescriptionChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setDescription(() => (value));
  }

  const handleAdditionalChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setAdditional(() => (value));
  }

  const handleLocationChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setLocation(() => (value));
  }

  const handleDropdownChange = (options: any) => {
    setSelectedOptions(Array.isArray(options) ? options.map(x => x.value) : []);
  };

  const handleSubmit = () => {
    const formattedDate = selectedDate?.toISOString().split('T')[0];
    onConfirm({
      image: previewUrl,
      title: titleData,
      name: name,
      details: description,
      eventTime: formattedDate,
      category: selectedOptions,
      additional: additional,
      location: location
    })
  }

  useEffect(() => {
  }, [selectedOptions])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      {isKP ? 
       //Tampilan KerjaPraktik
       <form className="flex flex-row bg-white w-[60vw] h-[80vh]">
       <div className="flex flex-col w-[40%] h-full">
         <div className="w-full h-[65%] ">
           <div className="p-4 w-full h-full">
             <ImageUploadForm onImageChange={handleImageChange} />
           </div>
         </div>
         <div className="flex flex-col w-full h-[35%]">
           <div className="w-full h-1/2">
             <div className="w-[95%] pl-4">
               <label className="block text-gray-700 font-semibold mb-2">
                 Category
               </label>
               <Dropdown onSelectValue={handleDropdownChange} />
             </div>
           </div>
           <div className="w-full h-1/2">
             <div className="w-fit pl-4" >
               <label className="block text-gray-700 font-semibold mb-2">
                 Date
               </label>
               <DateCalendar onDateChange={handleDateChange} />
             </div>
           </div>
         </div>
       </div>
       <div className="flex-1 grid grid-rows-6 pl-2">
         <div className="flex items-center justify-center row-span-1 text-xl font-semibold ">
           <h1>Kerja Praktik</h1>
         </div>
         <div className="row-span-1">
             <div className="mb-2">
               <label className="block text-gray-700 font-semibold mb-2">
                 Name
               </label>
               <input
                 className="appearance-none bg-zinc-300 border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="name"
                 type="text"
                 onChange={handleNameChange}
               ></input>
             </div>
         </div>
         <div className="row-span-3">
           <div className="mb-2 h-[65%]">
             <label className="block text-gray-700 font-semibold mb-2">
               Description
             </label>
             <textarea
               className=" h-full appearance-none bg-zinc-300 border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="description"
               onChange={handleDescriptionChange}
             ></textarea>
           </div>
         </div>
         <div className="row-span-1">
           <div className="w-full flex flex-row-reverse gap-3">
             <button
               className="mr-5 bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="button"
               onClick={handleSubmit}
             // onClick={onConfirm}
             >
               {action}
             </button>
             <button
               className="bg-red-300 transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="button"
               onClick={onClose}
             >
               Cancel
             </button>
           </div>
         </div>

       </div>
     </form>
      : 
        //Tampilan Seminar
      <form className="flex flex-row bg-white w-[85vw] h-[80vh] ">
      <div className="flex flex-col w-[30%] h-full ">
        <div className="w-full h-[65%] p-4">
          <ImageUploadForm onImageChange={handleImageChange} />
        </div>
        <div className="flex flex-col w-full h-[35%] ">
          <div className="w-full h-1/2 ">
            <div className="w-[95%] pl-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Category
              </label>
              <Dropdown onSelectValue={handleDropdownChange} />
            </div>
          </div>
          <div className="w-full h-1/2 ">
            <div className="w-fit pl-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Date
              </label>
              <DateCalendar onDateChange={handleDateChange} />
            </div>

          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-rows-6">
        <div className="row-span-1 text-2xl font-semibold flex items-center justify-center">
          <h1>Seminar</h1>
        </div>
        <div className="row-span-1  flow-root">
        <div className="float-left w-[40%] mt-5 ml-9 ">
            <label className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="float-right w-[40%] mt-5 mr-9 ">
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              onChange={handleLocationChange}
            ></input>
          </div>
        </div>
        <div className="row-span-3  flow-root">
          <div className="float-left w-[40%] h-[65%]  mt-5 ml-9 ">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              className="appearance-none bg-zinc-300 border rounded w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="float-right w-[40%] h-[65%] mt-5 mr-9">
            <label className="block text-gray-700 font-semibold mb-2">
              Nota Bene (NB)
            </label>
            <textarea
              className="appearance-none bg-zinc-300 border rounded w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="additional"
              onChange={handleAdditionalChange}
            ></textarea>
          </div>
        </div>
        <div className="row-span-1 ">
          <div className="w-full flex flex-row-reverse gap-3">
            <button
              className="mr-9 bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            // onClick={onConfirm}
            >
              {action}
            </button>
            <button
              className="bg-red-300 transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>}

         
      {/* <form className="z-02 bg-white border border-primary w-1/2 rounded-lg shadow-lg p-8" data-aos="fade-up">
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
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        {isKP ? null :
          <>
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Location
              </label>
              <textarea
                className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                onChange={handleLocationChange}
              ></textarea>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Nota Bene (NB)
              </label>
              <textarea
                className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="additional"
                onChange={handleAdditionalChange}
              ></textarea>
            </div>
            <div className="flow-root mb-2">
              <div className="w-fit float-left" >
                <label className="block text-gray-700 font-semibold mb-2">
                  Date
                </label>
                <DateCalendar onDateChange={handleDateChange} />
              </div>
              </div>
            </>
        }
        <div>
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
            className="bg-red-300 transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form > */}
    </div >
  );
};

export default ModalUser;