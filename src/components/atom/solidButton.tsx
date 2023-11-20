'use client';

interface solidButtonProps{
  name: string
}

const SolidButton: React.FC<solidButtonProps> = ({name}) =>{
  return(
    <div className="cursor-default">
      <button className="text-white bg-primary py-px px-2 rounded-lg font-semibold select-none hover:shadow-md">
        {name}
      </button>
    </div>
  )
}

export default SolidButton;