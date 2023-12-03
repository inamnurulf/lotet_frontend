import IconComponent from "../IconReact"
import {FaCalendar, FaClockRotateLeft, FaPerson, FaMapLocation, FaInfo} from 'react-icons/fa6'

const Information: React.FC = () =>{
  return(
    <div className="flex flex-row items-center gap-4">
      <div>
        <FaCalendar size={40} color={"olive"}></FaCalendar>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-lg">Date</h3>
        <h4 className="font-medium text-base">November 12, 2023</h4>
      </div>
    </div>
  )
}
export default Information