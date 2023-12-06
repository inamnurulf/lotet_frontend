'use client';
import Image from "next/image";
import Link from "next/link";
import {FaCalendarDays, FaLocationPin} from 'react-icons/fa6'
import {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";

interface SeminarCardProps {
  id: string,
  title: string;
  date: string;
  location: string;
}

const SeminarCard: React.FC<SeminarCardProps> = ({ id, title, date, location }) => {
  useEffect(() => {
    Aos.init({
      duration: 800
    });
  }, []);
  const dateOnly = new Date(date).toDateString()
  return (
    <div  className="shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">

    <div id={id} aos-data = 'zoom-in-up' className="max-w-md min-w-full md:min-w-0 bg-white rounded-xl overflow-hidden  cursor-pointer">
      <Link href={`./seminar/${id}`}>
        <div>
          <Image
            src = {"./Logo.svg"}
            alt = "Search"
            width={386}
            height={200}
            />
        </div>
        <h2 className="font-bold text-xl mb-2 px-4">{title}</h2>
        <div className="flex mb-4 items-start space-x-4 px-4">
          <div className="flex flex-row gap-2 items-center">
            <FaCalendarDays size={24}></FaCalendarDays>           
            <h4 className="text-gray-600 ">{dateOnly}</h4>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaLocationPin size={24}></FaLocationPin>
            <h4 className="text-gray-600">{location}</h4>
          </div>
          
        </div>
        
        
      </Link>
    </div>
    </div>
  );
};

export default SeminarCard;
