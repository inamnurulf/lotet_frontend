import React from 'react'

const CarousellCard = (row:any) => {
  return (
    <div className='w-[95vw] md:w-[30vw] h-[45vh] bg-slate-300 rounded rounded-md'>
      {row?.rows?.title}
    </div>
  )
}

export default CarousellCard
