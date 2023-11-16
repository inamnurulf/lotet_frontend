import AddButton  from "@/components/AddButton";
import Box from "@/components/historycard";
import Navbar from '@/components/navbar'

const ProfilePage = () => {
  return (
      <div className="bg-[#18afe6] flex flex-row justify-center w-full">
      <div className="bg-[#18afe6] overflow-hidden w-[1440px] h-[1024px]">
        <Navbar ></Navbar>
        <div className="relative h-[1026px]">
          <div className="absolute w-[1440px] h-[1026px] top-0 left-0">
            <div className="absolute w-[1440px] h-[182px] top-0 left-0">
              <div className="absolute w-[1440px] h-[101px] top-0 left-0 bg-[#f3f6f4]" />
              <div className="absolute w-[291px] h-[82px] top-[100px] left-[523px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[normal]">
                Seminar
              </div>
            </div>
            <div className="absolute w-[420px] h-[925px] top-[101px] left-0 bg-[#0d6fbc]">
              <div className="absolute w-[384px] h-[58px] top-[168px] left-[50px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[38px] tracking-[0] leading-[normal]">
                NamaNamaNama
              </div>
              <div className="absolute w-[282px] h-[58px] top-[239px] left-[69px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[30px] text-center tracking-[0] leading-[normal]">
                NimNimNim
              </div>
            </div>
          </div>
          <div className="top-[183px] rounded-[20px] absolute w-[830px] h-[290px] left-[513px] bg-[#18afe6] shadow-[1px_2px_5.5px_1px_#00000040]">
            <Box image="" img=""/>
            <Box image="image.png" img="image-1-2.png" />
            <Box  image="image-3-2.png" img="image-1-3.png" />
            <Box  image="image-3-3.png" img="image-1-4.png" />
          </div>
          <div className="top-[632px] rounded-[18px] absolute w-[830px] h-[290px] left-[513px] bg-[#18afe6] shadow-[1px_2px_5.5px_1px_#00000040]">
            
            <Box image="image-3-4.png" img="image-1-5.png" />
            <Box image="image-3-5.png" img="image-1-6.png" />
            <Box  image="image-3-6.png" img="image-1-7.png" />
            <Box  image="image-3-7.png" img="image-1-8.png" />
          </div>
          <div className="absolute w-[291px] h-[82px] top-[533px] left-[523px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-[normal]">
            Kerja Praktik
          </div>
          <div className="!absolute !left-[1234px] !top-[489px]">
            <AddButton></AddButton>
          </div>
          <div className="!absolute !left-[1234px] !top-[938px]">
            <AddButton></AddButton>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfilePage
