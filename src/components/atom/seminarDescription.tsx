import Image from "next/image";
import CategoryButton from "./categoryButton";

const SeminarDescription = () =>{
  const lorem = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  return(
    <div className="flex-col justify-center bg-white w-min h-min p-4 rounded-xl">
      <Image className="rounded-lg"
      src= {"./Logo.svg"}
      alt="Seminar Logo"
      width={300}
      height={200}
      />
      <div className="flex flex-wrap space-x-4 mb-2">
        <CategoryButton name="Control"/>
        <CategoryButton name="Algebra"/>
        <CategoryButton name="Simulation"/>
      </div>
      <h3 className="text-gray-900 font-semibold mb-1">Non Linear System</h3>
      <p className="text-gray-900 font-normal">{lorem}</p>
    </div>
  )
}
export default SeminarDescription;