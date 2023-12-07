import Image from "next/image";
import CategoryButton from "./atom/categoryButton";
interface SeminarDescriptionProps{
  title: string|undefined,
  body: string|undefined,
  category: string[]|undefined,
  image: string|undefined,
}


const SeminarDescription: React.FC<SeminarDescriptionProps> = ({title, body, category, image}) => {
  const lorem = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  return(
    <div className="flex-col justify-center bg-white h-min p-4 rounded-xl overflow-hidden">
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