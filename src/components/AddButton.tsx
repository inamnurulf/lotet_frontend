import React from "react";

const AddButton = () => {
  return (
    <div className="relative w-[90px] h-[45px] bg-[#add03f] rounded-[15px] border border-solid border-[#76970f] shadow-[1px_2px_4px_2px_#00000040]">
      <div className="absolute w-[90px] h-[45px] top-[-1px] left-3 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[45px] whitespace-nowrap">
        +add
      </div>
    </div>
  );
};
export default AddButton;
