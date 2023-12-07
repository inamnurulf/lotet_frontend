'use client'
import { useEffect } from "react"
import Information from "./atom/information"
import SolidButton from "./atom/solidButton"
import Aos from "aos"

interface KerjaPraktikInfoProps{
  users: string | string[]
}

const KerjaPraktikInfo: React.FC<KerjaPraktikInfoProps> = ({users}) =>{

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: 'ease-out'
    });
  }, []);
  return(
    <div className="bg-white rounded-xl max-w-lg overflow-clip">
      <div className="flex flex-col p-8 w-full gap-8">
      <h3 className="font-bold text-lg md:text-xl">KerjaPraktik Details</h3>
      <Information type = {'Speaker'} content={users}></Information>
      <div className="flex gap-4 mb-4 items-center">
        <SolidButton name="Add to Calendar"></SolidButton>
        <SolidButton name="Share"></SolidButton>
      </div>
    </div>
    </div>
    
  )
}
export default KerjaPraktikInfo