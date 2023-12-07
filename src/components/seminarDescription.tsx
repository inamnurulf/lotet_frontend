import Image from "next/image";
import CategoryButton from "./atom/categoryButton";
interface SeminarDescriptionProps{
  title: string,
  body: string,
  category: string[],
  image: string,
}


const SeminarDescription: React.FC<SeminarDescriptionProps> = ({title, body, category, image}) => {
  
  return(
    <div className="flex-col justify-center bg-white h-min max-w-lg p-4 rounded-xl overflow-hidden">
      <Image className="rounded-lg"
      src= {"./Logo.svg"}
      alt="Seminar Logo"
      width={300}
      height={200}
      />
      <div className="flex gap-4 mb-2 items-center">
      { category && category.length > 0 ? (
        category.map(cat => (
          <CategoryButton key={cat} name={cat} />
        ))
      ) : (
        <p>No categories available</p>
      )}
      </div>
      <h3 className="text-gray-900 font-semibold mb-1">{title}</h3>
      <p className="text-gray-900 font-normal">{body}</p>
    </div>
  )
}
export default SeminarDescription;