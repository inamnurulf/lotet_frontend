import IconComponent from "../IconReact"
import {FaCalendar, FaClock, FaPerson, FaLocationPin, FaCircleInfo} from 'react-icons/fa6'
import { IconType } from 'react-icons';
interface InformationProps{
  content: string | string[] | undefined
  type: string
}
const getIcon = (type: string): IconType | null => {
  switch (type) {
    case 'Date':
      return FaCalendar;
    case 'Time':
      return FaClock;
    case 'Speaker':
      return FaPerson;
    case 'Location':
      return FaLocationPin;
    case 'Additional':
      return FaCircleInfo;
    default:
      return null;
  }
}
const Information: React.FC<InformationProps> = ({type, content}) =>{
  const IconComponent = getIcon(type);
  if (!IconComponent) {
    return null; // Render nothing if type doesn't match
  }
  return(
    <div className="flex flex-row items-center gap-4">
      <div className="">
        <IconComponent size={40} className="text-secondary"></IconComponent>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-md md:text-lg">{type}</h3>
        <h4 className="font-medium text-sm md:text-md">{content}</h4>
      </div>
    </div>
  )
}
export default Information