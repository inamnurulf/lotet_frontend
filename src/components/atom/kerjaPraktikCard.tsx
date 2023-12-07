'use client'
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


interface KerjaPraktikCardProps {
  id: string,
  title: string;
  image: string;
}

const KerjaPraktikCard: React.FC<KerjaPraktikCardProps> = ({ id, title, image }) => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: 'ease-out'
    });
  }, []);
  return (
    <div data-aos="fade-up" className="">
    <div id={id} className="h-full max-w-md min-w-full md:min-w-0 bg-white rounded-xl overflow-hidden  cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
      <Link href={`./kerjaPraktik/${id}`}>
        <div className="m-1 rounded-lg h-40 overflow-hidden justify-center items-center">
          <Image
            src= {image}
            alt = "Search"
            width={386}
            height={200}
            className="w-full"
            />
        </div>
        <h2 className="font-bold md:text-xl text-md mb-2 px-4 truncate overflow-hidden">{title}</h2>
        <div className="flex mb-4 items-start space-x-4 px-4">
          <div className="flex flex-row gap-2 items-center">  
          </div>
        </div>
        
        
      </Link>
    </div>
    </div>
  );
};

export default KerjaPraktikCard;
