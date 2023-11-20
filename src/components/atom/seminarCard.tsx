'use client';
import Image from "next/image";
import Link from "next/link";


interface SeminarCardProps {
  title: string;
  date: string;
  location: string;
}

const SeminarCard: React.FC<SeminarCardProps> = ({ title, date, location }) => {
  const onclick = () =>{
    alert("click")
  }
  return (
    <div className="max-w-md min-w-full md:min-w-0 bg-white rounded-xl overflow-hidden shadow-lg mx-4 my-4 hover:shadow-2xl transition duration-300 cursor-pointer">
      <Link href={"./seminar/1"}>
        <div>
          <Image
            src = {"./Logo.svg"}
            alt = "Search"
            width={386}
            height={200}
          />
        </div>
        <h2 className="font-bold text-xl mb-2 px-4">{title}</h2>
        <div className="flex mb-2 items-start space-x-4 px-4">
          <div className="">
            <p className="text-gray-600 mb-2">{date}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-2">{location}</p>
          </div>
          
        </div>
        
        
      </Link>
    </div>
  );
};

export default SeminarCard;
