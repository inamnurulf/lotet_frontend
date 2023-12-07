import CategoryButton from "./atom/categoryButton"
import Information from "./atom/information"
import SolidButton from "./atom/solidButton"

interface SeminarInfoProps{
  users: string | string[]
  dateTime: string 
  location: string
  additional: string
}

const SeminarInfo: React.FC<SeminarInfoProps> = ({users, dateTime, location, additional}) =>{
  const date = new Date(dateTime).toDateString()
  const time = new Date(dateTime).toLocaleTimeString()
  return(
    <div className="bg-white rounded-xl max-w-lg overflow-clip">
      <div className="flex flex-col p-8 w-full gap-8">
      <h3 className="font-bold text-lg md:text-xl">Seminar Details</h3>
      <Information type="Date" content={date}></Information>
      <Information type= 'Time' content={time}></Information>
      <Information type="Location" content={location}></Information>
      <Information type = {'Speaker'} content={users}></Information>
      <Information type='Additional' content={additional}></Information>
      <div className="flex gap-4 mb-4 items-center">
        <SolidButton name="Add to Calendar"></SolidButton>
        <SolidButton name="Share"></SolidButton>
      </div>
    </div>
    </div>
    
  )
}
export default SeminarInfo