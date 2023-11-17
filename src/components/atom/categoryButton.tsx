'use client';

interface categoryButtonProps{
  name: string
}

const CategoryButton: React.FC<categoryButtonProps> = ({name}) =>{
  return(
    <div className="cursor-default bg-white">
      <div className="border-primary border-2 text-primary py-px px-2 w-min rounded-lg hover:shadow-md transition duration-300 font-semibold select-none">
        {name}
      </div>
    </div>
  )
}

export default CategoryButton;