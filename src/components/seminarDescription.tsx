'use client'
import Image from "next/image";
import CategoryButton from "./atom/categoryButton";
import { useEffect } from "react";
import Aos from "aos";
interface SeminarDescriptionProps{
  title: string,
  body: string,
  category: string[],
  image: string,
}

const SeminarDescription: React.FC<SeminarDescriptionProps> = ({title, body, category, image}) => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: 'ease-out'
    });
  }, []);
  return(
    <div className="flex-col justify-center bg-white h-min max-w-lg p-4 rounded-xl overflow-hidden" data-aos='fade-down'>
      <div className="rounded-lg h-50 overflow-hidden justify-center items-center mb-4">
        <Image 
        className="w-full"
        src= {image}
        alt="Seminar Logo"
        width={300}
        height={200}
        />
      </div>  
      <div className="flex gap-4 mb-4 items-center">
      { category && category.length > 0 ? (
        category.map(cat => (
          <CategoryButton key={cat} name={cat} />
        ))
      ) : (
        null
      )}
      </div>
      <h3 className="text-gray-900 font-semibold mb-2">{title}</h3>
      <p className="text-gray-900 font-normal">{body}</p>
    </div>
  )
}
export default SeminarDescription;