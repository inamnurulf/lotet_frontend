import PropTypes from "prop-types";
import React from "react";

interface Props {
  image: string;
  img: string;
  
}

const Box = ({ image, img  }: Props): JSX.Element => {
  return (
    <div className="relative w-[774px] h-[50px] bg-white rounded-[20px]">
      <div className="absolute w-[204px] h-[50px] -top-px left-[22px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[43px] whitespace-nowrap">
        JudulJudulJudul
      </div>
      <img className="absolute w-[38px] h-[23px] top-[16px] left-[663px]" alt="Image" src={image} />
      <img className="absolute w-[40px] h-[19px] top-[16px] left-[708px]" alt="Image" src={img} />
    </div>
  );
};

Box.propTypes = {
  image: PropTypes.string,
  img: PropTypes.string,
};

export default Box;