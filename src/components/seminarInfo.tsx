import CategoryButton from "./atom/categoryButton"
import Information from "./atom/information"
import SolidButton from "./atom/solidButton"


const SeminarInfo = () =>{
  return(
    <div className="bg-gray-100 rounded-xl">
      <div className="flex flex-col p-8 w-full gap-8">
      <h3 className="font-bold text-xl">Seminar Details</h3>
      <Information></Information>
      {/* <Information></Information>
      <Information></Information>
      <Information></Information>
      <Information></Information> */}
      <div className="flex-row flex gap-4">
        <SolidButton name="Add to Calendar"></SolidButton>
        <SolidButton name="Share"></SolidButton>
      </div>
    </div>
    </div>
    
  )
}
export default SeminarInfo