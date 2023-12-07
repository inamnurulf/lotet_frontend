'use client'
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {FaCalendarDays, FaLocationPin} from 'react-icons/fa6'

interface SeminarCardProps {
  id: string,
  title: string;
  date: string;
  location: string;
}

const SeminarCard: React.FC<SeminarCardProps> = ({ id, title, date, location }) => {
  const dateOnly = new Date(date).toDateString()
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: 'ease-out'
    });
  }, []);
  return (
    <div data-aos="fade-up" className="">
    <div id={id} className="h-full max-w-md min-w-full md:min-w-0 bg-white rounded-xl overflow-hidden  cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
      <Link href={`./seminar/${id}`}>
        <div className="m-1 rounded-lg h-40 overflow-hidden justify-center items-center">
          <Image
            src= {'/seminarImg.png'}
            alt = "Search"
            width={386}
            height={200}
            className="w-full"
            />
        </div>
        <h2 className="font-bold md:text-xl text-md mb-2 px-4 truncate overflow-hidden">{title}</h2>
        <div className="flex mb-4 items-start space-x-4 px-4">
          <div className="flex flex-row gap-2 items-center">
            <FaCalendarDays size={24} className="text-secondary"></FaCalendarDays>           
            <h4 className="text-gray-600 text-sm md:text-md font-medium">{dateOnly}</h4>
          </div>
          {
            location && (   
              <div className="flex flex-row gap-2 items-center">
                <FaLocationPin size={24} className="text-secondary"></FaLocationPin>
                <h4 className="text-gray-600 text-sm md:text-md font-medium">{location}</h4>
              </div>
            )
          }
          
          
        </div>
        
        
      </Link>
    </div>
    </div>
  );
};

export default SeminarCard;
